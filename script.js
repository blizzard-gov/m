function toggleFeatures() {
  var featureList = document.getElementById("feature-list");
  var setupContainer = document.getElementById("setup-container");
  var contactContainer = document.getElementById("contact-container");
  var homePopup = document.getElementById("home-popup"); 
  var overlay = document.getElementById("popup-overlay");

  if (featureList.classList.contains("visible")) {
    featureList.classList.remove("visible");
    overlay.classList.remove("overlay-visible");
  } else {
    featureList.classList.add("visible");
    setupContainer.classList.remove("visible"); 
    contactContainer.classList.remove("visible"); 
    homePopup.classList.remove("visible"); 
    overlay.classList.add("overlay-visible");
  }
}
  function toggleSetup() {
    var setupContainer = document.getElementById("setup-container");
    var featureList = document.getElementById("feature-list");
    var contactContainer = document.getElementById("contact-container");
    var homePopup = document.getElementById("home-popup");
    var overlay = document.getElementById("popup-overlay");
  
    if (setupContainer.classList.contains("visible")) {
      setupContainer.classList.remove("visible");
      overlay.classList.remove("overlay-visible");
    } else {
      setupContainer.classList.add("visible");
      featureList.classList.remove("visible");
      contactContainer.classList.remove("visible");
      homePopup.classList.remove("visible"); 
      overlay.classList.add("overlay-visible");
    }
  }
  
  function toggleContact() {
    var setupContainer = document.getElementById("setup-container");
    var featureList = document.getElementById("feature-list");
    var contactContainer = document.getElementById("contact-container");
    var homePopup = document.getElementById("home-popup");
    var overlay = document.getElementById("popup-overlay");
  
    if (contactContainer.classList.contains("visible")) {
      contactContainer.classList.remove("visible");
      overlay.classList.remove("overlay-visible");
    } else {
      contactContainer.classList.add("visible");
      setupContainer.classList.remove("visible");
      featureList.classList.remove("visible");
      homePopup.classList.remove("visible"); 
      overlay.classList.add("overlay-visible");
    }
  }
  
  

  window.addEventListener("load", function () {
    var homePopup = document.getElementById("home-popup");
    homePopup.classList.add("visible");
    var overlay = document.getElementById("popup-overlay");
    overlay.classList.add("overlay-visible");
  });

  
  function closeHomePopup() {
    var homePopup = document.getElementById("home-popup");
    homePopup.classList.remove("visible");
    var overlay = document.getElementById("popup-overlay");
    overlay.classList.remove("overlay-visible");
  }

function toggleHome() {
var homePopup = document.getElementById("home-popup");
var overlay = document.getElementById("popup-overlay");

if (!homePopup.classList.contains("visible")) {
 
  closePopups();
  
  homePopup.classList.add("visible");
  overlay.classList.add("overlay-visible");
}
}


function closePopups() {
var popups = document.querySelectorAll(".popup-container.visible");
var overlay = document.getElementById("popup-overlay");

popups.forEach(function(popup) {
  popup.classList.remove("visible");
});

overlay.classList.remove("overlay-visible");
}


window.addEventListener("load", function () {
toggleHome();
});

function togglePopup(popupId) {
var popup = document.getElementById(popupId);
var overlay = document.getElementById("popup-overlay");

if (popup.classList.contains("visible")) {
  popup.classList.remove("visible");
  overlay.classList.remove("overlay-visible");
} else {
  popup.classList.add("visible");
  overlay.classList.add("overlay-visible");
}
}

function toggleHome() {
togglePopup("home-popup");
}


window.addEventListener("load", function () {
togglePopup("home-popup");
});

function refreshPage() {
window.location.reload();
}

function toggleTOS() {
togglePopup('tos-popup');
}


function togglePrivacyPolicy() {
togglePopup('privacy-popup');
}

function copyMail() {
const email = "hypersoftwaregroup@proton.me"; 
const tempInput = document.createElement("input");
tempInput.value = email;
document.body.appendChild(tempInput);
tempInput.select();
document.execCommand("copy");
document.body.removeChild(tempInput);

const mailIcon = document.querySelector(".bi-envelope-at");
mailIcon.classList.add("copied");
const copiedMessage = document.createElement("div");
copiedMessage.className = "copied-message";
copiedMessage.innerText = "Mail Successfully Copied!";
document.body.appendChild(copiedMessage);
setTimeout(function() {
  mailIcon.classList.remove("copied");
  document.body.removeChild(copiedMessage);
}, 2000);
}
const headerText = "Introducing Hyper Fortnite Booster";
const paragraphText = "Elevate Your Gameplay with Advanced Performance Optimization";
const typingSpeed = 50; 

let headerIndex = 0;
let paragraphIndex = 0;

function typeHeaderText() {
  if (headerIndex < headerText.length) {
    document.getElementById("typing-header").innerHTML += headerText.charAt(headerIndex);
    headerIndex++;
    setTimeout(typeHeaderText, typingSpeed);
  } else {
    typeParagraphText();
  }
}

function typeParagraphText() {
  if (paragraphIndex < paragraphText.length) {
    document.getElementById("typing-paragraph").innerHTML += paragraphText.charAt(paragraphIndex);
    paragraphIndex++;
    setTimeout(typeParagraphText, typingSpeed);
  } else {
    document.getElementById("typing-cursor").style.display = "none";
  }
}

typeHeaderText();


document.getElementById("email").addEventListener("click", function() {
  const emailText = this.innerText;
  copyToClipboard(emailText);
  showCopiedMessage();
});

function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function showCopiedMessage() {
  const copiedMessage = document.getElementById("copied-message");
  copiedMessage.style.display = "block";
  setTimeout(() => {
    copiedMessage.style.display = "none";
  }, 2000);
}

const downloadPdfLink = document.getElementById('downloadPdf');

downloadPdfLink.addEventListener('click', () => {
  const htmlContent = document.documentElement.outerHTML;

  html2pdf().from(htmlContent).save('Software_Usage_Agreement.pdf');
});
