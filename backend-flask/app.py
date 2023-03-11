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


from random import randint

def random_with_N_digits(n):
    range_start = 10**(n-1)
    range_end = (10**n)-1
    return randint(range_start, range_end)

# @app.route('/')  
# def home():
#     return render_template("file_upload_to_s3.html")
from matplotlib import pyplot as plt
# from skimage.morphology import extrema
# from skimage.morphology import watershed as skwater

def ShowImage(title,img,ctype):
    plt.figure(figsize=(10, 10))
    if ctype=='bgr':
        b,g,r = cv2.split(img)       # get b,g,r
        rgb_img = cv2.merge([r,g,b])     # switch it to rgb
        plt.imshow(rgb_img)
    elif ctype=='hsv':
        rgb = cv2.cvtColor(img,cv2.COLOR_HSV2RGB)
        plt.imshow(rgb)
    elif ctype=='gray':
        plt.imshow(img,cmap='gray')
    elif ctype=='rgb':
        plt.imshow(img)
    else:
        raise Exception("Unknown colour type")
    plt.axis('off')
    plt.title(title)
    plt.show()


from io import BytesIO


@app.route('/segment',methods=['post'])
def segment():
    if request.method == 'POST':
        file = request.files['file']
        fname =  'codeVibe'+str(random_with_N_digits(4))+'.jpg'
        file.save(fname)
        img = cv2.imread(fname)
        gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
        # ShowImage('Brain MRI',gray,'gray')

        ret, thresh = cv2.threshold(gray,0,255,cv2.THRESH_OTSU)
        # ShowImage('Thresholding image',thresh,'gray')

        ret, markers = cv2.connectedComponents(thresh)

        #Get the area taken by each component. Ignore label 0 since this is the background.
        marker_area = [np.sum(markers==m) for m in range(np.max(markers)) if m!=0] 
        #Get label of largest component by area
        largest_component = np.argmax(marker_area)+1 #Add 1 since we dropped zero above                        
        #Get pixels which correspond to the brain
        brain_mask = markers==largest_component

        brain_out = img.copy()
        #In a copy of the original image, clear those pixels that don't correspond to the brain
        brain_out[brain_mask==False] = (0,0,0)

        img = cv2.imread(fname)
        gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
        ret, thresh = cv2.threshold(gray,0,255,cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)


        # noise removal
        kernel = np.ones((3,3),np.uint8)
        opening = cv2.morphologyEx(thresh,cv2.MORPH_OPEN,kernel, iterations = 2)

        # sure background area
        sure_bg = cv2.dilate(opening,kernel,iterations=3)

        # Finding sure foreground area
        dist_transform = cv2.distanceTransform(opening,cv2.DIST_L2,5)
        ret, sure_fg = cv2.threshold(dist_transform,0.7*dist_transform.max(),255,0)

        # Finding unknown region
        sure_fg = np.uint8(sure_fg)
        unknown = cv2.subtract(sure_bg,sure_fg)

        # Marker labelling
        ret, markers = cv2.connectedComponents(sure_fg)

        # Add one to all labels so that sure background is not 0, but 1
        markers = markers+1


        # Now, mark the region of unknown with zero
        markers[unknown==255] = 0
        markers = cv2.watershed(img,markers)
        img[markers == -1] = [255,0,0]

        im1 = cv2.cvtColor(img,cv2.COLOR_HSV2RGB)
        image_bytes = cv2.imencode('.jpg', im1)[1].tobytes()
        i = BytesIO(image_bytes)
        cv2.imwrite(fname, im1)
        return upload(i,fname)
        # ShowImage('Watershed segmented image',im1,'gray')
        
@app.route('/edge-detection',methods=['post'])
def edgeDetection():

    if request.method == 'POST':
        file = request.files['file']
        fname =  'codeVibe'+str(random_with_N_digits(4))+'.jpg'
        file.save(fname)
        img = cv2.imread(fname)

        # convert img to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # do morphology gradient
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT , (3,3))
        morph = cv2.morphologyEx(gray, cv2.MORPH_GRADIENT, kernel)

        # apply gain
        morph = cv2.multiply(morph, 5)

        fname2 =  'codeVibe'+str(random_with_N_digits(4))+'.jpg'
        # file.save(fname)
        # write results
        image_bytes = cv2.imencode('.jpg', morph)[1].tobytes()
        i = BytesIO(image_bytes)
        cv2.imwrite(fname2, morph)
        return upload(i,fname2)
        # show lines
        # cv2.imshow("morph", morph)


        # cv2.waitKey(0)

# @app.route('/upload',methods=['post'])
def upload(img,filename):
    # if request.method == 'POST':
    #     img = request.files['file']
    if img:
            filename = secure_filename(filename)
            # img.save(filename)
            s3.upload_file(
                Bucket = BUCKET_NAME,
                Filename=filename,
                Key = filename
            )
            msg = "Upload Done ! "

    return 'https://codevibecressendo2k23.s3.ap-south-1.amazonaws.com/'+filename