
// alert("hello and welcome")
const d = new Date();
const greet = d.getHours();

let greeting;

if(greet < 12) {
    greeting = "Good Morning!";
}else if(greet < 18) {
    greeting = "Good Afternoon!";
}else {
    greeting = "Good Evening!";
}

document.querySelector('h1').innerHTML = greeting;

// Animations for the features section
const boxes = document.querySelectorAll(".feature-box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}


// form area
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  // agba loader
  
  

  
