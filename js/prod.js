const noofcol = 28;
const wrapper = document.querySelector(".sliderWrapper");
const pageItems = document.querySelectorAll(".paginationText");
const firstpage = document.querySelectorAll(".pagefirst");
const lastpage = document.querySelectorAll(".pagelast");
const nextpage = document.querySelectorAll(".pagenext");
const previouspage = document.querySelectorAll(".pageprevious");
let TotalPages = 0;
let productinfo = [];
let products =[];
pageItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
	//currentIndex = index; 
	pageItems.forEach(el => el.classList.remove("active"));
	firstpage.forEach(el => el.classList.remove("active"));
	lastpage.forEach(el => el.classList.remove("active"));
	item.classList.add("active");
    });
  });

//
function AddProdArray(product_id, name,	description, image_path, design, price,	
					  offer_price, discount_any, availability, fabric, top, bottom,
					  duppatta, color1,	color2,	color3,	color4,	color5,	color6,	color7,	
					  color8, color9, color10, ssize, msize, lsize, xlsize, xxlsize
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
this.color1 = color1;
this.color2 = color2;
this.color3 = color3;
this.color4 = color4;
this.color5 = color5;
this.color6 = color6;
this.color7 = color7;
this.color8 = color8;
this.color9 = color9;
this.color10 = color10;
this.ssize = ssize;
this.msize = msize;
this.lsize = lsize;
this.xlsize = xlsize;
this.xxlsize = xxlsize;
}

// Calling loadXMLProducts

