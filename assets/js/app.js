document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidenav').classList.add('open');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidenav').classList.remove('open');
});
