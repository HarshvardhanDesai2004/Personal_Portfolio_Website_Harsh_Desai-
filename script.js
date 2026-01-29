const toggleBtn = document.getElementById('themeToggle');

if (localStorage.getItem('theme')==='dark') 
    {
  document.body.classList.add('dark');
}

toggleBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  localStorage.setItem('theme',document.body.classList.contains('dark') ? 'dark' : 'light');
});

function typeEffect() 
{
  if(index<text.length) 
    {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
