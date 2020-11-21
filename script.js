function togglePopup(){
    document.getElementById("about").classList.toggle("active");
  }

window.onload = function() {
  const EFFECT1 = document.querySelector("#effect1");
  const SEC2 = document.querySelector("#sect-2");
  const text = document.querySelector(".subjudul");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick () {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }

  window.addEventListener('scroll', scrollEffect1);
  function scrollEffect1 () {
    if(window.scrollY>=300) {
      EFFECT1.style.opacity = '1';
      EFFECT1.style.transform = 'translateX(0px)';
      EFFECT1.style.transition = '1s ease-in-out';
    }
    else {
      EFFECT1.style.opacity = '0';
      EFFECT1.style.transform = 'translateX(-50px)';
    }
  }
  scrollEffect1();

  window.addEventListener('scroll', scrollSec2);
  function scrollSec2 () {
    if(window.scrollY>=300) {
      SEC2.style.opacity = '1';
      SEC2.style.transform = 'translateY(0px)';
      SEC2.style.transition = '1s ease-in-out';
    }
    else {
      SEC2.style.opacity = '0';
      SEC2.style.transform = 'translateY(50px)';
    }
  }
  scrollSec2();
}