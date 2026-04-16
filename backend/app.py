import pandas as pd
import numpy as np
import os
import uvicorn
import gunicorn

from dotenv import load_dotenv
from fastapi import FastAPI, Request, Response, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
from routes.dashboard import router as dashboard_router

# Load envinroment
load_dotenv(override=True)

# Assign all environment
server_host=os.getenv("SERVER_HOST")
server_port=os.getenv("SERVER_PORT")

# App initialization
app = FastAPI(
    title="BAST Monitoring Dashboard API",
    description="BAST Monitoring Dashboard Application"
)

# Middlewares
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_headers=['*'],
    allow_credentials=True,
    allow_methods=['*']
)

# Routes
app.include_router(dashboard_router, prefix="/api/dashboard")

# Root
@app.get("/")
async def root():
    return JSONResponse(
        status_code=200,
        content={"message": "Healthy"}
    )

# 404 Handler
@app.exception_handler(404)
async def not_found_handler(request: Request, exc):
    return JSONResponse(
        status_code=404,
        content={"status": "error", "message": "Route not found"}
    )

# HTTP Error Handler
@app.exception_handler(HTTPException)
async def http_error_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code = exc.status_code,
        content = {
            "status": "error",
            "message": exc.detail,
            "data": None
        }
    )

# Unexpected Error Handler
@app.exception_handler(Exception)
async def global_error_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "status": "error",
            "message": "Internal server error",
            "error": str(exc),
            "data": None
        }
    )




# Entrypoint
if __name__ == "__main__":
    print(f"Server running on {server_host}:{server_port}")
    uvicorn.run("app:app", host=server_host, port=server_port, reload=True)
