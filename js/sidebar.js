document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');
    
    // Verifica si el sidebar estaba abierto previamente
    if (localStorage.getItem('sidebarOpen') === 'true') {
        body.classList.add('sidebar-active');
        sidebar.classList.add('active');
    } else {
        body.classList.remove('sidebar-active');
        sidebar.classList.remove('active');
    }

    // Evento de toggle para abrir y cerrar el sidebar
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('sidebar-active');
        sidebar.classList.toggle('active');
        
        // Guardar el estado del sidebar en el localStorage
        localStorage.setItem('sidebarOpen', body.classList.contains('sidebar-active'));
    });
    
    // Cerrar el sidebar si se hace click fuera de él en dispositivos pequeños
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = toggleButton.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggleButton && window.innerWidth < 992) {
            body.classList.remove('sidebar-active');
            sidebar.classList.remove('active');
        }
    });
});
