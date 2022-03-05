// finds elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// creates images arrey
var imagesUrls = [];
imagesUrls.push('https://artsdot.com/ADC/Photos-ImgScreen.nsf/O/P-AC9375/$FILE/Vehicle-cars_991_.Jpg');
imagesUrls.push('https://www.allcarz.ru/wp-content/uploads/2011/01/foto-porsche-918-rsr_05.jpg');
imagesUrls.push('https://i.ucrazy.ru/files/i/2011.3.22/1300779283_5853c7104bec054f5ca1eee4bb8c8f89_orig.jpg');
imagesUrls.push('http://cdn4.3dtuning.com/info/Porsche%20918%20RSR%202012%20Coupe/factory/1.jpg');

// functions defenitions
function onShowPrevBtnClick() {
  console.log('prev clicked');
};
function onShowNextBtnClick() {
  console.log('next clicked');
};