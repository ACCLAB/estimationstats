import os
from flask import Flask, Blueprint
from flask_restful import Api
from flask_cors import CORS
from api.api import Analyze
from whitenoise import WhiteNoise

# Change directory to static/dist
template_dir = os.path.abspath(os.path.dirname(__file__))
template_dir = os.path.join(template_dir, 'static')
template_dir = os.path.join(template_dir, 'dist')

app = Flask(__name__, template_folder=template_dir)
app.wsgi_app = WhiteNoise(app.wsgi_app, root=template_dir)

# Cross Origin Resource sharing for api request
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Import views of webapp
import webapp.views

# Add api endpoint
api_bp = Blueprint('api', __name__, url_prefix='/api')
api = Api(api_bp)
api.add_resource(Analyze, '/analyze')
app.register_blueprint(api_bp)

