function playBark() {
  // Prehrá zvuk štekania
  const barkSound = document.getElementById("bark-sound");
  barkSound.play();

  // Pridaj animáciu psa
  const dog = document.querySelector(".dog");
  dog.classList.add("clicked");

 
  const directions = [
    { x: 0, y: -30 },  
    { x: 0, y: 30 },   
    { x: 30, y: 0 },   
    { x: -30, y: 0 },  
    { x: 20, y: -20 }, 
    { x: 20, y: 20 },  
    { x: -20, y: -20 },
    { x: -20, y: 20 }, 
  ];

  
  directions.forEach(direction => {
    const slime = document.createElement("div");
    slime.classList.add("slime");

    slime.style.left = `50%`;
    slime.style.top = `50%`;

   
    slime.style.transform = `translate(-50%, -50%) translate(${direction.x}px, ${direction.y}px)`;


    document.querySelector(".card").appendChild(slime);


    slime.classList.add("slime-animate");


    setTimeout(() => {
      slime.remove(); 
    }, 1000);
  });

  setTimeout(() => {
    dog.classList.remove("clicked");
  }, 1000);
}
