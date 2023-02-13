const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

window.onload = () =>
{
	let element = document.querySelector("h1");
	let innerHTML = element.innerHTML;
	
	action = () =>
	{	
		let iteration = 0;
		
		clearInterval(interval);
		
		interval = setInterval(() =>
		{
			element.innerText = element.innerText
				.split("")
				.map((letter, index) =>
				{
					if(index < iteration)
					{
						return element.dataset.value[index];
					}
				
					return letters[Math.floor(Math.random() * 26)];
				})
				.join("");
			
			if(iteration >= element.dataset.value.length)
			{ 
				clearInterval(interval);
				element.innerHTML = innerHTML;
			}
			
			iteration += 1 / 2;
		}, 1);
	};
	
	action();
}