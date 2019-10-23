import React, { useEffect } from 'react';

const Aww = () => {

	useEffect(()=>{
		let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d", {alpha: false});
    let w = window.innerWidth;
    let h = window.innerHeight;
    let c2 = document.createElement("canvas");
    let c2ctx = c2.getContext("2d", {alpha: false});
    let sineStart = Math.random() * 200;
    let numSines = Math.floor(Math.random() * 10 + 20);
    let slices = 24; 

    function updateCanvasSize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      c2.width = w;
      c2.height = h;  
    }

    function drawSine(ctx, w, hue, sineStart, period, amp) {
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'hsl(' + hue + ',100%, 50%)';

      for(let i = 0; i < w; i++) {
        let count = (sineStart + i);

        let theta = Math.PI * 2 * count / period
        ctx.lineTo(i,(1 + Math.sin(theta)) * amp);
      }
      
      ctx.stroke();
    }

    function draw(t) {
      c2ctx.fillStyle = "#33a";
      c2ctx.fillRect(0, 0, w, h);

      // draw into offscreen canvas
      c2ctx.save();
      c2ctx.globalCompositeOperation = "lighter";

      let sineIncr = Math.sin(Math.PI * 2 * t / 6000);
      
      let hueRotate = 360 / numSines;
      for(let i = 0; i < numSines; i++) {
          let amp = i * 5;
          drawSine(c2ctx, w, ((sineStart + hueRotate * i) % 360) , sineStart, 100 + i * 15, amp); 
      }
        
      sineStart -= (1 - sineIncr * 0.25);

      c2ctx.restore();

      // draw the kaleidoscopic image

      ctx.save();
      ctx.fillStyle = "#33a";
      ctx.fillRect(0, 0, w, h);

      ctx.translate(w / 2, h / 2);

      for (let i = 0; i < slices; i ++) {
        ctx.save();
        // ctx.globalCompositeOperation = "lighter";

        let theta = Math.PI * 2 * i / slices;
        ctx.rotate(theta);

        let slice = Math.PI * 2 * 1 / slices;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(w, 0);
        ctx.lineTo(Math.cos(slice) * w, Math.sin(slice) * w);
        // ctx.stroke();
        ctx.clip();

        if(i % 2 == 1) {
          ctx.rotate(slice);
          ctx.scale(1, -1);
        }
        ctx.drawImage(c2, 0, 0);

        ctx.restore();
      }
      ctx.restore();
      requestAnimationFrame(draw);
    }

    updateCanvasSize();
    window.addEventListener("resize", () => updateCanvasSize());

    requestAnimationFrame(draw);
	},[])

	return (
		<div>
				<canvas id="canvas" width="300" height="300"></canvas>
		</div>
	);
}

export default Aww;
