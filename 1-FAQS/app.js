const faqs= document.querySelectorAll(".faqs");

// loop through faqs

Array.from(faqs).forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle("active");
    })
});