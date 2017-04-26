/*global $*//*global YT*/
 var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      function onYouTubeIframeAPIReady() {
         console.log("heyman");
        player = new YT.Player('york', {
          height: '390',
          width: '640',
          videoId: 'dQw4w9WgXcQ',
          events: {
            'onReady': onPlayerReady
          }
        });
      }
         function onPlayerReady(){
    
   }
$(document).ready(function(){
  console.log("ready");
  

   $(".lil").click(function(){
      $(".naruto").hide();
      player.playVideo();
       
       
   }); 
   
   
});
    
    
    
    
    
