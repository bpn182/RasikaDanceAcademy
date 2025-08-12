// Set favicon with theme background using canvas
function setFaviconWithBg() {
    // Remove any existing favicon links
    document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']").forEach(el => el.remove());

    // Helper to create favicon with background
    function createFavicon(src, size, bgColor) {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        // Draw circular background
        ctx.save();
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = bgColor;
        ctx.fill();
        ctx.restore();
        // Draw image (centered, clipped to circle)
        ctx.save();
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2 * 0.85, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.clip();
        const img = new window.Image();
        img.src = src;
        img.onload = function() {
            ctx.drawImage(img, 0, 0, size, size);
            ctx.restore();
            const link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.sizes = `${size}x${size}`;
            link.href = canvas.toDataURL('image/png');
            document.head.appendChild(link);
        };
    }

    // Use theme color for background
    const themeColor = '#e11d48'; // rose-500
    createFavicon('images/logo/favicon-16x16.png', 16, themeColor);
    createFavicon('images/logo/favicon-32x32.png', 32, themeColor);

    // Set theme color for browser UI
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
        themeMeta = document.createElement('meta');
        themeMeta.name = 'theme-color';
        document.head.appendChild(themeMeta);
    }
    themeMeta.content = themeColor;
}

document.addEventListener('DOMContentLoaded', setFaviconWithBg);
// Navigation Component (keeping as is)
const NavigationComponent = {
    template: `
    <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <div class="flex items-center space-x-4">
                    <a href="index.html" class="focus:outline-none">
                        <div class="relative w-16 h-16 flex items-center justify-center">
                            <!-- Animated background with fire-like glow -->
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-rose-500 rounded-full shadow-lg logo-fire-animation">
                                <div class="w-full h-full flex items-center justify-center relative">
                                    <!-- Traditional pattern borders -->
                                    <div class="absolute inset-1 border-2 border-white rounded-full opacity-60" style="border-style: dotted;"></div>
                                    <div class="absolute inset-2 border border-amber-200 rounded-full opacity-40" style="border-style: dashed;"></div>
                                    <!-- Logo with gentle glow animation -->
                                    <img src="images/logo/logo.png" alt="rasika Dance Academy Logo" class="w-12 h-12 object-contain z-10 drop-shadow-lg logo-glow-pulse" />
                                </div>
                            </div>
                        </div>
                    </a>
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-primary-600">Rasika</h2>
                        <p class="text-sm text-amber-600 font-medium">Dance Academy</p>
                    </div>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-6">
                    <a href="index.html" class="nav-link" data-page="home">Home</a>
                    <a href="media-charity.html" class="nav-link" data-page="media">Media & Charity</a>
                    <a href="shows.html" class="nav-link" data-page="shows">Shows</a>
                    <a href="videos.html" class="nav-link" data-page="videos">Videos</a>
                    <a href="manjula.html" class="nav-link" data-page="manjula">Manjula</a>
                    <a href="arangetram.html" class="nav-link" data-page="arangetram">Arangetram</a>
                    <a href="index.html#contact" class="bg-gradient-to-r from-primary-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-primary-600">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden bg-white border-t hidden">
            <div class="px-4 py-2 space-y-2">
                <a href="index.html" class="block py-2 text-gray-700 hover:text-primary-600">Home</a>
                <a href="media-charity.html" class="block py-2 text-gray-700 hover:text-primary-600">Media & Charity</a>
                <a href="index.html#shows" class="block py-2 text-gray-700 hover:text-primary-600">Shows</a>
                <a href="videos.html" class="block py-2 text-gray-700 hover:text-primary-600">Videos</a>
                <a href="manjula.html" class="block py-2 text-gray-700 hover:text-primary-600">Manjula</a>
                <a href="arangetram.html" class="block py-2 text-gray-700 hover:text-primary-600">Arangetram</a>
                <a href="index.html#contact" class="block py-2 text-primary-600 font-medium">Contact</a>
            </div>
        </div>
    </nav>`,
    
    init: function(activePage = 'home') {
        // Set active page styling
        setTimeout(() => {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.dataset.page === activePage) {
                    link.className = 'text-primary-600 border-b-2 border-primary-600 font-medium transition-colors';
                } else {
                    link.className = 'text-gray-700 hover:text-primary-600 font-medium transition-colors';
                }
            });
        }, 0);
        
        // Mobile menu functionality
        setTimeout(() => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        }, 0);
        
        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/98');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.add('bg-white/95');
                navbar.classList.remove('bg-white/98');
            }
        });
    }
};

