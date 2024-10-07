## build

docker build -t frontend-image:latest -f containerfile .

## for local tests

NOTE: you need to create network so that backend and frontend can talk to each other

docker run -dit -p 8080:80 --network bidel --name frontend frontend-image:latest
