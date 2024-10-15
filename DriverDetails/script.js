// Prevent back navigation after logout
window.history.pushState(null, "", window.location.href); // Push the current page to history
window.onpopstate = function() {
    window.history.pushState(null, "", window.location.href); // Push it again to prevent going back
};

function handleLogout() {
    // Clear session on the backend
    // window.location.href = '/LoginPage/index.html'; // Redirect to login page after logging out
}

// Driver Data - Focused on drivers and their assigned buses
const drivers = [
    {
        driverName: "Mr. Harish Kumar",
        driverId: "47B3288",
        buses: [
            { busNo: "HP17C-9967", route: "Jagadhri and Yamunanagar", timing: "7:30-7:45 a.m.", seatAvailability: "Approx. 60 seats" },
            { busNo: "HP17C-9067", route: "Jagadhri and Yamunanagar", timing: "7:30-7:45 a.m.", seatAvailability: "Approx. 60 seats" }
        ]
    },
    {
        driverName: "Mr. Suresh Mehta",
        driverId: "58C4211",
        buses: [
            { busNo: "HP17C-7597", route: "Ambala and Chandigarh", timing: "8:00-8:15 a.m.", seatAvailability: "Approx. 45 seats" },
            { busNo: "HP17C-9167", route: "Ambala and Chandigarh", timing: "8:00-8:15 a.m.", seatAvailability: "Approx. 45 seats" }
        ]
    },
    {
        driverName: "Mr. Rajesh Sharma",
        driverId: "62D9876",
        buses: [
            { busNo: "HP17C-9767", route: "Panchkula and Chandigarh", timing: "6:30-6:45 a.m.", seatAvailability: "Approx. 50 seats" }
        ]
    },
    // Add more driver objects here if needed
];

// Function to render drivers and their buses
function renderDrivers() {
    let i = 0;
    const driverList = document.getElementById("driver-list");
    driverList.innerHTML = drivers.map(driver => `
        <div class="about-content">
            <h2 class="heading">Driver ${++i} <span>Details</span></h2>
            <div class="driver-details">
                <div class="detail-row"><span class="label">Driver Name:</span><span class="value">${driver.driverName}</span></div>
                <div class="detail-row"><span class="label">Driver Id:</span><span class="value">${driver.driverId}</span></div>
                <!-- <h2 class="heading">Buses</h2> -->
                ${driver.buses.map(bus => `
                    <div class="bus-info">
                        <div class="detail-row"><span class="label">Bus No:</span><span class="value">${bus.busNo}</span></div>
                        <div class="detail-row"><span class="label">Route:</span><span class="value">${bus.route}</span></div>
                        <div class="detail-row"><span class="label">Timing:</span><span class="value">${bus.timing}</span></div>
                        <div class="detail-row"><span class="label">Seat Availability:</span><span class="value">${bus.seatAvailability}</span></div>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// Function to search drivers based on name or ID
function searchDriver(event) {
    event.preventDefault();
    const searchValue = document.getElementById("driver-search").value.toUpperCase();
    const filteredDrivers = drivers.filter(driver =>
        driver.driverName.toUpperCase().includes(searchValue) || driver.driverId.toUpperCase().includes(searchValue)
    );
    const driverList = document.getElementById("driver-list");

    let i = 0; // Reset index for driver numbering
    if (filteredDrivers.length > 0) {
        driverList.innerHTML = filteredDrivers.map(driver => `
            <div class="about-content">
                <h2 class="heading">Driver ${++i} <span>Details</span></h2>
                <div class="driver-details">
                    <div class="detail-row"><span class="label">Driver Name:</span><span class="value">${driver.driverName}</span></div>
                    <div class="detail-row"><span class="label">Driver Id:</span><span class="value">${driver.driverId}</span></div>
                    <!-- <h2 class="heading">Buses</h2> -->
                    ${driver.buses.map(bus => `
                        <div class="bus-info">
                            <div class="detail-row"><span class="label">Bus No:</span><span class="value">${bus.busNo}</span></div>
                            <div class="detail-row"><span class="label">Route:</span><span class="value">${bus.route}</span></div>
                            <div class="detail-row"><span class="label">Timing:</span><span class="value">${bus.timing}</span></div>
                            <div class="detail-row"><span class="label">Seat Availability:</span><span class="value">${bus.seatAvailability}</span></div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `).join("");
    } else {
        driverList.innerHTML = `<p>No drivers found for "${searchValue}"</p>`;
    }
}
// Initial render
renderDrivers();