// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


var sock = document.getElementById("sock");
document.addEventListener("mousemove", getMouse); 


sock.style.position = "absolute"; //css		
var sockpos = {x:0, y:0};

setInterval(followMouse, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

var dir = "right";
function getMouse(e){
  mouse.x = e.pageX;
  mouse.y = e.pageY;
    //Checking directional change
    if(mouse.x > sockpos.x){
      dir = "right";
    } else {
      dir = "left";
    }
}

function followMouse(){
  //1. find distance X , distance Y
  var distX = mouse.x - sockpos.x;
  var distY = mouse.y - sockpos.y;
  //Easing motion
   //Progressive reduction of distance 
  sockpos.x += distX/5;
  sockpos.y += distY/2;
  
  sock.style.left = sockpos.x + "px";
  sock.style.top = sockpos.y + "px";
  
  
    //Apply css class 
    if (dir == "right"){
      sock.setAttribute("class", "right");
    } else {
      sock.setAttribute("class", "left");        
    }
  
}
