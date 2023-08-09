from flask import Flask
from controllers.jokes_controller import jokes_controller
from controllers.musics_controller import musics_controller
from os import environ
from waitress import serve

app = Flask(__name__)

app.register_blueprint(jokes_controller, url_prefix="/jokes")
app.register_blueprint(musics_controller, url_prefix="/musics")


def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        return app.run(debug=True, host=host, port=port)
    else:
        serve(app, host=host, port=port)


if __name__ == "__main__":
    start_server()
