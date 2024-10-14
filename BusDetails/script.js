    const busDetails = {
        "HP17C-9167": {
            route: "Jagadhri and Yamunanagar",
            timing: "7:30-7:45 a.m.",
            driverName: "Mr. Harish Kumar",
            driverId: "47B3288",
            seatAvailability: "Approx. 60 seats",
            stoppages: "Pyara Chowk, Fountain chowk, New market, Workshop, Kamani chowk, Sarojni colony, Gaba Palace, Madhu Chowk, Aggarsain Chowk, Hudda, Budia Chowk, Jagadhri nakka, Khundewala, Kail, Jagadhari bus stand, Gadhola, Kanhiya chowk."
        }
        // You can add more bus details here as needed
    };

    function searchBus(event) {
        event.preventDefault(); // Prevent form submission
        const busNo = document.getElementById("bus-search").value;
        const details = busDetails[busNo];

        if (details) {
            // Display the details in the desired section of your HTML
            // For example, you might have an element with id "bus-detail-output"
            const output = `
                <h2>Bus Details for ${busNo}</h2>
                <p>Route: ${details.route}</p>
                <p>Timing: ${details.timing}</p>
                <p>Driver Name: ${details.driverName}</p>
                <p>Driver Id: ${details.driverId}</p>
                <p>Seat Availability: ${details.seatAvailability}</p>
                <p>Stoppages: ${details.stoppages}</p>
            `;
            document.getElementById("bus-detail-output").innerHTML = output;
        } else {
            alert("Bus not found!");
        }
    }
