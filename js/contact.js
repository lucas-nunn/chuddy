/* ----- open, close, and submit contact form ----- */
const main = document.getElementById("main");
const contact = document.getElementById("contact");
const contactOpen = document.getElementById("contact-open");
const sendMessage = document.getElementById("send-message");

/* check for background clicks to close contact form */
const closeViaBackground = (event) => {
  if (event.srcElement.id === "contact") {
    document.removeEventListener("click", closeViaBackground);

    contact.style.display = "none";
    main.style.overflow = "visible";
    send.style.display = "none";

    email.value = "";
    message.value = "";
  }
};

/* open contact form upon button click */
contactOpen.onclick = () => {
  contact.style.display = "flex";
  main.style.overflow = "hidden";

  document.addEventListener("click", closeViaBackground);
};

/* send message upon button click */
sendMessage.onclick = (event) => {
  // emailjs API data
  const data = {
    service_id: "",
  };
};

/* ----- validate input -----  */
const email = document.getElementById("email");
const message = document.getElementById("message");
const send = document.getElementById("send-message");

const validateInput = () => {
  if (email.value.length > 5 && message.value.length > 20) {
    send.style.display = "block";
  } else {
    send.style.display = "none";
  }
};

email.addEventListener("input", validateInput);
message.addEventListener("input", validateInput);
