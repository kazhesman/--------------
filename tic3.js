let tick = true;
//let t;

  //   count++;
  //   if (count == 10){
  //       clearInterval(t);
  //   }

t = setInterval(() => {
    if (tick) {
      document.write("Тик ");
      tick = false;
    } else {
      document.write("Так ");
      tick = true;
     }
    }, 1000);

setTimeout(() => { clearInterval(t); alert("stop"); }, 10000)