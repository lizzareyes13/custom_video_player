var video = $("video")[0];



function sizeControls() {
  var videoWidth = $("video").width();
  $("#video-controls").css("width", videoWidth+"px");
  console.log(videoWidth);
}

window.onload = sizeControls;
window.onresize = sizeControls;




//BUTTONS

//backwards button
$("#backward").click(function(){
  var video = $("video")[0];
  if (!$("video")[0].paused){
    video.currentTime = Math.max(0, video.currentTime-5);
  }
})

//forward button
$("#forward").click(function(){
  var video = $("video")[0];
  if(!$("video")[0].paused){
    video.currentTime = Math.max(0, video.currentTime+5);
  }
})

//speed up button
$("#speedUp").click(function(){
  var video = $("video")[0];
  if(!$("video")[0].paused){
    video.playbackRate = video.playbackRate + .25;
  }
})

//slow down button
$("#speedDown").click(function(){
  var video = $("video")[0];
  if(!$("video")[0].paused){
    video.playbackRate = video.playbackRate - .25;
  }
})

//Play button
$("#play").click(function(){
  var video = $("video")[0];

  if(video.paused){
    video.play();
    $("#play").hide();
  }
  else{
    video.pause();
  }
});

$("video").click(function(){
  var video = $("video")[0];

  if(video.paused){
  video.play();
}
else{
  video.pause();
}
  // video.play();
});

$("video").mouseenter(function(){
  $("#play").show();




//Victor wrote this one: just using thing for comparison and reference

      // var video = $("video")[0];

      // function sizeControls(){
      //  var videoWidth = $("video").width();
      //  $("#video-controls").css("width", videoWidth+"px");
      //  console.log(videoWidth);
      // }
      //
      // window.onload = sizeControls;
      // window.onresize = sizeControls;
      // video.addEventListener("loadeddata", function(){
      //  setTimeout(sizeControls, 100);
      // });
      // loadState();
      //
      // $("#backward").click(function(){
      //  if (!video.paused){
      //    video.currentTime = Math.max(0, video.currentTime-10);
      //  }
      // });
      // $("#forward").click(function(){
      //  if (!video.paused){
      //    video.currentTime = Math.min(video.duration, video.currentTime+10);
      //  }
      // });
      //
      // //playbackRate
      // $("#slower").click(function(){
      //  video.playbackRate -= 0.25;
      // });
      //
      // $("#faster").click(function(){
      //  video.playbackRate += 0.25;
      // });
      //
      // $("#load-video").click(function(){
      //  if (!$("#next-video").val()) return;
      //  video.src= $("#next-video").val();
      // });
      //
      // function saveState(){
      //  localStorage.setItem("last-played", video.src);
      //  localStorage.setItem("last-location", video.currentTime);
      // }
      // setInterval(saveState, 1000);
      //
      // function loadState(){
      //  if (!localStorage.getItem("last-played") || !localStorage.getItem("last-location"))
      //    return;
      //  video.src = localStorage.getItem("last-played");
      //  video.play()
      //  .then(()=>video.currentTime = localStorage.getItem("last-location"))
      //  .then(()=>video.pause());
      //  //video.pause();
      // }
