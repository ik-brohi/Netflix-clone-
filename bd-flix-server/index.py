from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

# Allow requests from all origins
origins = ["*"]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

response = requests.get(
    'https://bd-flix-server-emonkumardas.vercel.app/allMovie')
json_data = response.json()
df = pd.DataFrame(json_data)

cv = CountVectorizer(max_features=5000, stop_words='english')
newVector = cv.fit_transform(df['overview'].values.astype('U')).toarray()
similarity = cosine_similarity(newVector)


@app.get("/recommend/{movie}")
def recommend(movie):
    index = df[df['original_title'] == movie].index[0]
    distances = sorted(
        list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommends = []
    for i in distances[1:7]:
        recommends.append(df.iloc[i[0]].original_title)
    my_movies = []
    for movie in json_data:
        if movie['original_title'] in recommends:
            my_movies.append(movie)
    return my_movies
