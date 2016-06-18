// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var quotes=[
    {
        quote:"To select well among old things, is almost equal to inventing new ones",
        source:"Nicholas Charles Trublet",
        year:1645
    },
    {
        quote:"People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.",
        source:"Andrew Carnegie",
        year:1774
    },
    {
        quote:"Hold a true friend with both hands",
        source:"African proverb",
        citation:"Famous african proverb"
    },
    {
        quote:"A happy man marries the girl he loves, but a happier man loves the girl he marries",
        source:"African proverb"
        
    },
    {
        quote:"An axe does not cut down a tree by itself",
        source:"Proverb of Burkina Faso",
        citation:"Famous burkinabe proverb"
    },
    {
        quote:"Si tu veux qu’on t’aide à porter un canari (jarre d’eau), mets-le d’abord sur tes genoux. ",
        source:"Proverbe burkinabè"
    },
    {
        quote:"Celui qui ne dit rien est plus sage que celui qui dit cent paroles.",
        source:"Proverbe burkinabè"
    }
];

var getRandomQuote = function (){
    /*
         shoose random number between 0 and quotes.length-1
    */
    var randomNumber=Math.floor(Math.random()*(quotes.length-1));

    return quotes[randomNumber];
}

var printQuote = function (){
    var randomQuote = getRandomQuote(),
        htmlQuote = '';
    
    htmlQuote += '<p class="quote"> ' + randomQuote.quote +' </p>'+
                '<p class="source">' + randomQuote.source;
    if(randomQuote.citation){
         htmlQuote += '<span class="citation"> ' + randomQuote.citation + ' </span>';
    }
    if(randomQuote.year){
         htmlQuote += '<span class="year"> ' + randomQuote.year + ' </span>';
    }
    htmlQuote += '</p>';

    document.getElementById('quote-box').innerHTML(htmlQuote);
}

