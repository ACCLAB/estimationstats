import matplotlib.pyplot as plt
import bootstrap_contrast as bs
import pandas as pd
import io
import base64
from flask import Flask, send_file, request
from flask import render_template
from flask_material import Material

app = Flask(__name__)
Material(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/upload', methods=['POST'])
def upload_file():
    df = pd.read_csv(request.files['file'])
    bs.contrastplot(df,
                    idx=(('Control', 'Group1',), ('Control', 'Group3'), ('Control', 'Group5')),
                    color_col='Gender'
                    )
    img = io.BytesIO()
    plt.savefig(img, format='png', bbox_inches='tight')
    img.seek(0)

    plot_url = base64.b64encode(img.getvalue()).decode()
    return plot_url;


if __name__ == '__main__':
    app.run()
