const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
},
  {
    threshold: 0.5
  }
)

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(el => observer.observe(el))

const burger = document.getElementById('burger')
const dropdownMenu = document.querySelector('.dropdown-menu')

burger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('drop')
})

const newsletter = document.getElementById('newsletter')
newsletter.addEventListener('submit', (e) => {
  e.preventDefault()
  const emailSubs = e.target.email.value
  window.localStorage.setItem('email-sub', emailSubs)
})