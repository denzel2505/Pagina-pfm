document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');
    
    body.classList.remove('sidebar-active');
    sidebar.classList.remove('active');
    
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('sidebar-active');
        sidebar.classList.toggle('active');
        
        localStorage.setItem('sidebarOpen', body.classList.contains('sidebar-active'));
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = toggleButton.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggleButton && window.innerWidth < 992) {
            body.classList.remove('sidebar-active');
            sidebar.classList.remove('active');
        }
    });
});