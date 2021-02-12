
/**
 * @title: Random Quote Generator
 * @objective: Get a random quote whenever button is clicked
 */

var quoteArray = [
    {
        content: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth",
        author: "William W. Purkey"
    },
    {
        content: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
        author: "Albert Einstein"
    },
    {
        content: "I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity",
        author: "Buzz Andersen"
    },
    {
        content: "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read",
        author: "Leo Burnett"
    },
    {
        content: "What makes great design great is not a trendy technique, but the logic and conceptual aspect that were figured out in the designer's mind &ndash; or on more likely, on paper &ndash; before a mouse cursor ever opened Photoshop",
        author: "Kyle Meyer"
    },
    {
        content: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present",
        author: "Bill Keane"
    },
    {
        content: "Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
        author: "Paul Rand"
    },
    {
        content: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: "Helen Keller"
    },
    {
        content: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        author: "John Lennon"
    },
    {
        content: "When ordinary people decide to step out and be part of something big, that’s when they become extraordinary.",
        author: "Brett Harris"
    },
    {
        content: "Inspiration responds to our attentiveness in various and sometimes unexpected ways.",
        author: "Wayne W. Dyer"
    }
];

//grab html elements
var button = document.getElementById('quote-button'),
    quote = document.getElementById('quote'),
    author = document.getElementById('quote-author'),
   
    random;

//Generate a Random Quote
window.onload = randomQuote;
button.addEventListener('click', randomQuote);



//random quote function
function randomQuote (){
    //get a random number to pick a random quote object
    random = Math.floor(Math.random() * quoteArray.length);
    //get that random quote's content
    quote.innerHTML = quoteArray[random].content;
    //get that random quote's author
    author.innerHTML = '&mdash; ' + quoteArray[random].author;

    
}

//Dynamically Generate Content + Button
function tweetQuote (){
    var quoteShort = quote.innerHTML,
        quoteShortAuthor = author.innerHTML.substr(2).trim(),
        msg ='';

    //are there two tweet buttons? also from http://jsfiddle.net/LEBz8/1/
    var elem = document.getElementById('twitterbutton');
    if (elem !== null) {
        elem.parentNode.removeChild(elem);
    }

    //cut the message to fit the 140 length + leave some extra
    if(quoteShort.length + quoteShortAuthor.length <= 90){
        msg = '"' +quoteShort + '" by ' + quoteShortAuthor;
    }else {
        msg = '"'+ quoteShort.substr(0, 65) + '[...]" by ' + quoteShortAuthor;
    }

    

    //make a new twitter button to dynamically generate stuff http://jsfiddle.net/LEBz8/1/
    var link = document.createElement('a');

    //set attributes for new button
    link.setAttribute('href', 'https://twitter.com/share');
    link.setAttribute('class', 'twitter-share-button');
    link.setAttribute('id', 'tweet');
    link.setAttribute('data-text', msg);
    link.setAttribute('data-via', 'littleblacksmth');
    link.setAttribute('data-size', 'large');

    
}

! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');


// Chnage background color
let count = 0;
const bgbutton = document.querySelector("#quote-button");
const bodyBg = document.querySelector("body");
const property = document.querySelector("button");
const textBg = document.querySelector("blockquote");
let colors = ['Royalblue', 'Crimson', 'Purple',  'Seagreen', 'Chocolate', 'DarkCyan',  'DarkOrchid' , 'FireBrick' , 'Navy' , 'LimeGreen'];
function changeColor() 
{
  bodyBg.style.background = colors[count];
  textBg.style.color = colors[count];
  property.style.background = colors[count];
  if (count < colors.length - 1) 
  {
    count++;
  } 
  else 
  {
    count = 0;
  }
 
}


