// Reusable Components for Rashika Dance Academy

// Navigation Component
const NavigationComponent = {
  template: `
    <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-rose-500 rounded-full flex items-center justify-center">
                        <i class="fas fa-hand-peace text-white text-xl"></i>
                    </div>
                    <div>
                        <h2 class="text-2xl font-serif font-bold text-primary-600">Rashika</h2>
                        <p class="text-sm text-gold-600 font-medium">Dance Academy</p>
                    </div>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-6">
                    <a href="index.html" class="nav-link" data-page="home">Home</a>
                    <a href="media-charity.html" class="nav-link" data-page="media">Media & Charity</a>
                    <a href="shows.html" class="nav-link" data-page="shows">Shows</a>
                    <a href="news.html" class="nav-link" data-page="news">News</a>
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
                <a href="shows.html" class="block py-2 text-gray-700 hover:text-primary-600">Shows</a>
                <a href="news.html" class="block py-2 text-gray-700 hover:text-primary-600">News</a>
                <a href="videos.html" class="block py-2 text-gray-700 hover:text-primary-600">Videos</a>
                <a href="manjula.html" class="block py-2 text-gray-700 hover:text-primary-600">Manjula</a>
                <a href="arangetram.html" class="block py-2 text-gray-700 hover:text-primary-600">Arangetram</a>
                <a href="index.html#contact" class="block py-2 text-primary-600 font-medium">Contact</a>
            </div>
        </div>
    </nav>`,

  init: function (activePage = "home") {
    // Set active page styling
    setTimeout(() => {
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        if (link.dataset.page === activePage) {
          link.className =
            "text-primary-600 border-b-2 border-primary-600 font-medium transition-colors";
        } else {
          link.className =
            "text-gray-700 hover:text-primary-600 font-medium transition-colors";
        }
      });
    }, 0);

    // Mobile menu functionality
    setTimeout(() => {
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");

      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    }, 0);

    // Navbar background change on scroll
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white/98");
        navbar.classList.remove("bg-white/95");
      } else {
        navbar.classList.add("bg-white/95");
        navbar.classList.remove("bg-white/98");
      }
    });
  },
};

// Footer Component
const FooterComponent = {
  template: `
    <footer class="bg-gray-900 text-white py-16">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div class="col-span-2">
                    <div class="flex items-center space-x-3 mb-6">
                        <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-rose-500 rounded-full flex items-center justify-center">
                            <i class="fas fa-hand-peace text-white text-xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl font-serif font-bold">Rashika Dance Academy</h3>
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
                        <p class="text-gray-300 text-sm">
                            <i class="fas fa-globe mr-2"></i>
                            <a href="https://www.rasikadance.com.au" target="_blank" class="hover:text-primary-400 transition-colors">
                                www.rasikadance.com.au
                            </a>
                        </p>
                    </div>
                    <div class="flex space-x-4">
                        <a href="https://facebook.com/rasikadanceacademy" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors" title="Follow us on Facebook">
                            <i class="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="https://youtube.com/@rasikadanceacademy" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors" title="Subscribe to our YouTube">
                            <i class="fab fa-youtube text-xl"></i>
                        </a>
                        <a href="https://instagram.com/rasikadanceacademy" target="_blank" class="text-gray-300 hover:text-primary-400 transition-colors" title="Follow us on Instagram">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                <p class="text-gray-400">&copy; 2001-2024 Rashika Dance Academy. All rights reserved. | Established 2001</p>
            </div>
        </div>
    </footer>`,

  init: function () {
    // Add any footer-specific functionality here if needed
  },
};

// Component loader function
function loadComponent(componentName, containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id '${containerId}' not found`);
    return;
  }

  let component;
  switch (componentName) {
    case "navigation":
      component = NavigationComponent;
      break;
    case "footer":
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
document.addEventListener("DOMContentLoaded", function () {
  // Load navigation if container exists
  if (document.getElementById("navigation-container")) {
    const activePage = document.body.dataset.page || "home";
    loadComponent("navigation", "navigation-container", { activePage });
  }

  // Load footer if container exists
  if (document.getElementById("footer-container")) {
    loadComponent("footer", "footer-container");
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Gallery hover effects
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});
