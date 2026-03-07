from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_register():
    response = client.post(
        "/auth/register",
        json={"username": "testuser", "password": "1234"}
    )
    assert response.status_code == 200


def test_login():
    response = client.post(
        "/auth/login",
        json={"username": "testuser", "password": "1234"}
    )
    assert response.status_code == 200