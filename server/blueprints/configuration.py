from importlib import import_module
from typing import Any

def load_blueprint(app):
    #Utiliza as extensões declaradas no dynaconf para implementar as extensoes
    for blueprint in app.config.get('BLUEPRINTS'):
        #A porra do linter mostrava erro então to definindo como tipo any
        module:Any = import_module(blueprint)
        module.init_app(app)
