const  cloak = document.getElementById('clock');
//const cloak = document.querySelector('#cloak');


//every 1 second the time change and show the time
setInterval(function(){
   let date = new Date();
   //console.log(date.toLocaleTimeString());
   cloak.innerHTML =date.toLocaleTimeString(); // show the time current time
},1000);