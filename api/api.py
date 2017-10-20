import matplotlib
matplotlib.use('Agg') # Set appropriate rendering backend.

import matplotlib.pyplot as plt
import bootstrap_contrast as bs
import pandas as pd
import numpy as np
import io
import base64
from flask import request, jsonify
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

        # Read in the uploaded file.
        df = pd.read_csv(request.files['file'], index_col=0)

        # Handle the columns for plotting.
        dt = df.dtypes
        numerical_cols = dt[dt!='object'].index.tolist()

        first_two_columns = (numerical_cols[0], numerical_cols[1])

        if np.mod( len(numerical_cols), 2 ) == 1:
            numerical_cols = numerical_cols[:-1]

        paired_columns = [ tuple(numerical_cols[i:i + 2]) for i in range(0, len(numerical_cols), 2) ]

        # Plot arguments
        plotType = request.form['plotType']
        if plotType == 'two-independent-groups':
            # two independent groups plot
            kwargs['idx'] = first_two_columns
            kwargs['paired'] = False

        elif plotType == 'paired':
            # paired plot
            kwargs['idx'] = first_two_columns
            kwargs['paired'] = True

        elif plotType == 'multi':
            # Multiple groups plot
            kwargs['idx'] = paired_columns
            kwargs['paired'] = False

        elif plotType == 'multi-paired':
            # Multi-paired plot
            # FIXME set arguments for Multi-paired plot
            kwargs['idx'] = paired_columns
            kwargs['paired'] = True

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
        plt.savefig(img,
                    format='svg', **savefig_kwargs)
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
