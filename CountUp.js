  var count = 0;
  var endNumber = 1000;
  var speed = 0;

  window.onload = function(){
    startCount();
  }
  
  startCount = function()
  {
    if(((100*this.count) / this.endNumber) <= 50){ /**50% or minor percent = 1ms */
      this.speed = 1;
    }
    else if(((100*this.count) / this.endNumber) <= 100){/**100% or minor percent = 10ms */
     this.speed = 10;
    }

   if(this.endNumber > this.count) {//end when count arrives endNumber
      setTimeout(() => {
       this.count++ //adds 1 count
       document.getElementById('count').innerHTML = this.count;//change html content
       this.startCount()//restarts process
     },this.speed);      
   }
  }
