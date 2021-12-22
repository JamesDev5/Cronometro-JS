var hours = 0;
var min = 0;
var sec = 0;
var interval;
var time = document.getElementsByTagName("div")[0];
var btnStop = document.getElementById("btnStop");
var btnReset = document.getElementById("btnReset");


function timer(){
      time.innerHTML = hours+ ":" + min + ":"+ sec ;  

      sec++;
      if(sec == 60 ){
            clearInterval(interval);
     interval = setInterval(timer, 990);

            

            
            sec = 0;
            min = min+1;
            sec++;
      }
      else if(min == 60){
            sec++;
            
                   clearInterval(interval);
           interval = setInterval(timer, 990);
      
                  
      
                  
                  sec = 0;
                  min = 0;
                  hours = hours +1;
                  sec++;
            }
            // if(hours = 2){}
      }
        
          document.getElementById("btnStart").addEventListener("click", start) 

      
                 function start(){
                       clearInterval(interval);
                  interval = setInterval(timer, 990);
                  btnStart.style.background ="#B8CCBA";
                  btnStop.style.background="#E8F1F2";  
                       
                 }
                 function remove(){

                       document.getElementById("btnStart").removeEventListener("click", start)
                 }
 
  





function stop(){
      btnStop.style.background="#ff6b6b";
      btnStart.style.background ="#E8F1F2";

      clearInterval(interval);
    

}
function reset(){
      btnStart.style.background ="#E8F1F2";
      btnStop.style.background="#E8F1F2";
      clearInterval(interval);
      hours = 0;
      min =0;
      sec = 0;
      
      time.innerHTML = hours+ ":" + min + ":"+ sec ;   
}

