import matplotlib
matplotlib.use('Agg') # Set appropriate rendering backend.

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import io
import base64
from flask import request, jsonify, abort
from flask_restful import Resource

import dabest
from .misc import combi17

class Analyze(Resource):
    def post(self):
        # Ensure that text is rendered as text and not as paths.
        plt.rcParams['svg.fonttype'] = 'none'

        # Common settings for saving as PNG and SVG.
        savefig_kwargs = {'transparent': True,
                          # ensure no white background on plot
                          'frameon': False,
                          'bbox_inches': 'tight'}

        try:
            # Analyze by uploading csv file
            if request.files:
                # Read in the uploaded file.
                df = pd.read_csv(request.files['file'])
                # Plot arguments
                plotType = request.form['plotType']

            else:
                return {}

            # Create dict for kwargs.
            kwargs = {}
            kwargs['context']         = 'notebook'
            kwargs['font_scale']      = 1.4
            kwargs['group_summaries'] = 'mean_sd'
            kwargs['swarm_dotsize']   = float(request.form['swarm_dotsize'])
            kwargs['cumming_vertical_spacing'] = 0.05

            # Add y-axis label
            if 'yaxisLabel' in request.form:
                kwargs['swarm_label'] = request.form['yaxisLabel']

            # Add swarm ylims
            check_swarm_ylim_lower = 'swarm_ylimLower' in request.form
            check_swarm_ylim_upper = 'swarm_ylimUpper' in request.form
            if check_swarm_ylim_lower and check_swarm_ylim_upper:
                low = np.float(request.form['swarm_ylimLower'])
                high = np.float(request.form['swarm_ylimUpper'])
                kwargs['swarm_ylim'] = (low, high)

            # Add swarm ylims
            check_con_ylim_lower = 'con_ylimLower' in request.form
            check_con_ylim_upper = 'con_ylimUpper' in request.form
            if check_con_ylim_lower and check_con_ylim_upper:
                low = np.float(request.form['con_ylimLower'])
                high = np.float(request.form['con_ylimUpper'])
                kwargs['contrast_ylim'] = (low, high)

            # Handle the columns for plotting.
            dt = df.dtypes
            numerical_cols = dt[dt != 'object'].index.tolist()

            # REVIEW:
            kwargs['custom_palette'] = dict(zip(numerical_cols, combi17))

            first_two_columns = (numerical_cols[0], numerical_cols[1])

            paired_columns = [tuple(numerical_cols[i:i + 2])
                              for i in range(0, len(numerical_cols), 2)]

            # # If 'color' or 'colour' is a column in `df`,
            # # use it to determine the color.
            # color_col = df.columns[df.columns.str.upper().str.contains(r'COLOU?R')]
            # if len(color_col) == 1:  # only if one unambiguous color column exists.
            #     kwargs = {'color_col': color_col[0]}

            # Grab the CI.
            if 'ci' in request.form:
                CI = request.form['ci']
            else:
                CI = 95
            kwargs['ci'] = float(CI)

            if plotType == 'two-independent-groups':
                # two independent groups plot
                kwargs['idx'] = first_two_columns
                kwargs['paired'] = False
                figure_legend = "The mean difference between {0} and {1} \
                is shown in the above Gardner-Altman estimation plot. \
                Both groups are plotted on the left axes; \
                the mean difference is plotted on a floating axes \
                on the right as a bootstrap sampling distribution. \
                The mean difference is depicted as a dot; the \
                {2}% confidence interval is indicated by the ends \
                of the vertical error bar.".format(numerical_cols[0],
                                                    numerical_cols[1],
                                                    CI)

            elif plotType == 'paired':
                # paired plot
                kwargs['idx'] = first_two_columns
                kwargs['paired'] = True
                kwargs['id_col'] = "ID"
                figure_legend = figure_legend = "The paired mean difference between \
                {0} and {1} is shown in the above Gardner-Altman \
                estimation plot. Both groups are plotted on the left axes \
                as a slopegraph: each paired set of observations is connected \
                by a line. The paired mean difference is plotted on a \
                floating axes on the right as a bootstrap sampling \
                distribution. The mean difference is depicted as a dot; \
                the {2}% confidence interval is indicated by the ends \
                of the vertical error bar.".format(numerical_cols[0],
                                                   numerical_cols[1],
                                                   CI)

            elif plotType == 'multi':
                # Multiple groups plot
                kwargs['idx'] = paired_columns
                kwargs['paired'] = False
                kwargs['float_contrast'] = False
                figure_legend = "The mean differences for {0} comparisons \
                are shown in the above Cumming estimation plot. \
                The raw data is plotted on the upper axes; each mean \
                difference is plotted on the lower axes as a bootstrap \
                sampling distribution. Mean differences are depicted \
                as dots; {1}% confidence intervals are indicated by the \
                ends of the vertical error bars.".format(len(paired_columns),
                                                        CI)

            elif plotType == 'multi-paired':
                # Multi-paired plot
                kwargs['idx'] = paired_columns
                kwargs['paired'] = True
                kwargs['id_col'] = "ID"
                kwargs['float_contrast'] = False
                kwargs['fig_size'] = (2 * len(paired_columns), 7)
                figure_legend = "The paired mean differences for {0} \
                comparisons are shown in the above Cumming estimation plot. \
                The raw data is plotted on the upper axes; each paired set \
                of observations is connected by a line. On the lower axes, \
                each paired mean difference is plotted as a bootstrap \
                sampling distribution. Mean differences are depicted \
                as dots; {1}% confidence intervals are indicated by the \
                ends of the vertical error bars.".format(len(paired_columns),
                                                        CI)

            else:  # Shared control plot
                kwargs['idx'] = numerical_cols
                kwargs['paired'] = False
                kwargs['fig_size'] = (1. * len(numerical_cols), 7)
                figure_legend = "The mean differences for {0} \
                comparisons against the shared control {1} \
                are shown in the above Cumming estimation plot. \
                The raw data is plotted on the upper axes. On the \
                lower axes, mean differences are plotted as bootstrap \
                sampling distributions. Each mean difference is depicted \
                as a dot. Each {2}% confidence interval is indicated by the \
                ends of the vertical error bars.".format(
                                                len(numerical_cols) - 1,
                                                numerical_cols[0],
                                                CI)

            # If this is a paired plot, add an ID column.
            if kwargs['paired'] is True:
                df["ID"] = pd.Series(range(1, len(df)))


            # Compute contrast statistics and create the contrast plot.
            f, b = dabest.plot(df, **kwargs)
            # munge the stats columns a bit.
            b.drop(['is_difference'],
                    axis=1,inplace=True)
            b.rename(columns={'stat_summary': 'mean_difference',
                              'bca_ci_low'  : 'CI_lower_limit_BCa_corrected',
                              'bca_ci_high' : 'CI_upper_limit_BCa_corrected',
                              'ci': 'CI'},
                    inplace=True)
            stats = b.to_html(index=False)

            # Prepare PNG output.
            img = io.BytesIO()
            plt.savefig(img, format='png', **savefig_kwargs)
            img.seek(0)
            png = base64.b64encode(img.getvalue()).decode()

            # Prepare SVG output.
            img = io.BytesIO()
            plt.savefig(img, format='svg', **savefig_kwargs)
            img.seek(0)
            svg = base64.b64encode(img.getvalue()).decode()

            # Prepare Legend and Results output.
            results = []
            sigfig = 3

            for index, row in b.iterrows():

                if row.is_paired is True:
                    paired_prefix = "Paired"
                else:
                    paired_prefix = "Unpaired"

                diff      = '%s' % float('%.{}g'.format(sigfig) % row.mean_difference)
                ci_low    = '%s' % float('%.{}g'.format(sigfig) % row.CI_lower_limit_BCa_corrected)
                ci_high   = '%s' % float('%.{}g'.format(sigfig) % row.CI_upper_limit_BCa_corrected)

                ref_name  = row.reference_group
                expt_name = row.experimental_group
                ref_n     = len(df[ref_name])
                expt_n    = len(df[expt_name])

                row_out = "{0} mean difference of {1} (n={2}) minus {3} \
                (n={4}) <br>&emsp;{5} [{6} CI&emsp;{7}; {8}]<br>".format(
                    paired_prefix,
                     ref_name, ref_n,
                     expt_name, expt_n,
                     diff, CI,
                     ci_low, ci_high)
                results.append(row_out)

            results = "<br>".join(results)

            legend  = 'Suggested Figure Legend:<br>\
                        <div style="font-size:20px">{0}</div>\
                        <br>Results:<div style="font-size:20px">\
                        {1}<br><i>The suggested template (used above) is:<br>\
                        `mean difference` [`CI width`&emsp;`lower bound`;\
                        `upper bound`]</i></div>'.format(figure_legend, results)

            # Return all desired outputs.
            return jsonify(png        = png,
                           svg        = svg,
                           csv        = b.values.tolist(),
                           columns    = list(b),
                           table_html = stats,
                           legend     = legend
                           )

            # close the plot to save memory!
            plt.close()

        except Exception as e:
            print(e) # Use to debug.
            abort(400, 'Error: {}'.format(e))
