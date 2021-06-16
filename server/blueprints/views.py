from flask import render_template, request, redirect


def init_app(app):

    @app.route("/")
    def index():
        return "HomePage Flask"

    @app.route("/eyestorm")
    def eyestorm():
        return render_template('eyestorm.html')

    @app.route("/upload-file", methods=['GET','POST'])
    def upload_file():
        #Verifica o nome do arquivo que foi recebido
        if request.files['dataset']:
            dataset = request.files['dataset']
            print(dataset)
            
        # Redireciona para a url que recebeu o post
        return redirect(request.referrer) 
