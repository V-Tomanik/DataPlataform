from flask_login import LoginManager

def init_app(app):
    return LoginManager(app)
