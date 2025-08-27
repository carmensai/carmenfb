const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./productimages/p1.jpeg",
      },
      {
        code: "darkblue",
        img: "./productimages/p2.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./productimages/p3.jpeg",
      },
      {
        code: "green",
        img: "./productimages/p4.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./productimages/p5.jpeg",
      },
      {
        code: "green",
        img: "./productimages/p6.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./productimages/p1.jpeg",
      },
      {
        code: "lightgray",
        img: "./productimages/p1.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./productimages/p1.jpeg",
      },
      {
        code: "black",
        img: "./productimages/p1.jpeg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
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
  const slidewrap = "<div class=\"sliderWrapper\">";
  const slideitem = "<div class=\"sliderItem\">";
  const slidebg = "<div class="sliderBg"></div>";
  const prodref = "<a href=\"#product\">";
  const butbuynow = "<button class=\"buyButton\">BUY NOW!</button>";
  //<img src="./img/air.png" alt="" class="sliderImg">
  // const slidehead = "<h1 class=\"sliderTitle\"> </br> NEW</br> SEASON</h1>
  //<h2 class="sliderPrice">$119</h2>
                
  
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("Row");
  let table += slide + slidewrap;
  for (let i = 0; i <x.length; i++) { 
    table += slideitem +
       "<img src=\""+ x[i].getElementsByTagName("Data")[3].childNodes[0].nodeValue + "\" alt=\"\" class=\"sliderImg\">" +
       slidebg +
      //Title
       "<h1 class=\"sliderTitle\">" + x[i].getElementsByTagName("Data")[1].childNodes[0].nodeValue  + "</h1>" +
       "<h2 class=\"sliderPrice\">" + "Rs " + x[i].getElementsByTagName("Data")[6].childNodes[0].nodeValue + </h2> +
       prodref + butbuynow +
       "</a>" + 
       "</div>"
      // "<td>" + x[i].getElementsByTagName("Data")[1].childNodes[0].nodeValue + "</td>" + 
      // "<td>" + x[i].getElementsByTagName("Data")[2].childNodes[0].nodeValue + "</td>" +
      // "</tr>"
        ;
    
  }
  table += "</div> </div>"
  document.getElementById("demo").innerHTML = table;
}
