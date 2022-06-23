import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

document.addEventListener("DOMContentLoaded", () => {
  const laughImg = document.getElementById("laughImg");
  laughImg.src = laughing;

  document.getElementById("jokeBtn").addEventListener("click", generateJoke);

  generateJoke();
});
