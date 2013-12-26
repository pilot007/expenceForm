
var app = {

    initialize: function() {
        this.bindEvents();
    },
     bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
 
   onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
		this.initButtons();
		app.getCustomers();
    },
    
    initButtons:function()
    {
    	$('#btn_goMasraf').bind('tap',function() {
    		$.mobile.changePage($('#page_Masraf'),{
    			transition:"fade"
    		});
    	});
    },
    
	getCustomers:function()
    {

    	$.ajax({
		url: "http://localhost:3448/api/Customers",
        jsonp: 'false',
        jsonpCallback: 'json_callback' ,
        dataType: "jsonp",
		  success:function(a,b,c)
		  {
		  	console.log("succ a " ,a);
		  	app.productList =a;
		  	for (var i=0; i < a.length; i++) {
		  	var o = new Option( a[i].CUSTOMER_NAME.substring(1,10) ,a[i].CUSTOMER_ID);
		  	$('#CUSTOMER_ID').append(o);
			  };
		  	console.log("succ a " ,a);
		  	console.log("succ b " ,b);
		  	console.log("succ c " ,c);
		  	
		  },
		  error:function(a,b,c){
		  	console.log("err a " ,a);
		  	console.log("err b " ,b);
		  	console.log("err c " ,c);
		  	
		  }
		});
}


};
