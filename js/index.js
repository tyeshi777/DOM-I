const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = siteContent["nav"]["img-src"];
logo.alt = "Great Idea! Company logo.";

let navItems = siteContent["nav"];
let navA = document.querySelectorAll("a");
navA[0].textContent = navItems["nav-item-1"];
navA[1].textContent = navItems["nav-item-2"];
navA[2].textContent = navItems["nav-item-3"];
navA[3].textContent = navItems["nav-item-4"];
navA[4].textContent = navItems["nav-item-5"];
navA[5].textContent = navItems["nav-item-6"];

let heading = siteContent["cta"];
let header1 = document.querySelector("h1");
header1.textContent = "DOM Is Awesome";
let btn = document.querySelector("button");
btn.textContent = "Get Started";
let headingImg = document.getElementById("cta-img");
headingImg.src = "img/header-img.png";
heading.alt = "Image of a code snippet.";

const main = siteContent["main-content"];
let featureHeader = document.querySelectorAll("h4")[0];
let featurePara = document.querySelectorAll("p")[0];

featureHeader.textContent = "Features";
featurePara.textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let aboutHeader = document.querySelectorAll("h4")[1];
let aboutPara = document.querySelectorAll("p")[1];

aboutHeader.textContent = "About";
aboutPara.textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let mainImg = document.getElementById("middle-img");
mainImg.src = "img/mid-page-accent.jpg";
mainImg.alt = "Image of code snippets across the screen";

let servicesHeader = document.querySelectorAll("h4")[2];
let servicesPara = document.querySelectorAll("p")[2];

servicesHeader.textContent = "Services";
servicesPara.textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productHeader = document.querySelectorAll("h4")[3];
let productPara = document.querySelectorAll("p")[3];

productHeader.textContent = "Product";
productPara.textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let visionHeader = document.querySelectorAll("h4")[4];
let visionPara = document.querySelectorAll("p")[4];

visionHeader.textContent = "Vision";
visionPara.textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contacts = siteContent["contact"];
let contactHeader = document.querySelectorAll("h4")[5];
contactHeader.textContent = "Contact";
contactPara = document.querySelectorAll("p")[5];
contactPara.textContent = "123 Way 456 Street Somewhere, USA";
contactPara = document.querySelectorAll("p")[6];
contactPara.textContent = "1 (888) 888-8888";
contactPara = document.querySelectorAll("p")[7];
contactPara.textContent = "sales@greatidea.io";

let footer = siteContent["footer"];
let footerPara = document.querySelectorAll("p")[8];
footerPara.textContent = "Copyright Great Idea! 2018";
