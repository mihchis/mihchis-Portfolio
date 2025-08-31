document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use default light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Only proceed if theme toggle exists
    if (!themeToggle) return;
    
    // Apply the saved theme or default
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.classList.add('dark');
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
        
        // Toggle dark class on the toggle button
        this.classList.toggle('dark');
        
        // Save preference to localStorage
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});