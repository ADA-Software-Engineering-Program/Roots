import torch
import torch.nn as nn

class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        #Create 3 linear layers
        self.l1 = nn.Linear(input_size, hidden_size)
        self.l2 = nn.Linear(hidden_size, hidden_size)
        self.l3 = nn.Linear(hidden_size, num_classes)
        #Create an activation function for inbetween
        self.relu = nn.ReLU()

    #Implement the forward pass
    def forward(self, x):
        # Convert x to floating point type
        x = x.float()
        out = self.l1(x)
        # Apply activation function inbetween
        out = self.relu(out)
        # Apply second linear layer
        out = self.l2(out)
        out = self.relu(out)
        # Apply third linear layer
        out = self.l3(out)
        # No activation and no softmax
        return out
