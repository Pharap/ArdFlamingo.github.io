const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
  let interations = 0;
  
  const interval = setInterval(() => {
    event.target.innterText = event.target.innerText.split("")
      .map(letter => letters[Math.floor(Math.random() * 26)];
      .join("");
    
    if (iterations >- 9) clearInterval(iterval);
    
    iterations += 1;
  }, 1000);
}
