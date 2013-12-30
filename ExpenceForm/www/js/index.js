
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
		app.getCosttypes();
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
		  url: "http://localhost:49646/api/customers",
		  dataType: "jsonp",
		  success:function(a,b,c)
		  {
		  	console.log("succ a " ,a);
		  	app.productList =a;
		  	for (var i=0; i < a.length; i++) {
		  	var o = new Option( a[i].CUSTOMER_NAME.substring(0,15) ,a[i].CUSTOMER_ID);
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
},

getCosttypes:function()
    {
    	$.ajax({
		  url: "http://localhost:49646/api/costtypes",
		  dataType: "jsonp",
		  success:function(a,b,c)
		  {
		  	console.log("succ a " ,a);
		  	app.productList =a;
		  	for (var i=0; i < a.length; i++) {
		  	var o = new Option( a[i].COST_TYPE_NAME.substring(0,15) ,a[i].COST_TYPE_ID);
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
