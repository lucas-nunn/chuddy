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
  const URL = "https://api.emailjs.com/api/v1.0/email/send";

  // if you are reading this I know you can steal and use my API keys
  // if you do then you are a bum
  const data = {
    service_id: "default_service",
    template_id: "template_i71q91o",
    user_id: "T-p91i_grYBseQg2d",
    template_params: {
      email: email.value,
      message: message.value,
    },
  };

  // hit the emailjs API
  fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
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
