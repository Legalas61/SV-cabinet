// open profile
const enterPoint = document.querySelector(".enter-point");
if (enterPoint) {
  const profileMenu = document.querySelector(".profile-menu");

  const timer  = (timer) => setTimeout(timer, 200)


  enterPoint.addEventListener("mouseenter", () => {
    const openingProfile = () =>{
      profileMenu.classList.add("zoomed");
      profileMenu.addEventListener("mouseleave", () => {
        profileMenu.classList.add("on-zoomed");
        setTimeout(() => {
          profileMenu.classList.remove("zoomed");
          profileMenu.classList.remove("on-zoomed");
        }, 200);
      });
    }

    const run = timer(openingProfile)
    enterPoint.addEventListener("mouseleave", () => {
      clearTimeout(run)
    })
    
  });
}
// end open profile

// hover evect on search
const search = document.querySelector(".fake-input-search");
if (search) {
  let isOpen = false;
  searchSection = document.querySelector(".search");
  const input = searchSection.querySelector("input");


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
    let isHaveValue = Boolean(search.querySelector('input').value)
    !isFakeInput && !isParentFakeInput && isOpen === true && !isHaveValue ? closeInput() : null
  });

  const openInput = () => {
    input.classList.add("zoom-input");
    search.classList.add("active-fake-input");
    if (searchSection.querySelector("input").classList.contains("re-zoom-input")) {
      setTimeout(() => searchSection.querySelector("input").classList.remove("re-zoom-input"), 100);
    }
    isOpen = true;
  };
  const cheangeStatusInput = (isOpen) => {
    switch (isOpen) {
      case true:
        closeInput();
        break;

      case false:
        openInput();
        break;
    }
  };
  search.addEventListener("click", (e) => 
    e.target.classList.contains('fake-input-search')?cheangeStatusInput(isOpen):null);
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
    wTitle > 50? title.style.marginLeft = "-15px":null
}

// 
// end title page in logo
// 

// 
// Chat
// 

// {event} Open/close
const MoveChat = (btn) => {
  chat.classList.toggle("open-chat")
  if (chat.classList.contains("open-chat")) {
    btn.classList.add('rotate')
    setTimeout(()=>btn.classList.remove('rotate'), 1000)
    chat.style.display = "flex"
    btn.querySelector('span').style.display="none"
  }
  else {
    btn.classList.add('rotate')
    setTimeout(() => btn.classList.remove('rotate'), 1000)
    chat.style.display = "none"
    setTimeout(()=>{
      btn.querySelector('span').style.display="block"
    }, 500)
  }
}
const chat = document.querySelector('.question .chat')
if(chat){
  const openChatBtn = document.querySelector('.question button')
  const closeChatBtn = chat.querySelector('.header svg')
  openChatBtn.addEventListener("click", ()=> MoveChat(openChatBtn) )
  closeChatBtn.addEventListener("click", ()=> MoveChat(openChatBtn) )

  // {event} send message
  const sendBtn = chat.querySelector('.send-btn')
  const textarea = chat.querySelector('textarea')
  sendBtn.addEventListener('click',() => {
    const textareaValue = textarea.value.trim().split('\n').join('<br>')
    if (textareaValue.length !== 0) {
      const allMesages = chat.querySelector('.wrap-chat')
      const myMessage =`<p class="user">${textareaValue}</p>`
      allMesages.innerHTML += myMessage
      allMesages.scrollTop = allMesages.clientHeight
      chat.querySelector('textarea').value = ''
      textarea.style.height='16px'
    }
  })

  // {event} autosize textarea
  textarea.addEventListener('keydown', () => textarea.style.height=`${textarea.scrollHeight}px`)

  // resize areaChat
  const areaChat = document.querySelector('.question .wrap-chat')
  const mainArea = document.querySelector('main .main-wrap')
  areaChat.style.maxHeight = (mainArea.offsetHeight - 65)+"px"
  window.addEventListener('resize', ()=>{
    areaChat.style.maxHeight = (mainArea.offsetHeight - 65)+"px"
  })


}
// 
// End Chat
// 


