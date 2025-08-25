// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function myJsonData() {
    fetch('./data.json') // Path to your JSON file
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        // Work with the JSON data here
        console.log(data);
        // document.getElementById('output').innerText = `Name: ${data.name}, Age: ${data.age}`;
        document.querySelector("#outputJsonData").innerHTML  = `Name: ${data.name}, Age: ${data.age}`;
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
}

myJsonData() ;

const imageUrls = [
					   'https://drive.google.com/thumbnail?id=1pPn_YYWGmTIA55u9Azo43qb7FiERJ2lC&sz=w1000',
					   'https://drive.google.com/thumbnail?id=146ChejEIWL7jCTC9vk9gib7B4PEn-nlS&sz=w1000',
					   'https://drive.google.com/thumbnail?id=1G9bRzYdcgbiNYflHxgnGcoB8qFZEhou7&sz=w1000',
					   'https://drive.google.com/thumbnail?id=1z6MYDUao9MjEzoLIpucHcp630MTC8Uzm&sz=w1000',
					   'https://drive.google.com/thumbnail?id=1OEQrW-MsxmAS__0vAK5mRbUn8Jo2c1RE&sz=w1000'
					];

	const sliderImage = document.getElementById('sliderImage');
	//const ImageIndex = document.getElementById('ImageIndex');
	const imageList = document.getElementById('imageList');
	let currentIndex = 0;

	// Function to change the image
	function changeImage() {
		sliderImage.src = imageUrls[currentIndex];
		currentIndex = (currentIndex + 1) % imageUrls.length; // Loop through images
		//document.getElementById('ImageIndex').innerHTML = currentIndex;
		//return currentIndex;
	}

	// Initial image load and image list population
	changeImage();

	// Change image every 3 seconds (adjust as needed)
	setInterval(changeImage, 5000);
	//document.getElementById('ImageIndex').innerHTML = curIndex;



