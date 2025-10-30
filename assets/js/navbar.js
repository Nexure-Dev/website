document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navbarHTML = `
        <nav class="bg-dark-800/80 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <div class="flex items-center gap-3">
                        <img src="https://cdn.jsdelivr.net/gh/Nexure-Dev/assets@main/Logos/nexure_logo.png" alt="Nexure Logo" class="w-11 h-11">
                        <span class="text-2xl font-bold text-white">Nexure</span>
                    </div>
                    
                    <div class="flex items-center gap-8">
                        <a href="index.html" class="${currentPage === 'index.html' ? 'text-cyan font-medium' : 'text-gray-400 hover:text-cyan transition-colors'}">Home</a>
                        <a href="repos.html" class="${currentPage === 'repos.html' ? 'text-cyan font-medium' : 'text-gray-400 hover:text-cyan transition-colors'}">Repositories</a>
                        <a href="https://forum.nexure-dev.de" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-cyan transition-colors">Forum</a>
                        <a href="https://dsc.gg/nexure" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-cyan hover:bg-cyan-400 text-dark-900 font-semibold rounded-lg transition-colors">Discord Server</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    document.getElementById('navbar').innerHTML = navbarHTML;
});
