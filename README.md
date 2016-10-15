# Getting Started

Message360
=================
This API SDK was automatically generated by APIMATIC v2.0

How To Configure:
=================
The generated code might need to be configured with your API credentials. To do that,
open the file "Configuration.js" and edit it's contents.

How To Build: 
=============
The generated code relies on AngularJS framework being available . 

How To Use:
===========
The following shows how import the controllers and use:

1) Add the folder 'Message360' into your to your scripts folder e.g scripts.
   
2) Import the reference to these files inside the appropriate html file such as index.html. 
   The Configuration.js file should be imported before the other files.


    <!-- Helper files -->
    <script src="scripts/Message360/Configuration.js"></script>
    <script src="scripts/Message360/APIHelper.js"></script>
    <script src="scripts/Message360/Http/Client/HttpContext.js"></script>
    <script src="scripts/Message360/Http/Client/RequestClient.js"></script>
    <script src="scripts/Message360/Http/Request/HttpRequest.js"></script>
    <script src="scripts/Message360/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/Message360/Controllers/ConferenceController.js"></script>
    <script src="scripts/Message360/Controllers/TranscriptionController.js"></script>
    <script src="scripts/Message360/Controllers/PhoneNumberController.js"></script>
    <script src="scripts/Message360/Controllers/UsageController.js"></script>
    <script src="scripts/Message360/Controllers/SMSController.js"></script>
    <script src="scripts/Message360/Controllers/AccountController.js"></script>
    <script src="scripts/Message360/Controllers/RecordingController.js"></script>
    <script src="scripts/Message360/Controllers/CallController.js"></script>
    <script src="scripts/Message360/Controllers/CarrierController.js"></script>


3) Inject the module into your main module e.g:

    var myApp = angular.module('myApp', ['Message360'])

4) To use a generated factory in your controller, injection could be as follows : 
 
    myApp.controller('PageCtrl',function($scope,ConferenceController) {

    }

5) You can call any of the controllers function. The value returned will be a promise
	For example: 
	var response = ConferenceController.create_view_participant();

6) The context of response can be obtained by using getContext() function like:

	response.then(function(data){
		console.log(data.getContext());
	},function(err){
		
	});

