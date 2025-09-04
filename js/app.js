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
const menuItems = document.querySelectorAll(".sliderItem");
const buttons = [];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
//const currentProductColors = document.querySelectorAll(".color");
//const currentProductSizes = document.querySelectorAll(".size");


let currentIndex = 0;
const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".sliderImg");
const pagination = document.querySelector(".pagination");

function updateslider(){
	const offset = -currentIndex * 100;
	slider.style.transform = `translateX(${offset}%)`;
	buttons.forEach((button, index) => {
		if (index == currentIndex) {
			buttons[0].classList.add('active');
		} else {
			buttons[0].classList.remove('active');
		}
	})
}

function createpagination()
{
	sliderImages.forEach((_, index) =>{
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

/* 
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
*/

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
function loadXMLProducts() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "https://carmensai.github.io/carmenfb/ProductXML_New.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  const slide = "<div class=\"slider\">";
  const slidewrap = "<div class=\"sliderwrapper\">";
  const slideitem = "<div class=\"sliderItem\">";
  const slidebg = "<div class=\"sliderBg\"></div>";
  const prodref = "<a href=\"#productdet\">";
  const butbuynow = "<button class=\"buyButton\">BUY NOW!</button>";
  const prodcontainer = "<div class=\"product\">";
  // const prodimg = "<img src="./img/air.png" alt="" class="productImg">";
  const proddetail = "<div class=\"productDetails\">";
  //<img src="./img/air.png" alt="" class="sliderImg">
  // const slidehead = "<h1 class=\"sliderTitle\"> </br> NEW</br> SEASON</h1>
  //<h2 class="sliderPrice">$119</h2>
                
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("Row");
  let table = slidewrap;
  let prod = "";
  let prodimg ="";
	
  for (let i = 1; i <x.length; i++) { 
    table += 
     // slideitem +
       "<img src=\"" + x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "\" alt=\"\"  class=\"sliderimg\">" +
	  //  "<img src=\"./productimages/OffWhite.jpg\" " + "\" alt=\"\"  class=\"slidergrid-image\">" +
      // slidebg +
      //Title
      // "<img src =\"./productimages/OffWhite.jpg\" alt=\"\" class=\"slidergrid-image\">" +
	   "<a> <li class=\"sliderPriceCap\">" + x[i].getElementsByTagName("Data")[1].childNodes[0].nodeValue  + "</li>" +
	   "Fabric: " + x[i].getElementsByTagName("Data")[9].childNodes[0].nodeValue  + "<br />" +
	   "Design: " + x[i].getElementsByTagName("Data")[10].childNodes[0].nodeValue  + "<br />" +
	   "Top: " + x[i].getElementsByTagName("Data")[10].childNodes[0].nodeValue  + "<br />" +
	   "Bottom: " + x[i].getElementsByTagName("Data")[12].childNodes[0].nodeValue  + "<br />" +
	   "Duppatta: " + x[i].getElementsByTagName("Data")[13].childNodes[0].nodeValue  + "</a>" 
      // "<p class=\"sliderPriceCap\">" + "Rs " + x[i].getElementsByTagName("Data")[5].childNodes[0].nodeValue + "</p>" 
		/*
	   "<p class=\"sliderNameCap\">" + x[i].getElementsByTagName("Data")[1].childNodes[0].nodeValue  + "</p>" +
	   "<p  class=\"sliderNameCap\"> Fabric: " + x[i].getElementsByTagName("Data")[9].childNodes[0].nodeValue  + "</p>" +
	   "<p class=\"sliderNameCap\"> Design: " + x[i].getElementsByTagName("Data")[10].childNodes[0].nodeValue  + "</p>" +
	   "<p class=\"sliderNameCap\"> Top: " + x[i].getElementsByTagName("Data")[10].childNodes[0].nodeValue  + "</p>" +
	   "<p class=\"sliderNameCap\"> Bottom: " + x[i].getElementsByTagName("Data")[12].childNodes[0].nodeValue  + "</p>" +
	   "<p class=\"sliderNameCap\"> Duppatta: " + x[i].getElementsByTagName("Data")[13].childNodes[0].nodeValue  + "</p>" +
       "<p class=\"sliderPriceCap\">" + "Rs " + x[i].getElementsByTagName("Data")[5].childNodes[0].nodeValue + "</p>" +
	   */
		// "</div" +
   //    prodref + butbuynow +
    //   "</a>"  
		//"<li> </li>" + 
      // "</div>" 
      //"<h1>" + x[i].getElementsByTagName("Data")[1].childNodes[0].nodeValue + "</h1>" + 
      //"<h2>" + x[i].getElementsByTagName("Data")[2].childNodes[0].nodeValue + "</h2>" +
      //"<h3>" + x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "</h3>" 
      // "</div>"
        ;
     if ( i <= 1 ) {

	  prodimg +=  
		  // prodcontainer +
		"<img src=\"" + x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "\" alt=\"\" class=\"productImg\">" 
		 ;
		  
	  prod +=  
		  // prodcontainer +
		// "<img src=\"" + x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "\" alt=\"\" class=\"productImg\">" +
		 "<img src=\"" + x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "\" alt=\"\" class=\"productImg\">"  +
		 proddetail +
		"<h1 class=\"productTitle\">" + x[i].getElementsByTagName("Data")[1].childNodes[0].nodeValue + "</h1>" +
		"<p class=\"productDesc\"> Product Id: " + x[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue + "</p>" +
		"<p class=\"productDesc\"> Product Details " + x[i].getElementsByTagName("Data")[2].childNodes[0].nodeValue + "</p>" +
		"<p class=\"productPrice\">" + "Rs " + x[i].getElementsByTagName("Data")[5].childNodes[0].nodeValue + "</p>" +
		"<p class=\"productDesc\">Fabric : " + x[i].getElementsByTagName("Data")[8].childNodes[0].nodeValue + "</p>" +
		"<p class=\"productDesc\">Top : " + x[i].getElementsByTagName("Data")[9].childNodes[0].nodeValue + "</p>" +
		"<p class=\"productDesc\">Bottom : " + x[i].getElementsByTagName("Data")[10].childNodes[0].nodeValue + "</p>" +
		"<p class=\"productDesc\">Duppatta : " + x[i].getElementsByTagName("Data")[11].childNodes[0].nodeValue + "</p>" 
		// +
	//	"<div class=\"colors\">"
		;
	 // for ( let c=0; c<=10; c++ { 
	//		  if (x[i].getElementsByTagName("Data")[c+11].childNodes[0].nodeValue) != "") 
	//	 		{ 
	//				prod += "<div class=\"color\"></div>";
	//	  		}
	//  }
	//  prod += "</div>";
	  prod += "<button class=\"productButton\">BUY NOW!</button>" ;	
	//  table += "<div class=\"pagination\"> Inside Pagination </div>"
	  prod += "</div>";
	//  prod += "</div>";
	 }
  }
  table += "</div>";
//  table += "<div class=\"pagination\"> </div>"
  document.getElementById("productgroup").innerHTML = table;
  document.getElementById("productdet").innerHTML = prod; 
  document.getElementById("prodimage").innerHTML = prodimg;
  console.log(table);
  console.log(prod);
}
loadXMLProducts();
