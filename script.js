const text = document.querySelector(".myname");
console.log(text);
text.innerHTML = text.textContent.replace(/\S/g, "");
