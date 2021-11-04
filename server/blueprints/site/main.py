from flask import render_template
from flask import Blueprint


#Cria um sub-app
pb = Blueprint("MainSite",__name__,template_folder="templates",static_folder="statics")



events=[
        {'nome':'Entrega PI Novembro','date':'2021-11-03','color':'#E83F5B'},
        {'nome':'Entrega MT Novembro','date':'2021-11-07','color':'#3485FF'},
        {'nome':'Entrega Programming Index Novembro','date':'2021-11-23','color':'green'},

        {'nome':'Entrega PI Outubro','date':'2021-10-03','color':'#E83F5B'},
        {'nome':'Entrega MT Outubro','date':'2021-10-07','color':'#3485FF'},
        {'nome':'Entrega Programming Index Outubro','date':'2021-10-23','color':'green'},
]


@pb.route("/eyestorm")
def eyestorm():
    """ Página para tratamento e visualização de dados"""
    return render_template('eyestorm.html')

@pb.route("/")
@pb.route("/entregas")
def import_files_central():
    """Rota para entrega de arquivos """
    return render_template('central_entregas.html')

@pb.route("/calendario")
def calendario_central():
    """Rota para visualizar o calendário de entregas """
    return render_template('central_calendario.html',eventos=events)

@pb.route("/summary")
def entregas_central():
    """Rota para visualizar o resumo de pendencias"""
    return render_template('central_summary.html')

