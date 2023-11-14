const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const getQuote = () => {
	//get select value from the user from the list of 50 and add it to the random api call.//
	// we get a random quote from the Author selected by the user, that is in our list//
	var inputUser = document.getElementById('authorsList').value;
	axios.get('https://api.quotable.io/random' , { params: { author: inputUser} })
	.then(response => {
		console.log(response);
		var author = response.data.author;
		var quote = response.data.content;

  //separate name and lastname on each author//
		const nameSplit = author.split(" ");
		console.log(typeof author);
		console.log(quote);
		console.log(nameSplit);

		if (nameSplit.length >1) {
			author = nameSplit[0].charAt(0)+ ". " + nameSplit[1];
		}

		document.getElementById("quoteBox").innerHTML= "\""+ quote + "\" " + author;
	})
	.catch(error => {
		document.getElementById("quoteBox").innerHTML= "We are sorry, there is no quote for this author";
	})};

	function copiaPega() {
		const content = document.getElementById("quoteBox").textContent;
		navigator.clipboard.writeText(content);
	}
//get list of 50 authors//
	const getAuthor = () => {
		// We get the number of options that the select has to determine which page we need to send.
		var numberOfAuthors = document.getElementById("authorsList").length;
		console.log(numberOfAuthors);
        var inputLimit = document.getElementById('limitByUser').value;
		var page = (numberOfAuthors / inputLimit) + 1;
		axios.get('https://api.quotable.io/authors', { params: {limit: inputLimit, page: page} })
		.then(response => {
			console.log(response);
			var authors = response.data.results
			console.log(authors);
			select = document.getElementById('authorsList')
			for (i= 0; i < authors.length; i++) {
				var opt = document.createElement('option')
				opt.value = authors[i].slug;
				opt.innerHTML = authors[i].name;
				select.appendChild(opt);
				document.getElementById('total').innerHTML = authorsList.length;
			}
		})
	};


//invoke function to see the dropdown without any clicking//
	getAuthor();
