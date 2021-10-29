from flask import render_template
from flask import Blueprint


#Cria um sub-app
pb = Blueprint("Site",__name__)


@pb.route("/")
def index():
        """ Página Inicial do Site """
        return "HomePage Flask"

@pb.route("/eyestorm")
def eyestorm():
    """ Página para tratamento e visualização de dados"""
    return render_template('eyestorm.html')

@pb.route("/central")
def import_files_central():
    """Central do site """
    return render_template('central.html')
