#!/usr/bin/env python3
import pandas as pd
import os

CONSUMER_KEY = os.environ.get('ALPHA_KEY')
url = f'jjjapikey={CONSUMER_KEY}'
print(url)
