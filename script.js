const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const results = document.querySelector("#result");

const checkPalindrome = (input) => {
  const originalInput = input;

  if (input === "") {
    alert("Please input a value");
    return;
  }

  results.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let resultMessage = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a <em>palindrome.</em>`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMessage;
  results.appendChild(pTag);

  results.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
  checkPalindrome(textInput.value);
  textInput.value = "";
});

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome(textInput.value);
    textInput.value = "";
  }
});
