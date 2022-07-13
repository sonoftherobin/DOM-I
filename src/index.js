const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!');
//header
const links = document.querySelectorAll("nav a");
links.forEach(a=>{
  a.className = "italic"
})
console.log(links);
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

//logo
const logo = document.querySelector("#logo-img");
logo.src = siteContent["images"]["logo-img"];

//h1
const domHeader = document.querySelector("h1");
domHeader.textContent = siteContent.cta.h1;
document.querySelector(".cta-text").prepend(domHeader);

//button
document.querySelector("button").textContent = siteContent.cta.button;

//cta image
const ctaImage = document.querySelector("#cta-img");
ctaImage.src =siteContent["images"]["cta-img"];

//section titles

const titles = document.querySelectorAll(".main-content h4");
const featuresTitle = titles[0];
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
const aboutTitle = titles[1];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
const servicesTitle = titles[2];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
const productTitle = titles[3];
productTitle.textContent = siteContent["main-content"]["product-h4"];
const visionTitle = titles[4];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

//section text

const text = document.querySelectorAll(".main-content p");
const featuresText = text[0];
featuresText.textContent = siteContent["main-content"]["features-content"];
const aboutText = text[1];
aboutText.textContent = siteContent["main-content"]["about-content"];
const servicesText = text[2];
servicesText.textContent = siteContent["main-content"]["services-content"];
const productText = text[3];
productText.textContent = siteContent["main-content"]["product-content"];
const visionText = text[4];
visionText.textContent = siteContent["main-content"]["vision-content"];

//main image
const mainImage = document.querySelector(".middle-img").src =siteContent["images"]["accent-img"];

//contact


document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
const info = document.querySelectorAll(".contact p")
info[0].textContent = siteContent.contact.address;
info[1].textContent = siteContent.contact.phone;
info[2].textContent = siteContent.contact.email;

//footer
document.querySelector("footer a").textContent = siteContent.footer.copyright;
document.querySelector("footer a").className = "bold"



