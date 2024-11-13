// Animação de rolagem para mostrar projetos
window.addEventListener("scroll", function() {
    var projects = document.querySelectorAll('.project-card');

    projects.forEach(function(project) {
        var position = project.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            project.classList.add("fade-in-visible");
        } else {
            project.classList.remove("fade-in-visible");
        }
    });
});

// Filtro de projetos
function filterProjects(category) {
    var projects = document.querySelectorAll('.project-card');

    projects.forEach(function(project) {
        if (project.classList.contains(category) || category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
