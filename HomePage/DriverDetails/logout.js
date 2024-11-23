// logout.js
class SessionManager {
    constructor() {
        this.setupBackButtonHandler();
        this.setupBeforeUnloadHandler();
    }

    setupBackButtonHandler() {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = () => {
            window.history.pushState(null, "", window.location.href);
        };
    }

    setupBeforeUnloadHandler() {
        window.onbeforeunload = () => {
            if (this.isLoggedOut) {
                return "You have been logged out. Please log in again.";
            }
        };
    }

    handleLogout() {
        // Clear all storage
        localStorage.clear();
        sessionStorage.clear();
        
        // Clear cookies
        this.clearCookies();
        
        // Prevent back navigation
        this.setupBackButtonHandler();
        
        // Set logout flag
        this.isLoggedOut = true;
        
        // Redirect to login
        window.location.replace("../../LoginPage/index.html");
        
        return false;
    }

    clearCookies() {
        document.cookie.split(";").forEach(cookie => {
            document.cookie = cookie.replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
}

// Initialize session manager
const sessionManager = new SessionManager();

// Export for use in other files
export { sessionManager };