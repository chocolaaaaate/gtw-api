# gtw-api

A simple two-player word guessing game made up of a SPA using AngularJS and a ASP.NET Web API 2 backend.

Two players play this game. The first player sets a word for the second player to guess (via a POST request to the API). The API generates an unique key corresponding to the word to be guessed. This key is manually given to the other player, who uses it to retrieve the word (disguised) that they are to guess by sending that key to this API via a GET request. 

*Work in progress*
