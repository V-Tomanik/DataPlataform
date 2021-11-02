from flask import render_template
from flask import Blueprint


#Cria um sub-app
pb = Blueprint("MainSite",__name__,template_folder="templates",static_folder="statics")


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

@pb.route("/central/calendario")
def calendario_central():
    """Central do site """
    return render_template('central_calendario.html')

@pb.route("/central/entregas")
def entregas_central():
    """Central do site """
    return render_template('central_entregas.html')

