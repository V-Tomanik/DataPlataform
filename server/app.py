from flask import Flask
from dynaconf import FlaskDynaconf
from server.blueprints import configuration

#Flask reconhece essa nomenclatura para inicialização do app
def create_app():
    app = Flask(__name__)
    #Utiliza dynaconf para configurar o flask e já fazer o load das extensões
    FlaskDynaconf(app,settings_files=["settings.toml",".secrets.toml"],extensions_list="EXTENSIONS")
    #Importa os blueprints
    configuration.load_blueprint(app)
    return app

