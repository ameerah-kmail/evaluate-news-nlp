# NLP Article Evaluator

This project is designed to give you a taste of the tools and technologies used in front-end development, with a focus on understanding the architecture of a web tool. The goal is to create a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. By integrating with the Udacity-hosted AWS-based NLP API, this tool will help classify the information in articles by determining whether the content is subjective or objective, and analyzing its tone (positive, neutral, or negative).

## Project Overview

The project involves building a web application that uses the Udacity-hosted NLP API to evaluate news articles or blog posts.

### Features:
- **Text Sentiment Analysis**: Classifies the tone of the content as positive, neutral, or negative.
- **Subjectivity Analysis**: Determines whether the content is subjective (opinion) or objective (fact-based).
- **Offline Support**: Uses Service Workers for offline functionality.

## Prerequisites

Before running this project, make sure you have the following installed:
- **Node.js**: For setting up the web server and building the app.
- **Webpack**: To bundle the project for both development and production.
- **Express**: A minimal web framework for routing.
- **Service Worker**: To enable offline functionality.
- **Udacity-hosted NLP API**: Used for text sentiment analysis.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nlp-article-evaluator.git
   cd nlp-article-evaluator
