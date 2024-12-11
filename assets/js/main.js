document.addEventListener("DOMContentLoaded", function () {
  Fancybox.bind("[data-fancybox='gallery']", {
      // Optional configurations
  });

  AOS.init({
      offset: 120,
      delay: 0,
      duration: 900,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
  });

  // Additional functionality or scripts can go here
  document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector("#sendMessageButton");
    const form = document.querySelector("#contactForm");
  
    if (sendButton && form) {
        sendButton.addEventListener("click", function (event) {
            event.preventDefault();
  
            const formData = new FormData(form);
            const firstName = formData.get("firstName") || "";
            const lastName = formData.get("lastName") || "";
            const email = formData.get("email") || "";
            const subject = formData.get("subject") || "";
            const message = formData.get("message") || "";
  
            // Log form values to debug
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Email:", email);
            console.log("Subject:", subject);
            console.log("Message:", message);
  
            // Check for missing fields
            if (!firstName || !email || !message) {
                alert("Please fill in all required fields!");
                return;
            }
  
            const mailtoLink = `mailto:victadejugbe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
              `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
          )}`;
          
            console.log("Mailto Link:", mailtoLink);
  
            window.location.href = mailtoLink; // Trigger mail client
            form.reset(); // Clear form (optional)
        });
    } else {
        console.error("Send button or form not found!");
    }
  });
  

}); // End of DOMContentLoaded

