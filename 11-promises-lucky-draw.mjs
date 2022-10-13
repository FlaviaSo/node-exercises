function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  luckyDraw("Joe").then((result) => console.log(result));
  luckyDraw("Pinco").then((result) => console.log(result));
  luckyDraw("Pallino").then((result) => console.log(result));