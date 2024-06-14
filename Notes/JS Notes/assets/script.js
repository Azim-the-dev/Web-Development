if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

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