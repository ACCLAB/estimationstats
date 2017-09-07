import matplotlib
matplotlib.use('Agg') # Set appropriate rendering backend.

import matplotlib.pyplot as plt
import bootstrap_contrast as bs
import pandas as pd
import io
import base64
from flask import Flask, request, render_template, jsonify
from flask_material import Material


app=Flask(__name__)
Material(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    df=pd.read_csv(request.files['file'])
    f,b=bs.contrastplot(df,
                        idx=(('Control', 'Group1',),
                        ('Control', 'Group3'),
                        ('Control', 'Group5')),
                    color_col='Gender')
    stats=b.to_html()

    img=io.BytesIO()
    plt.savefig(img, format='png', bbox_inches='tight')
    img.seek(0)
    png=base64.b64encode(img.getvalue()).decode()

    plt.savefig(img, format='svg', bbox_inches='tight')
    img.seek(0)
    svg=base64.b64encode(img.getvalue()).decode()

    return jsonify(
        png=png,
        svg=svg,
        csv=b.as_matrix().tolist(),
        columns=list(b)
    );

if __name__=='__main__':
    app.run()
