/**
 * validate form input
 */

/* relevant html elements */
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");
const sendMessage = document.getElementById("send-message");

/* ensure each input has enough characters */
const validateInput = () => {
  if (emailInput.value.length > 5 && messageInput.value.length > 20) {
    sendMessage.style.display = "block";
  } else {
    sendMessage.style.display = "none";
  }
};

emailInput.addEventListener("input", validateInput);
messageInput.addEventListener("input", validateInput);

/**
 * open, close, and submit contact form
 */
const main = document.getElementById("main");
const contactPopup = document.getElementById("contact-popup");
const contactOpen = document.getElementById("contact-open");
const contactForm = document.getElementById("contact-form");
const loader = document.getElementById("loader");
const successMessage = document.getElementById("success-message");
const failureMessage = document.getElementById("failure-message");
let timeout = null;

/* close the form and reset its fields */
const closeForm = () => {
  contactPopup.style.display = "none";
  contactForm.style.display = "flex";
  sendMessage.style.display = "none";
  loader.style.display = "none";
  successMessage.style.display = "none";
  failureMessage.style.display = "none";
  main.style.overflow = "visible";

  emailInput.value = "";
  messageInput.value = "";
};

/* check for background clicks to close contact form */
const closeViaBackground = (event) => {
  if (event.srcElement.id === "contact-popup") {
    document.removeEventListener("click", closeViaBackground);

    if (timeout) {
      clearTimeout(timeout);
    }

    closeForm();
  }
};

/* open contact form upon button click */
contactOpen.onclick = () => {
  contactPopup.style.display = "flex";
  main.style.overflow = "hidden";

  document.addEventListener("click", closeViaBackground);
};

/* send message upon button click */
sendMessage.onclick = () => {
  // if you are reading this I know you can steal and use my API keys
  // if you do then you are a bum
  const URL = "https://api.emailjs.com/api/v1.0/email/send";

  const data = {
    service_id: "default_service",
    template_id: "template_i71q91o",
    user_id: "T-p91i_grYBseQg2d",
    template_params: {
      email: emailInput.value,
      message: messageInput.value,
    },
  };

  contactForm.style.display = "none";
  loader.style.display = "block";

  fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      successMessage.style.display = "block";
      timeout = setTimeout(() => closeForm(), 5000);
    })
    .catch((error) => {
      console.log(error);
      failureMessage.style.display = "block";
    })
    .finally(() => {
      loader.style.display = "none";
    });
};
