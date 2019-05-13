from flask import Flask, abort, jsonify, render_template, request

from flask_cors import CORS


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


def update(orig_dict, new_dict):
    import collections

    for key, val in new_dict.items():
        if isinstance(val, collections.Mapping):
            tmp = update(orig_dict.get(key, {}), val)
            orig_dict[key] = tmp
        else:
            orig_dict[key] = new_dict[key]
    return orig_dict


@app.route("/settings/<passcode>", methods=["GET"])
def get_settings(passcode):
    confirm_update_passcode(passcode)

    return jsonify(read_settings())


@app.route("/settings/<passcode>", methods=["POST"])
def set_settings(passcode):
    confirm_update_passcode(passcode)

    from json import dump

    settings = read_settings()
    settings = update(settings, request.get_json())
    with open(settings_file(), "w") as f:
        dump(settings, f)

    return jsonify(dict(success=True))


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html", host=request.host)
