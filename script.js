function togglePopup(){
    document.getElementById("about").classList.toggle("active");
  }

function start() {
  func1();
  func2();
}

function func1() {
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
      EFFECT1.style.transform = 'translateY(0px)';
      EFFECT1.style.transition = '0.9s ease-in';
      EFFECT1.style.animationIterationCount = '1';
      SEC2.style.opacity = '1';
      SEC2.style.transform = 'translateY(0px)';
      SEC2.style.transition = '0.9s ease-in';
      SEC2.style.animationIterationCount = '1';
    }
    else {
      EFFECT1.style.opacity = '0';
      EFFECT1.style.transform = 'translateY(80px)';
      SEC2.style.opacity = '0';
      SEC2.style.transform = 'translateY(80px)';
    }
  }
  scrollEffect1();
}

function func2() {
  $(".fa-search").click(function(){
    $(".search-i").toggleClass("active");
   $("input[type='text']").toggleClass("active");
 });
}

window.onload = start;