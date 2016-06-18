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
    },
    {
        quote:"You can do anything but not everything",
        source:"David Allen",
        citation:"Making It All Work",
        year:2009
    }
];
var colors = [
    "#36b55c",
    "#9C27B0",
    "#4A148C",
    "#880E4F",
    "#2196F3",
    "#009688",
    "#004D40",
    "#00BFA5",
    "#827717",
    "#795548",
    "#BF360C"
];

/* will be used to all quotes before display any quote for the second time */
var copyQuotes=[];

function getRandomElement(elements){
    /*
         shoose random number between 0 and elements.length-1
    */
    var randomNumber=Math.floor(Math.random()*(elements.length-1));
    return elements[randomNumber];
}

function changeBackground(color) {
    document.getElementById('loadQuote').style.backgroundColor=color;
    document.getElementsByTagName('body')[0].style.backgroundColor=color;
}


function printQuote(){
    /* if the copyQuotes is empty, then we copy the content of the initial array of quotes in it */
    if(copyQuotes.length === 0){
        copyQuotes=customCopy(quotes);
    }
    /* select a randomQuote in the copyQuotes and delete it from the copyQuotes so 
        that next time, we'll shoose different quote 
    */
    var randomQuote = getRandomElement(copyQuotes),
        htmlQuote = '';
    var indexOfRandomQuote=copyQuotes.indexOf(randomQuote);
    copyQuotes.splice(indexOfRandomQuote,1);


    htmlQuote += '<p class="quote"> ' + randomQuote.quote +' </p>'+
                '<p class="source">' + randomQuote.source;
    if(randomQuote.citation){
         htmlQuote += '<span class="citation"> ' + randomQuote.citation + ' </span>';
    }
    if(randomQuote.year){
         htmlQuote += '<span class="year"> ' + randomQuote.year + ' </span>';
    }
    htmlQuote += '</p>';

    /* apply random background and change the content of quote box */ 
    changeBackground(getRandomElement(colors));
    document.getElementById('quote-box').innerHTML = htmlQuote;
    /* set a random color style */ 
}
/*  function  to copy an object */
function customCopy(obj) {
    if(null === obj || "object"!= typeof obj){
        return obj;
    }else{
        var copy=obj.constructor();
        for(var attribute in obj){
            copy[attribute]=obj[attribute];
        }
        return copy;

    }
}

// init content
printQuote();

setInterval(printQuote, 30000);



