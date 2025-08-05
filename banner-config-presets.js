/**
 * NOTIFICATION BANNER CONFIGURATION
 * Edit this file to control the banner that appears on your website
 * 
 * HOW TO USE:
 * 1. Set 'enabled: true' to show the banner
 * 2. Update the title and message with your announcement
 * 3. Choose the banner type for appropriate colors
 * 4. Change storageKey when you want to show banner to users who previously dismissed it
 */

// Copy and paste this configuration into js/notification-banner.js to update your banner
const BANNER_CONFIG = {
    // ==================== MAIN CONTROLS ====================
    enabled: true,  // Set to false to completely hide banner
    
    // ==================== CONTENT ====================
    title: "🎭 New Arangetram Registration Open!",
    message: "Applications for 2025 Arangetram ceremony are now open. Limited seats available for qualified students.",
    
    // ==================== STYLING ====================
    type: "event", // Options: "event" (purple), "announcement" (blue), "warning" (orange), "success" (green)
    
    // ==================== BEHAVIOR ====================
    dismissible: true,     // Can users close the banner?
    autoHide: false,       // Auto-hide after X seconds?
    autoHideDelay: 10000,  // Time in milliseconds (10000 = 10 seconds)
    
    // ==================== CALL TO ACTION ====================
    showButton: true,
    buttonText: "Learn More",
    buttonLink: "arangetram.html#requirements",
    
    // ==================== TECHNICAL ====================
    // Change this key when you want to show banner again to users who dismissed it
    storageKey: "rda_banner_dismissed_2025_arangetram"
};

// ==================== PRESET CONFIGURATIONS ====================
// Copy any of these into the main config above:

// NEW EVENT ANNOUNCEMENT
const EVENT_PRESET = {
    enabled: true,
    title: "🎉 Special Workshop This Weekend!",
    message: "Join us for an intensive Bharatanatyam workshop with guest artist Guru Lakshmi. Register now!",
    type: "event",
    showButton: true,
    buttonText: "Register Now",
    buttonLink: "workshops.html",
    storageKey: "rda_banner_workshop_2025"
};

// CLASS SCHEDULE CHANGE
const SCHEDULE_PRESET = {
    enabled: true,
    title: "📅 Schedule Update",
    message: "Please note: Classes on March 15th will be rescheduled due to holiday. Check your emails for details.",
    type: "announcement",
    showButton: true,
    buttonText: "View Schedule",
    buttonLink: "classes.html",
    storageKey: "rda_banner_schedule_march2025"
};

// URGENT NOTICE
const URGENT_PRESET = {
    enabled: true,
    title: "⚠️ Important Notice",
    message: "Academy will be closed on March 10th due to maintenance. All classes will resume March 11th.",
    type: "warning",
    showButton: false,
    autoHide: false,
    storageKey: "rda_banner_closure_march10"
};

// SUCCESS/ACHIEVEMENT
const SUCCESS_PRESET = {
    enabled: true,
    title: "🏆 Congratulations!",
    message: "Our students won first place at the State Classical Dance Competition. We're so proud!",
    type: "success",
    showButton: true,
    buttonText: "See Photos",
    buttonLink: "gallery.html",
    storageKey: "rda_banner_competition_win_2025"
};

// QUICK SETUP INSTRUCTIONS:
// 1. Choose a preset above or create your own configuration
// 2. Copy the configuration object
// 3. Replace the bannerConfig object in js/notification-banner.js (around line 8)
// 4. Save the file and refresh your website
// 5. The banner will appear at the top of all pages that include the script
