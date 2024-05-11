

document.querySelector(".showmore").addEventListener("click", function() {
    var popularArtists = document.querySelector(".popular-artists");
    if (popularArtists.style.height === "fit-content") {
        popularArtists.style.height = "46%";
        document.querySelector(".showmore").innerHTML = "Show all";
    } else {
        popularArtists.style.height = "fit-content";
        document.querySelector(".showmore").innerHTML = "Hide";
    }
});
document.querySelector(".pritam").addEventListener("mouseover",function(){
    var button =document.querySelector(".play-button");
    button.style.opacity="1";
    
});
document.querySelector(".pritam").addEventListener("mouseout",function(){
    var button =document.querySelector(".play-button");
    button.style.opacity="0";
    
});

document.querySelector(".pritam2").addEventListener("mouseover",function(){
    var button2 =document.querySelector(".play-button-2");
    button2.style.opacity="1";
    
});
document.querySelector(".pritam2").addEventListener("mouseout",function(){
    var button2 =document.querySelector(".play-button-2");
    button2.style.opacity="0";
    
});
document.querySelector(".three").addEventListener("mouseover",function(){
    var button3=document.querySelector(".play-button-3");
    button3.style.opacity="1";
    
});
document.querySelector(".three").addEventListener("mouseout",function(){
    var button3=document.querySelector(".play-button-3");
    button3.style.opacity="0";
    
});

document.querySelector(".four").addEventListener("mouseover",function(){
    var button4=document.querySelector(".play-button-4");
    button4.style.opacity="1";
    
});
document.querySelector(".four").addEventListener("mouseout",function(){
    var button4=document.querySelector(".play-button-4");
    button4.style.opacity="0";
    
});

document.querySelector(".five").addEventListener("mouseover",function(){
    var button5=document.querySelector(".play-button-5");
    button5.style.opacity="1";
    
});
document.querySelector(".five").addEventListener("mouseout",function(){
    var button5=document.querySelector(".play-button-5");
    button5.style.opacity="0";
    
});
document.querySelector(".six").addEventListener("mouseover",function(){
    var button6=document.querySelector(".play-button-6");
    button6.style.opacity="1";
    
});
document.querySelector(".six").addEventListener("mouseout",function(){
    var button6=document.querySelector(".play-button-6");
    button6.style.opacity="0";
    
});

document.querySelector(".seven").addEventListener("mouseover",function(){
    var button7=document.querySelector(".play-button-7");
    button7.style.opacity="1";
    
});
document.querySelector(".seven").addEventListener("mouseout",function(){
    var button7=document.querySelector(".play-button-7");
    button7.style.opacity="0";
    
});

document.querySelector(".eight").addEventListener("mouseover",function(){
    var button8=document.querySelector(".play-button-8");
    button8.style.opacity="1";
    
});
document.querySelector(".eight").addEventListener("mouseout",function(){
    var button8=document.querySelector(".play-button-8");
    button8.style.opacity="0";
    
});

document.querySelector(".nine").addEventListener("mouseover",function(){
    var button9=document.querySelector(".play-button-9");
    button9.style.opacity="1";
    
});
document.querySelector(".nine").addEventListener("mouseout",function(){
    var button9=document.querySelector(".play-button-9");
    button9.style.opacity="0";
    
});

document.querySelector(".ten").addEventListener("mouseover",function(){
    var button10=document.querySelector(".play-button-10");
    button10.style.opacity="1";
    
});
document.querySelector(".ten").addEventListener("mouseout",function(){
    var button10=document.querySelector(".play-button-10");
    button10.style.opacity="0";
    
});
//popular-albums
document.querySelector(".prita").addEventListener("mouseover",function(){
    var button =document.querySelector(".play-button-albums");
    button.style.opacity="1";
    
});
document.querySelector(".prita").addEventListener("mouseout",function(){
    var button =document.querySelector(".play-button-albums");
    button.style.opacity="0";
    
});

