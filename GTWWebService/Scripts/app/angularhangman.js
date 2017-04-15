//declare let $: any;
var angularModel = angular.module("hangmanapp", ['ngMaterial']);
angularModel.controller("hangmancontroller", function ($scope, $http) {
    // $scope.angPlayReplayButtonText = "PLAY"
    $scope.angBooleanToRestart = false;
    $scope.angBooleanKeyNotYetEntered = true;
    $scope.start = function () {
        $http.get("/api/keywordpairs/" + $scope.angKeyForWordFromService)
            .then(function (response) {
            $scope.angTargetWord = response.data;
            console.log(response.data);
            //$scope.angTargetWord = "iPhone";
            $scope.numWrong = 0;
            var initWordDisplay = "";
            var numLetters = $scope.angTargetWord.length;
            $scope.angLetterThatWasEntered = "";
            $scope.angFinalResult = "";
            $scope.angBoolGameHasStarted = true;
            $scope.angArrayOfWrongLetters = [];
            $scope.angBooleanToRestart = true;
            for (var i = 0; i < numLetters; i++) {
                initWordDisplay = initWordDisplay + "_ ";
            }
            $scope.angCurrentWordState = initWordDisplay;
        }, function (data) {
            alert("Unable to find the word for that key. Please check the key and your internet connection, and try again.");
        });
    };
    $scope.letterEntered = function () {
        // if letter occurs in angTargetWord then modify angCurrentWordState to show letter at correct position(s)
        var candidateLetter = $scope.angLetterThatWasEntered;
        var indexOfLetterInTargetWord = $scope.angTargetWord.toLowerCase().indexOf(candidateLetter.toLowerCase());
        if (indexOfLetterInTargetWord != -1) {
            //getting candiate letter in the proper case from the original target string
            candidateLetter = $scope.angTargetWord.slice(indexOfLetterInTargetWord, indexOfLetterInTargetWord + 1);
            $scope.angCurrentWordState = updateGuessState($scope.angCurrentWordState, $scope.angTargetWord, candidateLetter);
            // check if correct guess completes the word.
            if ($scope.angCurrentWordState.indexOf("_") == -1) {
                // entire word guessed
                $scope.angFinalResult = "YAY YOU DID IT!";
            }
        }
        else {
            if ($scope.angArrayOfWrongLetters.indexOf(candidateLetter.toUpperCase()) == -1) {
                // wrong and not previously attempted. 
                $scope.numWrong++;
                $scope.angArrayOfWrongLetters.push(candidateLetter.toUpperCase());
            }
            console.log(candidateLetter);
        }
        $scope.angLetterThatWasEntered = "";
    };
    $scope.setWord = function () {
        var reqData = {
            Key: "notnecessary",
            Word: $scope.angTargetWordByUser,
            WasAttempted: false,
            WasCorrectlyGuessed: false
        };
        $http.post("/api/keywordpairs", reqData).
            success(function (data, status, headers, config) {
            $scope.angBooleanKeyNotYetEntered = false;
            $scope.angServerGeneratedKey = data.Key;
            console.log(data);
            console.log(status);
        }).
            error(function (data, status, headers, config) {
            alert("Could not set the word. Either your internet connection is down, or the server is down.");
        });
    };
});
/**
 * Updates the string representing the guessed portion of the target word so far.
 * @param currentGuessStateString  string representing the guessed portion of the target word so far
 * @param fullAnswer the target answer string
 * @param candidateChar the char guessed by the user
 * @param startIx start index for next (recursive) search for potential multiple occurrences of candidateChar
 */
function updateGuessStateFromIndex(currentGuessStateString, fullAnswer, candidateChar, startIx) {
    if (fullAnswer.toLowerCase().substring(startIx, fullAnswer.length).indexOf(candidateChar.toLowerCase()) == -1) {
        return currentGuessStateString;
    }
    var charIndex = startIx + fullAnswer.substring(startIx, fullAnswer.length).toLocaleLowerCase().indexOf(candidateChar.toLocaleLowerCase());
    var charInAnswerString = fullAnswer.charAt(charIndex);
    var pre = currentGuessStateString.slice(0, charIndex * 2);
    var post = currentGuessStateString.slice((charIndex * 2) + 1, currentGuessStateString.length);
    currentGuessStateString = pre + charInAnswerString + post;
    return updateGuessStateFromIndex(currentGuessStateString, fullAnswer, candidateChar, charIndex + 1);
}
/**
 * Calls updateGuessStateFromIndex(..) with startIx of 0.
 * @param currentGuessStateString
 * @param fullAnswer
 * @param candidateChar
 */
function updateGuessState(currentGuessStateString, fullAnswer, candidateChar) {
    return updateGuessStateFromIndex(currentGuessStateString, fullAnswer, candidateChar, 0);
}
//# sourceMappingURL=angularhangman.js.map