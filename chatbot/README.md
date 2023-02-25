 [ROOTS Chatbot](#roots-chatbot)
  * [Features](#features)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Customize](#customize)


# ROOTS Chatbot
The ROOTS Chatbot is a conversational interface designed to assist users in learning Nigerian indigenous languages. The chatbot provides personalized and interactive language learning experiences by engaging users in natural conversations in English language.

The approach used in this project was inspired by a YouTube playlist on building chatbots with Pytorch:
[Chat Bot With PyTorch - NLP And Deep Learning - Python Tutorial](https://youtu.be/RpWeNzfSUHw).

# Features
- Recognizes user intent and entities using natural language processing (NLP)
- Provides contextually relevant responses using Pytorch framework
- Has a conversational user interface designed to mimic human conversations
- Integrated with the ROOTS learning platform and accessible through its user interface
- Properly documented with technical documentation

# Requirements
- Python programming language
- Pytorch framework for natural language processing
- JSON formatted training data with labeled conversations in the target language
- Access to the ROOTS learning platform for integration

# Installation
Get started with the ROOTS chatbot by following these easy steps:
1. ## Create an Enviroment
With either `conda` or `venv` install the required packages by typing:
```
mkdir myproject
$ cd myproject
$ python3 -m venv venv
```
2. ## Activate it
- ### Mac/Linux:
```
. venv/bin/activate
```
- ### Windows:
```
venv\Scripts\activate
```
3. ## Install Pytorch and other dependencies
For installation of Pytorch see official website
You also need to install `nltk`:
```
pip install nltk
```
If you get an error during the first run, you also need to install `nltk.tokenize.punkt`: 
Run this once in your terminal:
```
$ python
>>> import nltk
>>> nltk.download('punkt')
```

That's it! You're now ready to start using the ROOTS chatbot.
# Usage
To use the chatbot, simply run the `app.py` script in your terminal by typing: 
```
python app.py
```
The chatbot will launch and you can start interacting with it immediately.
If you have any questions or run into any issues during the installation process, feel free to reach out to us for support. We're always happy to help you get started with the ROOTS chatbot.

# Contribution
Contributions to the ROOTS chatbot are welcome. To contribute, please follow the steps below:
1. Fork the repository
2. Create a new branch for your feature
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Create a pull request to the main repository

# Customize
The `intents.json` is a JSON code that contains various intents with their corresponding patterns and responses, designed to assist users in navigating the ROOTS platform via a chatbot. You can customize this file to suit your specific use case by defining a new tag along with possible patterns and responses for the chatbot. Remember that any changes made to the `intents.json` file will require the training process to be rerun. So, take a moment to review the file and modify it according to your needs.
```
{
    "intents": [
      {
        "tag": "greeting",
        "patterns": [
          "Hi",
          "Hey",
          "How are you",
          "Is anyone there?",
          "Hello",
          "Good day"
        ],
        "responses": [
          "Hey, welcome to ROOTS! How can I assist you?",
          "Hello! How can I help you today?",
          "Hi there, what brings you to ROOTS?",
          "Hello, welcome to ROOTS! How can I assist you today?"
        ]
      },
      {
        "tag": "goodbye",
        "patterns": [
          "Bye",
          "Goodbye",
          "See you later",
          "I have to go"
        ],
        "responses": [
          "Goodbye! Thanks for using ROOTS.",
          "Take care! We hope to see you back at ROOTS soon.",
          "Have a great day! Don't hesitate to return to ROOTS if you need further assistance.",
          "Bye-bye! It was a pleasure helping you today."
        ]
      }
  ]
}
```