document.querySelector(".on").addEventListener("mouseover",function(){
    var button1=document.querySelector(".play-button-albums-1");
    button1.style.opacity="1";
    
});
document.querySelector(".on").addEventListener("mouseout",function(){
    var button1=document.querySelector(".play-button-albums-1");
    button1.style.opacity="0";
    
});
var button2=document.querySelector(".play-button-albums-2");
document.querySelector(".tw").addEventListener("mouseover",function(){
    button2.style.opacity="1";
    
});
document.querySelector(".tw").addEventListener("mouseout",function(){
    button2.style.opacity="0";
    
});
var button3=document.querySelector(".play-button-albums-3");
document.querySelector(".th").addEventListener("mouseover",function(){
    button3.style.opacity="1";
    
});
document.querySelector(".th").addEventListener("mouseout",function(){
    button3.style.opacity="0";
    
});
var button4=document.querySelector(".play-button-albums-4");
document.querySelector(".fo").addEventListener("mouseover",function(){
    button4.style.opacity="1";
    
});
document.querySelector(".fo").addEventListener("mouseout",function(){
    button4.style.opacity="0";
    
});
var button5=document.querySelector(".play-button-albums-5");
document.querySelector(".fi").addEventListener("mouseover",function(){
    button5.style.opacity="1";
    
});
document.querySelector(".fi").addEventListener("mouseout",function(){
    button5.style.opacity="0";
    
});
var button6=document.querySelector(".play-button-albums-6");
document.querySelector(".si").addEventListener("mouseover",function(){
    button6.style.opacity="1";
    
});
document.querySelector(".si").addEventListener("mouseout",function(){
    button6.style.opacity="0";
    
});
var button7=document.querySelector(".play-button-albums-7");
document.querySelector(".se").addEventListener("mouseover",function(){
    button7.style.opacity="1";
    
});
document.querySelector(".se").addEventListener("mouseout",function(){
    button7.style.opacity="0";
    
});
document.querySelector(".showmore1").addEventListener("click", function() {
    var popularArtists = document.querySelector(".popular-albums");
    if (popularArtists.style.height === "fit-content") {
        popularArtists.style.height = "46%";
        document.querySelector(".showmore1").innerHTML = "Show all";
    } else {
        popularArtists.style.height = "fit-content";
        document.querySelector(".showmore1").innerHTML = "Hide";
    }
});
//audio-play
// Keep a reference to the currently playing audio element
var currentlyPlayingAudio = new Audio("1.mp3");
var timer = null; // Variable to store the timer ID

document.querySelector(".play-button-albums").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("1.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="flex";
    document.querySelector(".ranbir1").style.display="flex";
    document.querySelector(".ranbir2").style.display="flex";
    document.querySelector(".badshah").style.display="none";
    document.querySelector(".badshah1").style.display="none";
    document.querySelector(".shubh").style.display="none";
    document.querySelector(".shubh1").style.display="none";
    document.querySelector(".arijit").style.display="none";
    document.querySelector(".moose").style.display="none";
    document.querySelector(".moose1").style.display="none";
    document.querySelector(".yaseer").style.display="none";
    document.querySelector(".karan").style.display="none";
    document.querySelector(".vishal").style.display="none";
});

document.querySelector(".first-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("1.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
     // Update progress bar
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime = currentlyPlayingAudio.currentTime;
        var duration = currentlyPlayingAudio.duration;
        var progress = (currentTime / duration) * 100;
        mypbar.value = progress;
    });
    
    // Update song position when progress bar is changed
    mypbar.addEventListener("input",function(){
        var duration = currentlyPlayingAudio.duration;
        currentlyPlayingAudio.currentTime = (this.value * duration) / 100;
    });    
       
    
});



document.querySelector(".second-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("2.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});

