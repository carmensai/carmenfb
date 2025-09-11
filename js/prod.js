const wrapper = document.querySelector(".sliderWrapper");
const pageItems = document.querySelectorAll(".paginationText");
const firstpage = document.querySelectorAll(".pagefirst");
const lastpage = document.querySelectorAll(".pagelast");
const nextpage = document.querySelectorAll(".pagenext");
const previouspage = document.querySelectorAll(".pageprevious");
pageItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
  });


// Calling loadXMLProducts
function loadXMLProducts() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const pg = myFunction(this);
	  return pg;
  }
  xhttp.open("GET", "https://carmensai.github.io/carmenfb/ProductXML_New.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  const noofimg = 4;
  const slide = "<div class=\"slider\">";
  const slidewrap = "<div class=\"sliderWrapper\">";
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
  	const pageCount = Math.ceil((x.length - 1) / noofimg);
	wrapper.style.setProperty('--sliderwrapperwidth', `${pageCount * 100}vw`);
  for (let i = 1; i <x.length; i++) { 
	// if (i % noofimg === 1 && i > 1 && i !== x.length - 1) {
	//	table += "</div>" + slidewrap;
	// }
    table += 
      slideitem +
       "<img src=\"" + x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "\" alt=\"\"  class=\"slidergrid-image\">" +
	    "<img src=\"./productimages/OffWhite.jpg\" " + "\" alt=\"\"  class=\"slidergrid-image\">" +
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
     "</p>" +
	"</a>" +
	 "<div class=\"sliderSizeCap\">" + 
	 "<a class=\"sliderSizeText\">S</a>" + 
	 "<a class=\"sliderSizeText\">M</a>" + 
	 "<a class=\"sliderSizeText\">L</a>" + 
	 "<a class=\"sliderSizeText\">XL</a>" +  
	 "<a class=\"sliderSizeText\">XXL</a>" + 
	 "</div>" +
	// "</p>" +
	// "<p class=\"sliderSizeCap\">" + "M" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "L" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "XL" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "XXL" + "</p>" +
	//"<p class=\"sliderSizeCap\">" + "3XL" + "</p>" + 
	//"<p class=\"sliderSizeCap\">" + "4XL" + "</p>" +  
	 "<p class=\"sliderPriceCap\">" + "Rs " + x[i].getElementsByTagName("Data")[5].childNodes[0].nodeValue + "</p>" +
	 "<p> <button class=\"addcartbutton\">Add to Cart</button> </p>" +
	 "<p> <button class=\"buyButton\">Buy Now</button> </p>" +
	 "</a>" +
	// "<a> <p> <button class=\"addCartButton\">Add to Cart </button> </p> </a>" + 
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
       "</div>"
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
	return pageCount;
}
const TotalPages = loadXMLProducts();


firstpage.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-0}vw)`;
    });
  });

lastpage.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
	wrapper.style.transform = `translateX(${TotalPages * 100}vw`;
    });
  });

