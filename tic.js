let tick = true;
let t;
function ticker(time) {
  let d1 = new Date();
  let dif = (d1.getTime() - d.getTime()) / 1000;
  if (dif >= time) {
    clearInterval(t);
    //return;
  }
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
  //   count++;
  //   if (count == 10){
  //       clearInterval(t);
  //   }
}

//let d = new Date();
//let time;
t = setInterval(ticker.bind(this, 10), 1000);


