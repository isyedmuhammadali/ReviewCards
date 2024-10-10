import { reviews } from "./contant.js";

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
