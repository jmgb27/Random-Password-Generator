const generateBtn = document.getElementById("generate")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const dd = document.getElementById("pLength")

generateBtn.addEventListener("click", () => {
    box1.innerText = generatePassword(parseInt(dd.options[dd.selectedIndex].text))
    box2.innerText = generatePassword(parseInt(dd.options[dd.selectedIndex].text))
    box3.innerText = generatePassword(parseInt(dd.options[dd.selectedIndex].text))
    box4.innerText = generatePassword(parseInt(dd.options[dd.selectedIndex].text))
})

generatePassword = (x) => {
    var length = x,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}_+:><?:",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

box1.onclick = function() {
    document.execCommand("copy");
  }

box1.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", box1.textContent);
      alert("Copied Text to Clipboard")
    }
  });

box2.onclick = function() {
    document.execCommand("copy");
  }

box2.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", box2.textContent);
      alert("Copied Text to Clipboard")
    }
  });

box3.onclick = function() {
    document.execCommand("copy");
  }

box3.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", box3.textContent);
      alert("Copied Text to Clipboard")
    }
  });

box4.onclick = function() {
    document.execCommand("copy");
  }

box4.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", box4.textContent);
      alert("Copied Text to Clipboard")
    }
  });




