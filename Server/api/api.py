from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__, url_prefix = '/api/v0' )



@api.route('/', methods=['GET'])
def get_view():
	return jsonify({"response": "response" })