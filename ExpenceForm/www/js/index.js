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
var app = {
	// Application Constructor
	initialize : function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		console.log('device.uuid:' + device.uuid);
		$("#device_info").append( 'Device Name: '     + device.name     + '<br />' + 
                            'Device Cordova: '  + device.cordova + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: '     + device.uuid     + '<br />' + 
                            'Device Version: '  + device.version  + '<br />' );
		
		$("#device_info").append( '<br />'+  '<br />' +  '<br />');
		$("#device_info").append('Bana Atananlar : '+ '<br />');
		$("#device_info").append('Atanmamış bekleyenler : '+ '<br />');
		$("#device_info").append('Diğer atanan işler : '+ '<br />');
                            
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady : function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		$("#device_info").append("UUID = " + device.uuid);
		checkConnection();
		app.getProducts();
		$('#products').bind('change', function(e) {
			console.log(e);
			console.log(e.currentTarget.value);
			var ind = e.currentTarget.selectedIndex - 1;
			var prod = app.productList[ind];
			console.dir(prod);
			$('#img1').attr('src', prod.ImageUrl);
		});
	},

	productList : null,

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

		$.ajax({
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1",
			dataType : "json",
			success : function(a, b, c) {
				app.productList = a;
				$("#div_liste").empty();
				$('#twitList ul').remove();
				$('#twitList').append('<ul data-role="listview"></ul>');
				listItems = $('#twitList').find('ul');

				for (var i = 0; i < a.length; i++) {
					html = '<h1><a id="prj_' + a[i].id + '" >' + a[i].from + '</a></h1>';
					html += ' <p> ' + a[i].subject + '</p>';
					listItems.append('<li>' + html + '</li>');
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

		$.ajax({
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetActivities?android_id=9feff6f179273142&jsonType=1",
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
	
	savefunc : function() {
		console.log("save func");
		alert("save func");
	},
	getProductsDetay : function(id) {
		app.id=id;		
		console.log("getProductsDetay:", app.id);
		$.ajax({
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1&con_type=getactivity&activity_type_id=" + app.id,
			dataType : "json",
			success : function(a, b, c) {
				$.mobile.changePage($('#detay'));
				console.log("getProductsDetayx:", app.id);
				console.log(a);
				$('#twitList_detay').empty();
				$('#twitList_detay').append('<ul data-role="listview"></ul>');
				listItems = $('#twitList_detay').find('ul');

                /*[{ "project_id": "3000","company_id": "42",
                 * "company_name": "baysallbaysallar uluslararasi nakliyat tic sanayi a.ş ",
                 * "activity_id": "2","activity_name": "Servis",
                 * "activity_property_id": "2","activity_property_name": "Helpdesk",
                 * "activity_status_id": "9","activity_status": "Tamamlandı",
                 * "project_desc": "Cengiz Bey internete giremiyor bilg. ip almıyor",
                 * "assigned_id": "10","assigned_person": "Operasyon null"} ]*/
                v_activity_status_id='';
                v_assigned_id='';
				for (var i = 0; i < a.length; i++) {
					app.activity_type_id=a[i].activity_id;
					html = a[i].project_id +'<br/>'+  
					a[i].company_name +'<br/>';
					v_activity_status_id=a[i].activity_status_id;
					v_assigned_id=a[i].assigned_id;  
					html += ' <textarea name="comment" style="margin: 0px; width: 368px; height: 98px;">' + a[i].project_desc  +' </textarea><br/>';
				};
				//$('#twitList_detay').append(html);
				app.getPersonel(html ,'twitList_detay');
				app.getActivityPropertyStatus(html,'twitList_detay');
				$('#sel_activity_status').val(v_activity_status_id);
				$('#sel_personels').val(v_assigned_id);
				
				$('#twitList_detay ul').listview();
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);

			}
		});

	},
	getYeni : function() {
		console.log("getYeni:");
				$('#twitList_yeni').empty();
				$('#twitList_yeni ul').remove();
				$('#twitList_yeni').append('<ul data-role="listview"></ul>');
				listItems = $('#twitList_yeni').find('ul');
				app.getPersonel(html,'twitList_yeni');
				app.getCustomer(html,'twitList_yeni');				
				//$('#twitList_yeni').append('<button type="button" onclick="app.savefunc();">kaydet</button>');
				$('#twitList_yeni ul').listview();		
	},
	
	getPersonel : function(html,div_name) {
		console.log("getPersonel:");
		$.ajax({
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1&con_type=employee",
			dataType : "json",
			success : function(a, b, c) {
				html +='<select id="sel_personels">';
				for (var i = 0; i < a.length; i++) 
				{
					html += '<option value="'+a[i].user_id+'">'+a[i].user_name+'</option>';
				};
				html +='</select> <br/>';
				$('#'+div_name).append(html);
				$('#sel_personels').val('');
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
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1&con_type=activitytype",
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
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1&con_type=activitytype&activity_type_id="+app.activity_type_id,
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
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1&con_type=activitytypestatus&activity_type_id="+app.activity_type_id,
			dataType : "json",
			success : function(a, b, c) {				
				console.log("sel_activity_status");

				html +='<select id="sel_activity_status">';
				for (var i = 0; i < a.length; i++) {
					html += '<option value="'+a[i].activity_status_id+'">'+a[i].activity_status_name+'</option>';
				};
				html +='</select> <br/>';
				$('#'+div_name).append(html);
				//$('#'+div_name+' ul').listview();
				$('#sel_activity_status').val('');
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
			url : "http://85.97.120.30:9090/istakip_yesis_webservices/GetMyActivities?android_id=9feff6f179273142&jsonType=1&con_type=customer",
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
		/*
		 .replace( "-1-","ı").replace( "-11-","I").replace( "-2-","ş").replace("-22-","Ş").replace("-33-","İ")
		 .replace("-4-","ö").replace("-44-","Ö")
		 .replace("-5-","ü").replace("-55-","Ü")
		 .replace("-6-","ç").replace("-66-","Ç")
		 .replace("-7-","ğ").replace( "-77-","Ğ");*/
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
	/*,
	findById : function(url, id) {
		if (id != null) {
			console.log("find by x");
			v_pos1 = url.indexOf('id=');
			v_pos2 = url.indexOf('&');
			v_id = url.substring(v_pos1, v_pos2);
			//app.getProductsDetay(v_id);
			app.id = id;
			//app.getProductsDetay(app.id);
			console.log("app.id:" + app.id);
		}
	} */
};
/*
$("a").live("click", function(e) {
	v_url = $(this).attr("href");
	v_id = $(this).attr("id");
	app.findById(v_url, v_id);
});
*/