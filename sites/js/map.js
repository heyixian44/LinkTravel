/* Pull local Farers market data from the USDA API and display on 
** Google Maps using GeoLocation or user input zip code. By Paul Dessert
** www.pauldessert.com | www.seedtip.com
*/

$(function() {
	
		var marketId = []; //returned from the API
		var allLatlng = []; //returned from the API
		var allMarkers = []; //returned from the API
		var marketName = []; //returned from the API
		var infowindow = null;
		var pos;
		var userCords;
		var tempMarkerHolder = [];
		
		//Start geolocation
		
		if (navigator.geolocation) {    
		
			function error(err) {
				console.warn('ERROR(' + err.code + '): ' + err.message);
			}
			
			function success(pos){
				userCords = pos.coords;
				
				//return userCords;
			}
		
			// Get the user's current position
			navigator.geolocation.getCurrentPosition(success, error);
			//console.log(pos.latitude + " " + pos.longitude);
			} else {
				alert('Geolocation is not supported in your browser');
			}
		
		//End Geo location
	
		//map options
		var mapOptions = {
			zoom: 7,
			center: new google.maps.LatLng(56.263920, 9.501785),
			panControl: false,
			panControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_LEFT
			},
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			scaleControl: false

		};
	
	//Adding infowindow option
	infowindow = new google.maps.InfoWindow({
		content: "holding..."
	});
	
	//Fire up Google maps and place inside the map-canvas div
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	//---------Hotel------------
	$( "#hotels" ).click(function() {
		console.log(document.getElementById('hotels'));
		for (var i = 0; i < tempMarkerHolder.length; i++) {
			tempMarkerHolder[i].setMap(null);
		}
		var allLatlng = [];

		//---------Zero-----------
		myLatlng = new google.maps.LatLng(57.047752, 9.922172);	

		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: 'http://google-maps-icons.googlecode.com/files/sailboat-tourism.png',
			title: "You Postion",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Your current postion" + '</h1>' + //substring removes distance from title
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});
		//---------first-----------
		myLatlng = new google.maps.LatLng(57.048455, 9.927923);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "First Hotel Aalborg",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "First Hotel Aalborg" + '</h1>' + //substring removes distance from title
					'<h3>' + "Rendsburggade 5, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "3-star hotel" + '</p>' +
					'<p>' + "24hours" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		//--------second---------------
		myLatlng = new google.maps.LatLng(57.049583, 9.918543);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Hotel Jomfru Ane",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Hotel Jomfru Ane" + '</h1>' + //substring removes distance from title
					'<h3>' + "Rendsburggade 5, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "3-star hotel" + '</p>' +
					'<p>' + "24hours" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------third---------------
		myLatlng = new google.maps.LatLng(57.048820, 9.921747);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Phønix Hotel",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Phønix Hotel" + '</h1>' + //substring removes distance from title
					'<h3>' + "Vesterbro 77, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "3-star hotel" + '</p>' +
					'<p>' + "24hours" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fourth---------------
		myLatlng = new google.maps.LatLng(57.046630, 9.934949);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Hotel Aalborg",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Hotel Aalborg" + '</h1>' + //substring removes distance from title
					'<h3>' + "Østerbro 27, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "4-star hotel" + '</p>' +
					'<p>' + "24hours" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fifth--------------
		myLatlng = new google.maps.LatLng(57.044316, 9.91682);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "BEST WESTERN Prinsen Hotel",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "BEST WESTERN Prinsen Hotel" + '</h1>' + //substring removes distance from title
					'<h3>' + "Prinsensgade 14, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "3-star hotel" + '</p>' +
					'<p>' + "24hours" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		
		
		console.log(allLatlng);
		//  Make an array of the LatLng's of the markers you want to show
		//  Create a new viewpoint bound
		var bounds = new google.maps.LatLngBounds ();
		//  Go through each...
		for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
		  //  And increase the bounds to take this point
		  bounds.extend (allLatlng[i]);
		}
		//  Fit these bounds to the map
		map.fitBounds (bounds);
		return false;		
	});


	//------Shopping---------
	$( "#shopping" ).click(function() {
		console.log(document.getElementById('shopping'));
		for (var i = 0; i < tempMarkerHolder.length; i++) {
			tempMarkerHolder[i].setMap(null);
		}
		var allLatlng = [];

		//---------first-----------
		myLatlng = new google.maps.LatLng(57.047151, 9.921502);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "H&M",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "H&M" + '</h1>' + //substring removes distance from title
					'<h3>' + "Algade 19, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Chain retailer supplying on-trend clothing, swimwear, accessories & shoes." + '</p>' +
					'<p>' + "10AM - 6PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		//--------second-------------
		myLatlng = new google.maps.LatLng(57.048333, 9.917231);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "The Body Shop Aalborg",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "The Body Shop Aalborg" + '</h1>' + //substring removes distance from title
					'<h3>' + "Gravensgade 18, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Chain with house-brand bath & body products in a variety of scents, plus makeup, fragrances & more." + '</p>' +
					'<p>' + "10AM - 5:30PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------third-----------
		myLatlng = new google.maps.LatLng(57.047587, 9.926595);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Monki",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Monki" + '</h1>' + //substring removes distance from title
					'<h3>' + "Friis, Nytorv 27, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Women's Clothing Store" + '</p>' +
					'<p>' + "Schedule: Missing" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fourth-------------
		myLatlng = new google.maps.LatLng(57.047873, 9.926579);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Friis",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Friis" + '</h1>' + //substring removes distance from title
					'<h3>' + "Nytorv 27, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Shopping Mall" + '</p>' +
					'<p>' + "10AM-7PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fifth---------------
		myLatlng = new google.maps.LatLng(57.047791, 9.927159);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Tiger Of Sweden",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Tiger Of Sweden" + '</h1>' + //substring removes distance from title
					'<h3>' + "Nytorv 27, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Clothing Store" + '</p>' +
					'<p>' + "10AM-7PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		
		
		console.log(allLatlng);
		//  Make an array of the LatLng's of the markers you want to show
		//  Create a new viewpoint bound
		var bounds = new google.maps.LatLngBounds ();
		//  Go through each...
		for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
		  //  And increase the bounds to take this point
		  bounds.extend (allLatlng[i]);
		}
		//  Fit these bounds to the map
		map.fitBounds (bounds);
		return false;		
	});


	
	//------Spots---------
	$( "#spots" ).click(function() {
		console.log(document.getElementById('spots'));
		for (var i = 0; i < tempMarkerHolder.length; i++) {
			tempMarkerHolder[i].setMap(null);
		}
		var allLatlng = [];
		//---------first-----------
		myLatlng = new google.maps.LatLng(57.003014, 9.965501);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Østerådalen",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Østerådalen" + '</h1>' + //substring removes distance from title
					'<h3>' + "Indkildevej, 9210 Aalborg SØ, Denmark" + '</h3>' +
					'<p>' + "Scenic Spot" + '</p>' +
					//'<p>' + "10AM - 6PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		//--------second-------------
		myLatlng = new google.maps.LatLng(56.972720, 9.624848);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Nibe Camping - Sølyst ved Aalborg / Bed and Breakfast",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Nibe Camping - Sølyst ved Aalborg / Bed and Breakfast" + '</h1>' + //substring removes distance from title
					'<h3>' + "Løgstørvej 2, 9240 Nibe, Denmark" + '</h3>' +
					'<p>' + "Cabins, rooms and caravans in a modern campsite overlooking the Limfjord, with pool and waterslides." + '</p>' +
					'<p>' + "Holiday Park" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------third-----------
		myLatlng = new google.maps.LatLng(56.887191, 10.22109);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Lille Vildmosecentret",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Lille Vildmosecentret" + '</h1>' + //substring removes distance from title
					'<h3>' + "Birkesøvej 16, Dokkedal, 9280 Storvorde, Denmark" + '</h3>' +
					'<p>' + "Information on this unique area of marshland, with films, displays, guided tours & miniature train." + '</p>' +
					'<p>' + "Nature Preserve" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fourth-------------
		myLatlng = new google.maps.LatLng(57.104324, 10.359948);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Henrik Qvist",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Henrik Qvist" + '</h1>' + //substring removes distance from title
					'<h3>' + "Snørholtvej 15, 9340 Asaa, Denmark" + '</h3>' +
					'<p>' + "Scenic Spot" + '</p>' +
					//'<p>' + "10AM-7PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fifth---------------
		myLatlng = new google.maps.LatLng(57.251395, 9.584375);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Bålplads inde i skoven",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Bålplads inde i skoven" + '</h1>' + //substring removes distance from title
					'<h3>' + "9492 Blokhus, Denmark" + '</h3>' +
					'<p>' + "Scenic Spot" + '</p>' +
					//'<p>' + "10AM-7PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		
		
		console.log(allLatlng);
		//  Make an array of the LatLng's of the markers you want to show
		//  Create a new viewpoint bound
		var bounds = new google.maps.LatLngBounds ();
		//  Go through each...
		for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
		  //  And increase the bounds to take this point
		  bounds.extend (allLatlng[i]);
		}
		//  Fit these bounds to the map
		map.fitBounds (bounds);
		return false;		
	});






	//------Restaurants---------
	$( "#restaurants" ).click(function() {
		console.log(document.getElementById('restaurants'));
		for (var i = 0; i < tempMarkerHolder.length; i++) {
			tempMarkerHolder[i].setMap(null);
		}
		var allLatlng = [];
		//---------first-----------
		myLatlng = new google.maps.LatLng(57.049943, 9.92204);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Restaurant Flammen Aalborg",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Restaurant Flammen Aalborg" + '</h1>' + //substring removes distance from title
					'<h3>' + "Østerågade 27, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Restaurant" + '</p>' +
					'<p>' + "10AM - 11PM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		//--------second-------------
		myLatlng = new google.maps.LatLng(57.053346, 9.917189);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Prinses Juliana",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Prinses Juliana" + '</h1>' + //substring removes distance from title
					'<h3>' + "Vestre Havnepromenade 2, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Restaurant" + '</p>' +
					'<p>' + "Openning hours: Missing" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------third-----------
		myLatlng = new google.maps.LatLng(57.051669, 9.920429);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Restaurant Fusion",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Restaurant Fusion" + '</h1>' + //substring removes distance from title
					'<h3>' + "Strandvejen 4, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Restaurant." + '</p>' +
					'<p>' + "12PM-12AM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fourth-------------
		myLatlng = new google.maps.LatLng(57.044426, 9.918086);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Café Luna",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "Café Luna" + '</h1>' + //substring removes distance from title
					'<h3>' + "Boulevarden 38, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Coffee Shop" + '</p>' +
					'<p>' + "11AM-2AM" + '</p>' +
					'</div>'
		});

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});

		//--------fifth---------------
		myLatlng = new google.maps.LatLng(57.051315, 9.917238);						  
		allMarkers = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "China Restaurant",
			html: 
					'<div class="markerPop">' +
					'<h1>' + "China Restaurant" + '</h1>' + //substring removes distance from title
					'<h3>' + "Borgergade 10, 9000 Aalborg, Denmark" + '</h3>' +
					'<p>' + "Restaurant" + '</p>' +
					'<p>' + "12-11PM" + '</p>' +
					'</div>'
		});1

		allLatlng.push(myLatlng);
		//Put the marketrs in an array
		tempMarkerHolder.push(allMarkers);

		google.maps.event.addListener(allMarkers, 'click', function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});


		
		
		console.log(allLatlng);
		//  Make an array of the LatLng's of the markers you want to show
		//  Create a new viewpoint bound
		var bounds = new google.maps.LatLngBounds ();
		//  Go through each...
		for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
		  //  And increase the bounds to take this point
		  bounds.extend (allLatlng[i]);
		}
		//  Fit these bounds to the map
		map.fitBounds (bounds);
		return false;		
	});
	//grab form data

    /* $('#chooseCategory').submit(function() { // bind function to submit event of form

		//define and set variables
		var userZip = $("#textZip").val();
		//console.log("This-> " + userCords.latitude);
		
		var accessURL;
		
		if(userZip){
			accessURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + userZip;
		} else {
			accessURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + userCords.latitude + "&lng=" + userCords.longitude;
		}
			

			//Use the zip code and return all market ids in area.
			$.ajax({
				type: "GET",
				contentType: "application/json; charset=utf-8",
				url: accessURL,
				dataType: 'jsonp',
				success: function (data) {

					 $.each(data.results, function (i, val) {
						marketId.push(val.id);
						marketName.push(val.marketname);
					 });
						
					//console.log(marketName);
					
					var counter = 0;
					//Now, use the id to get detailed info
					$.each(marketId, function (k, v){
						$.ajax({
							type: "GET",
							contentType: "application/json; charset=utf-8",
							// submit a get request to the restful service mktDetail.
							url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + v,
							dataType: 'jsonp',
							success: function (data) {

							for (var key in data) {

								var results = data[key];
								
								//console.log(results);
								
								//The API returns a link to Google maps containing lat and long. This pulls it apart.
								var googleLink = results['GoogleLink'];
								var latLong = decodeURIComponent(googleLink.substring(googleLink.indexOf("=")+1, googleLink.lastIndexOf("(")));
								
								var split = latLong.split(',');
								
								//covert values to floats, to play nice with .LatLng() below.
								var latitude = parseFloat(split[0]);
								var longitude = parseFloat(split[1]);
								
								//set the markers.	  
								myLatlng = new google.maps.LatLng(latitude,longitude);
						  
								allMarkers = new google.maps.Marker({
									position: myLatlng,
									map: map,
									title: marketName[counter],
									html: 
											'<div class="markerPop">' +
											'<h1>' + marketName[counter].substring(4) + '</h1>' + //substring removes distance from title
											'<h3>' + results['Address'] + '</h3>' +
											'<p>' + results['Products'].split(';') + '</p>' +
											'<p>' + results['Schedule'] + '</p>' +
											'</div>'
								});

								//put all lat long in array
								allLatlng.push(myLatlng);
								
								//Put the marketrs in an array
								tempMarkerHolder.push(allMarkers);
								
								counter++;
								//console.log(counter);
							};
								
								google.maps.event.addListener(allMarkers, 'click', function () {
									infowindow.setContent(this.html);
									infowindow.open(map, this);
								});
								
								
								//console.log(allLatlng);
								//  Make an array of the LatLng's of the markers you want to show
								//  Create a new viewpoint bound
								var bounds = new google.maps.LatLngBounds ();
								//  Go through each...
								for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
								  //  And increase the bounds to take this point
								  bounds.extend (allLatlng[i]);
								}
								//  Fit these bounds to the map
								map.fitBounds (bounds);
								
										
							}
						});
					}); //end .each
				}
			});

        return false; // important: prevent the form from submitting
    }); */
});

