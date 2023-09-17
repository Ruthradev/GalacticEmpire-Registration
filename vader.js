var tablinks = document.getElementsByClassName("tablinks")
var tabcontents = document.getElementsByClassName("tabcontents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-content")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-content")
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx_Kq_C9IAU8FrEo0BjfpYC1Ci7Uc4-34aZZ0s5LaNZGXdeSqsmTp8FEhn9YHJBc6zzHQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
       
      })
  })
