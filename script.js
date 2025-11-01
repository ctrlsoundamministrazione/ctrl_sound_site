window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 1000);
  }, 5000);
});
  }, 5000); // scompare dopo 5 secondi
} else {
  introOverlay.style.display = "none";
}

