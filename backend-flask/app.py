from flask import Flask,request
import os
import numpy as np
import cv2
from matplotlib import pyplot as plt


app = Flask(__name__)



# app.config['S3_BUCKET'] = "codevibecressendo2k23"
# app.config['S3_KEY'] = "AKIAWRHCOGJK6CF4CS2Q"
# app.config['S3_SECRET'] = "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"
# app.config['S3_LOCATION'] = 'https://codevibecressendo2k23.s3.amazonaws.com/'




import boto3, botocore
from werkzeug.utils import secure_filename

s3 = boto3.client('s3',
                    aws_access_key_id='AKIAWRHCOGJK6CF4CS2Q',
                    aws_secret_access_key= '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',

                     )

BUCKET_NAME='codevibecressendo2k23'

# @app.route('/')  
# def home():
#     return render_template("file_upload_to_s3.html")
# @app.route('/segment',methods=['post'])
# def segment():
#     if request.method == 'POST':
#         file = request.files['file']
#         img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_UNCHANGED)
        
#         # Convert the image to grayscale
#         gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
#         # Apply thresholding to segment the image
#         ret, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)
        
#         # Apply morphological operations to remove noise
#         kernel = np.ones((3,3), np.uint8)
#         opening = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=2)
#         sure_bg = cv2.dilate(opening, kernel, iterations=3)
        
#         # Apply distance transform to find the foreground objects
#         dist_transform = cv2.distanceTransform(opening, cv2.DIST_L2, 5)
#         ret, sure_fg = cv2.threshold(dist_transform, 0.7*dist_transform.max(), 255, 0)
        
#         # Find the unknown region
#         sure_fg = np.uint8(sure_fg)
#         unknown = cv2.subtract(sure_bg, sure_fg)
        
#         # Apply the watershed algorithm to segment the image
#         ret, markers = cv2.connectedComponents(sure_fg)
#         markers = markers + 1
#         markers[unknown==255] = 0
#         markers = cv2.watershed(img, markers)
        
#         # Create a color map for the segmented image
#         colormap = np.zeros((markers.shape[0], markers.shape[1], 3), dtype=np.uint8)
#         colormap[markers == -1] = [0, 0, 255] # Boundary
#         colormap[markers == 1] = [0, 255, 0] # Background
#         colormap[markers > 1] = [255, 0, 0] # Foreground
        
#         # Convert the color map to a JPEG image
#         ret, jpeg = cv2.imencode('.jpg', colormap)
#         print(jpeg)
#         return upload(jpeg,"demo.jpg")


# @app.route('/upload',methods=['post'])
def upload(img,filename):
    # if request.method == 'POST':
    #     img = request.files['file']
    if img:
            filename = secure_filename(filename)
            img.save(filename)
            s3.upload_file(
                Bucket = BUCKET_NAME,
                Filename=filename,
                Key = filename
            )
            msg = "Upload Done ! "

    return 'https://codevibecressendo2k23.s3.ap-south-1.amazonaws.com/'+filename