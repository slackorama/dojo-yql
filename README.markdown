About
=====
This is an dojo interface to Yahoo's [YQL][yql].  It's heavily based on Dav Glass's
[yui-yql][yui-yql].

To use it:

    dojo.yql.execute("SELECT * from friendfeed.feeds WHERE nickname = 'slackorama'",
                { load: function( data ) {
                           console.dir( data );
                        },
                  error: function( e ) {
                           console.error( e );
                        }
                });

Note
====
If you are using this module, you must comply with Yahoo's [usage and
attribution requirements][usage].

TODO:
=====

 *   Tests!
 *   Documentation!
 *   Profit!

[yql]: http://developer.yahoo.com/yql/
[yui-yql]: http://github.com/davglass/yui-yql/
[usage]: http://developer.yahoo.com/faq/#token