// Updated Footer Component to match navbar logo
const FooterComponent = {
    template: `
    <footer class="bg-gray-900 text-white py-16">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div class="col-span-2">
                    <div class="flex items-center space-x-4 mb-6">
                        <div class="relative w-16 h-16 flex items-center justify-center">
                            <!-- Same design as navbar but for dark footer -->
                            <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-rose-500 rounded-full shadow-lg">
                                <div class="w-full h-full flex items-center justify-center relative">
                                    <!-- Traditional pattern borders -->
                                    <div class="absolute inset-1 border-2 border-white rounded-full opacity-60" style="border-style: dotted;"></div>
                                    <div class="absolute inset-2 border border-amber-200 rounded-full opacity-40" style="border-style: dashed;"></div>
                                    <!-- Logo -->
                                    <img src="images/logo/logo.png" alt="rasika Dance Academy Logo" class="w-12 h-12 object-contain z-10 drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-serif font-bold">rasika Dance Academy</h3>
                            <p class="text-gray-400">Where Art Meets Soul</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-6">
                        Preserving the sacred tradition of Indian classical dance while nurturing the next generation of artists through dedicated training and spiritual guidance.
                    </p>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="text-gray-300 hover:text-primary-400 transition-colors">Home</a></li>
                        <li><a href="videos.html" class="text-gray-300 hover:text-primary-400 transition-colors">Videos</a></li>
                        <li><a href="news.html" class="text-gray-300 hover:text-primary-400 transition-colors">News</a></li>
                        <li><a href="manjula.html" class="text-gray-300 hover:text-primary-400 transition-colors">Manjula</a></li>
                        <li><a href="arangetram.html" class="text-gray-300 hover:text-primary-400 transition-colors">Arangetram</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Connect</h4>
                    <div class="space-y-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <i class="fas fa-phone mr-2"></i>0461 409 099
                        </p>
                    </div>
                    <div class="flex space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=100063549374638" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors" title="Follow us on Facebook">
                            <i class="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="https://www.youtube.com/c/RasikaDanceAcademy" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors" title="Subscribe to our YouTube">
                            <i class="fab fa-youtube text-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/rasikadanceacademy/" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors" title="Follow us on Instagram">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">&copy; 2001-2024 rasika Dance Academy. All rights reserved. | Established 2001</p>
            </div>
        </div>
    </footer>`,
    
    init: function() {
        // Add any footer-specific functionality here if needed
    }
};

// Rest of your component loader code stays the same...
function loadComponent(componentName, containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id '${containerId}' not found`);
        return;
    }
    
    let component;
    switch (componentName) {
        case 'navigation':
            component = NavigationComponent;
            break;
        case 'footer':
            component = FooterComponent;
            break;
        default:
            console.error(`Component '${componentName}' not found`);
            return;
    }
    
    container.innerHTML = component.template;
    if (component.init) {
        component.init(options.activePage);
    }
}

// Auto-load components on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation if container exists
    if (document.getElementById('navigation-container')) {
        const activePage = document.body.dataset.page || 'home';
        loadComponent('navigation', 'navigation-container', { activePage });
    }
    
    // Load footer if container exists
    if (document.getElementById('footer-container')) {
        loadComponent('footer', 'footer-container');
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Gallery hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});