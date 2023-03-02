import '../dist/style.css';

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

  function projectTasksDisplay(){
    
  }

  addProject.addEventListener("click", () => {addProject.classList.toggle("active");
                                            addProjectPopup.classList.toggle("active")});
  addProjectButtons.forEach(button => { button.addEventListener("click", () => { addProject.classList.toggle("active");
                                                                                addProjectPopup.classList.toggle("active")});
  });

  addBtn.addEventListener("click", () => {let projectName = storeProjectName();
                                          const project = document.createElement('div');
                                          project.textContent = projectName;
                                          project.classList.add('project');
                                          projectContainer.appendChild(project) });



}

export {displayInterface, storeProjectName};