from flask import Flask
from dynaconf import FlaskDynaconf
from server.blueprints import configuration

#Flask reconhece essa nomenclatura para inicialização do app
def create_app():
    app = Flask(__name__)
    FlaskDynaconf(app,settings_files=["settings.toml"])
    configuration.load_blueprint(app)
    return app

