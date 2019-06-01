from flask import Flask, abort, jsonify, render_template, request
from flask_cors import CORS


def get_schema():
    from os import environ
    from json import load, dumps

    with open(environ.get("SCHEMA_FILE", "settings.schema.json")) as f:
        return dumps(load(f), ensure_ascii=True)


def confirm_update_passcode(passcode: str):
    from os import environ

    if not passcode == environ["UPDATE_PASSWORD"]:
        abort(401)


def settings_file():
    from os import environ

    return environ.get("SETTINGS_FILE", "settings.json")


app = Flask(__name__)
CORS(app)


def read_settings():
    from json import load

    with open(settings_file(), "r") as f:
        return load(f)


@app.route("/settings/<passcode>", methods=["GET"])
def get_settings(passcode):
    confirm_update_passcode(passcode)

    return jsonify(read_settings())


@app.route("/settings/<passcode>", methods=["POST"])
def set_settings(passcode):
    confirm_update_passcode(passcode)

    from json import dump

    with open(settings_file(), "w") as f:
        dump(request.get_json(), f)

    return jsonify(dict(success=True))


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html", host=request.host, schema=get_schema())
