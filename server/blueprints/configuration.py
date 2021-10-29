from importlib import import_module
from dynaconf import FlaskDynaconf
from typing import Any

def load_blueprint(app):
    #Utiliza as extensões declaradas no dynaconf para implementar as extensoes
    for extension in app.config.get('BLUEPRINTS'):
        #A porra do linter mostrava erro então to definindo como tipo any
        module:Any = import_module(extension)
        module.init_app(app)

def config_server(app,**config):
    FlaskDynaconf(app,**config)
