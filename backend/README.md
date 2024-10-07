## build

docker build -t backend-image:latest -f containerfile .

## for local tests

NOTE: you need to create network so that backend and frontend can talk to each other

docker run --name ticket-db -d -p 27017:27017 --network bidel -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest

docker run --name user-db -d -p 27018:27017 --network bidel -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest

docker run --rm -dit -p 3000:3000 --network bidel --name backend backend-image:latest
