from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////absolute/path/to/foo.db'


@app.route('/', methods = ['GET'])
def get_words ():
    return jsonify({"Hello": "world"})



if __name__ == '__main__':
    app.run