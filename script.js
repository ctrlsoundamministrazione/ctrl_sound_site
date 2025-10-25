// Basic interactions (no external libs)
// Nothing sensitive; keeps code minimal and readable.

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchors (if any in future)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
  // Add subtle focus outlines for accessibility on keyboard nav
  document.addEventListener('keydown', function(e){
    if(e.key === 'Tab'){
      document.body.classList.add('show-focus');
    }
  });

  // Make images lazy-load native
  document.querySelectorAll('img').forEach(img=>{
    img.loading = 'lazy';
  });
});
