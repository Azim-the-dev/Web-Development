function checkboxUncheck() {
    let checkbox = document.querySelector('#checkbox');
    checkbox.checked = false;
}

function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    let scrollPosition = section.offsetTop - 75;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}