"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users, Characters


api = Blueprint('api', __name__)
CORS(api)  # Allow CORS requests to this API


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {}
    response_body['message'] = "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    return response_body, 200


@api.route('/users', methods=['GET', 'POST'])
def handle_users():
    response_body = {}
    if request.method == 'GET':
        rows = db.session.execute(db.select(Users)).scalars()
        results = [row.serialize() for row in rows]  # List comprehension
        # Opción 2
        # results = []
        # for row in rows:
        #    results.append(row.serialize())
        response_body['results'] = results
        response_body['message'] = "recibí el GET request"
        return response_body, 200
    if request.method == 'POST':
        response_body['message'] = "recibí el POST request"
        return response_body, 200


@api.route('/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def handle_user(user_id):
    response_body = {}
    if request.method == 'GET':
        row = db.session.execute(db.select(Users).where(Users.id == user_id)).scalar()
        if not row:
            response_body['results'] = {}
            response_body['message'] = f'No existe el usuario {user_id}'
            return response_body, 404
        response_body['results'] = row.serialize()
        response_body['message'] = f'recibí el GET request {user_id}'
        return response_body, 200
    if request.method == 'PUT':
        response_body['message'] = f'recibí el PUT request {user_id}'
        return response_body, 200
    if request.method == 'DELETE':
        response_body['message'] = f'recibí el DELETE request {user_id}'
        return response_body, 200

# Endpoints del Starwars models
@api.route('/characters', methods=['GET'])
def handle_characters():
    response_body = {}
    if request.method == 'GET':
        rows = db.session.execute(db.select(Characters)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = "recibí el GET request"
        return response_body, 200


@api.route('/users/<int:character_uid>', methods=['GET'])
def handle_character(character_uid):
    response_body = {}
    if request.method == 'GET':
        row = db.session.execute(db.select(CharacterDetails).where(CharacterDetails.id == chardetails_id)).scalar()
        if not row:
            response_body['results'] = {}
            response_body['message'] = f'No existe el usuario {chardetails_id}'
            return response_body, 404


@api.route('/planets', methods=['GET'])
def handle_planets():
    response_body = {}
    if request.method == 'GET':
        rows = db.session.execute(db.select(Characters)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = "recibí el GET request"
        return response_body, 200


@api.route('/users/<int:planet_uid>', methods=['GET'])
def handle_planet(planet_uid):
    response_body = {}
    if request.method == 'GET':
        row = db.session.execute(db.select(PlanetDetails).where(PlanetDetails.id == planetdetails_id)).scalar()
        if not row:
            response_body['results'] = {}
            response_body['message'] = f'No existe el planeta {planetdetails_id}'
            return response_body, 404