function loadXMLProducts() {
 // let pg = 0;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   myFunction(this);
  }
  xhttp.open("GET", "https://carmensai.github.io/carmenfb/ProductXML_New.xml", true);
  xhttp.send();
 // return pg;
}
function myFunction(xml) {
  const noofimg = 4;
  const slide = "<div class=\"slider\">";
  const slidewrap = "<div class=\"sliderWrapper\">";
  const slideitem = "<div class=\"sliderItem\" id=\"";
  const slidebg = "<div class=\"sliderBg\"></div>";
  const prodref = "<a href=\"#productdet\">";
  const butbuynow = "<a class=\"buyButton\">BUY NOW!</a>";
  const prodcontainer = "<div class=\"product\">";
  // const prodimg = "<img src="./img/air.png" alt="" class="productImg">";
  const proddetail = "<div class=\"productDetails\">";
  //<img src="./img/air.png" alt="" class="sliderImg">
  // const slidehead = "<h1 class=\"sliderTitle\"> </br> NEW</br> SEASON</h1>
  //<h2 class="sliderPrice">$119</h2>
                
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("Row");
 // let tmp_productArrayTable = [];
  let table = slidewrap;
  let prod = "";
  let prodimg ="";
  	const pageCount = Math.ceil((x.length - 1) / noofimg);
    TotalPages = pageCount - 1;
	wrapper.style.setProperty('--sliderwrapperwidth', `${pageCount * 100}vw`);
 //  Empty the Products
	products.splice(0, products.length);
  for (let i = 1; i <x.length; i++) { 
    let prodCol = [];
	let tmp_productArrayTable = [];
    for (let j = 0; j < noofcol; j++) {
      prodCol[j] = x[i].getElementsByTagName("Data")[j].childNodes[0].nodeValue;
    }
	tmp_productArrayTable.push(new AddProdArray(
      prodCol[0], prodCol[1], prodCol[2], prodCol[3], prodCol[4],
      prodCol[5], prodCol[6], prodCol[7], prodCol[8], prodCol[9],
      prodCol[10], prodCol[11], prodCol[12], prodCol[13], prodCol[14],
	  prodCol[15], prodCol[16], prodCol[17], prodCol[18], prodCol[19],
	  prodCol[20], prodCol[21], prodCol[22], prodCol[23], prodCol[24],
	  prodCol[25], prodCol[26], prodCol[27]
    ));
	 products.push(new AddProdArray(
      prodCol[0], prodCol[1], prodCol[2], prodCol[3], prodCol[4],
      prodCol[5], prodCol[6], prodCol[7], prodCol[8], prodCol[9],
      prodCol[10], prodCol[11], prodCol[12], prodCol[13], prodCol[14],
	  prodCol[15], prodCol[16], prodCol[17], prodCol[18], prodCol[19],
	  prodCol[20], prodCol[21], prodCol[22], prodCol[23], prodCol[24],
	  prodCol[25], prodCol[26], prodCol[27]
    ));
	// if (i % noofimg === 1 && i > 1 && i !== x.length - 1) {
	//	table += "</div>" + slidewrap;
	// }
	//prodid = x[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue;
	//prodname = x[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue;
	//proddesc = x[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue;
	sprodsize = x[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue;
	  
    table += 
      slideitem + x[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue +
		"\"> <a href=\"#productdet\">" +
       "<img src=\"" + x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "\" alt=\"\"  class=\"slidergrid-image\"  onclick=\"updateProductDetails();\">" +
		//"</a>" +
	    "<img src=\"./productimages/OffWhite.jpg\" " + "\" alt=\"\"  class=\"slidergrid-image-offwhite\">" +
      // slidebg +
      //Title
     //  "<img src =\"./productimages/OffWhite.jpg\" alt=\"\" class=\"slidergrid-image\">" +
	   "<a> <p class=\"sliderNameCap\">" + 
		x[i].getElementsByTagName("Data")[0].childNodes[0].nodeValue  + " - " +
		x[i].getElementsByTagName("Data")[1].childNodes[0].nodeValue +
	 //  "Fabric: " + x[i].getElementsByTagName("Data")[9].childNodes[0].nodeValue  + "<br />" +
	//   "Design: " + x[i].getElementsByTagName("Data")[10].childNodes[0].nodeValue  + "<br />" +
	//   "Top: " + x[i].getElementsByTagName("Data")[10].childNodes[0].nodeValue  + "<br />" +
	//   "Bottom: " + x[i].getElementsByTagName("Data")[12].childNodes[0].nodeValue  + "<br />" +
	//   "Duppatta: " + x[i].getElementsByTagName("Data")[13].childNodes[0].nodeValue  + "</a>" +
     "</p>" + "</a>" ;
	  let sizehtml = "<div class=\"sliderSizeCap\">";
	  
	  if ( tmp_productArrayTable[0].ssize >0 ) {
		sizehtml += "<a class=\"sliderSizeTextinstock\">S</a>";  
	  }
	  else {
		  sizehtml += "<a class=\"sliderSizeTextoutofstock\">S</a>";  
	  }
	  if ( tmp_productArrayTable[0].msize >0 ) {
		sizehtml += "<a class=\"sliderSizeTextinstock\">M</a>";  
	  }
	  else {
		  sizehtml += "<a class=\"sliderSizeTextoutofstock\">M</a>"; 
	  }
	  if ( tmp_productArrayTable[0].lsize >0 ) {
		sizehtml += "<a class=\"sliderSizeTextinstock\">L</a>";  
	  }
	  else {
		  sizehtml += "<a class=\"sliderSizeTextoutofstock\">L</a>"; 
	  }
	  
	  if ( tmp_productArrayTable[0].xlsize >0 ) {
		sizehtml += "<a class=\"sliderSizeTextinstock\">XL</a>";  
	  }
	  else {
		  sizehtml += "<a class=\"sliderSizeTextoutofstock\">XL</a>"; 
	  }
	  if ( tmp_productArrayTable[0].xxlsize >0 ) {
		sizehtml += "<a class=\"sliderSizeTextinstock\">XXL</a>";  
	  }
	  else {
		  sizehtml += "<a class=\"sliderSizeTextoutofstock\">XXL</a>"; 
	  }
	 sizehtml += "</div>"; 
	 table += sizehtml + 
	//"</a>" +
	// "<div class=\"sliderSizeCap\">" + 
	// "<a class=\"sliderSizeText\">S</a>" + 
	// "<a class=\"sliderSizeText\">M</a>" + 
	// "<a class=\"sliderSizeText\">L</a>" + 
	// "<a class=\"sliderSizeText\">XL</a>" +  
	// "<a class=\"sliderSizeText\">XXL</a>" + 
	// "</div>" +
	// "</p>" +
	// "<p class=\"sliderSizeCap\">" + "M" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "L" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "XL" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "XXL" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "3XL" + "</p>" + 
	//"<p class=\"sliderSizeCap\">" + "4XL" + "</p>" +  
	 "<p class=\"sliderPriceCap\">" + "Rs " + x[i].getElementsByTagName("Data")[6].childNodes[0].nodeValue + "</p>" +
	 "<p> <button id=\"addcartBtn\" class=\"addcartbutton\" data-index= \"" + `${i - 1}` + "\" onclick=\"addcart()\">Add to Cart</button> </p>" +
	 "<p> <button class=\"buyButton\">Buy Now</button> </p>" +
	 "</a>" +
	// "<a> <p> <button class=\"addcartbutton\">Add to Cart </button> </p> </a>" + 
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
       "</div> "
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
	  prod += sizehtml; 
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
 // document.getElementById("prodimage").innerHTML = prodimg;
  console.log(table);
  console.log(prod);
	//return pageCount;
}
 loadXMLProducts();

console.log("TotalPages" + TotalPages);

firstpage.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-0}vw)`;
	pageItems.forEach(el => el.classList.remove("active"));
	firstpage.forEach(el => el.classList.remove("active"));
	lastpage.forEach(el => el.classList.remove("active"));
	item.classList.add("active");
    });
    });

lastpage.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
	wrapper.style.transform = `translateX(${TotalPages * -100}vw`;
	pageItems.forEach(el => el.classList.remove("active"));
	firstpage.forEach(el => el.classList.remove("active"));
	lastpage.forEach(el => el.classList.remove("active"));
	item.classList.add("active");
	console.log("TotalPages" + TotalPages);
	
	let choosenProduct = products[0];
	const currentProductImg = document.querySelector(".productImg");
    // Update the chosen product
    choosenProduct = products[7];
    // Update the product image
    currentProductImg.src = choosenProduct.image_path;
    // Log useful info
    console.log(`Index : ${index} Image Path: ${choosenProduct.image_path}, Product ID: ${choosenProduct.product_id}`);
    });
  });

function updateProductDetails() {
const productItem = document.querySelectorAll(".slidergrid-image");
const currentProductImg = document.querySelector(".productImg");
const productInfoDetails = document.querySelector(".productDetails");
const productSizeDetails = document.querySelector(".sliderSizeCap");
const productName = productInfoDetails.querySelector("h1");
const productParagraphs = productInfoDetails.querySelectorAll("p");
 // let chosenProduct = products[0];
// console.log(`productItem.length : ${productItem.length}`);
  productItem.forEach((item, index) => {
	//console.log(`index : ${index} `);
    item.addEventListener("click", () => {
//	  console.log(`Click index : ${index} `);
      const chosenProduct = products[index];
	  currentProductImg.src = chosenProduct.image_path;
	  productName.textContent = chosenProduct.name;
	  productParagraphs[0].textContent = "Product Id: " + chosenProduct.product_id;
      productParagraphs[1].textContent = "Product Details: " + chosenProduct.description;
      productParagraphs[2].textContent = "Product Price: " + chosenProduct.offer_price;
      productParagraphs[3].textContent = "Fabric Details: " + chosenProduct.fabric;
      productParagraphs[4].textContent = "Top Info: " + chosenProduct.top;
      productParagraphs[5].textContent = "Bottom Info: " + chosenProduct.bottom;
      productParagraphs[6].textContent = "Duppatta Info: " + chosenProduct.duppatta;
      console.log(`Image Path: ${chosenProduct.image_path}, Product ID: ${chosenProduct.product_id}`);
      productSizeDetails.style.backgroundColor = "#ffffff"; // Set background White
		});
	});
}

function addcart()
{
	addtocart();
}

//const closeBtn = document.querySelector('.cart-close-button');
//const cartNav = document.getElementById('cartLink');

const selectedItems = {};

function addtocart() {
const BtnProducts = document.querySelectorAll('.addcartbutton');
const cart = document.getElementById('cartlist');
// const totalElement = document.getElementById('carttotal');
const cartOverlay = document.querySelector('.cart-overlay');
console.log(`BtnProducts : ${BtnProducts.length} `);

	BtnProducts.forEach( button => {
    button.addEventListener('click', function() {
	const idx = Number(button.dataset.index);
	  console.log("Button clicked");
     // event.preventDefault();
      handleProductClick(idx);
      // document.body.classList.add('cart-opened');
    }, { once: true });
  });
}


function handleProductClick(idx) {
 // const button = event.target;
  Let clickedcount = 1;

  console.log(`clickedcount = ${clickedcount}`);
  const chosenProduct = products[idx];
  const productId = chosenProduct.product_id;
  const productName = chosenProduct.name;
  const productPrice = chosenProduct.offer_price;
  const productImg = chosenProduct.image_path;

  if (!selectedItems[productId]) {
    selectedItems[productId] = {
      name: productName,
	  image_path: productImg,
      price: productPrice,
      quantity: 1
    };
  } else {
    selectedItems[productId].quantity += 1;
  }

  updateCartDisplay();
  updateTotal();
}

function updateCartDisplay() {
  const totalElement = document.getElementById('carttotal');
  cartlist.innerHTML = '';
  let total = 0; 
  for (const id in selectedItems) {
	const item = selectedItems[id];
	console.log(`id: ${id}, item.quantity: ${item.quantity}`);
    const itemElement = document.createElement('div');
	const listItem = document.createElement('li');
    const quantityContainer = document.createElement('div'); 
	const quantityText = document.createElement('span'); 
	const addButton = document.createElement('button');
	const subtractButton = document.createElement('button');
	addButton.textContent = '+';
	addButton.classList.add('cart-add-button');
	subtractButton.textContent = '-';
	subtractButton.classList.add('cart-subtract-button');
	console.log(`quantityText.textContent: ${item.quantity}`);
	quantityText.textContent = item.quantity; 
	const hr = document.createElement('hr');
		quantityContainer.appendChild(subtractButton); 
		quantityContainer.appendChild(quantityText); 
		quantityContainer.appendChild(addButton); 
		quantityContainer.appendChild(hr); 
	console.log(`listItem.textContent: ${item.quantity}`);  
    listItem.textContent = `${item.name} => ${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
    listItem.appendChild(quantityContainer); 
	cartlist.appendChild(listItem);

		addButton.addEventListener('click', (event) => {
			if (event.target.classList.contains('cart-add-button')) {
			addItem(id);
			}
		});
		subtractButton.addEventListener('click', (event) => {
			if (event.target.classList.contains('cart-subtract-button')) {
			removeItem(id);
			}
		});
	console.log(`After add Remove: ${item.quantity}`); 
	total += item.price * item.quantity; 
  }
  totalElement.textContent = `Grand Total: $${total.toFixed(2)}`;
}

function updateTotal() {
  const totalElement = document.getElementById('carttotal');
  let total = 0;
  for (const id in selectedItems) {
    total += selectedItems[id].price * selectedItems[id].quantity;
  }
  totalElement.textContent = `Grand Total: $${total.toFixed(2)}`;
}

function addItem(ProductId) {
	if (selectedItems[ProductId]) {
		selectedItems[ProductId].quantity++;
	}
	updateCartDisplay();
}

function removeItem(ProductId) {
	if (selectedItems[ProductId]) {
		selectedItems[ProductId].quantity--;
		if (selectedItems[ProductId].quantity <= 0) {
			delete selectedItems[ProductId];
		}
	}
	updateCartDisplay();
}

const cartNav = document.getElementById('cartLink');
const closeBtn = document.querySelector('.cart-close-button');
console.log(`cartNav : ${cartNav.length} , closeBtn : ${closeBtn.length}`);

// Show cart on nav click
cartNav.addEventListener('click', () => {
  console.log("cart-opened-Clicked");
  document.body.classList.add('cart-opened');
});

// Close cart
closeBtn.addEventListener('click', () => {
	console.log("cart-CloseButton -Clicked");
  document.body.classList.remove('cart-opened');
});



function openCartPopup() {
  document.querySelector(".cart-overlay").style.display = "flex"; // Show the cart-overlay
}

function closeCartPopup() {
  document.querySelector(".cart-overlay").style.display = "none"; // Hide the cart-overlay
}

document.getElementById('cartLink').addEventListener('click', function(event) {
  event.preventDefault();
  openCartPopup();
});

document.querySelector('.cart-close-button').addEventListener('click', function(event) {
  event.preventDefault();
  closeCartPopup();
});

cartNav.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.add('cart-opened');
});

closeBtn.addEventListener('click', () => {
  document.body.classList.remove('cart-opened');
});

addcart();
