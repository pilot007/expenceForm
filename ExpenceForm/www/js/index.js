var lat_end = "28.72082";
var lng_end = "77.107241";
var clicked_val;


    var pieData = [
      ];
    var pieOptions = [
{
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}
];		 

var posArray = 
[
    // Aeropostale
     {latitude : '41.044000', longitude : '29.002000', img_url:'img/aeropostale.png', title : 'Aeropostale Zorlu Center', address : '<div>Zorlu Center</div> <div>Ortaköy Mahallesi Koru Sokak No: 2 Zorlu Alışveriş Merkezi Bağımsız Bölüm No: 52 P.K. 34340 Zincirlikuyu Beşiktaş / İSTANBUL TEL: 0212 353 62 44</div>'}
    ,{latitude : '41.077798', longitude : '29.013208', img_url:'img/aeropostale.png', title : 'Aeropostale Zorlu Center Kanyon', address : '<div>Kanyon</div> <div>Kanyon Alışveriş Merkezi Esentepe Mahallesi Büyükdere Caddesi No: 185 Kat: B2 No: 44 34394 Levent / İSTANBUL TEL: 0212 353 07 90</div>'}
    ,{latitude : '41.016667', longitude : '29.033333', img_url:'img/aeropostale.png', title : 'Aeropostale Akasya', address : '<div>Akasya</div> <div>Ankara Devlet Yolu Haydarpaşa Yönü 4.Km Çeçen Sokak Akasya Alışveriş Merkezi 2.Kat No: 515-516 P.K. 34660 Acıbadem Üsküdar/İSTANBUL TEL: 216 999 56 94</div>'}
    ,{latitude : '41.021092', longitude : '29.128453', img_url:'img/aeropostale.png', title : 'Aeropostale Buyaka', address : '<div>Buyaka</div> <div>Buyaka Alışveriş Merkezi Fatih Sultan Mehmet Mahallesi Balkan Caddesi No: 56 /A Buyaka AVM Zemin Kat Mağaza No: 63 Tepeüstü, Ümraniye / İSTANBUL TEL: 0216 290 77 27</div>'}
    ,{latitude : '40.973021', longitude : '28.787398', img_url:'img/aeropostale.png', title : 'Aeropostale Aqua Florya', address : '<div>Aqua Florya</div> <div>Şenlikköy Mahallesi Halkalı Caddesi Aqua AVM No: 93 Alt Zemin kat No: 10 Florya/Bakırköy / İSTANBUL TEL: 0212 574 54 20</div>'}
    ,{latitude : '40.974640', longitude : '29.111513', img_url:'img/aeropostale.png', title : 'Aeropostale Brandium', address : '<div>Brandium</div> <div> Küçükbakkalköy Mahallesi Dudullu Yolu Cad. Erenköy Gümrük Karşısı Brandium AVM Zemin Kat No: Z. 13-14-15 Küçükbakkalköy Ataşehir / İSTANBUL TEL: 0216 572 30 45</div>'}
    ,{latitude : '41.075649', longitude : '28.935397', img_url:'img/aeropostale.png', title : 'Aeropostale Vialand', address : '<div>Vialand</div> <div> Yeşilpınar Mahallesi Şehit Metin Kaya Sokak No: 11 Vialand AVM 2 Zk No: 19 Bağımsız Bölüm P.K. 34065 Eyüp / İSTANBUL TEL: 0212 777 29 71</div>'}
     // Banana Republic
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/banana_republic.png', title : 'Banana Republic Capacity Alışveriş Merkezi', address : '<div>CAPACITY ALIŞVERIŞ MERKEZI</div> <div>Fişekhane Caddesi Z 21-21/A 34158 Bakırköy İstanbul , Türkiye  Telefon Numarası: 0212 560 2002</div>'}
    ,{latitude : '41.052904', longitude : '29.000478', img_url:'img/banana_republic.png', title : 'Banana Republic City\'s Nişantaşi Alışveriş Merkezi', address : '<div>CITY\'S NİŞANTAŞI ALIŞVERİŞ MERKEZİ</div> <div>City\'s Alışveriş Merkezi, Teşvikiye Caddesi, No:162 Z 34365 Nişantaşı İstanbul, Türkiye  Telefon Numarası: 0212 373 18 40</div>'}
    ,{latitude : '41.077798', longitude : '29.013208', img_url:'img/banana_republic.png', title : 'Banana Republic Kanyon Alışveriş Merkezi', address : '<div>KANYON ALIŞVERIŞ MERKEZI</div> <div> Büyükdere Caddesi, Kanyon Alışveriş Merkezi Kat 1B No:106-107-108 34394 Levent İstanbul, Türkiye Telefon Numarası: 0212 353 51 65</div>'}
    ,{latitude : '40.980141', longitude : '29.082270', img_url:'img/banana_republic.png', title : 'Banana Republic Palladium Alışveriş Merkezi', address : '<div>PALLADIUM ALIŞVERIŞ MERKEZI</div> <div>BB-204, Barbaros Mahallesi Halk Cad. 1. Kat BB 204 34746 Kozyatağı / Kadıköy İstanbul, Türkiye  Telefon Numarası: 0216 663 10 74</div>'}
    ,{latitude : '41.167773', longitude : '29.056888', img_url:'img/banana_republic.png', title : 'Banana Republic İstinyepark Alışveriş Merkezi', address : '<div>İSTİNYEPARK ALIŞVERİŞ MERKEZİ</div> <div>İstinyepark Alışveriş Merkezi. Pınar Mah.İstinye Bayırı Cad. No: 495 İstinye / Sarıyer-İstanbul Türkiye  Telefon Numarası: 0212 345 63 50-51</div>'}
    // GAP
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP Akasya', address : '<div>İstanbul Akasya</div> <div>Ankara Devlet Yolu Haydarpaşa Yönü 4.Km Çeçen Sokak Akasya Alışveriş Merkezi Zemin Kat No:348 P.K.34660 Acıbadem Üsküdar İstanbul 0216 999 56 92</div>'}
    ,{latitude : '41.020000', longitude : '28.577500', img_url:'img/gap.png', title : 'GAP Akbatı', address : '<div>İstanbul Akbatı</div> <div>Akbatı Alışveriş Merkezi Esenyurt Mah. Kapadık köyü Akbatı Alışveriş Merkezi No. 97-98-99  Büyükçekmece / İSTANBUL Tel. 0 212 397 73 71- 72</div>'}
    ,{latitude : '41.082430', longitude : '29.034522', img_url:'img/gap.png', title : 'GAP Akmerkez', address : '<div>İstanbul Akmerkez</div> <div>Akmerkez Ticaret Merkezi Nispetiye Caddesi No. 332-333-334-335 Etiler / Beşiktaş / İSTANBUL Tel. 0212 2820725</div>'}
    ,{latitude : '41.082430', longitude : '29.034522', img_url:'img/gap.png', title : 'GAP Akmerkez Kids&Baby', address : '<div>İstanbul Akmerkez Kids&Baby</div> <div>Akmerkez Ticaret Merkezi Nispetiye Caddesi No.108-109 34337 Etiler / Beşiktaş / İSTANBUL Tel. 0212 282 17 17</div>'}
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/gap.png', title : 'GAP Capacity', address : '<div>İstanbul Capacity</div> <div>Capacity Alışveriş Merkezi Zeytinlik Mah.Fişekhane Cad. No. 34 Zemin Kat Bakırköy / İSTANBUL Tel. 0 212 663 30 36/ 661 71 47-49</div>'}
    ,{latitude : '41.060278', longitude : '28.987778', img_url:'img/gap.png', title : 'GAP Cevahir', address : '<div>İstanbul Cevahir</div> <div>Cevahir Alışveriş Merkezi Meşrutiyet mah. Büyükdere cad. No. 22/A/316  Şişli / İSTANBUL Tel. 0 212 380 10 95 - 96</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP City\'s Nişantaşı', address : '<div>İstanbul City\'s Nişantaşı</div> <div>City\'s Nişantaşı Alışveriş Merkezi Teşvikiye Mah. No. 162 1.Kat 103-104 Nişantaşı / İSTANBUL Tel. 0212 373 20 80 / 81</div>'}
    ,{latitude : '41.036944', longitude : '28.977500', img_url:'img/gap.png', title : 'GAP Demirören İstiklal', address : '<div>İstanbul Demirören İstiklal</div> <div>Demirören Alışveriş Merkezi Hüseyin Ağa Mah. İstiklal Cad. 1.Kat No. 106-107  Beyoğlu / İSTANBUL Tel. 0 212 292 10 88 - 0 212 292 10 48</div>'}
    ,{latitude : '41.048056', longitude : '28.900278', img_url:'img/gap.png', title : 'GAP Forum Kids&Baby', address : '<div>İstanbul Forum Kids&Baby</div> <div>Forum İSTANBUL Alışveriş Merkezi Kocatepe Mah. Paşa Cad. 34045 B1 Blok No. 048 Bayrampaşa / İSTANBUL Tel. 0 212 640 62 19 - 0 212 640 62 38</div>'}
    ,{latitude : '41.167773', longitude : '29.056888', img_url:'img/gap.png', title : 'GAP İstinyePark', address : '<div>İstanbul İstinyePark</div> <div>İstinye Park Alışveriş Merkezi, Pınar Mah. İstinye Bayırı cad. Enka Okulları Karşısı ABC Yolu No. 215-216 İstinye / Sarıyer / İSTANBUL Tel. 0 212 345 62 22/4 Hat</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP İstinyePark Kids&Baby', address : '<div>İstanbul İstinyePark Kids&Baby</div> <div>İstinye Park Alışveriş Merk.Pınar Mah. İstinye Bayırı cad. Enka Okulları Karşısı ABC Yolu No. 220-221 İstinye / Sarıyer / İSTANBUL Tel. 0 212 345 62 27/4 Hat</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP Kanyon', address : '<div>İstanbul Kanyon</div> <div>Kanyon Alışveriş Merkezi, Mecidiyeköy Mah.Büyükdere Cad. No. 103-104 Levent / İSTANBUL Tel. 0 212 353 52 05</div>'}
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/gap.png', title : 'GAP Marmara Forum', address : '<div>İstanbul Marmara Forum</div> <div>Marmara Forum Alışveriş Merkezi M.S Blok No. 010 Osmaniye Mah. Ekrem Kurt Bulvarı E-5 Sahilyolu Bakırköy / İSTANBUL Tel. 0 212 466 69 10-11</div>'}
    ,{latitude : '41.011998', longitude : '29.133249', img_url:'img/gap.png', title : 'GAP Meydan', address : '<div>İstanbul Meydan</div> <div>Meydan Alışveriş Merkezi Çakmak Mah. Metro Group Sk. No. 12 34770 Ümraniye / İSTANBUL Tel. 0 216 466 21 53-12-87-54</div>'}
    ,{latitude : '40.983333', longitude : '29.127778', img_url:'img/gap.png', title : 'GAP Palladium', address : '<div>İstanbul Palladium</div> <div>Palladium Alışveriş Merkezi Barbaros Mah. Halk Cad.  BB 259- 260 2.Kat 34746 Ataşehir / İSTANBUL Tel. 0 216 663 10 90-91-94</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'GAP Trump Towers Kids&Baby', address : '<div>İstanbul Trump Towers Kids&Baby</div> <div>Trump Alışveriş Merkezi Kuştepe Mah. Mecidiyeköy Yolu Cad. No.12 Mecidiyeköy / İSTANBUL Tel. 0212 275 12 77</div>'}
    ,{latitude : '41.075649', longitude : '28.935397', img_url:'img/gap.png', title : 'GAP Vialand', address : '<div>İstanbul Vialand</div> <div>Vialand Alışveriş Merkezi Yeşilpınar Mahallesi Şehit Metin Kaya Sokak Zemin Kat No. 11/79 34065 Eyüp / İSTANBUL Tel. 0212 777 68 72</div>'}
    ,{latitude : '41.044000', longitude : '29.002000', img_url:'img/gap.png', title : 'GAP Zorlu Center', address : '<div>İstanbul Zorlu Center</div> <div>Ortaköy Mahallesi Koru sokak No: 2 Zorlu Alışveriş Merkezi Bağımsız Bölüm No: 48 P.K. 34340 Zincirlikuyu Beşiktaş İstanbul Tel: 0212 3536139</div>'}
  
                    
];

$('#div_loc_list li').live('click', function() {
    clicked_val = $(this).text().trim();
    for (var i=0; i < posArray.length; i++) {
        if (posArray[i].title.trim() == clicked_val) {
            lat_end = posArray[i].latitude;
            lng_end = posArray[i].longitude;
            app.fnc_direction_map();
            break;
        };
    };
});


var app = {
	// Application Constructor
	initialize : function() {
		console.log("init");
		this.bindEvents();
		//app.url="http://85.97.120.30:9090";
		app.url="http://mail.yesis.net:9090";
		
		//app.url="http://127.0.0.1:9090";
		//app.first_init();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		console.log("bindevent");
		document.addEventListener('deviceready', this.onDeviceReady, false);
                            
	},
	onDeviceReady : function() {
	//alert('2222');
	//window.localStorage["username_rem"] = "selami";
	
    //window.localStorage["password_rem"] = "yesilyurt";
    //*******
    if(window.localStorage["username_rem"] != undefined && window.localStorage["password_rem"] != undefined) 
    {
    	
        if(window.localStorage["username_rem"] != "" && window.localStorage["password_rem"] != ""){                 
          $('#username_').val(window.localStorage["username_rem"]);
          $('#password_').val(window.localStorage["password_rem"]);
          $("#remember_me").attr('checked', true).checkboxradio("refresh");
          
       }
    }
    
		console.log("ondevice ready");
		app.receivedEvent('deviceready');
		app.first_init();
		
	//new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);
	  
		
	},
	
	    fnc_location_list : function() {

         $("#div_loc_list ul").page('destroy').page();
        var list_content ='';
        for (var i=0; i < posArray.length; i++) {
                var ltitle = posArray[i].title;
                list_content += '<li><a href="#direction_page">'+ltitle+'</a></li>';
         }
        $('#div_loc_list').append('<ul data-role="listview">'+list_content+'</ul>');
         
        app.check_campains();
    },
    fnc_direction_map :  function(){
         $.mobile.changePage($('#direction_page'));
         
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
            var map_name = "map_direction";
            var map_direction = new google.maps.Map(document.getElementById(map_name), mapOptions);
            //     current location manuel change default image
            var image = {
                url : 'img/aaa.gif',
                size : new google.maps.Size(38, 38),
                //size : new google.maps.Size(10, 10),
                origin : new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor : new google.maps.Point(19, 19)
                //anchor : new google.maps.Point(5, 5)
            };
            var currentLocationMarker = new google.maps.Marker({
                position : location,
                map : map_direction,
                bounds : false,
                title : 'Buradasınız',
                icon : image,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
            });
//      current location add label and listener
            setCurrentLocationMessage(currentLocationMarker);
            function setCurrentLocationMessage(marker) {
              var message = "<div>Buradasınız</div>";
              var infowindow = new google.maps.InfoWindow({
                content: message
              });
            
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map_direction, marker);
              });
            }
