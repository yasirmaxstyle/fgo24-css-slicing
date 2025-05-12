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