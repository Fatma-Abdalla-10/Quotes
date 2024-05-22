var quotes =[
    {quote:"I restore myself when I'm alone.",author:"Marilyn Monroe"},
    {quote:"Spring is the time of plans and projects.",author:"Leo Tolstoy"},
    {quote:"People are capable, at any time in their lives, of doing what they dream of",author:"Paulo Coelho"},
    {quote:"I don't suffer from my insanity -- I enjoy every minute of it",author:"Sherrilyn Kenyon"},
    {quote:"Threats are the last resort of a man with no vocabulary.",author:"Tamora Pierce"},
    {quote:"In the middle of difficulty lies opportunity",author:"Albert Einstein"},
    {quote:"If you try to fail, and succeed, which have you done?",author:"George Carlin"},
    {quote:"Push yourself. Don't Settle. Just live well. Just LIVE.",author:"Jojo Moyes"},
    {quote:"Question everything. Your love, your religion, your passion. If you don't have questions, you'll never find answers",author:"Colleen Hoover"},
    {quote:"Nothing on earth can make up for the loss of one who has loved you.",author:"Selma Lagerlöf"},
    {quote:"I am broken and healing, but every piece of my heart belong to you.",author:"Sarah J. Maas"},
    {quote:"Life is really simple, but we insist on making it complicated",author:"Confucius"},
    {quote:"Poetry is what gets lost in translation.",author:"Robert Frost"},
    {quote:"Life has no remote....get up and change it yourself!",author:"Mark A. Cooper"},
    {quote:"We do not remember days, we remember moments.",author:"Jennifer Niven"},

];
var lastNumber;
function newQuote(){
    do{    var  newNumber=Math.floor(Math.random()*quotes.length);

    } while(    lastNumber==newNumber
    )
    lastNumber=newNumber

console.log();
    document.getElementById("quote").innerHTML=quotes[newNumber].quote;
    document.getElementById("auther").innerHTML=quotes[newNumber].author;

}
    