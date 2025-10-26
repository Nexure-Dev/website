document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const footerHTML = `
        <footer class="bg-dark-800 border-t border-gray-800/50 py-10 px-6">
            <div class="max-w-7xl mx-auto text-center">
                <p class="text-gray-500">© 2025 Nexure. Alle Rechte Vorbehalten.</p>
            </div>
        </footer>
    `;
    
    document.getElementById('footer').innerHTML = footerHTML;
});