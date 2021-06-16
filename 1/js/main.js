// open profile
const enterPoint = document.querySelector(".enter-point");
if (enterPoint) {
  const profileMenu = document.querySelector(".profile-menu");
  enterPoint.addEventListener("mouseenter", () => {
    profileMenu.classList.add("zoomed");
    profileMenu.addEventListener("mouseleave", () => {
      profileMenu.classList.add("on-zoomed");
      setTimeout(() => {
        profileMenu.classList.remove("zoomed");
        profileMenu.classList.remove("on-zoomed");
      }, 200);
    });
  });
}
// end open profile

// hover evect on search
const search = document.querySelector(".fake-input-search");
if (search) {
  let isOpen = false;
  searchSection = document.querySelector(".search");
  const input = searchSection.querySelector("input");
  const runTimer = (time) => {
    // {event} closed from timer
    setTimeout(() => {
      closeInput();
    }, time);
  };

  class dynamicTimer {
    constructor(func, delay) {
      this.callback = func;
      this.triggerTime = +new Date() + delay;
      this.timer = 0;
      this.updateTimer();
    }

    updateTimer() {
      clearTimeout(this.timer);
      let delay = this.triggerTime - new Date();
      console.log("Current delay: ", delay);
      this.timer = setTimeout(this.callback, delay);
      return this;
    }

    addTime(delay) {
      this.triggerTime += delay;
      this.updateTimer();
      return this;
    }
  }

  const closeInput = () => {
    input.classList.add("re-zoom-input");
    search.classList.remove("active-fake-input");
    if (searchSection.querySelector("input").classList.contains("zoom-input")) {
      setTimeout(
        () =>{
            searchSection.querySelector("input").classList.remove("zoom-input")
            searchSection.querySelector("input").blur()
        }, 100
      );
    }
    isOpen = false;
  };

  // {event} close item on clike
  window.addEventListener("click", (e) =>{
    let fakeInput = e.target
    let isFakeInput = fakeInput.classList.contains('fake-input-search')
    let isParentFakeInput = fakeInput.parentNode.classList.contains('fake-input-search')
    !isFakeInput && !isParentFakeInput && isOpen === true ? closeInput() : null
  });

  const openInput = () => {
    input.classList.add("zoom-input");
    search.classList.add("active-fake-input");
    if (searchSection.querySelector("input").classList.contains("re-zoom-input")) {
      setTimeout(() => searchSection.querySelector("input").classList.remove("re-zoom-input"), 100);
    }
    isOpen = true;
    timerOnOpening = () => runTimer(3000);
  };
  const cheangeStatusInput = (isOpen) => {
    switch (isOpen) {
      case true:
        closeInput();
        break;

      case false:
        timer = new dynamicTimer(() => closeInput(), 6000);
        openInput();
        break;
    }
  };
  search.addEventListener("click", (e) => 
    e.target.classList.contains('fake-input-search')?cheangeStatusInput(isOpen):null);
  input.addEventListener("input", () => {
    timer.addTime(2000);
  });
}
// end hover evect on search

//
// selecter
//

// {event} close fake selects on miss click
const closeAllOptions = () => {
  const allFakeInput = document.querySelectorAll(".fake-selector-big, .fake-selector-small");
  if (allFakeInput.length > 0) {
    for (let i = 0; i < allFakeInput.length; i++) {
      console.log("Close");
      if (allFakeInput[i].querySelector('.options').classList.contains('close-big')) {
          allFakeInput[i].querySelector('.options').classList.remove('close-big')
      }
      else if (allFakeInput[i].querySelector('.options').classList.contains('close-small')) {
        allFakeInput[i].querySelector('.options').classList.remove('close-small')
      }
    }
  }
};

window.addEventListener("click", (e) => {
  // e.target.classList.contains('.fake-selector-big')?null:closeAllOptions()
  let isBig = e.target.classList.contains("fake-selector-big");
  let isSmall = e.target.classList.contains("fake-selector-small");
  let isOpen = e.target.classList.contains("full");
  let isFakeInput = e.target.classList.contains("fake-input");
  let isP = e.target.nodeName === "P";
  let isLabel = e.target.nodeName === "LABEL";
  if (!isBig && !isSmall && !isOpen && !isP && !isLabel && !isFakeInput) {
    closeAllOptions()
  }
});

// end close fake selects on miss click

const selectedNewValue = (e, options, selectedValue, valueNow, arrow) => {
  options.classList.contains("close-big")
    ? arrow.classList.remove("full")
    : arrow.classList.add("full");
  if ((e.target.dataset.value !== 0) & (e.target.dataset.value !== undefined)) {
    selectedValue = e.target.textContent;
    valueNow.dataset.value = e.target.dataset.value;
    valueNow.innerHTML = selectedValue;
  }
};

const select = document.querySelector(".fake-selector"),
      options = document.querySelector("ul.options");
let arrow = select.querySelector("p"),
  selectedValue = undefined,
  valueNow = select.querySelector("p");

//{event} Open options
select.addEventListener("click", () => {
  options.classList.toggle("close-big");
});

//{event} Selected options
select.addEventListener("click", (e) => {
  selectedNewValue(e, options, selectedValue, valueNow, arrow);
});

options.classList.contains("close-big") ? optionsListClosed(select, options) : null;
//
// End selecter
//

// Small selecters
const smallSecects = document.querySelectorAll(".fake-selector-small");
if (smallSecects.length === 2) {
  for (let i = 0; i < smallSecects.length; i++) {
    smallSecects[i].parentNode.onclick = () => {
      smallSecects[i].querySelector(".options").classList.toggle("close-small");
      smallSecects[i].addEventListener("click", (e) => {
          let options = smallSecects[i].querySelector(".options")
          let valueNow = smallSecects[i].querySelector("p")
          let arrow = smallSecects[i].querySelector("p")
        selectedNewValue(e, options, selectedValue, valueNow, arrow);
      })
    };
  }
}
//end  Small selecters

//
// Print icon on class "Remove"
//

try {
  const items = document.querySelectorAll(".remove");
  items.forEach((i) => {
    i.innerHTML =
      "<svg  viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><g><path fill='rgb(174, 174, 174)' d='m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z'/><path fill='rgb(174, 174, 174)' d='m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z'/></g></svg>";
  });
} catch (e) {
  console.error('Касяк с иконками в таблице на вкладке "SMS');
}

//
// End print icon on class "Remove"
//



// 
// title page in logo
// 

const title = document.querySelector('span.way')
if (title) {
    const wTitle = title.scrollWidth
    wTitle> 50? title.style.marginLeft = "-15px":null
}

// 
// end title page in logo
// 

//
// sliser on contact
// 
const slider = document.querySelector('.contact-wrap .row')
if (slider) {
  const slides = slider.querySelectorAll("P")
  const sliderLength = slides.length
  let i = 0
  setInterval(()=>{
    if(i<sliderLength){
      slides[i].classList.add('active')
      i>0?slides[i-1].classList.remove('active'):null
      i++
    }
    else{
      i=0
      slides[i].classList.add('active')
      slides[sliderLength-1].classList.remove('active')
    }
  },1000)
}