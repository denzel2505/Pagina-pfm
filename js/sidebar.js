document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');
    
    // Asegurarse de que el sidebar comience cerrado
    body.classList.remove('sidebar-active');
    sidebar.classList.remove('active');
    
    // Manejar el toggle del sidebar
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('sidebar-active');
        sidebar.classList.toggle('active');
        
        // Opcional: Guardar el estado en localStorage para mantener la preferencia del usuario
        localStorage.setItem('sidebarOpen', body.classList.contains('sidebar-active'));
    });
    
    // Opcional: Cerrar el sidebar en dispositivos móviles cuando se hace clic fuera
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = toggleButton.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggleButton && window.innerWidth < 992) {
            body.classList.remove('sidebar-active');
            sidebar.classList.remove('active');
        }
    });
});