const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("inp-button");

btn.addEventListener("click", () => {
  let inpText = document.getElementById("inp-text").value;
  console.log(inpText);
});
