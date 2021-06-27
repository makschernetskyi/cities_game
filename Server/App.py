from flask import Flask, render_template, send_from_directory
from pathlib import Path
import os

# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from models import db, InfoModel


BASE_DIR = Path(__file__).resolve().parent.parent
WEB_CLIENT_DIR = os.path.join(BASE_DIR, 'Web_client')


TEMPLATE_DIR = os.path.join(WEB_CLIENT_DIR, 'build', 'templates')
STATIC_DIR = os.path.join(WEB_CLIENT_DIR, 'build', 'static')
MEDIA_DIR = os.path.join(BASE_DIR, 'Server', 'media')

HOST = 'localhost'
PORT = 3000

from main.main import main
from api.api import api

app = Flask(__name__, template_folder = TEMPLATE_DIR, static_folder = STATIC_DIR)
app.register_blueprint(main);
app.register_blueprint(api);


# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://cities_game_admin:12345678@localhost:5225/cities_game_db"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db.init_app(app)
# migrate = Migrate(app, db)




@app.route('/media/<path:filename>')
def get_media(filename):
	return send_from_directory(MEDIA_DIR, filename)



if __name__ == '__main__':
	app.run(host=HOST, port=PORT, debug=True)