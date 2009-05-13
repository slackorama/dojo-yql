dojo.provide("dojox.yql._base");

dojo.require("dojo.io.script");

/*
 * Begin Yahoo Web Services Attribution Snippet
 * http://developer.yahoo.com - Web Services by Yahoo!
 * End Yahoo Web Services Attribution Snippet
 */
(function() {
   var _dio = dojo.io;
   var _dxy = dojox.yql;
   var URL = 'http:/' + '/query.yahooapis.com/v1/public/yql';
   _dxy.execute = function( qry, ioArgs ) {

     if (!ioArgs) {
       ioArgs = { };
     }
     var myArgs = dojo.mixin({},ioArgs );
     if (!myArgs.content) {
       myArgs.content = { };
     }
     myArgs.url = URL;
     myArgs.callbackParamName = "callback";
     myArgs.content.q = qry;
     myArgs.content.format = 'json';

     if(myArgs.diagnostics) {
       if (dojo.isString(myArgs.diagnostics)) {
         myArgs.content.diagnostics = (myArgs.diagnostics === "true");
       }
       else {
         // it's true
         myArgs.content.diagnostics = true;
       }
     }
     else {
       // false by default (or set already to false)
       myArgs.content.diagnostics = false;
     }

     if (myArgs.env) {
       myArgs.content.env = myArgs.env;
     } else {
       if (!myArgs.content.env) {
         myArgs.content.env = 'http:/' + '/datatables.org/alltables.env';
       }
     }

     // to look into the data to see if there's an error
     myArgs.load = function( data ) {
       if (data.error) {
         if (ioArgs.error) {
           ioArgs.error( new Error( data.error.description ) );
           return;
         }
       }
       if (data.query) {
         if (ioArgs.load) {
           ioArgs.load( data.query );
           return;
         }
       }
     };
     return _dio.script.get( myArgs );
    };
 })();
