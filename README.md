# Biljettmarknad

## Overview

Biljettmarknad is a web application that allows users to post and search for tickets. This project includes both frontend and backend components with a clear API for ticket posting and search functionalities.

## Description of Key Files

1. Frontend (UI)

    index.html: The main HTML file, containing the structure of the web application. It features:
        A Post Ticket form where users can input their ticket details.
        A Search Ticket section allowing users to search for available tickets.
        Basic styles and form layout for user interactions.

    script.js:
        Handles the logic for submitting tickets to the backend and searching for tickets.
        It listens for form submissions, gathers input from the user, and sends it to the backend using the fetch API for further processing.
        Example functions in the script include:
            submitTicket: Sends ticket data to the backend API.
            searchTickets: Fetches and displays search results based on user criteria.

2. Backend (API)

    routes/: Contains the Express.js routes that define the API endpoints for ticket operations.
        /tickets [POST]: Receives data from the frontend and processes it to create a new ticket.
        /tickets/search [GET]: Allows users to search for tickets by filtering based on parameters like serviceProvider.

    models/: Contains the data model for tickets.
        Ticket Schema: Defines the structure of a ticket object, including fields such as userName, serviceProvider, zone, price, paymentMethod, and contact.

## Explanation of Key Components

Frontend:

    Form Handling:
        User input is captured through a form that consists of fields like User Name, Service Provider, Zone, etc.
        When the form is submitted, JavaScript collects the data and constructs a JSON object.
    API Communication:
        The frontend interacts with the backend using the fetch API.
            POST Request: When a user submits a new ticket, a POST request sends the ticket data to the backend for storage.
            GET Request: When searching for tickets, a GET request fetches available tickets from the backend and displays the results.

Backend:

    Ticket Routes:
        POST /tickets: Accepts ticket data from the frontend and stores it in the database.
        GET /tickets/search: Provides a search interface to find tickets based on parameters like the service provider.

    Ticket Model:
        The data schema defines a ticket’s structure, ensuring consistency across ticket data. Fields include:
            userName
            serviceProvider
            zone
            price
            paymentMethod
            contact

## How to Run the Project

    Frontend: Open index.html in a web browser. It provides the user interface to interact with the ticket posting and search functionalities.
    Backend: The backend is a Node.js Express application. To run:
        Navigate to the backend directory.
        Run npm install to install dependencies.
        Run npm start to launch the backend API.

NOTE: use env/ files for local testing.


## TODO

- dockerize [done]
- make "provider" [transportation provider] as built in option, instead of letting user to pick [done]

  -- do the same when searching for available tickets [done]

- docker-compose [done][untested]

  -- because running in k8s is expensive

- make search more user friendly instead of just dumping entries from DB [done]

----

- make MetaMask auth possible []

- auth as login prompt? []

- book domain for this []

---------------------------------------------------------------------------------
before public:
  - remove /// artifactory registry
  - harden mongo and do not use root:password
