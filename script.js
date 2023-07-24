var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// ----------------------------------
var sidemenu =document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}



// ----------------contact form----------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzf_QOQ0tfNnyJujIVhz49yeG4YH5lLjrpLBVK2JvaueZ7Inbt-KYgIoaBue8e9maX0/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent Succcessfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

// ..............back to top..................
var intervaltop;
var topbtn = document.querySelector('#topbtn');

window.addEventListener('scroll', function(){
    if (document.documentElement.scrollTop > 20) {
        topbtn.style.display = "block";
    } else {
        topbtn.style.display = "none";
    }
});
topbtn.addEventListener('click',function(event){
    event.preventDefault();
    intervaltop = setInterval(function(){
        console.log(intervaltop)
        if(document.documentElement.scrollTop <= 0 ){
            clearInterval(intervaltop);
            return;
        }
        window.scrollBy(0,-100);
    },10)
});
