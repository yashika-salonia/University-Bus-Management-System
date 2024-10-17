// Prevent back navigation after logout
window.history.pushState(null, "", window.location.href); // Push the current page to history
window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href); // Push it again to prevent going back
};

function handleLogout() {
    // Clear session on the backend
    // window.location.href = '/LoginPage/index.html'; // Redirect to login page after logging out
}

// Simplified driver data structure (no multiple bus objects)
const drivers = [
    {
        driverName: "Mr. Khushpreet Singh",
        driverId: "9B876T53",
        mobileNo: "9854356543",
        Address: "Nariangarh",
        busNo: "HP17C-9967",
        route: "Jagadhri and Yamunanagar",
    },
    {
        driverName: "Mr. Mayank Sharma",
        driverId: "9B876T54",
        mobileNo: "9756544257",
        Address: "Yammunnagar",
        busNo: "HP17C-9967 Bus 1",
        route: "Mullana to Yammunanagar via Jagadhri",
    },
    {
        driverName: "Mr. Himanshu Gujral",
        driverId: "9B876T55",
        mobileNo: "9953880043",
        Address: "Ambala",
        busNo: "HP17C-9967 Bus 2",
        route: "Mullana to Amabala Cant.",
    },
    {
        driverName: "Mr. Rajbeer Singh",
        driverId: "9B876T57",
        mobileNo: "9894218085",
        Address: "Shahbad",
        busNo: "HP17C-9967 Bus 4",
        route: "Mullana to Shahbad ",
    },
    {
        driverName: "Mr. Suraj Kumar",
        driverId: "9B876T56",
        mobileNo: "8754219045",
        Address: "Karnal",
        busNo: "HP17C-9967  Bus 5",
        route: "Mullana to Karnal via Krukshetra ",
    },
    {
        driverName: "Mr. Rohit ",
        driverId: "9B876T58",
        mobileNo: "9643232168",
        Address: "Ambala city",
        busNo: "HP17C-9967 bus 6",
        route: "Mullana to Ambala city(Bus Stand)",
    },
    {
        driverName: "Mr. Surinder Kumar",
        driverId: "9B876T59",
        mobileNo: "8533468976",
        Address: "Adhoya",
        busNo: "HP17C-9967 bus 7",
        route: "Mullana to Adhoya ",
    },
    {
        driverName: "Mr. Priyansh Chaudhary",
        driverId: "9B876T60",
        mobileNo: "9784432389",
        Address: "Radaur",
        busNo: "HP17C-9967 bus 8",
        route: "Mullana to Radaur via Jagadhri ",
    },
    {
        driverName: "Mr. Vaibhav",
        driverId: "9B876T61",
        mobileNo: "8904567693",
        Address: "Bilaspur",
        busNo: "HP17C-9967 bus 9",
        route: "Mullana to Bilaspur ",
    },
    {
        driverName: "Mr. Ravi Kumar",
        driverId: "9B876T62",
        mobileNo: "9289317953",
        Address: "Thanna Chappar",
        busNo: "HP17C-9967 bus 10",
        route: "Mullana to Thana Chappar ",
    }
];

// Function to render drivers and their bus details
function renderDrivers() {
    let i = 0;
    const driverList = document.getElementById("driver-list");
    driverList.innerHTML = drivers.map(driver => `
        <div class="about-content">
            <h2 class="heading">Driver ${++i} <span>Details</span></h2>
            <div class="driver-details">
                <div class="detail-row"><span class="label">Driver Name:</span><span class="value">${driver.driverName}</span></div>
                <div class="detail-row"><span class="label">Driver Id:</span><span class="value">${driver.driverId}</span></div>
                <div class="detail-row"><span class="label">Mobile No:</span><span class="value">${driver.mobileNo}</span></div>
                <div class="detail-row"><span class="label">Address: </span><span class="value">${driver.Address}</span></div>
                <div class="detail-row"><span class="label">Bus No.:</span><span class="value">${driver.busNo}</span></div>
                <div class="detail-row"><span class="label">Route:</span><span class="value">${driver.route}</span></div>
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
                    <div class="detail-row"><span class="label">Bus No:</span><span class="value">${driver.busNo}</span></div>
                    <div class="detail-row"><span class="label">Route:</span><span class="value">${driver.route}</span></div>
                    <div class="detail-row"><span class="label">Timing:</span><span class="value">${driver.timing}</span></div>
                    <div class="detail-row"><span class="label">Seat Availability:</span><span class="value">${driver.seatAvailability}</span></div>
                    <div class="detail-row"><span class="label">Stoppages:</span><span class="value">${driver.stoppages}</span></div>
                </div>
            </div>
        `).join("");
    } else {
        driverList.innerHTML = `<p>No drivers found for "${searchValue}"</p>`;
    }
}

// Initial render
renderDrivers();
