var quotesList = [{
	author: "Jean-Paul Sartre",
	image: "https://assets.theschooloflife.com/wp-content/uploads/sites/2/2022/03/18073832/header-blog-jeanpaulsartre.jpg",
	quotes: ["If you are lonely when you are alone, you are in bad company.", 
		"Freedom is what you do with what is been done to you.", 
		"We do not judge the people we love.",
		"Three o'clock is always too late or too early for anything you want to do."]
}, {
	author: "Epictetus",
	image: "https://community.thriveglobal.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-02-at-1.05.47-PM.png",
	quotes: ["We have two ears and one mouth so that we can listen twice as much as we speak", 
		"It's not what happens to you, but how you react to it that matters.",
		"God has entrusted me with myself.", 
		"No man is free who is not master of himself."]
}, {
	author: "Albert Camus",
	image: "https://media.newyorker.com/photos/5909675d019dfc3494ea0dd0/16:9/w_1280,c_limit/120409_r22060_g2048.jpg",
	quotes: ["The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
		"You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.", 
		"Nothing is more despicable than respect based on fear.",  
		"Freedom is nothing but a chance to be better."]
}, {
	author: "Friedrich Nietzsche",
	image: "https://historiek.net/wp-content/uploads-phistor1/2016/11/Friedrich-Nietzsche-in-1869.jpg",
	quotes: ["One must still have chaos in oneself to be able to give birth to a dancing star.",
		"To live is to suffer, to survive is to find some meaning in the suffering.", 
		"It is not a lack of love, but a lack of friendship that makes unhappy marriages.", 
		"We have art in order not to die of the truth."]
}, {
	author: "Bertrand Russell",
	image: "https://bilder.deutschlandfunk.de/56/f9/53/89/56f95389-f0e8-47fc-94f3-b7df4a92a876/9817162-100-1920x1080.jpg",
	quotes: ["Men are born ignorant, not stupid. They are made stupid by education.",
		"The good life is one inspired by love and guided by knowledge.", 
		"War does not determine who is right - only who is left.",
		"I would never die for my beliefs because I might be wrong."]
}, {
	author: "Mencius",
	image: "https://thedewdrop.org/wp-content/uploads/2020/12/Mencius.jpg",
	quotes: ["Friends are the siblings God never gave us.", 
		"The great man is he who does not lose his child's-heart.",
		"There is no greater delight than to be conscious of sincerity on self-examination",
		"Sincerity is the way to heaven"]
}, {
	author: "Baltasar Gracian",
	image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTHXRJxtfpkyxJhJVFi6Hwc3qwE4Cw0EA7nNUPHEBPueHpLFXsqW2GzubSBJm-lup-g",
	quotes: ["Quit while you're ahead. All the best gamblers do.", 
		"Friendship multiplies the good of life and divides the evil.", 
		"Respect yourself if you would have others respect you.",
		"Don't take the wrong side of an argument just because your opponent has taken the right side."]
}
];
function randomQuote() {
	var x = document.getElementById("authors").value;
	console.log(x);
	for (let i= 0; i < quotesList.length; i++) {
		let cacho = quotesList[i];
		if (x == cacho.author) {
			var randIndex = Math.floor(Math.random() * cacho.quotes.length);
			var randSingleQuote = cacho.quotes[randIndex];
			document.getElementById("quoteBox").innerHTML= "\"" + randSingleQuote + "\""
			document.getElementById('imageBox').style.backgroundImage='url(' + cacho.image + ')'	
		}
	}
	// var randIdx = Math.floor(Math.random() * quotesList.length);
	// var randQuote = quotesList[randIdx];
	// var randIndex = Math.floor(Math.random() * randQuote.quotes.length);
	// var randIndividualQuote = randQuote.quotes[randIndex];
	// document.getElementById("quoteBox").innerHTML=  "\"" + randIndividualQuote + "\" - " + randQuote.author;
}