//      end current location add label and listener
        
//         start direction

            var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            /*
            $('#div_loc_list li').live('click', function() {
                clicked_val = $(this).text().trim();
                for (var i=0; i < posArray.length; i++) {
                    if (posArray[i].title.trim() == clicked_val) {
                        lat_end = posArray[i].latitude;
                        lng_end = posArray[i].longitude;
                    };
                };
            });
             */
            
            var end = new google.maps.LatLng(lat_end,lng_end);
            
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer(); 

            directionsDisplay.setMap(map_direction); 
            var request = { 
                origin: start, 
                destination: end, 
                travelMode: google.maps.DirectionsTravelMode.DRIVING 
            };
            directionsService.route(request, function(response, status){ 
                if (status == google.maps.DirectionsStatus.OK) 
                { 
                    directionsDisplay.setDirections(response); 
                } 
            }); 
            
            
//          end direction
        };
        

        
        var onGeoFail = function(error) {
            console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, {
            enableHighAccuracy : true
        });
    },
	
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		console.log("receive event");
		$.mobile.touchOverflowEnabled = false;
		$.mobile.defaultPageTransition = 'flip';
		$.mobile.defaultDialogTransition = 'none';
		$.mobile.transitionFallbacks.slide = 'none';
		$.mobile.transitionFallbacks.pop = 'none';
		$.mobile.buttonMarkup.hoverDelay = 0;


		//checkConnection();
	},

	productList : null,
	getMusteriler : function(){
	
	},
	isnull : function(p){
		if (p ==null)
		return '.';
		else
		return p;
	},
	first_init : function(){
		app.mapLoaded();
		//app.uuid = app.isnull(device.uuid);
		//if (app.uuid==".")
		//app.uuid="586BC0F6-09DC-44FB-8F1D-A3ABCB8E0C80";
		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+"123456789"+"&jsonType=1&con_type=getPieChart",
			dataType : "json",
			success : function(a, b, c) {
				pieData=[];
				$("#device_info").empty();
				for (var i = 0; i < a.length; i++) {
					var x ={value:parseInt(a[i].count), color:a[i].user_color, label:a[i].user_name, highlight: "#5AD3D1"};
					pieData.push(x);
					//console.log(x);
					//pieData[i].value=a[i].count;
					//pieData[i].color=a[i].user_color;
					
					$("#device_info").append("<font style=background-color:"+a[i].user_color+">" + a[i].user_name+"  (" +a[i].count+")</font>"+ '<br />');					
				};	
				
				//style="width: 300px; height: 300px;"
				//new Chart(document.getElementById("line").getContext("2d")).Pie(pieData);
				//new Chart(document.getElementById("line").getContext("2d")).Pie(pieData,pieOptions);				
				//{ "user_name": "Ersin","user_color": "#E0E4CC","count": "2"}
			},
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');
				element2.innerHTML = "hata username:";

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		
		
		
		if(app.username==null){
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=getUserName",
			dataType : "json",
			success : function(a, b, c) {
				if (a.length>0)		
				  app.username ="Merhaba : " + a[0].user_name;
				else
				  $("#device_info").append('Kullanıcı tanımınız yapılmamıştır. Lütfen yöneticinize danışınız ');
			},
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');
				element2.innerHTML = "hata username:";

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}


		if(app.statusType==null){
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id=="+app.uuid+"&jsonType=1&con_type=activitytype",
			dataType : "json",
			success : function(a, b, c) {
			app.statusType=a;
			console.log('statusType');
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}
						
		if(app.status==null){
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=activitytypestatus&activity_type_id=2",
			dataType : "json",
			success : function(a, b, c) {
			app.status=a;
			console.log('status');
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}
		
		if(app.personels==null){
		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=employee",
			dataType : "json",
			success : function(a, b, c) {
			app.personels=a;
			console.log('personel');
	},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}

		
		if(app.companies==null){
		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=customer",
			dataType : "json",
			success : function(a, b, c) {
			app.companies=a;
			console.log('companies');
	},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}
	},
	getProducts : function() {

		$.ajax({
			url : "http://cosmeticamobile.com/Announcements.ashx",
			dataType : "jsonp",
			success : function(a, b, c) {
				app.productList = a;
				for (var i = 0; i < a.length; i++) {
					var o = new Option(a[i].Description.substring(1, 10), a[i].ID);
					$('#products').append(o);
				};
				console.log("succ a ", a);
				console.log("succ b ", b);
				console.log("succ c ", c);

			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);

			}
		});

	},
	getProducts2 : function() {
		$("#username").empty();
		$("#username").append(app.username);

		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1",
			dataType : "json",
			success : function(a, b, c) {
				app.productList = a;
				$("#div_liste").empty();
				$('#twitList ul').remove();
				$('#twitList').append('<ul data-role="listview"></ul>');
				listItems = $('#twitList').find('ul');

				for (var i = 0; i < a.length; i++) {
					html = '<h1><a >'+ a[i].from + '</a></h1>';
					html += ' <p> ' + a[i].subject + '</p>';
					listItems.append('<li id="prj_' + a[i].id + '">' + html + '</li>');
				};
				$('#twitList ul').listview();
				
				for (var i = 0; i < a.length; i++) {
					$('#prj_' + a[i].id).bind('tap',
					function(event, ui) {
						var strID = $(this).attr('id').replace('prj_','');
						app.getProductsDetay(strID);
					});
				}

				console.log("succ a ", a);
				console.log("succ b ", b);
				console.log("succ c ", c);

			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);

			}
		});

	},
	getProductsall : function() {
		$("#usernameb").empty();
		$("#usernameb").append(app.username);		
		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetActivities?android_id="+app.uuid+"&jsonType=1",
			dataType : "json",
			success : function(a, b, c) {
				$("#div_liste_all").empty();
				$('#twitList_all ul').remove();
				$('#twitList_all').append('<ul data-role="listview"></ul>');
				listItems = $('#twitList_all').find('ul');

				for (var i = 0; i < a.length; i++) {
					html = '<div id="prj_' + a[i].id + '" ><h1><a id="prjx_' + a[i].id + '" >' + a[i].from + '</a></h1>';
					html += ' <p> ' + a[i].subject + '</p>';
					listItems.append('<li>' + html + '</li>');
				};
				$('#twitList_all ul').listview();
				
				for (var i = 0; i < a.length; i++) {
					$('#prj_' + a[i].id).bind('tap',
					function(event, ui) {
						var strID = $(this).attr('id').replace('prj_','');
						app.getProductsDetay(strID);
					});
				}

				console.log("succ a ", a);
				console.log("succ b ", b);
				console.log("succ c ", c);

			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);

			}
		});

	},

	insertfunc : function() {
		console.log("save func");
		var result= $("#sel_personels_yeni option:selected").val();
		var v_sel_company_yeni= $("#sel_company_yeni option:selected").val();
		var v_sel_activity_yeni= $("#sel_activity_yeni option:selected").val();
		var v_sel_activity_type_yeni= $("#sel_activity_type_yeni option:selected").val();
		var v_sel_activity_status_yeni= $("#sel_activity_status_yeni option:selected").val();
		var desc= $("#userDesc_yeni").val();
		//if(app.status==null)
		{
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=insertactivity"+
			"&temp_status_id="+v_sel_activity_status_yeni+
			"&temp_assignto="+result + "&desc=" + desc +
			"&temp_activity_type_id="+v_sel_activity_yeni +
			"&temp_activity_property_id="+v_sel_activity_type_yeni +
			"&temp_company_id="+v_sel_company_yeni,
			dataType : "json",
			success : function(a, b, c) {
			app.kaydettimi=a;			
			$.mobile.changePage($('#benim'));
			app.getProducts2();
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}		
	},	
	savefunc : function() {
		console.log("save func");
		var result= $("#sel_personels option:selected").val();
		var result2= $("#sel_status option:selected").val();
		var desc= $("#userDesc").val();
		//if(app.status==null)
		{
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=updateactivity&temp_activity_type_id="+app.id+"&temp_status_id="+result2+"&temp_assignto="+result + "&desc=" + desc,
			dataType : "json",
			success : function(a, b, c) {
			app.status=a;			
			$.mobile.changePage($('#benim'));
			app.getProducts2();
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}				
	},
	getProductsDetay : function(id) {
		$("#usernamed").empty();
		$("#usernamed").append(app.username);		
		app.id=id;	
		app.first_init();	
		console.log("getProductsDetay:", app.id);

/*
$.when(
		$.get("http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1&con_type=getactivity&activity_type_id=" + app.id, {},
		  function(data){
		    alert("Data Loaded: " + data);
		  }
		 ).then(function( data, textStatus, jqXHR ) {
  //alert( jqXHR.status ); // Alerts 200
})
);*/
		
		$.when(  
		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=getactivity&activity_type_id=" + app.id,
			dataType : "json",
			success : function(a, b, c) {
			var detays=[];
			app.detays=a;

			}			,
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);

			},
			}).then(function( data, textStatus, jqXHR ) {
  //alert( jqXHR.status ); // Alerts 200

				$.mobile.changePage($('#detay'));
				console.log("getProductsDetayx:", app.id);
				$('#twitList_detay').empty();
				$('#twitList_detay').append('<ul data-role="listview"></ul>');
				listItems = $('#twitList_detay').find('ul');
				
				for (var i = 0; i < app.detays.length; i++) {
					app.activity_type_id=app.detays[i].activity_id;
					//html = app.detays[i].project_id +'<br/>'+ app.detays[i].company_name +'<br/>';
					v_activity_status_id=app.detays[i].activity_status_id;
					v_activity_id= app.detays[i].activity_id;
					v_activity_property_id = app.detays[i].activity_property_id;
					v_assigned_id=app.detays[i].assigned_id; 
					$("#userDesc").empty();
					$("#prjid").empty();
					$("#compname").empty();
					$("#userDesc").val(app.detays[i].project_desc);
					$("#prjid").append("İş No: "+app.detays[i].project_id);
					$("#compname").append("Şirket Adı: "+app.detays[i].company_name);
 
					//html += ' <textarea id="comment" style="margin: 0px; width: 250px; height: 98px;" value="' + app.detays[i].project_desc  +'" /><br/>';
				};
				html="<br\>";
				if(app.status!=null){
				html +='<br/>'+'Personel : <select id="sel_personels" >';
				for (var i = 0; i < app.personels.length; i++) 
				{
					if (v_assigned_id==app.personels[i].user_id) 
					{
						html += '<option selected="true" value="'+app.personels[i].user_id+'">'+app.personels[i].user_name+'</option>';
					} 
					else
					{
						html += '<option value="'+app.personels[i].user_id+'">'+app.personels[i].user_name+'</option>';
					};
				};
				html +='</select> <br/>';
				}
				
				if(app.status!=null){
				html +='<br/>'+' Statüs : <select id="sel_status" >';
				for (var i = 0; i < app.status.length; i++) 
				{
					if (v_activity_status_id==app.status[i].activity_status_id) 
					{
						html += '<option selected="true" value="'+app.status[i].activity_status_id+'">'+app.status[i].activity_status_name+'</option>';
					}
					else
					{
						html += '<option value="'+app.status[i].activity_status_id+'">'+app.status[i].activity_status_name+'</option>';
					}
				};
				html +='</select> <br/>';
				}
			    html +='<input type="button" name="save" id="save" value="Kaydet" onclick="app.savefunc()"/>';

				$('#twitList_detay').append(html);				
				console.log("v_activity_status_id ", v_activity_status_id);
				console.log("v_assigned_id ", v_assigned_id);
				console.log("app.html ", app.html);
				//$('#twitList_detay').append(app.html);
				$('#twitList_detay ul').listview();
		}));
	},
	getYeni : function() {
				$("#usernamey").empty();
		        $("#usernamey").append(app.username);

				for (var i = 0; i < app.personels.length; i++) 
				{
					var o = new Option(app.personels[i].user_name, app.personels[i].user_id);
					$('#sel_personels_yeni').append(o);
				};

				for (var i = 0; i < app.companies.length; i++) 
				{
					var o = new Option(app.companies[i].company_name, app.companies[i].company_id);
					$('#sel_company_yeni').append(o);
				};				
				
				if(app.activity==null){
				$.ajax({
					url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=activitytype",
					dataType : "json",
					success : function(a, b, c) {
					app.activity=a;
					console.log('detay activity');

				for (var i = 0; i < app.activity.length; i++) 
				{
					var o = new Option(app.activity[i].activity_name, app.activity[i].activity_id);
					$('#sel_activity_yeni').append(o);
				};				

			    },
					error : function(a, b, c) {
						console.log("err a ", a);
						console.log("err b ", b);
						console.log("err c ", c);
						console.log("err c ", c);
					}
				});
				}


$('#sel_activity_yeni').change(function(){
    console.log('Test: ' + $('#sel_activity_yeni').val());

				$.ajax({
					url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=activitytypeproperty&activity_type_id="+$('#sel_activity_yeni').val(),
					dataType : "json",
					success : function(a, b, c) {
					app.activity_prop=a;
					console.log('detay activity prop');
				
				$('#sel_activity_type_yeni').empty();
				var o = new Option("Seçiniz", -1);
				$('#sel_activity_type_yeni').append(o);
				for (var i = 0; i < app.activity_prop.length; i++) 
				{
					var o = new Option(app.activity_prop[i].user_name, app.activity_prop[i].activity_property_id);
					$('#sel_activity_type_yeni').append(o);
				};				

			    },
					error : function(a, b, c) {
						console.log("err a ", a);
						console.log("err b ", b);
						console.log("err c ", c);
						console.log("err c ", c);
					}
				});
    
    
});

	$('#sel_activity_type_yeni').change(function(){
    console.log('sel_activity_type_yeni: ' + $('#sel_activity_type_yeni').val());
    
				$.ajax({
					url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=activitytypestatus2&activity_type_id="+$('#sel_activity_type_yeni').val(),
					dataType : "json",
					success : function(a, b, c) {
					app.activity_prop_status=a;
					console.log('detay activity status prop');
				
				$('#sel_activity_status_yeni').empty();
				var o = new Option("Seçiniz", -1);
				$('#sel_activity_status_yeni').append(o);

				for (var i = 0; i < app.activity_prop_status.length; i++) 
				{
					var o = new Option(app.activity_prop_status[i].activity_status_name, app.activity_prop_status[i].activity_status_id);
					$('#sel_activity_status_yeni').append(o);
				};				

			    },
					error : function(a, b, c) {
						console.log("err a ", a);
						console.log("err b ", b);
						console.log("err c ", c);
						console.log("err c ", c);
					}
				});
    
});

	},
	
	getPersonel : function(html,div_name) {
		console.log("getPersonel:");
		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=employee",
			dataType : "json",
			success : function(a, b, c) {
				html +='<select id="sel_personels">';
				for (var i = 0; i < a.length; i++) 
				{
					html += '<option value="'+a[i].user_id+'">'+a[i].user_name+'</option>';
				};
				html +='</select> <br/>';
				app.html=html;
				$('#'+div_name).append(app.html	);
				
	},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});		
	},
	
	loginfnc : function() {
        is_guest = false;
        //app.uuid = app.isnull(device.uuid);

	
    var u = $('#username_').val();
    var p = $('#password_').val();
    if($("#remember_me").is(':checked')){
      window.localStorage["username_rem"] = u;
      window.localStorage["password_rem"] = p;
    }else{
      window.localStorage["username_rem"] = "";
      window.localStorage["password_rem"] = "";
    }    
        console.log("login form");
        var usernamex = $("#username_").val();
        var passwordx = $("#password_").val();
        $.ajax({            
    		url : app.url+"/istakip_yesis_webservices/GetMyActivities?con_type=loginMobile&username="+usernamex+"&password="+passwordx+"&android_id="+app.uuid,
            dataType : "json",
            success : function(a, b, c) {         
                    if (a.status == 'ok') {
                    	app.user_name="Merhaba : " + a.name + " " + a.surname ;
                    	app.username="Merhaba : " + a.name + " " + a.surname ;
						app.user_id= a.mac_id;	
						app.uuid= a.mac_id;	
                        $.mobile.changePage("#page1");                        
                    }
                    else{
                        alert("Lütfen kullanıcı adı ve şifrenizi doğru giriniz!");
                        $('#username').removeAttr('value');
                        $('#password').removeAttr('value'); 
                    }
            },
            error : function(a, b, c) {
                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });             
    },
	
	getActivity : function(html,div_name) {
		console.log("getPersonel:");
		$.ajax({
			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=activitytype",
			dataType : "json",
			success : function(a, b, c) {				
				console.log("getProductsDetayx:", app.id);
				
				html +='<select id="sel_activity">';
				for (var i = 0; i < a.length; i++) {
					html += '<option value="'+a[i].activity_id+'">'+a[i].activity_name+'</option>';
				};
				html +='</select> <br/>';
				$('#'+div_name).append(html);
				$('#sel_activity').val('');
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);

			}
		});

	},	
	getActivityProperty : function(html,div_name) {
		console.log("getPersonel:");
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=activitytype&activity_type_id="+app.activity_type_id,
			dataType : "json",
			success : function(a, b, c) {				
				console.log("getProductsDetayx:", app.id);

				html +='<select id="sel_activity">';
				for (var i = 0; i < a.length; i++) {
					html += '<option value="'+a[i].activity_id+'">'+a[i].activity_name+'</option>';
				};
				html +='</select> <br/>';
				$('#'+div_name).append(html);
				//$('#'+div_name+' ul').listview();
				$('#sel_activity').val('');
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
	},
	getActivityPropertyStatus : function(html,div_name) {
		console.log("gets Prop Satus:" + app.activity_type_id);
		
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=activitytypestatus&activity_type_id="+app.activity_type_id,
			dataType : "json",
			success : function(a, b, c) {				
				console.log("sel_activity_status");

				html +='Durum : <select id="sel_activity_status">';
				for (var i = 0; i < a.length; i++) {
					html += '<option value="'+a[i].activity_status_id+'">'+a[i].activity_status_name+'</option>';
				};
				html +='</select> <br/>';
				//$('#'+div_name).append(html);				
				console.log("statsu html :" + html);
				app.html=html;
				console.log("statsu html :" + app.html);
				$('#'+div_name).append(app.html	);
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
	},			
	getCustomer : function(html, div_name) {
		console.log("getCustomer:");
		$.ajax({
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=customer",
			dataType : "json",
			success : function(a, b, c) {				
				html ='Müşteri : <select id="sel_customer" style="width: 368px;">';
				for (var i = 0; i < a.length; i++) {
					html += '<option value="'+a[i].company_id+'" >'+a[i].company_name+'</option>';
				};
				html +='</select> <br/>';
				$('#'+div_name).append(html);
				$('#sel_customer').val('');
	},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);

			}
		});

	},	
	getTurkish : function(str) {
		return str;
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
            var map_name = "map";
            if (is_guest) {
                map_name = "guest_map";
            };
            var map = new google.maps.Map(document.getElementById(map_name), mapOptions);
            //     current location manuel change default image
            var image = {
                url : 'img/aaa.gif',
                size : new google.maps.Size(38, 38),
                //size : new google.maps.Size(10, 10),
                origin : new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor : new google.maps.Point(19, 19)
                //anchor : new google.maps.Point(5, 5)
            };
            var currentLocationMarker = new google.maps.Marker({
                position : location,
                map : map,
                bounds : false,
                title : 'Buradasınız',
                icon : image,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
            });
//      current location add label and listener
            setCurrentLocationMessage(currentLocationMarker);
            function setCurrentLocationMessage(marker) {
              var message = "<div>Buradasınız</div>";
              var infowindow = new google.maps.InfoWindow({
                content: message
              });
            
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
              });
            }
//      end current location add label and listener

//      start manuel position
        createMaker(map);
//end manuel position
        
        };

        var onGeoFail = function(error) {
            console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, {
            enableHighAccuracy : true
        });
    },
    mapLoaded : function() {
		console.log("mapLoaded");
		app.detectCurrentLocation();
	}
	
};

function createMaker(map){

            
            for (var i=0; i < posArray.length; i++) {
                var latitude = posArray[i].latitude;
                var longitude = posArray[i].longitude;
                var title = posArray[i].title;
                var address = posArray[i].address;
                var img_url = posArray[i].img_url;
                
                var aeropostaleZorluCenter = new google.maps.LatLng(latitude, longitude);
                var zorluCenterMarker = new google.maps.Marker({
                position : aeropostaleZorluCenter,
                map : map,
                bounds : false,
                title : title,
                icon : img_url,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
                });
                createMarker(zorluCenterMarker,address);
                function createMarker(marker,message) {
                    var infowindow = new google.maps.InfoWindow({
                        content: message
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                }
            };
           
};
