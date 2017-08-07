define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */
      /*Usage:
       *      Replace [map id] with the UID of the "MAP", not the "story map"
       *      Replace [layer id] with the id of the layer you wish to use to click navigate
       *      Replace "storymapjump" with the field used as the marker on the feature
       *
       *Example:
       *    app.maps.98347aueua73287494aufd.response.map._layers.nav_layer_9435.on("mouse-over",function(e){
       *    app.maps.98347aueua73287494aufd.response.map.setMapCursor("pointer");
       *    });
       *    app.maps.98347aueua73287494aufd.response.map._layers.nav_layer_9435.on("mouse-out",function(e){
       *    app.maps.98347aueua73287494aufd.response.map.setMapCursor("default");
       *    });
       *    app.maps.98347aueua73287494aufd.response.map._layers.nav_layer_9435.on("click",function(e){
       *    var index = e.graphic.attributes["UID"];
       *    topic.publish("story-navigate-section", index);
       *    });
       */
       
      //This section changes the mouse to a pointer when moved over the feature 
        app.maps.[map id].response.map._layers.[layer id].on("mouse-over",function(e){
          app.maps.[map id].response.map.setMapCursor("pointer");
        });
      //This changes the icon back to an arrow  
        app.maps.[map id].response.map._layers.[layer id].on("mouse-out",function(e){
          app.maps.[map id].response.map.setMapCursor("default");
        });
      //This is the onclick event that moves the story map sections
        app.maps.[map id].response.map._layers.[layer id].on("click",function(e){
          var index = e.graphic.attributes["storymapjump"];
          topic.publish("story-navigate-section", index);
        });
  });
});
