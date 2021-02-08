# Sporty Spice API


## Collaborators
```
Avril, Janis, Jasmin and Elie
```

## Technology
```
NodeJS
Express
Postgres
```

## Deployed on Heroku with Docker:
https://sporty-spice-api.herokuapp.com/



## Database Description
 ![Database](https://res.cloudinary.com/dwovfklgc/image/upload/v1612719938/Screen_Shot_2021-02-07_at_18.45.27_pi5ct9.png)



## Install the app
```
npm install
```

## Run the app
```
npm start
```

## Run with Docker
```
docker build -t sporty-spice-api .
docker run -it -d -p 0.0.0.0:3000:3000 sporty-spice-api:latest
docker exec -it <container-id> /bin/sh -c "npm start"
```




## API endpoints

### Posts
All posts
<br/>
```
GET /posts
```
<br/>

Post filtered by id 
<br/>
```
GET /posts/:id
```
<br/>

All posts ordered by rating
<br/>
```
GET /posts?sort=rating:desc
```
<br/>

All posts filtered by topic
<br/>
```
/posts?topic=%topic%
```
<br/>

All posts filtered by title
<br/>
```
/posts?search=%title%
```
<br/>


## Post Response Sample

```

  "message": "sucessfully sent",
  "status": 200,
  "count": 21,
  "data": [
    {
      "json_build_object": {
        "id": 15,
        "title": "No Men Allowed… Until Now",
        "description": "FINA introduced a new mixed duet competition at the 2015 World Aquatics Championships.",
        "rating": 5,
        "image_url": "https://i.dailymail.co.uk/i/newpix/2018/07/06/16/4DFB9AEB00000578-5920727-image-m-53_1530889891348.jpg",
        "topic": {
          "id": 4,
          "name": "Synchronized Swimming"
        },
        "user": {
          "id": 4,
          "username": "Avril Ymayo",
          "email": "ymayo@avril.com",
          "avatar": "https://i.pinimg.com/736x/34/70/8b/34708b157e918da6a0254637312aa804--wrestling-costumes-wrestling-outfits.jpg",
          "premium": {
            "id": 2,
            "level": "top"
          }
        }
      }
    }
  ]
}

```




### Users
All users
<br/>
```
GET /users
```
<br/>

User filtered by id 
<br/>
```
GET /users/:id
```
<br/>


## User Response Sample

```
  "message": "sucessfully sent",
  "status": 200,
  "count": 4,
  "data": [
    {
      "json_build_object": {
        "id": 4,
        "username": "Avril Ymayo",
        "email": "ymayo@avril.com",
        "avatar": "https://i.pinimg.com/736x/34/70/8b/34708b157e918da6a0254637312aa804--wrestling-costumes-wrestling-outfits.jpg",
        "premium": {
          "id": 2,
          "level": "top"
        }
      }
    }
  ]
}

```