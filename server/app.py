from flask import Flask

from server.ext import configuration

#Flask reconhece essa nomenclatura para inicialização do app
def create_app():
    app = Flask(__name__,template_folder='./blueprints/templates')
    configuration.config_server(app,settings_files=["settings.toml"])
    configuration.load_extensions(app)
    return app

