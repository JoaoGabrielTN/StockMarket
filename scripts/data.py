#!/usr/bin/env python3
import pandas as pd
import requests
import pickle 
import os

CONSUMER_KEY = os.environ.get('ALPHA_KEY')
url = f'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey={CONSUMER_KEY}'
r = requests.get(url)
data = pd.DataFrame.from_dict(r.json(), orient='index')
print(data)
data.to_csv("df.csv", index=False)
with open("data_pickle.pkl", "wb") as f:
    pickle.dump(data, f)
