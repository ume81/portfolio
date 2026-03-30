// Lightbox
const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
overlay.innerHTML = '<button class="lightbox-close">✕</button><img>';
document.body.appendChild(overlay);

const lightboxImg = overlay.querySelector('img');

document.querySelectorAll('.media-main img, .media-sub img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', e => {
  if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
    overlay.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') overlay.classList.remove('active');
});
