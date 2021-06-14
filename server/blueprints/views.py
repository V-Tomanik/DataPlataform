#from flask import render_template, abort


def init_app(app):

    @app.route("/")
    def index():
        return "teste"

    @app.route("/eyestorm")
    def eyestorm():
        ...
