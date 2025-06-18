 
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle sidebar on desktop
            const sidebarToggle = document.getElementById('sidebarToggle');
            const sidebar = document.querySelector('.sidebar');
            
            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                const mainContent = document.querySelector('.main-content');
                
                if (sidebar.classList.contains('active')) {
                    sidebar.style.width = 'var(--sidebar-width)';
                    mainContent.style.marginLeft = 'var(--sidebar-width)';
                    
                    // Show menu text when expanded
                    document.querySelectorAll('.menu-title, .menu-item span').forEach(el => {
                        el.style.display = 'block';
                    });
                } else {
                    sidebar.style.width = 'var(--sidebar-collapsed-width)';
                    mainContent.style.marginLeft = 'var(--sidebar-collapsed-width)';
                    
                    // Hide menu text when collapsed
                    document.querySelectorAll('.menu-title, .menu-item span').forEach(el => {
                        el.style.display = 'none';
                    });
                }
            });
            
            // Toggle sidebar on mobile
            const mobileToggle = document.getElementById('mobileToggle');
            
            mobileToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
            });
            
            // Set active menu item
            const menuItems = document.querySelectorAll('.menu-item');
            
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    menuItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });
    