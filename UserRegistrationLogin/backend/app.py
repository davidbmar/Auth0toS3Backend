from flask import Flask, jsonify, request
from jose import jwt
from os import environ

app = Flask(__name__)

# Dummy endpoint for demonstration
@app.route('/api/private')
def private():
    token = request.headers.get('Authorization', None)
    if not token:
        return jsonify({"message": "No token provided"}), 401

    try:
        payload = jwt.decode(token, environ['AUTH0_PUBLIC_KEY'], algorithms=['RS256'])
        return jsonify({"message": "Access granted", "user": payload["sub"]})
    except jwt.JWTError as e:
        return jsonify({"message": "Invalid token", "error": str(e)}), 401

if __name__ == '__main__':
    app.run(debug=True)
