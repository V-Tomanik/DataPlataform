from server.blueprints.site.main import pb

def init_app(app):
    app.register_blueprint(pb)
