const reviews = [
  {
    name: "Alina Thomsan",
    Designation: "Software Developer",
    img: "./images/reviewer6.jpg",
    comment:
      "Sound Quality:Acha Sound Ha Or Base Bi Ha Battery Life:wo to ab charge krne ke bad pta chle ga Comfort:comfort level bi acha ha.",
  },
  {
    name: "Susan Smith",
    Designation: "Web Developer",
    img: "./images/reviewer1.jpg",
    comment:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
  },
  {
    name: "Anna Johnson",
    Designation: "UX Designer",
    img: "./images/reviewer2.jpg",
    comment:
      "#5.5 sale sy order Kiya tha bohat hi zabardast discount ma Mila hai 1450 RS ma wo bhi fast delevery k sath original product long expiry bhi hai thanks daraz.",
  },
  {
    name: "Peter Jones",
    Designation: "Intern",
    img: "./images/reviewer4.jpg",
    comment:
      "delivery service very slow pury 10den bad parsel Aya ha Lahore to vehari 4ghnty ka safr lakin parsel ahda Punjab ghom Aya ha MashAllah parsel be tota Howa behja ha janab ne kia kry es ka ab hum please don't waste your money and time and don't buy this item please belkl halki chez ha",
  },
  {
    name: "Thomas Jin",
    Designation: "Backend Developer",
    img: "./images/reviewer5.jpg",
    comment:
      "This was my second order from this seller, and guess what? seller gained the trust again!t thanks seller, as well as daraz for making it happenand best .it is much better as we think so we thanks to daraz and appriciat u keep it up may allah bless u with more success a lot of thank.",
  },
  {
    name: "kris Joshi",
    Designation: "React Developer",
    img: "./images/reviewer3.avif",
    comment:
      "This product is very good. That's 100% the point. Delivery was on time and the store manager gave a good deal This thing is great. Giving a good item for less money. would say to all my friends that this is definitely a good offer to buy. Time is of the essence bohat achi product h, color b bohat attractive h.",
  },
];

let currentReview = 0;

const reviewer = document.getElementById("nameTag");
const designation = document.getElementById("designationTag");
const review = document.getElementById("reviewerComment");
const reviewerImg = document.getElementById("reviewerImg");
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentReview);
});

function showPerson(index) {
  const item = reviews[index];
  reviewer.textContent = item.name;
  designation.textContent = item.Designation;
  review.textContent = item.comment;
  reviewerImg.src = item.img;
}

const nextBtn = document.getElementById("forwardBtn");
const prevBtn = document.getElementById("backwardBtn");
const surpriseBtn = document.getElementById("surpBtn");

nextBtn.addEventListener("click", function () {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showPerson(currentReview);
});

prevBtn.addEventListener("click", function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showPerson(currentReview);
});

surpriseBtn.addEventListener("click", function () {
  currentReview = Math.floor(Math.random() * reviews.length);
  console.log("curr Review", currentReview);
  showPerson(currentReview);
});
