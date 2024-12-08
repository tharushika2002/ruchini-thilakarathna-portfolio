function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
      "STUDENT",
      "UI/UX DESIGNER",
      "DEVELOPER"
    ];
    let speed = 100;
    const textElement = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
      if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(eraseText, 1000);
      }
    }

    function eraseText() {
      if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
      }
    }

    typeWriter();
  });


const navLinks = document.querySelectorAll('.links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId); 
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});


document.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-container .link');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});


document.querySelectorAll('.nav-container .link').forEach(link => {
    link.addEventListener('click', function () {
        
        document.querySelectorAll('.nav-container .link').forEach(link => link.classList.remove('active'));

        this.classList.add('active');
    });
});



(function () {
    emailjs.init("COhWms9lhyZY_gvCd");
})();

const msg = document.querySelector(".form-message");

window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_3hmswe5", "template_fk3v74d", this)
            .then(() => {
                msg.textContent = "Email sent successfully!";
                msg.style.color = "green"; 
                msg.style.marginTop = "10px";

                this.reset();
            })
            .catch((error) => {
                msg.textContent = "Failed to send email. Please try again.";
                msg.style.color = "red"; 
                msg.style.marginTop = "10px";
                console.error("Error:", error);
            });
    });
};


document.addEventListener("DOMContentLoaded", () => {
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    const modal = document.getElementById('project-modal');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalImagesContainer = document.getElementById('modal-images');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const closeModalButton = document.querySelector('.close-btn');
    
    let currentImageIndex = 0;
    let imagesArray = [];

    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const description = button.getAttribute('data-description');  
            const images = JSON.parse(button.getAttribute('data-images')); 

            modalDescription.textContent = description;

            imagesArray = images;
            currentImageIndex = 0;

            modalImage.src = imagesArray[currentImageIndex];

            modal.classList.add('show');
        });
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            modalImage.src = imagesArray[currentImageIndex];
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentImageIndex < imagesArray.length - 1) {
            currentImageIndex++;
            modalImage.src = imagesArray[currentImageIndex];
        }
    });
});


