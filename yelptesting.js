// var parameters = {
// 	term: "oysters",
// 	limit: 1,
// 	sort: 1,
// 	location: "sanfrancisco"
// }

// $.ajax({
// 	type: "GET",
// 	url: "https://api.yelp.com/v2/search?term=food&location=San+Francisco?oauth_consumer_key=a9CE7NcYGv_cNYPiVNYGmg?oauth_token=ePiKwaMH7GKZd4R7AP1kRq63toU7cb5b",
// 	data: parameters,
// 	success: function(data) {
// 		for (var i = 0; i < data.length; i++) {
// 			console.log(data[i].name);
// 		}
// 	},
// 	error: function() {
// 		alert("Error!");
// 	}
// });

$(document).on("click", "#get-location", function(event) {
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	} else {
		alert("Sorry, cannot find you.");
	}

	function success(pos) {
		console.log(pos.coords);
	}



// 	function success(pos) {
// 		console.log(pos.coords);
// 	}
// 	navigator.geolocation.getCurrentPosition(success);
});