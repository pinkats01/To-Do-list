import '../dist/style.css';

function displayInterface () {
const addProject = document.querySelector(".add-project");
const addProjectPopup = document.querySelector(".add-project-name");
const addProjectButtons = document.querySelectorAll(".add-project-popup-buttons");
const addBtn = document.querySelector(".add-btn");
const projectContainer = document.querySelector(".projects-container");
const projectName = document.querySelector(".project-name-input").value;


addProject.addEventListener("click", () => {addProject.classList.toggle("active");
                                           addProjectPopup.classList.toggle("active")});

/*addProjectPopup.addEventListener("click", () => {addProject.classList.toggle("active");
                                                 addProjectPopup.classList.toggle("active")});*/

addProjectButtons.forEach(button => { button.addEventListener("click", () => { addProject.classList.toggle("active");
                                                                               addProjectPopup.classList.toggle("active")});
});
addBtn.addEventListener("click", createProject());




}

export default displayInterface;