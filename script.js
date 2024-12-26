function playBark() {
  // Prehrá zvuk štekania
  const barkSound = document.getElementById("bark-sound");
  barkSound.play();

  // Pridaj animáciu psa
  const dog = document.querySelector(".dog");
  dog.classList.add("clicked");

  // Smermi slín: hore, dolu, vpravo, vľavo, šikmo
  const directions = [
    { x: 0, y: -30 },  // Hore
    { x: 0, y: 30 },   // Dole
    { x: 30, y: 0 },   // Vpravo
    { x: -30, y: 0 },  // Vľavo
    { x: 20, y: -20 }, // Šikmo hore vpravo
    { x: 20, y: 20 },  // Šikmo dole vpravo
    { x: -20, y: -20 },// Šikmo hore vľavo
    { x: -20, y: 20 }, // Šikmo dole vľavo
  ];

  // Vytvorenie viacerých slín
  directions.forEach(direction => {
    const slime = document.createElement("div");
    slime.classList.add("slime");

    // Pevná stredová pozícia, kde začne slina (u psa)
    slime.style.left = `50%`;
    slime.style.top = `50%`;

    // Posunutie sliny na určenú pozíciu
    slime.style.transform = `translate(-50%, -50%) translate(${direction.x}px, ${direction.y}px)`;

    // Pridá slinu do karty
    document.querySelector(".card").appendChild(slime);

    // Aktivuje animáciu sliny
    slime.classList.add("slime-animate");

    // Po skončení animácie sliny zmiznú
    setTimeout(() => {
      slime.remove(); // Odstráni slinu po animácii
    }, 1000);
  });

  // Odstráni animáciu psa po sekunde
  setTimeout(() => {
    dog.classList.remove("clicked");
  }, 1000);
}
