window.addEventListener('deviceorientation', handleOrientation, true);
// Gyro (Tilt) Effect
// Gyro (Tilt) Effect
// Gyro effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('is-sticky');
    } else {
        navbar.classList.remove('is-sticky');
    }
});

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousemove", function (e) {
    const gyroContainer = document.querySelector(".gyro-container");
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    gyroContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

const card = document.getElementById('gyro-card');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateX = percentY * 10;
    const rotateY = percentX * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-percentX * 20}px ${-percentY * 20}px 40px rgba(0,0,0,0.3)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
});

window.addEventListener('load', function() {
    const skillBars = document.querySelectorAll('.skill-percentage');
    
    skillBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = percentage;
    });
  });

  
  
// Function to handle device orientation
function handleOrientation(event) {
    const alpha = event.alpha; // Rotation around the z-axis
    const beta = event.beta;   // Rotation around the x-axis
    const gamma = event.gamma; // Rotation around the y-axis

    // Example: Rotate the main container based on device orientation
    const mainContainer = document.getElementById('welcome-hero');
    mainContainer.style.transform = `rotateY(${gamma}deg) rotateX(${beta}deg)`;
}

// JavaScript code to make the main page highly dynamic

// Function to update the about section dynamically
function updateAboutSection() {
    const aboutContent = `
        <h2>About Me</h2>
        <p>I am a dynamic web developer with a passion for creating interactive web applications.</p>
    `;
    document.getElementById('about').innerHTML = aboutContent;
}

// Function to fetch and update skills dynamically
function fetchSkills() {
    const skills = [
        { name: 'HTML', level: '90%' },
        { name: 'CSS', level: '85%' },
        { name: 'JavaScript', level: '80%' }
    ];
    const skillsContainer = document.getElementById('skills');
    skillsContainer.innerHTML = ''; // Clear existing content
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.innerHTML = `<h3>${skill.name}</h3><p>Level: ${skill.level}</p>`;
        skillsContainer.appendChild(skillElement);
    });
}

// Function to load portfolio items dynamically
function loadPortfolio() {
    const portfolioItems = [
        { title: 'Project 1', image: 'assets/images/portfolio/p1.jpg' },
        { title: 'Project 2', image: 'assets/images/portfolio/p2.jpg' }
    ];
    const portfolioContainer = document.getElementById('portfolio');
    portfolioContainer.innerHTML = ''; // Clear existing content
    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<img src="${item.image}" alt="${item.title}"/><p>${item.title}</p>`;
        portfolioContainer.appendChild(itemElement);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute("data-width"); // Get the width from data-width
                    entry.target.style.setProperty("--progress-width", `${width}%`); // Set the CSS variable
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the element is visible
        }
    );

    progressBars.forEach((bar) => {
        observer.observe(bar); // Observe each progress bar
    });
});

// Call functions to initialize dynamic content

updateAboutSection();
fetchSkills();
loadPortfolio();
