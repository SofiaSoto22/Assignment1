const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById('author')
const apiURL = "https://api.quotable.io/random"

async function getQuote(){
	try{
		btnEl.innerText = "Loading...";
		btnEl.disabled = true;
		quoteEl.innerText = "Updating...";
		authorEl.innerText = "Updating...";
		const response = await fetch(apiURL);
		const data = await response.json();
		const quoteContent = data.content;
		const quoteAuthor = data.author;
		quoteEl.innerText = quoteContent;
		authorEl.innerText = quoteAuthor;
		btnEl.innerText = "Get a quote";
		btnEl.disabled = false;
	    console.log(data);

	}catch(error){
		console.log(error);
		quoteEl.innerText = "Hey pal, we're sorry, an error happened, please try later!"
	    authorEl.innerText = "";
	    btnEl.disabled = false;
	}
}
getQuote();

btnEl.addEventListener("click", getQuote)