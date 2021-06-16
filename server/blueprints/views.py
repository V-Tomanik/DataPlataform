from flask import render_template, request, redirect,send_file

import os

def init_app(app):

    @app.route("/")
    def index():
        return "HomePage Flask"

    @app.route("/eyestorm")
    def eyestorm():
        return render_template('eyestorm.html')

    @app.route("/upload-file", methods=['POST'])
    def upload_file():
        #Verifica o nome do arquivo que foi recebido
        if request.files['dataset']:
            dataset = request.files['dataset']

            # TODO: Ver o tamanho do arquivo (cookie) e se a extensao esta ok
            dataset.save(os.path.join(app.config['data_folder'],dataset.filename))
        # Redireciona para a url que recebeu o post
        return redirect(request.referrer) 

    @app.route("/download-file")
    def download_file(name):
        send_file(os.path.join(app.config['data_folder'],name),as_attachment=True)
