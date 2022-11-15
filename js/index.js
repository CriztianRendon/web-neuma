  // NAVBAR SCROLLING

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  el_collapse = document.getElementById('navbarMain');
  
  // add padding-top to body (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    let last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          el_collapse.classList.remove('show');
          let scroll_top = window.scrollY;
          if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if
}); 
// DOMContentLoaded  end


// SEND FORM TO EMAIL
function sendForm() {
  const form_params = {
    user_name : document.getElementById('user_name').value,
    user_email : document.getElementById('user_email').value,
    user_message : document.getElementById('user_message').value,
  };
  
  const serviceId = 'service_hvc7kzn';
  const tempalteId = 'template_no38vlr';

  emailjs
  .send(serviceId, tempalteId, form_params)
  .then((res) => {
    alert('form enviado');
    console.log(res);
  })
  .catch((err) => console.log(err));
  document.getElementById('contact-form').reset();
};
// END SEND MAIL