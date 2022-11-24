//--------------导航栏高亮----------------------------------------
var nav = document.getElementById("menu");
var links = nav.getElementsByTagName("li");
var lilen = nav.getElementsByTagName("a");
var currenturl = document.location.href;
var last = 0;
for (var i=0;i<links.length;i++)
{
   var linkurl =  lilen[i].getAttribute("href");
     if(currenturl.indexOf(linkurl)!=-1)
        {
         last = i;
        }
}
links[last].className = "hl";
//----------------------------------------------------------------

//-------------------------图片懒加载(需要浏览器支持)-------------------
/*
const images = document.querySelectorAll('img');

const callback = entries => {
   entries.forEach( entry => {
      if( entry.isIntersecting ) {
         const image = entry.target;
         const data_src = image.getAttribute('data-src');
         image.setAttribute('src',data_src);
         observer.unobserve(image);
         console.log('触发')
      }
   })
}
const observer = new IntersectionObserver( callback );
images.forEach( image => {
   observer.observe( image );
});
*/
//--------------------------返回顶部功能--------------------------------------
const scrollToTopBtn = document.querySelector('.back-to-top')
const rootElement = document.documentElement

function handleScroll() {
   const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
   if ((rootElement.scrollTop / scrollTotal) > 0.80) {
     scrollToTopBtn.classList.add('showBtn')
   } else {
     scrollToTopBtn.classList.remove('showBtn')
   }
 }
 
 document.addEventListener('scroll', handleScroll)
 

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

scrollToTopBtn.addEventListener('click', scrollToTop)
//-----------------------------------------------------------------------