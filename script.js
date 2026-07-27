const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    emailjs.send(
        "service_7cje1g3",
        "template_npipsci",
        params
    )
    .then(function(){

        alert("Message sent successfully!");

        form.reset();

    })
    .catch(function(error){

        alert("Failed to send message.");

        console.log(error);

    });

});