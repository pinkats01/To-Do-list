import '../dist/style.css';
import { getProjects } from './create-project';

function storeProjectName(){
  let projectName = document.querySelector(".project-name-input").value;
  return projectName;
}

function displayInterface () {

  const addProject = document.querySelector(".add-project");
  const addProjectPopup = document.querySelector(".add-project-name");
  const addProjectButtons = document.querySelectorAll(".add-project-popup-buttons");
  const addBtn = document.querySelector(".add-btn");
  const projectContainer = document.querySelector(".projects-container");

  let projects = getProjects();

  function createProject(){
    let projectName = this.name;
    const project = document.createElement('div');
    project.textContent = projectName;
    project.classList.add('project');
    projectContainer.appendChild(project);
  }

 
  addProject.addEventListener("click", () => {addProject.classList.toggle("active");
                                            addProjectPopup.classList.toggle("active")});
  addProjectButtons.forEach(button => { button.addEventListener("click", () => { addProject.classList.toggle("active");
                                                                                addProjectPopup.classList.toggle("active")});
  });

  addBtn.addEventListener("click", () => { projects.forEach(project => console.log(this.name)) });



}

export {displayInterface, storeProjectName};