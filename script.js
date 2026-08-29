document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
}));