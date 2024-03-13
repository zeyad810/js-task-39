let currentDate = new  Date(2024,10,5,7,7,7).getTime();

function countDown(time){
    // get date now
    let dateNow =new Date().getTime();
    // calculate the difference between the future and present time
    let diff=  time -dateNow  ;
    
    // time unit 
    let cdDay = Math.floor(diff / (1000* 60 * 60 * 24));
    let  cdHour =Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let min  =Math.floor((diff%(1000*60*60))/(1000*60));
    let sec =Math.floor((diff%(1000*60))/(1000));
    document.getElementById('days').textContent = cdDay <0 ? "0" + cdDay : cdDay; 
    document.getElementById('h').innerHTML = cdHour <0 ? "0" + cdHour : cdHour;
    document.getElementById('min').innerHTML = min <0 ? "0" + min : min;
    document.getElementById('sec').innerHTML = sec  <0 ? "0" + sec : sec;
   if(diff < 0) {
       clearInterval(interval);
       alert("It's your day to shine!");
   }
   setInterval(()=>{
    countDown(currentDate)

},1000)   
}
countDown(currentDate)
