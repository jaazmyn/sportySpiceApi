#!/bin/bash

echo "Build prod image.."
docker build -t sporty-spice-api-prod:latest -f Dockerfile.prod .

echo "Login to heroku.."
docker login --username="j jasmin" --password=$HEROKU registry.heroku.com

echo "Tag image.."
docker tag sporty-spice-api-prod:latest registry.heroku.com/sporty-spice-api/web

echo "Push image.."
docker push registry.heroku.com/sporty-spice-api/web

ID=$(docker inspect registry.heroku.com/sporty-spice-api/web:latest --format={{.Id}})
echo "ImageID: $ID"

JSON='{ "updates": [{"type": "web", "docker_image": "'"$ID"'" }]}' 

echo "Release..."
curl --netrc -X PATCH https://api.heroku.com/apps/sporty-spice-api/formation -d "$JSON" -H "Authorization: Bearer $HEROKU" -H "Content-Type: application/json" -H "Accept: application/vnd.heroku+json; version=3.docker-releases"
