// finds elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// creates images arrey
var imagesUrls = [];
imagesUrls.push('https://artsdot.com/ADC/Photos-ImgScreen.nsf/O/P-AC9375/$FILE/Vehicle-cars_991_.Jpg');
imagesUrls.push('https://www.allcarz.ru/wp-content/uploads/2011/01/foto-porsche-918-rsr_05.jpg');
imagesUrls.push('https://artsdot.com/ADC/Photos-ImgScreen.nsf/O/P-AC92G2/$FILE/Vehicle-cars_325_.Jpg');
imagesUrls.push('http://cdn4.3dtuning.com/info/Porsche%20918%20RSR%202012%20Coupe/factory/1.jpg');

var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];

// functions defenitions
function onShowPrevBtnClick() {
  currentImageIndex--;
  slideImage.src = imagesUrls[currentImageIndex];
};
function onShowNextBtnClick() {
  currentImageIndex++;
  slideImage.src = imagesUrls[currentImageIndex];

  // disabled next
  if (currentImageIndex === (imagesUrls.length - 1)) {
    showNextBtn.disabled = true;
  }
};