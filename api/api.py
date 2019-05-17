import matplotlib
matplotlib.use('Agg') # Set appropriate rendering backend.

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import seaborn as sns

import io
import base64
from flask import request, jsonify, abort
from flask_restful import Resource

import dabest
from .misc import combi17, insert_link_dict, es_print_dict

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
                
                # Discard rows, then columns, that are totally empty.
                df.dropna(axis=0, how='all', inplace=True)
                df.dropna(axis=1, how='all', inplace=True)

                # Plot arguments
                plotType = request.form['plotType']

            else:
                return {}

            # Create dict for kwargs.
            load_kwargs = {}
            plot_kwargs = {}
            
            
            # Grab the CI.
            if 'ci' in request.form:
                CI = request.form['ci']
            else:
                CI = 95
            load_kwargs['ci'] = float(CI)

            # Add y-axis label
            if 'yaxisLabel' in request.form:
                plot_kwargs['swarm_label'] = request.form['yaxisLabel']
            else:
                plot_kwargs['swarm_label'] = "value"

            # Add swarm ylims
            check_swarm_ylim_lower = 'swarm_ylimLower' in request.form
            check_swarm_ylim_upper = 'swarm_ylimUpper' in request.form
            if check_swarm_ylim_lower and check_swarm_ylim_upper:
                low = np.float(request.form['swarm_ylimLower'])
                high = np.float(request.form['swarm_ylimUpper'])
                plot_kwargs['swarm_ylim'] = (low, high)

            # Add swarm ylims
            check_con_ylim_lower = 'con_ylimLower' in request.form
            check_con_ylim_upper = 'con_ylimUpper' in request.form
            if check_con_ylim_lower and check_con_ylim_upper:
                low = np.float(request.form['con_ylimLower'])
                high = np.float(request.form['con_ylimUpper'])
                plot_kwargs['contrast_ylim'] = (low, high)

            # Handle the columns for plotting.
            dt = df.dtypes
            numerical_cols = dt[dt != 'object'].index.tolist()

            first_two_columns = (numerical_cols[0], numerical_cols[1])
            paired_columns = [t for t in
                                [tuple(numerical_cols[i:i + 2])
                                for i in range(0, len(numerical_cols), 2)]
                             if len(t) == 2]
            flattened_pairs = [element for tup in paired_columns
                               for element in tup]
                               
            # precompute the viridis palettes.
            viridis_palette_paired = sns.color_palette("viridis", len(flattened_pairs))
            viridis_palette_shared = sns.color_palette("viridis", len(numerical_cols))
            

            # # If 'color' or 'colour' is a column in `df`,
            # # use it to determine the color.
            # color_col = df.columns[df.columns.str.upper().str.contains(r'COLOU?R')]
            # if len(color_col) == 1:  # only if one unambiguous color column exists.
            #     kwargs = {'color_col': color_col[0]}
            
            # Obtain the desired effect size.
            effect_size = request.form['effect_size']
            effect_size_print = es_print_dict[effect_size]



            if plotType == 'two-independent-groups':
                # two independent groups plot
                load_kwargs['idx'] = first_two_columns
                
                load_kwargs['paired'] = False
                
                plot_kwargs['custom_palette'] = dict(zip(first_two_columns, 
                                                         combi17))
                                                         
                if effect_size == "Cliff's delta":
                    plot_type = "Cumming"
                else:
                    plot_type = "Gardner-Altman"
                                                         
                figure_legend = "The {0} between {1} and {2} \
                is shown in the above {3} estimation plot. \
                Both groups are plotted on the left axes; \
                the mean difference is plotted on a floating axes \
                on the right as a bootstrap sampling distribution. \
                The mean difference is depicted as a dot; the \
                {4}% confidence interval is indicated by the ends \
                of the vertical error bar.".format(effect_size_print, 
                                                    numerical_cols[0],
                                                    numerical_cols[1],
                                                    plot_type,
                                                    CI)

            elif plotType == 'paired':
                # paired plot
                load_kwargs['idx'] = first_two_columns
                
                load_kwargs['paired'] = True
                
                load_kwargs['id_col'] = "ID"
                
                figure_legend = "The paired {0} between \
                {1} and {2} is shown in the above Gardner-Altman \
                estimation plot. Both groups are plotted on the left axes \
                as a slopegraph: each paired set of observations is connected \
                by a line. The paired mean difference is plotted on a \
                floating axes on the right as a bootstrap sampling \
                distribution. The mean difference is depicted as a dot; \
                the {3}% confidence interval is indicated by the ends \
                of the vertical error bar.".format(effect_size_print, 
                                                    numerical_cols[0],
                                                   numerical_cols[1],
                                                   CI)

            elif plotType == 'multi':
                # Multiple groups plot
                load_kwargs['idx'] = paired_columns
                
                load_kwargs['paired'] = False
                
                if len(flattened_pairs) > len(combi17):
                    plot_kwargs['custom_palette'] = dict(zip(flattened_pairs, 
                                                             viridis_palette_paired))
                else:
                    plot_kwargs['custom_palette'] = dict(zip(flattened_pairs, 
                                                             combi17))
                
                plot_kwargs['float_contrast'] = False
                
                figure_legend = "The {0} for {1} comparisons \
                are shown in the above Cumming estimation plot. \
                The raw data is plotted on the upper axes; each mean \
                difference is plotted on the lower axes as a bootstrap \
                sampling distribution. Mean differences are depicted \
                as dots; {2}% confidence intervals are indicated by the \
                ends of the vertical error bars.".format(effect_size_print, 
                                                    len(paired_columns),
                                                        CI)

            elif plotType == 'multi-paired':
                # Multi-paired plot
                load_kwargs['idx'] = paired_columns
                
                load_kwargs['paired'] = True
                
                load_kwargs['id_col'] = "ID"
                
                plot_kwargs['float_contrast'] = False
                
                # plot_kwargs['fig_size'] = (2 * len(paired_columns), 7)
                
                figure_legend = "The paired {0} for {1} \
                comparisons are shown in the above Cumming estimation plot. \
                The raw data is plotted on the upper axes; each paired set \
                of observations is connected by a line. On the lower axes, \
                each paired mean difference is plotted as a bootstrap \
                sampling distribution. Mean differences are depicted \
                as dots; {2}% confidence intervals are indicated by the \
                ends of the vertical error bars.".format(effect_size_print, 
                                                        len(paired_columns),
                                                        CI)

            else:
                # Shared control plot
                load_kwargs['idx'] = numerical_cols

                load_kwargs['paired'] = False
                
                if len(numerical_cols) > len(combi17):
                    plot_kwargs['custom_palette'] = dict(zip(numerical_cols, 
                                                             viridis_palette_shared))
                else:
                    plot_kwargs['custom_palette'] = dict(zip(numerical_cols, 
                                                             combi17))
                                                         
                # plot_kwargs['fig_size'] = (1. * len(numerical_cols), 7)
                
                figure_legend = "The {0} for {1} \
                comparisons against the shared control {2} \
                are shown in the above Cumming estimation plot. \
                The raw data is plotted on the upper axes. On the \
                lower axes, mean differences are plotted as bootstrap \
                sampling distributions. Each mean difference is depicted \
                as a dot. Each {3}% confidence interval is indicated by the \
                ends of the vertical error bars.".format(effect_size_print, 
                                                len(numerical_cols) - 1,
                                                numerical_cols[0],
                                                CI)

            # If this is a paired plot, add an ID column.
            if load_kwargs['paired'] is True:
                df["ID"] = pd.Series(range(1, len(df)))
                
                # Re-shape the damn thing in lieu of updating DABEST.
                df = pd.melt(df, id_vars="ID").dropna()
                
            else:
                # Re-shape the damn thing in lieu of updating DABEST.
                df = pd.melt(df).dropna()
                
            load_kwargs['x'] = 'variable'
            load_kwargs['y'] = 'value'

            plot_kwargs['raw_marker_size']  = float(request.form['swarm_dotsize'])
            
            plot_kwargs['es_marker_size'] = float(request.form['es_markersize'])
            
            # # DEBUG: 
            # print(load_kwargs['idx'])
            
            # Create the dabest object for analysis.
            dabest_object = dabest.load(df, **load_kwargs)
            
            plot_kwargs['dpi'] = 200
            if effect_size == "mean_diff":
                es = dabest_object.mean_diff
            elif effect_size == "median_diff":
                es = dabest_object.median_diff
            elif effect_size == "cohens_d":
                es = dabest_object.cohens_d
            elif effect_size == "hedges_g":
                es = dabest_object.hedges_g
            elif effect_size == "cliffs_delta":
                es = dabest_object.cliffs_delta
            
            f = es.plot(**plot_kwargs);
            
            # # DEBUG: 
            # print("creating results table.") 
            
            stats_table = es.statistical_tests.copy()
            
            stats_table.loc[:, "ci"] = stats_table.ci\
                                         .astype(str)\
                                        .str.cat(np.repeat("%", len(stats_table)))

            stats_table.rename(columns={"control": "control_group",
                                       "test": "test_group",
                                       "ci": "ci_width",
                                       "bca_low": "ci_lower_limit",
                                       "bca_high": "ci_upper_limit"},
                                inplace=True)
            
            stats_table.fillna("Undefined", inplace=True)
            stats_table.index += 1

            # # DEBUG: 
            # print("creating image.") 
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
            
            # # DEBUG: 
            # print("formatting text.") 
            results_repr = es.__repr__()
            results_repr = results_repr.split("\n\n")[1:-1]
            

            for test in insert_link_dict.keys():
                url = "<a href={} target='_blank'>{}</a>".format(insert_link_dict[test], test)
                results_repr[0] = results_repr[0].replace(test, url)
                

            results_repr.insert(-1, "The effect sizes and CIs are reported above as: \
                                    <i>effect size</i> [<i>CI width</i>&emsp;<i>lower bound</i>;\
                                    <i>upper bound</i>]")

            results_repr = "<br><br>".join(results_repr)

            original = "if the null hypothesis of zero difference is true."
            new = "<em>if the null hypothesis of zero difference is true</em>; "


            results = results_repr.replace("\n", "<br>")\
                      .replace("size(s),<br>if", "size(s), if")\
                      .replace(original, new)\
                      .replace("p-value", "<i>P</i> value")

            legend  = 'Suggested Figure Legend:<br>\
                        <div style="font-size:20px">{0}</div>\
                        <br>Results:<div style="font-size:20px">\
                        {1}they are included here to satisfy a common \
                        requirement of scientific journals. \
                        </div>'.format(figure_legend, results)
            # # DEBUG: 
            # print("return output.") 
            # 
            # # DEBUG:
            # print(legend)
            # print("\n")
            # print(stats_table.values.tolist())
            
            # close the plot to save memory!
            plt.close()
            
            # Return all desired outputs.
            return jsonify(png        = png,
                           svg        = svg,
                           csv        = stats_table.values.tolist(),
                           columns    = list(stats_table),
                           legend     = legend
                           )
                           
                           
        except Exception as e:
            print(e) # Use to debug.
            abort(400, 'Error: {}'.format(e))
