/**
 * Notification Banner System for Rasika Dance Academy
 * Easy way to display important announcements, events, and updates
 */

class NotificationBanner {
    constructor() {
        this.bannerConfig = {
            // BANNER CONTROL - Set to true to show banner, false to hide
            enabled: true,
            
            // BANNER CONTENT
            title: "🎭 New Arangetram Registration Open!",
            message: "Applications for 2025 Arangetram ceremony are now open. Limited seats available for qualified students.",
            
            // BANNER STYLING
            type: "event", // Options: "event", "announcement", "warning", "success"
            
            // BANNER BEHAVIOR
            dismissible: true, // Can users close the banner?
            autoHide: false, // Auto-hide after X seconds (false = no auto-hide)
            autoHideDelay: 10000, // 10 seconds
            
            // CALL TO ACTION (optional)
            showButton: true,
            buttonText: "Learn More",
            buttonLink: "arangetram.html#requirements",
            
            // ADDITIONAL LINK OPTIONS
            makeEntireBannerClickable: false, // Make whole banner clickable
            bannerClickLink: "", // Link when banner is clicked (if enabled above)
            openInNewTab: false, // Open links in new tab/window
            
            // STORAGE KEY (change this when you want to show banner again to users who dismissed it)
            storageKey: "rda_banner_dismissed_2025_arangetram"
        };
        
        this.bannerElement = null;
        this.init();
    }
    
    init() {
        if (!this.bannerConfig.enabled) return;
        
        // Check if user has already dismissed this banner
        if (this.bannerConfig.dismissible && this.isDismissed()) {
            return;
        }
        
        // Wait for page to load, then show banner
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.createBanner());
        } else {
            this.createBanner();
        }
    }
    
    createBanner() {
        // Create banner HTML
        this.bannerElement = document.createElement('div');
        this.bannerElement.id = 'notification-banner';
        this.bannerElement.className = this.getBannerClasses();
        this.bannerElement.innerHTML = this.getBannerHTML();
        
        // Insert banner at top of page
        document.body.insertBefore(this.bannerElement, document.body.firstChild);
        
        // Add event listeners
        this.addEventListeners();
        
        // Show banner with animation
        setTimeout(() => {
            this.bannerElement.classList.add('banner-show');
        }, 500);
        
        // Auto-hide if configured
        if (this.bannerConfig.autoHide && this.bannerConfig.autoHideDelay > 0) {
            setTimeout(() => this.hideBanner(), this.bannerConfig.autoHideDelay);
        }
        
        // Adjust page content to accommodate banner
        this.adjustPageLayout();
    }
    
    getBannerClasses() {
        const baseClasses = 'fixed top-0 left-0 right-0 z-50 transform -translate-y-full transition-transform duration-500 ease-in-out shadow-lg';
        
        const typeClasses = {
            'event': 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
            'announcement': 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
            'warning': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
            'success': 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
        };
        
        return `${baseClasses} ${typeClasses[this.bannerConfig.type] || typeClasses.event}`;
    }
    
    getBannerHTML() {
        const dismissButton = this.bannerConfig.dismissible ? 
            '<button class="banner-dismiss ml-4 text-white/80 hover:text-white transition-colors" aria-label="Dismiss notification"><i class="fas fa-times"></i></button>' : '';
        
        const actionButton = this.bannerConfig.showButton ? 
            `<a href="${this.bannerConfig.buttonLink}" ${this.bannerConfig.openInNewTab ? 'target="_blank" rel="noopener noreferrer"' : ''} class="banner-cta ml-4 bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors">${this.bannerConfig.buttonText}</a>` : '';
        
        const bannerContent = `
            <div class="max-w-7xl mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center flex-1">
                        <div class="flex-1">
                            <div class="flex items-center">
                                <p class="font-semibold text-sm md:text-base">
                                    ${this.bannerConfig.title}
                                </p>
                            </div>
                            <p class="text-sm text-white/90 mt-1 hidden md:block">
                                ${this.bannerConfig.message}
                            </p>
                        </div>
                        ${actionButton}
                    </div>
                    ${dismissButton}
                </div>
            </div>
        `;
        
        // Make entire banner clickable if configured
        if (this.bannerConfig.makeEntireBannerClickable && this.bannerConfig.bannerClickLink) {
            return `<a href="${this.bannerConfig.bannerClickLink}" ${this.bannerConfig.openInNewTab ? 'target="_blank" rel="noopener noreferrer"' : ''} class="block hover:opacity-90 transition-opacity">${bannerContent}</a>`;
        }
        
        return bannerContent;
    }
    
    addEventListeners() {
        // Dismiss button
        if (this.bannerConfig.dismissible) {
            const dismissBtn = this.bannerElement.querySelector('.banner-dismiss');
            if (dismissBtn) {
                dismissBtn.addEventListener('click', () => this.dismissBanner());
            }
        }
        
        // Track CTA clicks
        const ctaBtn = this.bannerElement.querySelector('.banner-cta');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                console.log('Banner CTA clicked:', this.bannerConfig.buttonLink);
                // You can add analytics tracking here
            });
        }
    }
    
    dismissBanner() {
        this.hideBanner();
        
        // Remember dismissal
        if (this.bannerConfig.dismissible) {
            localStorage.setItem(this.bannerConfig.storageKey, 'true');
        }
    }
    
    hideBanner() {
        if (this.bannerElement) {
            this.bannerElement.classList.remove('banner-show');
            
            // Remove from DOM after animation
            setTimeout(() => {
                if (this.bannerElement && this.bannerElement.parentNode) {
                    this.bannerElement.parentNode.removeChild(this.bannerElement);
                }
                this.restorePageLayout();
            }, 500);
        }
    }
    
    isDismissed() {
        return localStorage.getItem(this.bannerConfig.storageKey) === 'true';
    }
    
    adjustPageLayout() {
        // Add top padding to body to prevent banner from covering content
        document.body.style.paddingTop = '70px';
        document.body.classList.add('has-notification-banner');
    }
    
    restorePageLayout() {
        // Remove top padding when banner is hidden
        document.body.style.paddingTop = '';
        document.body.classList.remove('has-notification-banner');
    }
    
    // Method to show banner programmatically (useful for testing)
    show() {
        this.bannerConfig.enabled = true;
        this.createBanner();
    }
    
    // Method to hide banner programmatically
    hide() {
        this.hideBanner();
    }
    
    // Method to reset dismissal (show banner again)
    resetDismissal() {
        localStorage.removeItem(this.bannerConfig.storageKey);
    }
}

// CSS for banner animations
const bannerStyles = `
    <style>
        .banner-show {
            transform: translateY(0) !important;
        }
        
        .has-notification-banner .navigation-container,
        .has-notification-banner nav {
            top: 70px;
        }
        
        @media (max-width: 768px) {
            .has-notification-banner {
                padding-top: 60px !important;
            }
            
            .has-notification-banner .navigation-container,
            .has-notification-banner nav {
                top: 60px;
            }
        }
        
        #notification-banner .banner-cta:hover {
            transform: translateY(-1px);
        }
        
        #notification-banner .banner-dismiss:hover {
            transform: scale(1.1);
        }
    </style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', bannerStyles);

// Initialize banner when script loads
window.notificationBanner = new NotificationBanner();
