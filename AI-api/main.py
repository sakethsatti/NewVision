from fastapi import FastAPI, UploadFile, File
import uvicorn   
from model import predict_step


app = FastAPI()

@app.post("/upload")
def upload(file: UploadFile = File(...)):
    print("pinged")
    contents = file.file.read()
    
    caption = predict_step(contents)[0]

    return {"caption": f"{caption}"}
