from fastapi import FastAPI
from .database import Base, engine
from .routers import auth_router, task_router
from . import models

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router.router)
app.include_router(task_router.router)