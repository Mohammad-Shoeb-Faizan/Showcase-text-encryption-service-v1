async function encryptText() {
  const inputText = document.getElementById("inputText").value;
  const shift = parseInt(document.getElementById("shift").value);

  const response = await fetch("https://text-encryption.onrender.com/encrypt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: inputText, shift }),
  });

  const data = await response.json();
  document.getElementById(
    "result"
  ).textContent = `Encrypted: ${data.encryptedText}`;
}

async function decryptText() {
  const inputText = document.getElementById("inputText").value;
  const shift = parseInt(document.getElementById("shift").value);

  const response = await fetch("https://text-encryption.onrender.com/decrypt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ encryptedText: inputText, shift }),
  });

  const data = await response.json();
  document.getElementById(
    "result"
  ).textContent = `Decrypted: ${data.decryptedText}`;
}
