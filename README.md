# Sporty Spice API


## Collaborators
Avril, Janice, Jasmin and Elie


## Database Description
Database: ![Database](https://drive.google.com/drive/u/0/my-drive)


## Method
GET


## API endpoints
ALL POSTS "/posts"
<br/>
POST FILTERED BY ID "/posts/{post_id}"
<br/>
ALL POSTS ORDERED BY RATING "/posts?sort=rating:desc"
<br/>
ALL POSTS FILTERED BY TOPIC /posts?topic=%topic%
<br/>
ALL POSTS FILTERED BY TITLE /posts?search=%title%



## Routes
router.get("/", postsController.getPosts);
<br/>
router.get("/:id", postsController.getById);


## URL Params

### Required
None

### Optional
search
<br/>
sort
<br/>
topic
<br>


## Success Response
code : 200
<br/>
"sucessfully sent"

## Error Response
code: 404
<br/>
"Page not found"

## Packages
Babel
<br/>
Chalk
<br/>
cors
<br/>
dotenv
<br/>
express
<br/>
nodemon
<br>
pg
    
## Other Technologies

Docker
<br/>
Heroku
<br/>
Travis
