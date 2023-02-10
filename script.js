const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
  let interations = 0;
  
  const interval = setInterval(() => {
    event.target.innterText = event.target.innerText.split("")
      .map((letter, index) => {
      if (index < iterations) {
        return event.target.dataset.value[index];
      }
      
      return letters[Math.floor(Math.random() * 26)];
    })
      .join("");
    
    if (iterations >= event.target.dataset.value.length) {
      clearInterval(iterval);
    }
    
    iterations += 1 / 3;
  }, 1000);
}
