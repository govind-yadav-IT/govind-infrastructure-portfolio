
document.addEventListener('DOMContentLoaded',function(){
  var btn=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');
  if(btn&&links){btn.addEventListener('click',function(){var open=links.classList.toggle('open');btn.setAttribute('aria-expanded',open);});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
});
