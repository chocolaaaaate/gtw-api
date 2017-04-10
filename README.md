# gtw-api
The ASP.NET Web API serving the [Guess The Word game](https://github.com/chocolaaaaate/gtw/), which is an AngularJS client.

Two players play this game. The first player sets a word for the second player to guess (via a POST request to this API). The API generates an unique key corresponding to the word to be guessed. This key is manually given to the other player, who uses it to retrieve the word (disguised) that they are to guess by sending that key to this API via a GET request. 

*Work in progress*
