/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var map;
var marker;
var infowindow;
var watchID;	

var app = {
    // Application Constructor
    initialize: function() {
    	google.load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');        
    },
    
max_height:function( ){
    var h = $('div[data-role="header"]').outerHeight(true);
    var f = $('div[data-role="footer"]').outerHeight(true);
    var w = $(window).height();
    var c = $('div[data-role="content"]');
    var c_h = c.height();
    var c_oh = c.outerHeight(true);
    var c_new = w - h - f - c_oh + c_h;
    var total = h + f + c_oh;
    if(c_h<c.get(0).scrollHeight){
        c.height(c.get(0).scrollHeight);
    }else{
        c.height(c_new);
    }
},
         
map:function(){
    var latlng = new google.maps.LatLng(55.17, 23.76);
    var myOptions = {
      zoom: 6,
      center: latlng,
      streetViewControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true
    };
    map = new google.maps.Map(document.getElementById("map"), myOptions);
     
    google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
        //get geoposition once
        //navigator.geolocation.getCurrentPosition(geo_success, geo_error, { maximumAge: 5000, timeout: 5000, enableHighAccuracy: true });
        //watch for geoposition change
        watchID = navigator.geolocation.watchPosition(geo_success, geo_error, { maximumAge: 5000, timeout: 5000, enableHighAccuracy: true });   
    }); 
},
 
 geo_error:function(error){
    //comment
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
},
 
 geo_success:function(position) {
     
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    map.setZoom(15);
 
    var info = 
    ('Latitude: '         + position.coords.latitude          + '<br>' +
    'Longitude: '         + position.coords.longitude         + '<br>' +
    'Altitude: '          + position.coords.altitude          + '<br>' +
    'Accuracy: '          + position.coords.accuracy          + '<br>' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
    'Heading: '           + position.coords.heading           + '<br>' +
    'Speed: '             + position.coords.speed             + '<br>' +
    'Timestamp: '         + new Date(position.timestamp));
 
    var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    if(!marker){
        //create marker
        marker = new google.maps.Marker({
            position: point,
            map: map
        });
    }else{
        //move marker to new position
        marker.setPosition(point);
    }
    if(!infowindow){
        infowindow = new google.maps.InfoWindow({
            content: info
        });
    }else{
        infowindow.setContent(info);
    }
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    }); 
},  
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	/*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
*/
		loadMapScript('app.mapLoaded');
		
		checkConnection();
		app.getProducts();
		$('#products').bind('change', function(e) {
		console.log(e);
		console.log(e.currentTarget.value);
		var ind =e.currentTarget.selectedIndex-1;
		var prod =app.productList[ind];
		console.dir(prod);
		$('#img1').attr('src',prod.ImageUrl );
		});
    },
    
    productList:null,
    
    getProducts:function()
    {

    	$.ajax({
		  url: "http://cosmeticamobile.com/Announcements.ashx",
		  dataType: "jsonp",
		  success:function(a,b,c)
		  {
		  	app.productList =a;
		  	for (var i=0; i < a.length; i++) {
		  	var o = new Option( a[i].Description.substring(1,10) ,a[i].ID);
		  	$('#products').append(o);
			  };
		  	console.log("succ a " ,a);
		  	console.log("succ b " ,b);
		  	console.log("succ c " ,c);
		  	
		  },
		  error:function(a,b,c){
		  	console.log("err a " ,a);
		  	console.log("err b " ,b);
		  	console.log("err c " ,c);
		  	console.log("err c " ,c);
		  	
		  }
		});
    	
    },
	
	openCamera : function() {
             var onCamSuccess = function(imageData) {
                    /* No action required */
             };

             var onCamFail = function(error) {
                    /* No action required */
                    //alert('Kamera kullanılamıyor (' + error.code + ')');
             };
             
             var cameraPopoverHandle = navigator.camera.getPicture(onCamSuccess, onCamFail, {
                    quality : 25,
                    allowEdit : false,
                    sourceType : Camera.PictureSourceType.CAMERA,
                    destinationType : Camera.DestinationType.DATA_URL,
                    encodingType : Camera.EncodingType.JPEG,
                    cameraDirection : Camera.Direction.FRONT,
                    targetWidth : 80,
                    targetHeight : 80,
                    saveToPhotoAlbum : false
             });
      },
      

       detectCurrentLocation : function() {
             var onGeoSuccess = function(position) {
                    console.log(position);

                    var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                    google.maps.visualRefresh = true;

                    var mapOptions = {
                           zoom : 13,
                           center : location,
                           rotateControl : false,
                           streetViewControl : false,
                           mapTypeControl : false,
                           draggable : true,
                           mapTypeId : google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

                    var currentLocationMarker = new google.maps.Marker({
                           position : location,
                           map : map,
                           bounds : false,
                           title : 'Buradasınız',
                           //icon : image,
                           //shape : shape,
                           optimized : false
                           //animation : google.maps.Animation.BOUNCE
                    });
             };

             var onGeoFail = function(error) {
                    console.log(error);
             };

             navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, {
                    timeout : 3000,
                    enableHighAccuracy : true
             });
       },

       mapLoaded : function() {
             console.log("mapLoaded");
             app.detectCurrentLocation();
       }

};
