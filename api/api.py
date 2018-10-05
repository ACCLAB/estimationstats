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
            kwargs['group_summaries'] = 'mean_sd'
            # Doesn't seem to work?
            # TODO: Tweak aesthetics!
            # sw_kwargs = {'size': 8}
            # kwargs['swarmplot_kwargs'] = sw_kwargs

            # print([k for k in request.form.keys()])

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

            first_two_columns = (numerical_cols[0], numerical_cols[1])

            # if np.mod(len(numerical_cols), 2) == 1:
            #     numerical_cols = numerical_cols[:-1]

            paired_columns = [tuple(numerical_cols[i:i + 2])
                              for i in range(0, len(numerical_cols), 2)]

            # # If 'color' or 'colour' is a column in `df`,
            # # use it to determine the color.
            # color_col = df.columns[df.columns.str.upper().str.contains(r'COLOU?R')]
            # if len(color_col) == 1:  # only if one unambiguous color column exists.
            #     kwargs = {'color_col': color_col[0]}

            if plotType == 'two-independent-groups':
                # two independent groups plot
                kwargs['idx'] = first_two_columns
                kwargs['paired'] = False
                # kwargs['fig_size'] = (6/np.sqrt(2),7)

            elif plotType == 'paired':
                # paired plot
                kwargs['idx'] = first_two_columns
                kwargs['paired'] = True
                kwargs['id_col'] = "ID"
                # kwargs['fig_size'] = (6/np.sqrt(2),7)

            elif plotType == 'multi':
                # Multiple groups plot
                kwargs['idx'] = paired_columns
                kwargs['paired'] = False
                kwargs['float_contrast'] = False

            elif plotType == 'multi-paired':
                # Multi-paired plot
                kwargs['idx'] = paired_columns
                kwargs['paired'] = True
                kwargs['id_col'] = "ID"
                kwargs['float_contrast'] = False
                kwargs['fig_size'] = (2 * len(paired_columns), 7)

            else:  # Shared control plot
                kwargs['idx'] = numerical_cols
                kwargs['paired'] = False
                kwargs['fig_size'] = (1. * len(numerical_cols), 7)

            # If this is a paired plot, add an ID column.
            if kwargs['paired'] is True:
                df["ID"] = pd.Series(range(1, len(df)))

            # Grab the CI.
            if 'ci' in request.form:
                CI = np.int(request.form['ci'])
            else:
                CI = 95
            kwargs['ci'] = CI
            # Compute contrast statistics and create the contrast plot.
            f, b = dabest.plot(df, **kwargs)
            # munge the stats columns a bit.
            b.drop(['is_difference'],
                    axis=1,inplace=True)
            b.rename(columns={'stat_summary':'mean_difference'},
                    inplace=True)
            stats = b.to_html()

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

            # Return all desired outputs.
            return jsonify(png=png, svg=svg,
                           csv=b.values.tolist(),
                           columns=list(b), table_html=stats
                           )

        except Exception as e:
            print(e) # Use to debug.
            abort(400, 'Error: {}'.format(e))
