const btSearch = document.getElementById('btSearch')
const inputSearch = document.getElementById('inputSearch')
const btSearch2=document.getElementById('btSearch2')
const btClose=document.getElementById('btClose')

btSearch.addEventListener('click',()=>{
    inputSearch.classList.toggle('show')
})
btClose.addEventListener('click',()=>{
    inputSearch.classList.remove('show')
})

const dn=document.querySelector('.dn')
const popupLogin=document.querySelector('.popup-login')
const btClosePopupLogin=document.querySelector('.btClosePopupLogin')
const formLogin=document.querySelector('.form-login')

dn.addEventListener('click',()=>{
    popupLogin.classList.add('showPopupLogin')
})

btClosePopupLogin.addEventListener('click',()=>{
    popupLogin.classList.remove('showPopupLogin')
})

popupLogin.addEventListener('click',(e)=>{
    if(!formLogin.contains(e.target)){
        btClosePopupLogin.click();
    }
})

const dk=document.querySelector('.dk')
const popupRegister=document.querySelector('.popup-register')
const btClosePopupRegister=document.querySelector('.btClosePopupRegister')
const formRegister=document.querySelector('.form-register')


dk.addEventListener('click',()=>{
    popupRegister.classList.add('showPopupRegister')
})

btClosePopupRegister.addEventListener('click',()=>{
    popupRegister.classList.remove('showPopupRegister')
})

popupRegister.addEventListener('click',(e)=>{
    if(!formRegister.contains(e.target)){
        btClosePopupRegister.click();
    }
})

const aticket=document.querySelector('.a-ticket')
const ahotel=document.querySelector('.a-hotel')
const atour=document.querySelector('.a-tour')
const ticket=document.querySelector('.fly-ticket')
const hotel=document.querySelector('.hotel')
const tour=document.querySelector('.tour')


aticket.addEventListener('click',()=>{
    ticket.classList.toggle('showTicket')
    aticket.classList.toggle('show-ft-ticketp')
    aticket.classList.toggle('show-ft-ticket')
    ahotel.classList.remove('show-ft-hotelp')
    ahotel.classList.remove('show-ft-hotel')
    atour.classList.remove('show-ft-tourp')
    atour.classList.remove('show-ft-tour')
    hotel.classList.remove('showHotel');
    tour.classList.remove('showTour');
})
ahotel.addEventListener('click',()=>{
    hotel.classList.toggle('showHotel')
    ahotel.classList.toggle('show-ft-hotelp')
    ahotel.classList.toggle('show-ft-hotel')

    aticket.classList.remove('show-ft-ticketp')
    aticket.classList.remove('show-ft-ticket')
    atour.classList.remove('show-ft-tourp')
    atour.classList.remove('show-ft-tour')

    ticket.classList.remove('showTicket');
    tour.classList.remove('showTour');
})
atour.addEventListener('click',()=>{
    tour.classList.toggle('showTour')
    atour.classList.toggle('show-ft-tourp')
    atour.classList.toggle('show-ft-tour')
    aticket.classList.remove('show-ft-ticketp')
    aticket.classList.remove('show-ft-ticket')
    ahotel.classList.remove('show-ft-hotelp')
    ahotel.classList.remove('show-ft-hotel')
    hotel.classList.remove('showHotel');
    ticket.classList.remove('showTicket');
})

const iconbar=document.querySelector('.icon-bar button');
const navres=document.querySelector('.nav-res');
const closenavmobi=document.querySelector('.colse-nav-mobi');
const navmobi=document.querySelector('.nav-mobi');

iconbar.addEventListener('click',()=>{
    navres.classList.add('showNavMobi')
})

closenavmobi.addEventListener('click',()=>{
    navres.classList.remove('showNavMobi')
})
navres.addEventListener('click',(e)=>{
    if(!navmobi.contains(e.target)){
        closenavmobi.click();
    }
})