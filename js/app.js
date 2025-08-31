function AddProdArray(product_id,	name,	description,	image_path,	design,	price,	offer_price,	discount_any,	availability,	fabric,	top,	bottom,	duppatta
) {
this.product_id = product_id;
this.name = name;
this.description = description;
this.image_path = image_path;
this.design = design;
this.price = price;
this.offer_price = offer_price;
this.discount_any = discount_any;
this.availability = availability;
this.fabric = fabric;
this.top = top;
this.bottom = bottom;
this.duppatta = duppatta;
}
function loadXMLProductstoArray() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myArrayFunction(this);
  };
  xhttp.open("GET", "https://carmensai.github.io/carmenfb/ProductXML_New.xml", true);
  xhttp.send();
}
var products =[];
function myArrayFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("Row");
  let tmp_productArrayTable = [];

  for (let i = 1; i < x.length; i++) {
    let prodCol = [];
    for (let j = 0; j < 13; j++) {
      prodCol[j] = x[i].getElementsByTagName("Data")[j].childNodes[0].nodeValue;
    }

    tmp_productArrayTable.push(new AddProdArray(
      prodCol[0], prodCol[1], prodCol[2], prodCol[3], prodCol[4],
      prodCol[5], prodCol[6], prodCol[7], prodCol[8], prodCol[9],
      prodCol[10], prodCol[11], prodCol[12]
    ));
  }

  document.getElementById("productdemo").innerHTML = "Loaded " + tmp_productArrayTable[0].product_id + " products.";
  console.log(tmp_productArrayTable);
  const products =  tmp_productArrayTable;
}

loadXMLProductstoArray() ;
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const buttons = [];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
//const currentProductColors = document.querySelectorAll(".color");
//const currentProductSizes = document.querySelectorAll(".size");

const sliderImages = document.querySelector(".sliderImg"); 

function updateslider(){
	const offset = -currentIndex * 100;
	slider.style.transform = `translateX(${offset}%)`;
	buttons.foreach((button, imdex) => {
		if (index == currentIndex) {
			buttons[0].classList.add('active');
		} else {
			buttons[0].classList.remove('active');
		}
	})
}

function createpagination()
{
	sliderImages.foreach((_, index) =>{
		const button = document.createElement('button');
		button.addEventListener('click', () => {
			currentIndex = index;
			updateslider();
		});
		pagination.appendchild(button);
		buttons.push(button);
	});
	buttons[0].classList.add('active');
	if (index == currentIndex) {
		
	} else {}
}
updateslider();
createpagination();


function autoslide(){
	currentIndex = (currentIndex + 1) % images.length;
	updateslider();
}
setinterval(autoslide, 3000);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-200 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.name;
    currentProductPrice.textContent = "Rs" + choosenProduct.price;
    currentProductImg.src = choosenProduct.image_path;
	//currentProductImg.src = choosenProduct.image_path;
	//currentProductImg.src = choosenProduct.image_path;

    //assing new colors
   // currentProductColors.forEach((color, index) => {
   //   color.style.backgroundColor = choosenProduct.colors[index].code;
   // });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


// Calling loadXMLProducts