document.querySelector(".third-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("3.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
var i = 1; // Initial song index
var currentlyPlayingAudio = new Audio("1.mp3");
var timer = null; // Variable to store the timer ID
function playNextSong() {
    // Increment the song index
    i++;

    // Check if the index exceeds the maximum value (e.g., 13)
    if (i > 13) {
        i = 1; // Reset the index to 1
    }

    // Create a new Audio object for the next song
    var audio = new Audio(i + ".mp3");

    // Update currentlyPlayingAudio to the new Audio object
    currentlyPlayingAudio = audio;

    // Play the next song
    audio.play();

    // Update UI based on the song index
    updateUI();

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(updateCurrentTime, 1000); // Update every second

    // Event listener to get total duration after metadata loaded
    audio.addEventListener("loadedmetadata", function() {
        // Display total duration on the page
        displayTotalDuration();
    });

    // Update progress bar
    updateProgressBar();
}

// Event listener for the ended event
currentlyPlayingAudio.addEventListener("ended", function() {
    // Play the next song when the current song ends
    playNextSong();
});

document.querySelector(".nextsong").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    // Increment the song index
    i++;

    // Check if the index exceeds the maximum value (e.g., 3)
    if (i > 13) {
        i = 1; // Reset the index to 1
    }
    

    // Create a new Audio object for the next song
    var audio = new Audio(i + ".mp3");
    // Play the next song
    audio.play();
    if(i==1){
        document.querySelector(".onplay").innerHTML="Satranga";
        document.querySelector(".artistonplay").innerHTML="Arijit Singh";
    }
    else if(i==2){
        document.querySelector(".onplay").innerHTML="Arjan Velly";
        document.querySelector(".artistonplay").innerHTML="Bhupinder Babbal";
    }
    else if(i==3){
        document.querySelector(".onplay").innerHTML="Pehle Bhi Main";
        document.querySelector(".artistonplay").innerHTML="Vishal Mishra";
    }
    else if(i==4){
        document.querySelector(".onplay").innerHTML="God Damn";
        document.querySelector(".artistonplay").innerHTML="Karan Aujila";
    }
    else if(i==5){
        document.querySelector(".onplay").innerHTML="Like A Snake";
        document.querySelector(".artistonplay").innerHTML="Badshah,Raftaar";
    }
    else if(i==6){
        document.querySelector(".onplay").innerHTML="We Rollin";
        document.querySelector(".artistonplay").innerHTML="Shubh";
    }
    else if(i==7){
        document.querySelector(".onplay").innerHTML="Still Rollin";
        document.querySelector(".artistonplay").innerHTML="Shubh";
    }
    else if(i==8){
        document.querySelector(".onplay").innerHTML="Milne hai mujhse ayi";
        document.querySelector(".artistonplay").innerHTML="Ankit Tiwari";
    }
    else if(i==9){
        document.querySelector(".onplay").innerHTML="Moosetape(intro)";
        document.querySelector(".artistonplay").innerHTML="Moosewala";
    }
    else if(i==10){
        document.querySelector(".onplay").innerHTML="Paradise";
        document.querySelector(".artistonplay").innerHTML="Moosewala";
    }
    else if(i==11){
        document.querySelector(".onplay").innerHTML="Rooh ka Rishta";
        document.querySelector(".artistonplay").innerHTML="Yaseer Desai";
    }
    else if(i==12){
        document.querySelector(".onplay").innerHTML="Softly";
        document.querySelector(".artistonplay").innerHTML="Karan";
    }
    else if(i==13){
        document.querySelector(".onplay").innerHTML="Mere Sohneya";
        document.querySelector(".artistonplay").innerHTML="Vishal Mishra";
    }


    if(i>=1 && i==3){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="flex";
        document.querySelector(".ranbir1").style.display="flex";
        document.querySelector(".ranbir2").style.display="flex";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }

    else if(i==4 || i==5){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="flex";
        document.querySelector(".badshah1").style.display="flex";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==6 || i==7){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="flex";
        document.querySelector(".shubh1").style.display="flex";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==8){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="flex";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==9 || i==10){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="flex";
        document.querySelector(".moose1").style.display="flex";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==11){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="flex";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==12){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="flex";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==13){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="flex";
    }
    // Update currentlyPlayingAudio to the new Audio object
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second

    // Event listener to get total duration after metadata loaded
    audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});