// 
// Hover our contact
// 
const contactsWrap = document.querySelector('.our-contact')
if(contactsWrap){
  const phone = `<figure class="phone">
  <figcaption>
      <a href="#">+7(999)999-99-99 </a>
  </figcaption>
  <span class="info-area">Показать наш телефон</span>
  <svg version='1.1'  width='18' height='18' xmlns='http://www.w3.org/2000/svg'  x='0px' y='0px' viewBox='0 0 384 384'><path d='M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594 c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813 C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z'/></svg>
</figure>`

  const email = `<figure class="email">
<figcaption>
    <a href="#">Soft-Villadge@gmail.ru</a>
</figcaption>
<span class="info-area">Показать наш email</span>
<svg width='18' height='18' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.574002 1.286L8.074 5.315C8.326 5.45 8.652 5.514 8.98 5.514C9.308 5.514 9.634 5.45 9.886 5.315L17.386 1.286C17.875 1.023 18.337 0 17.44 0H0.521002C-0.375998 0 0.0860016 1.023 0.574002 1.286ZM17.613 3.489L9.886 7.516C9.546 7.694 9.308 7.715 8.98 7.715C8.652 7.715 8.414 7.694 8.074 7.516C7.734 7.338 0.941002 3.777 0.386002 3.488C-0.00399834 3.284 1.61606e-06 3.523 1.61606e-06 3.707V11C1.61606e-06 11.42 0.566002 12 1 12H17C17.434 12 18 11.42 18 11V3.708C18 3.524 18.004 3.285 17.613 3.489Z'/></svg>
</figure>`
  const telergam = `<figure class="telegram">
<figcaption>
    <a href="#">@Soft-Villadge </a>
</figcaption>
<span class="info-area">Показать наш telegram</span>
<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 0C4.02823 0 0 4.02823 0 9C0 13.9718 4.02823 18 9 18C13.9718 18 18 13.9718 18 9C18 4.02823 13.9718 0 9 0ZM13.4202 6.16573L11.9431 13.1262C11.8343 13.6198 11.5403 13.7395 11.1302 13.5073L8.88024 11.8488L7.79516 12.894C7.6754 13.0137 7.57379 13.1153 7.34153 13.1153L7.50121 10.8254L11.671 7.05847C11.8524 6.89879 11.631 6.80806 11.3915 6.96774L6.23831 10.2121L4.01734 9.51895C3.53468 9.36653 3.52379 9.03629 4.11895 8.80403L12.796 5.45806C13.1988 5.3129 13.5508 5.55605 13.4202 6.16573Z'/></svg>
</figure>`

  const someCopy = (some) =>{
    const someLink = contactsWrap.querySelector(`.${some} a`)
    const value = someLink.text
    navigator.clipboard.writeText(value)
    someLink.classList.add("green-text")
    someLink.innerHTML = "Скопировано!"
    setTimeout( () => {
      someLink.innerHTML = value
      someLink.classList.remove("green-text")
      }, 500
    )
  }

  contactsWrap.innerHTML=phone+email+telergam
  contactsWrap.addEventListener('click', (e) => {
    setTimeout(() => {
      switch(e.target.className){
        case 'phone':
          contactsWrap.innerHTML=phone+email+telergam
          someCopy('phone')
          break
        case 'email':
          contactsWrap.innerHTML=email+phone+telergam
          someCopy('email')
          break
        case 'telegram':
          contactsWrap.innerHTML=telergam+phone+email
          someCopy('telegram')
          break
      }
    },0)
  })
}
// 
// End Hover our contact
// 


// 
// footer contact
// 
const contactInFooter = document.querySelector("footer.our-contact")
const body =  document.querySelector('body')
if (contactInFooter) {
  const hContant = document.querySelector('main').scrollHeight
  if (hContant > 790) {
    contactInFooter.classList.add('fix-in-bottom')
  }
 window.addEventListener('resize', ()=> {
    if(window.outerHeight > 1000){
      contactInFooter.classList.add('fix-in-bottom')
    }
    else{
      contactInFooter.classList.remove('fix-in-bottom')
    }
  })
}

// 
// End footer contact
// 
