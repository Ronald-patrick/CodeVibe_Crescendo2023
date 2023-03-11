import numpy as np
import pandas as pd
import joblib
import requests
import json
from flask import  Flask, request,jsonify,render_template
from flask_cors import CORS,cross_origin
import pandas as pd
import pickle

app = Flask(__name__)


# rf_model = joblib.load('Rf_Disease.joblib')
# load_model = pickle.load(open('Rf_Disease.joblib', 'rb'))

with open('Rf_Disease.sav', 'rb') as file:
    rf_model = pickle.load(file)

df_norm = pd.read_csv("dis_sym_dataset_norm.csv") # Individual Disease

Y = df_norm.iloc[:, 0:1]

@app.route('/api',methods=['POST'])
def predict_disease():
     if request.method == 'POST':
        data_array = request.data['symptoms']
        print(data_array)
    # data = request.get_json(force=True)
        prediction = rf_model.predict_proba(data_array)
        print(prediction)
        diseases = list(set(Y['label_dis']))
        diseases.sort()
        k = 10
        topk = prediction[0].argsort()[-k:][::-1]
        return jsonify(topk)

if __name__ == '__main__':
    app.run(port=5000, debug=True)