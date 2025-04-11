

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalContent = document.querySelector(".modal-content");
    const body = document.body;
    const inputs = document.querySelectorAll("input, textarea");

    const projectData = {
        project1: { title: "Project 1", image: "images/project1.jpg", description: "Description of Project 1." },
        project2: { title: "Project 2", image: "images/project2.jpg", description: "Description of Project 2." },
        project3: { title: "Project 3", image: "images/project3.jpg", description: "Description of Project 3." }
    };

    window.openModal = function (projectId) {
        if (projectData[projectId]) {
            document.getElementById("modal-title").textContent = projectData[projectId].title;
            document.getElementById("modal-image").src = projectData[projectId].image;
            document.getElementById("modal-description").textContent = projectData[projectId].description;
            
            modal.style.display = "flex";
            body.classList.add("modal-open");

            inputs.forEach(input => input.blur());
        }
    };

    window.closeModal = function () {
        modal.style.display = "none";
        body.classList.remove("modal-open");
    };

    modal.addEventListener("click", function (event) {
        if (!modalContent.contains(event.target)) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.style.display === "flex") {
            closeModal();
        }
    });
});
