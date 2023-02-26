# This is the section for defining the functions for tokenization, stemming and lower casing, and bag_of_words
# This is defining the functions that would turn the intents(sentences) in the JSON file into bag_of_words which would be used for training

#import necessary libraries and dependencies

import numpy as np
import nltk
from nltk.stem.porter import PorterStemmer

#Initialize a stemmer object from PorterStemmer for stemming the words later in the code
stemmer = PorterStemmer()

# Define a function called tokenize that takes a sentence as input
#Use the nltk package's word_tokenize function to split the sentence into an array of tokens/words

def tokenize(sentence):
    return nltk.word_tokenize(sentence)

# Define a function called stem that takes a word as input
#Use the stemmer object initialized earlier to find the root form of the word (i.e. stemming)

def stem(word):
    return stemmer.stem(word.lower())

# Define a function called bag_of_words that takes two inputs: the tokenized sentence and a list of words

def bag_of_words(tokenized_sentence,all_words):
    tokenized_sentence = [stem(w) for w in tokenized_sentence]
    """
    sentence = ["hello", "how", "are", "you"]
    words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
    bag = [0, 1, 0, 1, 0, 0, 0]
    """
   # Use the stem function to stem each word in the tokenized sentence

   #Initialize a bag with zeros for each word in the list of words
   #Loop through each word in the list of words and set the corresponding index in the bag to 1 if the word is in the stemmed sentence_words array
   # #Return the bag of words as a numpy array

    bag = np.zeros(len(all_words), dtype = np.float32)
    for idx, w, in enumerate(all_words):
        if w in tokenized_sentence:
            bag[idx] = 1.0
    
    return bag

