document.addEventListener("DOMContentLoaded", function () {

    const mobileMenuIcon = document.getElementById("mobile-cta");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileExitIcon = document.getElementById("mobile-exit");

    mobileMenuIcon.addEventListener("click", function () {
        mobileNav.style.width = "70%";
        mobileMenuIcon.style.transform = "rotate(90deg)";
        mobileExitIcon.style.transform = "rotate(0deg)";
        // Add event listener for document click to close the nav when clicking outside
        document.addEventListener("click", closeNavOnClickOutside);
    });
    
    mobileExitIcon.addEventListener("click", function () {
        mobileNav.style.width = "0";
        mobileMenuIcon.style.transform = "rotate(0deg)";
        mobileExitIcon.style.transform = "rotate(90deg)";
        // Remove the event listener when closing the nav
        document.removeEventListener("click", closeNavOnClickOutside);
    });
    
    function closeNavOnClickOutside(event) {
        // Check if the clicked element is outside the mobile nav and not the mobile menu icon
        if (!mobileNav.contains(event.target) && event.target !== mobileMenuIcon) {
            mobileNav.style.width = "0";
            mobileMenuIcon.style.transform = "rotate(0deg)";
            mobileExitIcon.style.transform = "rotate(90deg)";
            // Remove the event listener after closing the nav
            document.removeEventListener("click", closeNavOnClickOutside);
        }
    }


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:9,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        stagePadding: 0,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    })

    

    // Function to start the counting animation
    function startCounting() {
        let project = setInterval(ProjectDone, 20);
        let clients = setInterval(RetClient, 100);
        let referrals = setInterval(ClientRef, 60);
        let happy = setInterval(HapClients, 40);

        let count1 = 1;
        let count2 = 1;
        let count3 = 1;
        let count4 = 1;

        let number = document.getElementById("Projects");
        let number2 = document.getElementById("clients");
        let number3 = document.getElementById("referrals");
        let number4 = document.getElementById("happy");

        function ProjectDone() {
            count1++;
            number.innerHTML = count1;

            if (count1 === 200) {
                clearInterval(project);
                number.innerHTML += "+";
            }
        }

        function RetClient(){
            count2++;
            number2.innerHTML = count2
    
            if(count2 === 20){
                clearInterval(clients)
                number2.innerHTML+= "+"
            }
    
        }

        function ClientRef(){
            count3++;
            number3.innerHTML = count3
    
            if(count3 === 50){
                clearInterval(referrals)
                number3.innerHTML+= "+"
            }
    
        }

        function HapClients(){
            count4++;
            number4.innerHTML = count4
    
            if(count4 === 180){
                clearInterval(happy)
                number4.innerHTML+= "+"
            }
    
        }
        
    }

    startCounting() 

    // Intersection Observer callback function
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !sectionInView) {
                sectionInView = true;
                startCounting();
            } else if (!entry.isIntersecting) {
                sectionInView = false;
            }
        });
    }
    
    const trackRecordsSection = document.getElementById('records');
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    observer.observe(trackRecordsSection);
    

});

const activePage = window.location.pathname
const navLinks = document.querySelectorAll('nav a').forEach(link =>{
        if (link.href.includes (activePage)) {
        link.classList.add('active');
    }
})



// JavaScript (script.js)
document.getElementById('myForm').addEventListener('submit', function (event) {
    if (!FormValidation()) {
        // Prevent the form from being submitted if validation fails
        event.preventDefault();
    }
});

// Add input event listeners directly to input elements
document.getElementById('Name').addEventListener('input', handleInput);
document.getElementById('Email').addEventListener('input', handleEmailInput);
document.getElementById('select').addEventListener('input', handleInput);
document.getElementById('message').addEventListener('input', handleInput);

function handleInput() {
    // Remove the 'outline' class when the user starts typing
    this.classList.remove('outline');
}

function handleEmailInput() {
    // Check if the email is valid and remove the 'outline' class
    if (isValidEmail(this.value)) {
        this.classList.remove('outline');
    } else {
        // Add the 'outline' class if the email is not valid
        this.classList.add('outline');
    }
}

function FormValidation() {
    var formElements = document.querySelectorAll('input, select, textarea');
    var isValid = true;

    formElements.forEach(function (element) {
        // Check if the field is empty when the submit button is clicked
        if (element.value === '') {
            // Add the 'outline' class to the empty field
            element.classList.add('outline');
            isValid = false;
        }
    });

    // Check specific conditions for the email field
    var emailElement = document.getElementById('Email');
    if (!isValidEmail(emailElement.value)) {
        // Add the 'outline' class if the email is not valid
        emailElement.classList.add('outline');
        isValid = false;
    }

    return isValid;
}

// Function to check if the email is valid
function isValidEmail(email) {
    // using regular expression to validate the email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
