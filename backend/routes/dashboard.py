# Path: routes/dashboard

import pandas as pd
import numpy as np
import os
import uvicorn
import gunicorn

from dotenv import load_dotenv
from fastapi import FastAPI, Request, status, APIRouter, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager

# Load envinroment
load_dotenv(override=True)

# Assign all environment and loda the file
server_host=os.getenv("SERVER_HOST")
server_port=os.getenv("SERVER_PORT")
df_bast_summary = pd.read_csv('./data/df_backend_summary.csv')
df_bast_achievement = pd.read_csv('./data/df_backend_summary.csv')

# Initialize router
router = APIRouter()


# ===============================================
# Endpoint BAST Summary 
# - Filter by year
# ===============================================

@router.get('/bast/summary')
async def bast_summary(year: int = Query(None)):

    year_list = list(df_bast_summary['year'].astype(int).unique())

    if year is None:
        df_filtered_summary = df_bast_summary.to_dict(orient='records')

        return JSONResponse(
            status_code=200,
            content={
                "status": "success",
                "message": "All data",
                "data": df_filtered_summary
            }
        )

    if (year not in year_list) & (year != None):
        raise HTTPException(status_code=400, detail=f"Filter {year} isn't found")

    df_filtered_summary = df_bast_summary.loc[df_bast_summary['year'] == year]

    df_dict_summary = df_filtered_summary.to_dict(orient='records')

    return JSONResponse(
        status_code=200,
        content={
            "status": "success",
            "message": f"filter by year {year}",
            "data": df_dict_summary
        }
    )


# ===============================================
# Endpoint BAST Achievement
# - Filter by year
# ===============================================

@router.get('/bast/achievement')
async def bast_achievement(year: int = Query(None)):
    year_list = list(df_bast_achievement['year'].unique())

    if year is None:
        df_filtered_achievement = df_bast_achievement.to_dict(orient='records')

        return JSONResponse(
            status_code=200,
            content={
                "status": "success",
                "message": "All data",
                "data": df_filtered_achievement
            }
        )    

    if (year not in year_list) & (year != None):
        return JSONResponse(
            status_code=400,
            content={
                "status": "error",
                "message": f"Filter year {year} isn't available",
                "data": []
            }
        )

    df_filtered_achievement = df_bast_achievement.loc[df_bast_achievement['year'] == year]

    df_dict_achievement = df_filtered_achievement.to_dict(orient='records')

    return JSONResponse(
        status_code=200,
        content={
            "status": "success",
            "message": f"Filter by {year}",
            "data": df_dict_achievement
        }
    )