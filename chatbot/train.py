#This is the section for implementing the functions defined in nltk_utils.py
# This is the where the pytorch training loop to train the model is located

#Import necessary libraries
import json
from nltk_utils import tokenize, stem, bag_of_words
import numpy as np

import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

from model import NeuralNet

#Load dataset from a JSON file named 'intents.json'
with open('chatbot\intents.json', 'r') as f:
    intents = json.load(f)

#Initialize empty lists for all words, tags, and xy pairs
all_words = []
tags = []
xy = []

#Loop through each sentence in the intents patterns and tokenize each word in the sentence.
#Add each word to the all_words list and create an xy pair consisting of a bag of words vector and its corresponding tag
for intent in intents ['intents']:
    tag = intent['tag']
    tags.append(tag)
    for pattern in intent['patterns']:
        w = tokenize(pattern)
        all_words.extend(w)
        xy.append((w, tag))

#Set the punctuations to be ignored
ignore_words = ['?', '!', '.', ',']

#Stem and remove duplicates from the all_words list and sort it
all_words = [stem(w) for w in all_words if w not in ignore_words]
all_words = sorted(set(all_words))

#Sort and remove duplicates from the tags list
tags = sorted(set(tags))

#print(len(xy), "patterns")
#print(len(tags), "tags:", tags)
#print(len(all_words), "unique stemmed words:", all_words)

#Create training data by creating a one-hot encoded bag of words vector for each pattern_sentence and label each vector with its corresponding tag
x_train = []
y_train = []
for (pattern_sentence, tag) in xy:
    bag = bag_of_words(pattern_sentence, all_words)
    x_train.append(bag)

    label =  tags.index(tag)
    y_train.append(label) #cross_entroppy_loss

# Create training data
x_train = np.array(x_train)
y_train = np.array(y_train)

#Create a PyTorch Dataset and DataLoader to handle the training data
class ChatDataset(Dataset):
    def __init__(self):
        self.n_samples = len(x_train)
        self.x_data = x_train
        self.y_data = y_train
# This is to later allow us access dataset with an index
    def __getitem__(self, index):
        return self.x_data[index], self.y_data[index]

    def __len__(self):
        return self.n_samples
    
#Hyperparameters
batch_size = 8
hidden_size = 8
output_size = len(tags)
input_size = len(x_train[0])
learning_rate = 0.001
num_epochs = 1000

dataset = ChatDataset()
train_loader = DataLoader(dataset = dataset, batch_size=batch_size, shuffle = True, num_workers= 0)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = NeuralNet(input_size, hidden_size, output_size).to(device, torch.float32)

# Create the loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr= learning_rate)

for epoch in range(num_epochs):
    for (words, labels) in train_loader:
        words = words.to(device)
        labels = labels.to(device, dtype=torch.long)

        #Forward Pass
        outputs = model(words)
        loss = criterion(outputs, labels)

        #Backword and optimizer step
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    if (epoch +1) % 100 == 0:
        print (f'epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

print(f'final loss: {loss.item():.4f}') 

data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "hidden_size": hidden_size,
    "output_size": output_size,
    "all_words": all_words,
    "tags": tags
}

FILE = "data.pth"
torch.save(data, FILE)

print(f'training complete. file saved to {FILE}')