document.querySelector(".prevsong").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
    i--;
    if (i < 1) {
        i = 13; 
    }
    if(i==1){
        document.querySelector(".onplay").innerHTML="Satranga";
        document.querySelector(".artistonplay").innerHTML="Arijit Singh";
    }
    else if(i==2){
        document.querySelector(".onplay").innerHTML="Arjan Velly";
        document.querySelector(".artistonplay").innerHTML="Bhupinder Babbal";
    }
    else if(i==3){
        document.querySelector(".onplay").innerHTML="Pehle Bhi Main";
        document.querySelector(".artistonplay").innerHTML="Vishal Mishra";
    }
    else if(i==4){
        document.querySelector(".onplay").innerHTML="God Damn";
        document.querySelector(".artistonplay").innerHTML="Karan Aujila";
    }
    else if(i==5){
        document.querySelector(".onplay").innerHTML="Like A Snake";
        document.querySelector(".artistonplay").innerHTML="Badshah,Raftaar";
    }
    else if(i==6){
        document.querySelector(".onplay").innerHTML="We Rollin";
        document.querySelector(".artistonplay").innerHTML="Shubh";
    }
    else if(i==7){
        document.querySelector(".onplay").innerHTML="Still Rollin";
        document.querySelector(".artistonplay").innerHTML="Shubh";
    }
    else if(i==8){
        document.querySelector(".onplay").innerHTML="Milne hai mujhse ayi";
        document.querySelector(".artistonplay").innerHTML="Ankit Tiwari";
    }
    else if(i==9){
        document.querySelector(".onplay").innerHTML="Moosetape(intro)";
        document.querySelector(".artistonplay").innerHTML="Moosewala";
    }
    else if(i==10){
        document.querySelector(".onplay").innerHTML="Paradise";
        document.querySelector(".artistonplay").innerHTML="Moosewala";
    }
    else if(i==11){
        document.querySelector(".onplay").innerHTML="Rooh ka Rishta";
        document.querySelector(".artistonplay").innerHTML="Yaseer Desai";
    }
    else if(i==12){
        document.querySelector(".onplay").innerHTML="Softly";
        document.querySelector(".artistonplay").innerHTML="Karan";
    }
    else if(i==13){
        document.querySelector(".onplay").innerHTML="Mere Sohneya";
        document.querySelector(".artistonplay").innerHTML="Vishal Mishra";
    }


    if(i>=1 && i==3){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="flex";
        document.querySelector(".ranbir1").style.display="flex";
        document.querySelector(".ranbir2").style.display="flex";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }

    else if(i==4 || i==5){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="flex";
        document.querySelector(".badshah1").style.display="flex";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==6 || i==7){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="flex";
        document.querySelector(".shubh1").style.display="flex";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==8){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="flex";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==9 || i==10){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="flex";
        document.querySelector(".moose1").style.display="flex";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==11){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="flex";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==12){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="flex";
        document.querySelector(".vishal").style.display="none";
    }
    else if(i==13){
        document.querySelector(".inlib").style.display="none";
        document.querySelector(".playlists-onclick").style.display="block";
        document.querySelector(".ranbir").style.display="none";
        document.querySelector(".ranbir1").style.display="none";
        document.querySelector(".ranbir2").style.display="none";
        document.querySelector(".badshah").style.display="none";
        document.querySelector(".badshah1").style.display="none";
        document.querySelector(".shubh").style.display="none";
        document.querySelector(".shubh1").style.display="none";
        document.querySelector(".arijit").style.display="none";
        document.querySelector(".moose").style.display="none";
        document.querySelector(".moose1").style.display="none";
        document.querySelector(".yaseer").style.display="none";
        document.querySelector(".karan").style.display="none";
        document.querySelector(".vishal").style.display="flex";
    }
    // Create a new Audio object for the next song
    var audio = new Audio(i + ".mp3");

    // Play the next song
    audio.play();

    // Update currentlyPlayingAudio to the new Audio object
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second

    // Event listener to get total duration after metadata loaded
    audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
