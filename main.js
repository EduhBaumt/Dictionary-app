const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("inp-button");

btn.addEventListener("click", () => {
  let inpText = document.getElementById("inp-text").value;
  fetch(`${url}${inpText}`).then((response) =>
    response
      .json()
      .then((data) => {
        result.innerHTML = ` 
       <div class="word" id="word">
          <h3>${inpText}</h3>
        </div>
        <div class="details" id="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetics[0].text || data[0].phonetics[1].text}</p>
        </div>
        <p class="word-meaning" id="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example" id="word-example">
          ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="error-message" > Couldn't find the word...</h3>`;
      }),
  );
});
