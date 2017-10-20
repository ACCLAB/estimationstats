import matplotlib
matplotlib.use('Agg') # Set appropriate rendering backend.

import matplotlib.pyplot as plt
import bootstrap_contrast as bs
import pandas as pd
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
                          'frameon': False,  # ensures no white background on plot
                          'bbox_inches': 'tight'}

        # Read in the uploaded file.
        df = pd.read_csv(request.files['file'], index_col=0)

        # Plot arguments
        plotType = request.form['plotType']
        kwargs = {'color_col': 'Gender'}
        if plotType == 'two-independent-groups':  # two independent groups plot
            kwargs['idx'] = df.columns[:-1] # FIXME set arguments for two independent groups plot
        elif plotType == 'paired':  # paired plot
            kwargs['idx'] = (df.columns[0], df.columns[1])
            kwargs['paired'] = True
        elif plotType == 'multi':  # Multiple groups plot
            kwargs['idx'] = df.columns[:-1] # FIXME set arguments for multiple groups plot
        elif plotType == 'multi-paired':  # Multi-paired plot
            kwargs['idx'] = df.columns[:-1] # FIXME set arguments for Multi-paired plot
        else:  # Shared control plot
            kwargs['idx'] = df.columns[:-1]

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
        );
