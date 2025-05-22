// lotte world JS

// Header DOM ===========================================
let hdrEl = document.querySelector('header');
let hdrLogo = document.querySelector('h1 img');
let navLogos = document.querySelectorAll('nav .navLogos');
let navLogosName = [
  'advt_logo',
  'advt_busan_logo',
  'sky_logo',
  'aqua_logo',
  'waterpark_logo',
  'aqua_hanoi_logo',
];
const changeImage = (img, idx, color) => {
  img.src = `img/${navLogosName[idx]}_${color}.png`;
};

hdrEl.addEventListener('mouseover', () => {
  // active 하면 header 스타일 변경
  hdrEl.classList.add('hdrActive');
  hdrLogo.src = 'img/logo_blk.png';
  // nav 에 있는 로고들은
  navLogos.forEach((img, idx) => {
    img.addEventListener('mouseenter', () => {
      changeImage(img, idx, 'red');
    });
    img.addEventListener('mouseleave', () => {
      changeImage(img, idx, 'blk');
    });
  });
});

hdrEl.addEventListener('mouseleave', () => {
  hdrEl.classList.remove('hdrActive');
  hdrLogo.src = 'img/logo_wh.png';
});

// MainSection DOM ================================
let allColumn = document.querySelectorAll('main .column');
console.log(allColumn);
// allColumn.forEach((col) => {
//   col.addEventListener("mouseenter", ()=>{
//     col.classList.add("colActive")
//   })
// })
