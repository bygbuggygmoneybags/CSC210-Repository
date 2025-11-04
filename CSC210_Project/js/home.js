const api_url ="https://quoteslate.vercel.app/api/quotes/random";
const quoteText = document.getElementById("quotetext");
const quoteAuthor = document.getElementById("quoteauthor");

async function getapi(url)
{
    try {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)

    quoteText.textContent = `${data.quote}`;
    quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.error("Could not fetch quote");
        quoteText.textContent = "Could not load!";
        quoteAuthor.textContent = "";
    }
}

getapi(api_url);

const slide = document.getElementById("img-slideshow");
let currentIndex = 0;
const images = [
    "images/webimg2.jpeg",
    "images/webimg3.jpeg",
    "images/webimg1.jpeg",
    "images/webimg4.jpeg",
    "images/webimg5.jpeg"
]
function newSlide()
{
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    slide.src = images[currentIndex];
}

setInterval(newSlide,2000);