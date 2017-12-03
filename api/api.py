import matplotlib
matplotlib.use('Agg') # Set appropriate rendering backend.

import matplotlib.pyplot as plt
import bootstrap_contrast as bs
import pandas as pd
import numpy as np
import io
import base64
from flask import request, jsonify, abort
from flask_restful import Resource


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
            kwargs['show_std'] = False

            # print([k for k in request.form.keys()])

            # Add y-axis label
            if 'yaxisLabel' in request.form:
                kwargs['swarm_label'] = request.form['yaxisLabel']

            # Add swarm ylims
            if 'swarm_ylimLower' in request.form and 'swarm_ylimUpper' in request.form:
                low = np.float(request.form['swarm_ylimLower'])
                high = np.float(request.form['swarm_ylimUpper'])
                kwargs['swarm_ylim'] = (low, high)

            # Add swarm ylims
            if 'con_ylimLower' in request.form and 'con_ylimUpper' in request.form:
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
                kwargs['fig_size'] = (6/np.sqrt(2),7)

            elif plotType == 'paired':
                # paired plot
                kwargs['idx'] = first_two_columns
                kwargs['paired'] = True
                kwargs['fig_size'] = (6/np.sqrt(2),7)

            elif plotType == 'multi':
                # Multiple groups plot
                kwargs['idx'] = paired_columns
                kwargs['paired'] = False
                kwargs['float_contrast'] = False

            elif plotType == 'multi-paired':
                # Multi-paired plot
                kwargs['idx'] = paired_columns
                kwargs['paired'] = True
                kwargs['float_contrast'] = False

            else:  # Shared control plot
                kwargs['idx'] = numerical_cols
                kwargs['paired'] = False

            # Compute contrast statistics and create the contrast plot.
            f, b = bs.contrastplot(df, **kwargs)
            stats = b.to_html()

            # Prepare PNG output.
            img = io.BytesIO()
            plt.savefig(img,
                        format='png', **savefig_kwargs)
            img.seek(0)
            png = base64.b64encode(img.getvalue()).decode()

            # Prepare SVG output.
            img = io.BytesIO()
            plt.savefig(img, format='svg', **savefig_kwargs)
            img.seek(0)
            svg = base64.b64encode(img.getvalue()).decode()

            # Return all desired outputs.
            return jsonify(
                png=png,
                svg=svg,
                csv=b.as_matrix().tolist(),
                columns=list(b),
                table_html=stats
            )
        except Exception as e:
            abort(400, 'Unable to analyze the data')
