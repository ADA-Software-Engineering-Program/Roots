import numpy as np
import random
import json

import torch
import torch.nn as nn

with open('chatbot\intents.json', 'r') as f:
    intents = json.load(f)

print(intents)