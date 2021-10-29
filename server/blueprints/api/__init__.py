from server.blueprints.api.main import api

def init_app(app):
    app.register_blueprint(api)
