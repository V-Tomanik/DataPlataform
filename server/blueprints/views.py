from flask import render_template, request, redirect,send_from_directory,abort

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

    @app.route("/download-file/<string:file>")
    def download_file(file):
        try:
            return send_from_directory(directory=app.config['data_folder'],filename=file,as_attachment=True)
        except:
            abort(404)
