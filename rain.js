var overlay = document.getElementById("preloaderOverlay");
window.addEventListener("load", function(){
    overlay.style.display="none";

  })



var bg = new Image();
bg.src = "rain.jpg";
var ctx = document.getElementById('my_canvas').getContext('2d');
	var ctx2 = document.getElementById('my_canvas2').getContext('2d');
	var cW = ctx.canvas.width, cH = ctx.canvas.height;
	var rain = []; 	var drops = [];


	
	function addRain(){
		var x = Math.floor(Math.random() * cW) + 1;
		var y = -5; 
		var s = Math.floor(Math.random() * 5) + 1;
		rain.push({"x":x,"y":y,"s":s});
	}



function addDrops(){
		var x = Math.floor(Math.random() * cW) + 1;
		var y = 0;   
		var s = Math.floor(Math.random() * 5) + 1;
		drops.push({"x":x,"y":y, "s":s});
	}


	function makeRain(){
		addRain();
		addRain();

		for(var i = 0; i < rain.length; i++){
		ctx.fillStyle = "rgba(255,255,255,.75)";
		
			ctx.beginPath();
            ctx.fillRect(rain[i].x-200, rain[i].y+=rain[i].s*.5, rain[i].s*.5, rain[i].s*2); 
            ctx.fill();
            
			if(rain[i].y > cH+250){
				rain.splice(i,1);
			}
	
        }
    }


function makeDrops(){
		addDrops();
		addDrops();

		for(var i = 0; i < drops.length; i++){
		ctx2.fillStyle = "rgba(255,255,255,.5)";
            ctx2.beginPath();
            ctx2.arc(drops[i].x-100, drops[i].y+=drops[i].s*.5, drops[i].s*.5, 0, Math.PI*2, false);
            ctx2.fill();
			if(drops[i].y > cH){
				drops.splice(i,1);
			}
	
        }
    }


	function animate(){
      ctx.save(); ctx2.save();
		ctx.clearRect(0, 0, cW, cH);
		ctx2.clearRect(0, 0, cW, cH);
		ctx.drawImage(bg,0,0, 700, 400);
		ctx.rotate(-.6);
		makeRain();
        makeDrops();
		ctx.restore(); ctx2.restore();
	}

window.addEventListener('load', function(event) {
setInterval(animate, 50);
  });



