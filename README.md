# word-search

Hi Guys,

This application looks for permutations for any word you enter. It compares the word to a list of 300 or so words added as an array file.
There is another file containing 100,000 words however i found that this not only slowed down the application significantly, but also made it impossoible to run on my local server.
there is some error messaging for words that aren't available. so try entering "john" as one example.
the solution looks for the exact characters. For example akkad vs akkad's will not show up as a a match.

good words to try "akkad", "aldrin" and "Alcestis"

future considerations would be a loading spinner for a larger data set. Also potentially a web worker to utilise multithreading.

if you want to see the app live, go to https://kariem-word-search.herokuapp.com/