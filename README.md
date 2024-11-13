# Star Wars Characters Project

This project is a simple web application that fetches and displays information about Star Wars characters based on a movie ID input. It uses Node.js for the backend, Express.js to serve an API endpoint, and Axios for making HTTP requests to the Star Wars API (SWAPI).

## Features
- Enter a Star Wars movie ID to retrieve and display the characters in that movie.
- Simple HTML interface with a dynamic list of characters.

## Technologies Used
- **Node.js**: Backend server.
- **Express.js**: Framework for creating the API endpoint.
- **Axios**: Library for HTTP requests to SWAPI.
- **HTML & JavaScript**: Frontend to display the data.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/star-wars-characters.git
   cd star-wars-characters

    Install the necessary dependencies:

    npm install

Running the Application

    Start the server:

    node server.js

    Open your web browser and go to http://localhost:3000.

Usage

    Enter a movie ID (1–6) in the input field on the page:
        1 - A New Hope
        2 - The Empire Strikes Back
        3 - Return of the Jedi
        4 - The Phantom Menace
        5 - Attack of the Clones
        6 - Revenge of the Sith

    Click the "Get Characters" button to fetch and display the characters from the selected movie.

Project Structure

star-wars-characters/
├── public/
│   └── index.html       # HTML file for the frontend
├── server.js            # Node.js server file
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

API Reference

This project uses the Star Wars API (SWAPI) to fetch data about the movies and characters.

    GET https://swapi.dev/api/films/:id/ - Fetches data about a specific Star Wars movie based on id.

Example

To fetch characters from "A New Hope" (movie ID: 1):

    Enter "1" in the movie ID input field.
    Click "Get Characters" to see the list of characters displayed on the page.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
Acknowledgments

    SWAPI for providing Star Wars data.
    Express.js for the backend framework.
    Axios for easy HTTP requests.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.


This `README.md` provides a clear overview of the project, instructions for installation and usage, as well as additional details to help users and contributors understand and run the application.


