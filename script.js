const btn = document.getElementById('animate-btn')

const storedClicks = localStorage.getItem('clicks') || 0;

let clickCount = parseInt(storedClicks);
btn.addEventListener('click', () => {
  btn.classList.add('animate')


setTimeout(() => {
  btn.classList.remove('animate')
}, 600);
clickCount++;
localStorage.setItem('click', clickCount);

btn.textContent = `Clicked ${clickCount} times`;

})