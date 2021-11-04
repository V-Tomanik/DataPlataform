from flask import request, redirect,send_from_directory,abort,make_response
from flask import Blueprint, current_app
from server.back.eyestorm import function as et
#from flask_restful import Resource, Api
import os

#Cria um sub-app
api = Blueprint("api",__name__)

#Salvar arquivos
@api.route("/upload-file", methods=['POST'])
def upload_file():
    """Rota referencial para receber arquivos"""
    #Verifica o nome do arquivo que foi recebido
    files = request.files.getlist('arquivos[]')
    for file in files:
        filename = file.filename
        # TODO: Ver o tamanho do arquivo (cookie) e se a extensao esta ok
        if filename:
            file.save(os.path.join(current_app.instance_path,filename))
            # Redireciona para a url que recebeu o post com um cookie informando do upload
            response = make_response(redirect(request.referrer))
            response.set_cookie('file_uploaded',filename)
            #Pega qualquer valor passado no forms e transforma em cookie (generalizacao para outros casos)
            for key,value in request.form.items():
                response.set_cookie(key,value)

            return response 
    return "404"

#Download de arquivos
@api.route("/download-file/<filename>")
def download_file(filename):
    """Rota referencial para fornecer arquivos"""
    try:
        return send_from_directory(current_app.instance_path,filename,as_attachment=True)
    except:
            abort(404)

#Iniciar o processo eyestorm
@api.route("/eyestormprocess/<filename>;<separator>")
def eyestorm_init_process(filename,separator):
    file_path = os.path.join(current_app.instance_path,filename)
    et.process.run(file_path,separator,null_value='')
