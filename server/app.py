from flask import Flask

from server.ext import configuration

#Flask reconhece essa nomenclatura para inicialização do app
def create_app():
    app = Flask(__name__)
    configuration.config_server(app)
    configuration.load_extensions(app)
    return app

