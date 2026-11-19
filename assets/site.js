/* Back-to-top button: appears once the page header has scrolled away. */
(function(){
  var btn=document.querySelector('.totop'),anchor=document.querySelector('.onpage')||document.querySelector('.header');
  if(!btn) return;
  if(!anchor||!('IntersectionObserver' in window)){btn.classList.add('show');return;}
  new IntersectionObserver(function(e){
    btn.classList.toggle('show',!e[0].isIntersecting&&e[0].boundingClientRect.bottom<0);
  }).observe(anchor);
})();
