import matplotlib
matplotlib.use('Agg') # Set appropriate rendering backend.

import matplotlib.pyplot as plt
import bootstrap_contrast as bs
import pandas as pd
import io
import base64
from flask import Flask, request, render_template, jsonify
from flask_material import Material

# Initialise Flask app and Material CSS layout.
app=Flask(__name__)
Material(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    # Ensure that text is rendered as text and not as paths.
    plt.rcParams['svg.fonttype'] = 'none'

    # Common settings for saving as PNG and SVG.
    savefig_kwargs={'transparent':True,
                    'frameon':False, # ensures no white background on plot
                    'bbox_inches':'tight'}

    # Read in the uploaded file.
    df=pd.read_csv(request.files['file'])

    # Compute contrast statistics and create the contrast plot.
    f,b=bs.contrastplot(df,
                        idx=(('Control', 'Group1',),
                        ('Control', 'Group3'),
                        ('Control', 'Group5')),
                    color_col='Gender')
    stats=b.to_html()

    # Prepare PNG output.
    img=io.BytesIO()
    plt.savefig(img,
                format='png', **savefig_kwargs)
    img.seek(0)
    png=base64.b64encode(img.getvalue()).decode()

    # Prepare SVG output.
    plt.savefig(img,
                format='svg', **savefig_kwargs)
    img.seek(0)
    svg=base64.b64encode(img.getvalue()).decode()

    # Return all desired outputs.
    return jsonify(
        png=png,
        svg=svg,
        csv=b.as_matrix().tolist(),
        columns=list(b),
        table_html=stats
    );

if __name__=='__main__':
    app.run()
