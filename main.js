const yourName = document.querySelector("#yourName");
const msg = document.querySelector("#msg");
const nameTextBox = document.getElementById("nameTextBox");
const formBox = document.querySelector(".form-box");
const shareBTN = document.querySelector(".share-btn");
const goBTN = document.querySelector("#go-btn");
let sname = document.querySelector("#nameinput");
const wish = document.querySelector(".wish");
const audio = document.getElementById("my_audio");

sname.addEventListener("click",function () {
  audio.play()
})

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

const createSubURL = (sParam) => {
  let sPageURL = window.location.search.substring(1);
  let sURLletiables = sPageURL.split("&");
  for (let i = 0; i < sURLletiables.length; i++) {
    let sParameterName = sURLletiables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
};

window.jqs = createSubURL;
let name = decodeURI(createSubURL("bl"));
if (typeof createSubURL("bl") === "undefined") {
  Name = "";
}

const checkName = () => {
  if (Name.length !== 0) {
    Name = Name.replace(/-/g, " ");
    yourName.textContent = Name;
    msg.textContent =
      sname.value + " is wishing you a very good morning full of positivity and spirit :)";
  }
};

checkName();

const createGreeting = () => {
  gtag("event", "click", {
    event_category: "interaction",
    event_label: "goButtonClicked",
  });

  sname = sname.value;

  sname = sname.replace(/@/g, "-");
  sname = sname.replace(/%40/g, "-");
  sname = sname.replace(/\./g, "-");
  if (sname.trim() != "") {
    shareBTN.classList.remove("hide");
    formBox.style.display = "none";
    yourName.textContent = sname;
    msg.textContent = " is wishing you a very good morning full of positivity and spirit :)";
    window.scrollTo(0, 0);
  } else {
    alert("Please Type Your Name First");
    nameTextBox.focus();
  }
};

goBTN.addEventListener("click", createGreeting);

const shareActionWA = () => {
  let shareString = "";
  let whatsappHref;
  shareString += "*" + sname.trim() + "*";

  shareString +=
    " has sent you a pleasant surprise, to know what's inside just click the link below \n👉";
  shareString += (window.location.href.split("?")[0] + "?bl=" + sname)
    .replace("#", "")
    .replace(/ /g, "-");

  whatsappHref = "whatsapp://send?text=" + shareString;
  window.location.href = whatsappHref;
};

shareBTN.addEventListener("click", shareActionWA);
