document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        body.classList.toggle('sidebar-active');
    });

    // Cerrar sidebar al hacer clic fuera en dispositivos móviles
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 991.98) {
            if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    body.classList.remove('sidebar-active');
                }
            }
        }
    });

    // Ajustar en cambio de tamaño de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            sidebar.classList.add('active');
            body.classList.add('sidebar-active');
        } else {
            sidebar.classList.remove('active');
            body.classList.remove('sidebar-active');
        }
    });

    // Establecer estado inicial
    if (window.innerWidth > 991.98) {
        sidebar.classList.add('active');
        body.classList.add('sidebar-active');
    }
});