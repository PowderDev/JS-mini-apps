const faqs = document.querySelectorAll('.faq'),
      btns = document.querySelectorAll('.faq-toggle');

function toggleFaq(e){
    if(e.target.parentNode.classList.contains('active')){
        e.target.parentNode.classList.remove('active')
    }else{
    faqs.forEach(faq =>{
        faq.classList.remove('active')
        e.target.parentNode.classList.add('active')
    })
    }
}
btns.forEach(btn => btn.addEventListener('click', toggleFaq))