let songIndex = 0;
let audioElement=new Audio("1.mp3");
let masterplay = document.getElementById("masterplay");
// Handle play/pause button click
masterplay.addEventListener("click", function() {
    if (currentlyPlayingAudio.paused || currentlyPlayingAudio.currentTime <= 0) {
        currentlyPlayingAudio.play();
        masterplay.querySelector("img").src = "pause.svg";
        let mypbar = document.getElementById("mypbar");
        currentlyPlayingAudio.addEventListener("timeupdate", function(){
            var currentTime=currentlyPlayingAudio.currentTime;
            var duration=currentlyPlayingAudio.duration;
            var progress=(currentTime/duration)*100;
            mypbar.value=progress;

        })
    } else {
        currentlyPlayingAudio.pause();
        masterplay.querySelector("img").src = "play.svg";
    }
     

     // Update current time stamp every second
     clearInterval(timer); // Clear previous timer
     timer = setInterval(function() {
         var currentTimeStamp = audio.currentTime;
         var minutes = Math.floor(currentTimeStamp / 60);
         var seconds = Math.floor(currentTimeStamp % 60);
         // Add leading zeros if necessary
         var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
         document.querySelector(".current-time").innerHTML = formattedTime;
     }, 1000); // Update every second
 
     // Event listener to get total duration after metadata loaded
     audio.addEventListener("loadedmetadata", function() {
         // Get the total duration in seconds
         var totalDurationInSeconds = audio.duration;
 
         // Convert total duration to minutes and seconds
         var totalMinutes = Math.floor(totalDurationInSeconds / 60);
         var totalSeconds = Math.floor(totalDurationInSeconds % 60);
 
         // Format the total duration
         var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;
 
         console.log("Total duration:", formattedTotalDuration);
         // Display total duration on the page
         document.querySelector(".duration").innerHTML = formattedTotalDuration;
     });
});
//ek tha raja
document.querySelector(".play-button-albums-1").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("4.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="none";
    document.querySelector(".ranbir1").style.display="none";
    document.querySelector(".ranbir2").style.display="none";
    document.querySelector(".badshah").style.display="flex";
    document.querySelector(".badshah1").style.display="flex";
    document.querySelector(".shubh").style.display="none";
    document.querySelector(".shubh1").style.display="none";
    document.querySelector(".arijit").style.display="none";
    document.querySelector(".moose").style.display="none";
    document.querySelector(".moose1").style.display="none";
    document.querySelector(".yaseer").style.display="none";
    document.querySelector(".karan").style.display="none";
    document.querySelector(".vishal").style.display="none";
});
document.querySelector(".fourth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("4.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
    
});
document.querySelector(".fifth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("5.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
//shubh
document.querySelector(".play-button-albums-2").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("6.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
    // Wait for the metadata to load
    audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="none";
    document.querySelector(".ranbir1").style.display="none";
    document.querySelector(".ranbir2").style.display="none";
    document.querySelector(".badshah").style.display="none";
    document.querySelector(".badshah1").style.display="none";
    document.querySelector(".shubh").style.display="flex";
    document.querySelector(".shubh1").style.display="flex";
    document.querySelector(".arijit").style.display="none";
    document.querySelector(".moose").style.display="none";
    document.querySelector(".moose1").style.display="none";
    document.querySelector(".yaseer").style.display="none";
    document.querySelector(".karan").style.display="none";
    document.querySelector(".vishal").style.display="none";
});
document.querySelector(".sixth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("6.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
document.querySelector(".seventh-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("7.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
//arijit
document.querySelector(".play-button-albums-3").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("8.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="none";
    document.querySelector(".ranbir1").style.display="none";
    document.querySelector(".ranbir2").style.display="none";
    document.querySelector(".badshah").style.display="none";
    document.querySelector(".badshah1").style.display="none";
    document.querySelector(".shubh").style.display="none";
    document.querySelector(".shubh1").style.display="none";
    document.querySelector(".arijit").style.display="flex";
    document.querySelector(".moose").style.display="none";
    document.querySelector(".moose1").style.display="none";
    document.querySelector(".yaseer").style.display="none";
    document.querySelector(".karan").style.display="none";
    document.querySelector(".vishal").style.display="none";
});
document.querySelector(".eighth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("8.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
//moose
document.querySelector(".play-button-albums-4").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("9.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="none";
    document.querySelector(".ranbir1").style.display="none";
    document.querySelector(".ranbir2").style.display="none";
    document.querySelector(".badshah").style.display="none";
    document.querySelector(".badshah1").style.display="none";
    document.querySelector(".shubh").style.display="none";
    document.querySelector(".shubh1").style.display="none";
    document.querySelector(".arijit").style.display="none";
    document.querySelector(".moose").style.display="flex";
    document.querySelector(".moose1").style.display="flex";
    document.querySelector(".yaseer").style.display="none";
    document.querySelector(".karan").style.display="none";
    document.querySelector(".vishal").style.display="none";
});
document.querySelector(".ninth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("9.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
document.querySelector(".tenth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("10.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
//yaseer
document.querySelector(".play-button-albums-5").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("11.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="none";
    document.querySelector(".ranbir1").style.display="none";
    document.querySelector(".ranbir2").style.display="none";
    document.querySelector(".badshah").style.display="none";
    document.querySelector(".badshah1").style.display="none";
    document.querySelector(".shubh").style.display="none";
    document.querySelector(".shubh1").style.display="none";
    document.querySelector(".arijit").style.display="none";
    document.querySelector(".moose").style.display="none";
    document.querySelector(".moose1").style.display="none";
    document.querySelector(".yaseer").style.display="flex";
    document.querySelector(".karan").style.display="none";
    document.querySelector(".vishal").style.display="none";
});
document.querySelector(".eleventh-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("11.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
//karan
document.querySelector(".play-button-albums-6").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("12.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="none";
    document.querySelector(".ranbir1").style.display="none";
    document.querySelector(".ranbir2").style.display="none";
    document.querySelector(".badshah").style.display="none";
    document.querySelector(".badshah1").style.display="none";
    document.querySelector(".shubh").style.display="none";
    document.querySelector(".shubh1").style.display="none";
    document.querySelector(".arijit").style.display="none";
    document.querySelector(".moose").style.display="none";
    document.querySelector(".moose1").style.display="none";
    document.querySelector(".yaseer").style.display="none";
    document.querySelector(".karan").style.display="flex";
    document.querySelector(".vishal").style.display="none";
});
document.querySelector(".twelth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("12.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});
//vishal
document.querySelector(".play-button-albums-7").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
 
    var audio = new Audio("13.mp3");
    audio.play();
    currentlyPlayingAudio = audio;
    

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
    document.querySelector(".inlib").style.display="none";
    document.querySelector(".playlists-onclick").style.display="block";
    document.querySelector(".ranbir").style.display="none";
    document.querySelector(".ranbir1").style.display="none";
    document.querySelector(".ranbir2").style.display="none";
    document.querySelector(".badshah").style.display="none";
    document.querySelector(".badshah1").style.display="none";
    document.querySelector(".shubh").style.display="none";
    document.querySelector(".shubh1").style.display="none";
    document.querySelector(".arijit").style.display="none";
    document.querySelector(".moose").style.display="none";
    document.querySelector(".moose1").style.display="none";
    document.querySelector(".yaseer").style.display="none";
    document.querySelector(".karan").style.display="none";
    document.querySelector(".vishal").style.display="flex";
});
document.querySelector(".thirteenth-song").addEventListener("click", function() {
    // Pause the currently playing audio (if any)
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }

    var audio = new Audio("13.mp3");
    audio.play();
    currentlyPlayingAudio = audio;

    // Update current time stamp every second
    clearInterval(timer); // Clear previous timer
    timer = setInterval(function() {
        var currentTimeStamp = audio.currentTime;
        var minutes = Math.floor(currentTimeStamp / 60);
        var seconds = Math.floor(currentTimeStamp % 60);
        // Add leading zeros if necessary
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        document.querySelector(".current-time").innerHTML = formattedTime;
    }, 1000); // Update every second
     // Wait for the metadata to load
     audio.addEventListener("loadedmetadata", function() {
        // Get the total duration in seconds
        var totalDurationInSeconds = audio.duration;

        // Convert total duration to minutes and seconds
        var totalMinutes = Math.floor(totalDurationInSeconds / 60);
        var totalSeconds = Math.floor(totalDurationInSeconds % 60);

        // Format the total duration
        var formattedTotalDuration = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

        console.log("Total duration:", formattedTotalDuration);
        // Display total duration on the page
        document.querySelector(".duration").innerHTML = formattedTotalDuration;
    });
    let mypbar = document.getElementById("mypbar");
    currentlyPlayingAudio.addEventListener("timeupdate", function(){
        var currentTime=currentlyPlayingAudio.currentTime;
        var duration=currentlyPlayingAudio.duration;
        var progress=(currentTime/duration)*100;
        mypbar.value=progress;
    })
});






