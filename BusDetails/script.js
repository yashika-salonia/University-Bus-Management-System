// Prevent back navigation after logout
window.history.pushState(null, "", window.location.href); // Push the current page to history
window.onpopstate = function() {
    window.history.pushState(null, "", window.location.href); // Push it again to prevent going back
};

function handleLogout() {
    // Clear session on the backend
    // window.location.href = '/LoginPage/index.html'; // Redirect to login page after logging out
}

const buses = [
    {
        busNo: "HR17C-9967",
        route: "Jagadhri and Yamunanagar",
        timing: "7:30-7:45 a.m.",
        driverName: "Mr. Harish Kumar",
        driverId: "47B3288",
        seatAvailability: "Approx. 60 seats",
        stoppages: "Pyara Chowk, Fountain chowk, New market, Workshop, Kamani chowk, Sarojni colony, Gaba Palace, etc."
    },
    // Add more bus objects here
    {
        busNo: "HR74B-4568",
        route: " Bilaspur",
        timing: " 7:15 a.m.",
        driverName: "Mr. Heera lal",
        driverId: "47B3289",
        seatAvailability: "Approx. 60 seats",
        stoppages: "Bilaspur Bus stand,Marwa Kalan,FAtehgarh Tumbi,Kapoori,Kurali."
    },
    {
        busNo: "HR30F-7593",
        route: "Ambala",
        timing: "7:40 a.m.",
        driverName: "Mr.Ankush Pal",
        driverId: "47B3290",
        seatAvailability: "Approx. 60 seats",
        stoppages: "KD, Civil, Janta Sweets, Defence Colony, Indian Roller, Khudda, Saha,Manav chowk,Jandli,Mithapur,Baldev nagar,Aggarsain chowk,Polytechnic chowk,Nanda,Delux."
    },
    {
        busNo: "HR54F-8684",
        route: "Naraingarh",
        timing: "7:10 a.m.",
        driverName: "Mr.Himanshu",
        driverId: "47B3291",
        seatAvailability: "Approx. 60 seats",
        stoppages: "Adhoya,Sohana,Kalas,Boh,Babain,Mughalwali,Bharon Majra,Sadhora,Rampur Seori,Kalesar,Basauli,Shahzadpur,Naraingarh."
    },
    {
        busNo: "HR36B-9078",
        route: "Ladwa",
        timing: "7:45 a.m.",
        driverName: "Mr.Lalit Kumar",
        driverId: "47B3292",
        seatAvailability: "Approx. 60 seats",
        stoppages: "Babain,sanghor,sunarion,Guhan,Kandoli,Behlolpur Bus stand,BAlad Village,Ladwapeer,Bakali,Guda,Chappra,Gangori,Bartoli,Mahuwakheri,Ladwa indri chowk,Parhladpur."
    },
];

function renderBuses() {
    i=0;
    const busList = document.getElementById("bus-list");
    busList.innerHTML = buses.map(bus => `
        <div class="about-content">
            <h2 class="heading">Bus ${++i} <span>Details</span></h2>
            <div class="bus-details">
                <div class="detail-row"><span class="label">Bus no:</span><span class="value">${bus.busNo}</span></div>
                <div class="detail-row"><span class="label">Route:</span><span class="value">${bus.route}</span></div>
                <div class="detail-row"><span class="label">Timing:</span><span class="value">${bus.timing}</span></div>
                <div class="detail-row"><span class="label">Driver Name:</span><span class="value">${bus.driverName}</span></div>
                <div class="detail-row"><span class="label">Driver Id:</span><span class="value">${bus.driverId}</span></div>
                <div class="detail-row"><span class="label">Seat Availability:</span><span class="value">${bus.seatAvailability}</span></div>
                <div class="detail-row"><span class="label">Stoppages: </span><span class="value">${bus.stoppages}</span></div>
            </div>
        </div>
    `).join("");
}
function searchBus(event) {
    event.preventDefault();
    const searchValue = document.getElementById("bus-search").value.toUpperCase();
    const filteredBus = buses.filter(bus => bus.busNo.toUpperCase().includes(searchValue));
    const busList = document.getElementById("bus-list");

    let i = 0; // Reset index for bus numbering
    if (filteredBus.length > 0) {
        busList.innerHTML = filteredBus.map(bus => `
            <div class="about-content">
                <h2 class="heading">Bus <span>Detail</span></h2> <!-- Increment i here -->
                <div class="bus-details">
                    <div class="detail-row"><span class="label">Bus no:</span><span class="value">${bus.busNo}</span></div>
                    <div class="detail-row"><span class="label">Route:</span><span class="value">${bus.route}</span></div>
                    <div class="detail-row"><span class="label">Timing:</span><span class="value">${bus.timing}</span></div>
                    <div class="detail-row"><span class="label">Driver Name:</span><span class="value">${bus.driverName}</span></div>
                    <div class="detail-row"><span class="label">Driver Id:</span><span class="value">${bus.driverId}</span></div>
                    <div class="detail-row"><span class="label">Seat Availability:</span><span class="value">${bus.seatAvailability}</span></div>
                    <div class="detail-row"><span class="label">Stoppages:</span><span class="value">${bus.stoppages}</span></div>
                </div>
            </div>
        `).join("");
    } else {
        busList.innerHTML = `<p>No buses found for "${searchValue}"</p>`;
    }
}

// Initial render
renderBuses();