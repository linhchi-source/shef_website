const images = document.querySelectorAll(".image");
const gallery = document.querySelector(".gallery");
const btn = document.querySelector("button");
const body = document.querySelector("body");
const file = document.querySelector("#myfile");
const new_img = document.querySelector("#new_img");
// if click on image, do enlargeimage
images.forEach((image) => {
  image.addEventListener("click", enlargeImage);
});

// console.log(gallery)
// Function to enlarge image
function enlargeImage(event) {
  const clickedImage = event.target;

  // Hide all other images
  images.forEach((image) => {
    if (image !== clickedImage) {
      image.classList.add("hidden");
    }
  });

  // Add enlarged class to clicked image to center and enlarge it
  clickedImage.classList.add("enlarged");
  console.log(clickedImage.className);

  // Show gallery
  body.classList.add("body_large");

  // Add click event to gallery to close the enlarged image
  btn.addEventListener("click", closeEnlargedImage);
}

// Function to close enlarged image and restore gallery
function closeEnlargedImage() {
  // choose enlargeimage
  const enlargedImage = document.querySelector(".enlarged");

  // Hide gallery

  // Remove enlarged class from image
  if (enlargedImage) {
    enlargedImage.classList.remove("enlarged");
  }

  // Show all images again
  images.forEach((image) => {
    image.classList.remove("hidden");
  });

  // Remove event listener from gallery
  btn.removeEventListener("click", closeEnlargedImage);
}
file.addEventListener("change", () => {
  const url = URL.createObjectURL(file.files[0]);
  new_img.src = url;
  console.log(url);
});
