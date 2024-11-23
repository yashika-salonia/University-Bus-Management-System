function handleLogout() {
    // Clear browser history
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function() {
        window.history.pushState(null, "", window.location.href);
    };
    
    // Clear any session/local storage
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear cookies
    document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    
    // Prevent caching of the page they're leaving
    window.location.replace("../../LoginPage/index.html");
    
    // Additional security: If they try to use back button
    window.addEventListener('load', function() {
        if(document.referrer.includes('HomePage') || 
           document.referrer.includes('BusDetails') || 
           document.referrer.includes('DriverDetails')) {
            window.location.replace("../../LoginPage/index.html");
        }
    });
    
    return false; // Prevent default link behavior
}