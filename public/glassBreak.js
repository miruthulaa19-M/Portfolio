let scrollTimeout;

window.addEventListener('scroll', () => {
  document.body.classList.add('glass-break');
  
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('glass-break');
  }, 300);
});