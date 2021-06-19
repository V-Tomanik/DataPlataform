from flask import render_template, request, redirect,send_from_directory,abort,make_response

from server.back.eyestorm import function as et

import os

def init_app(app):

    @app.route("/")
    def index():
        return "HomePage Flask"

    @app.route("/eyestorm")
    def eyestorm():
        if 'file_uploaded' in request.cookies:
            file_name = request.cookies.get('file_uploaded')
            sep = request.cookies.get('separator')

            # TODO: Fazer o load do pandas functionar
            #file_path = os.path.join(app.config['data_folder'],file_name)
        return render_template('eyestorm.html')

    @app.route("/upload-file", methods=['POST'])
    def upload_file():
        #Verifica o nome do arquivo que foi recebido
        dataset = request.files.get('dataset')
        # TODO: Ver pq preciso modificar o path para o upload
        # TODO: Ver o tamanho do arquivo (cookie) e se a extensao esta ok
        dataset.save(os.path.join('server/',app.config['data_folder'],dataset.filename))
        # Redireciona para a url que recebeu o post com um cookie informando do upload
        response = make_response(redirect(request.referrer))
        response.set_cookie('file_uploaded',dataset.filename)
        #Pega qualquer valor passado no forms e transforma em cookie (generalizacao para outros casos)
        for key,value in request.form.items():
            response.set_cookie(key,value)

        return response 

    @app.route("/download-file/<filename>")
    def download_file(filename):
        try:
            return send_from_directory(app.config['data_folder'],filename,as_attachment=True)
        except:
            abort(404)
