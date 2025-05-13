const regExpEmail = /^[\w\d][\w\d._-]+@[\w\d.-]+\.[\w]{2,}$/
const regExpPass = /^\w.{8,}$/

const forms = document.querySelectorAll('form')

const allUsers = JSON.parse(window.localStorage.getItem('userLogin'))

// HANDLE EACH FORM
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    switch (e.target) {
      case document.querySelector('.FormReg'):
        const formUser = {}
        if (e.target.email.value.match(regExpEmail)
          && e.target.password.value.match(regExpPass)
          && e.target.confirmPassword.value === e.target.password.value) {
          formUser.email = e.target.email.value
          formUser.password = e.target.password.value
          if (allUsers) {
            allUsers.forEach(user => {
              if (user.email === formUser.email) {
                window.alert('Email sudah digunakan')
                return
              } else {
                allUsers.push(formUser)
                window.localStorage.setItem('userLogin', JSON.stringify(allUsers))
                window.location.href = '../../pages/auth/createpin.html'
              }
            })
          } else {
            const arrUser = []
            arrUser.push(formUser)
            window.localStorage.setItem('userLogin', JSON.stringify(arrUser))
            window.location.href = '../../pages/auth/createpin.html'
          }
        }
        break;
      case document.querySelector('.FormRegPin'):
        allUsers[allUsers.length - 1].pin = e.target.pinCode.value
        window.localStorage.setItem('userLogin', JSON.stringify(allUsers))
        window.location.href = '../../pages/auth/login.html'
        break;
      case document.querySelector('.FormLogin'):
        if (allUsers) {
          allUsers.forEach(user => {
            if (user.email === e.target.email.value &&
              user.password === e.target.password.value) {
              window.location.href = '../../pages/auth/enterpin.html'
            }
            else {
              window.alert('Email or password is incorrect.')
              return
            }
          })
        }
        else {
          window.alert('You are not registered yet.')
          return
        }
        break;
      case document.querySelector('.FormPin'):
        allUsers.forEach(user => {
          if (user.pin === e.target.pinCode.value) {
            window.location.href = '../../pages/dashboard/dashboard.html'
          }
          else {
            window.alert('PIN is incorrect.')
            return
          }
        })
        break;
      case document.querySelector('.FormForgot'):
        console.log('forgot password')
        break;
      default:
        break;
    }
  })
})

//INPUT VALIDATION ON FOCUSOUT
document.querySelectorAll('input').forEach(input => {
  if (input === document.querySelector('#email')) {
    focusInputValidation(input, regExpEmail)
  }
  else if (input === document.querySelector('#password')) {
    focusInputValidation(input, regExpPass)
  }
  else if (input === document.querySelector('#confirmPassword')) {
    focusInputValidation(input)
  }
})

function focusInputValidation(element, regex) {
  element.addEventListener('focusout', (e) => {
    if (e.target === document.querySelector('#email') ||
      e.target === document.querySelector('#password')) {
      if (!e.target.value.match(regex) && e.target.value !== "") {
        e.target.parentElement.nextElementSibling.children[0].classList.add('block')
      } else {
        e.target.parentElement.nextElementSibling.children[0].classList.remove('block')
      }
    }
    else if (e.target === document.querySelector('#confirmPassword')) {
      if (e.target.value !== document.querySelector('#password').value
        && e.target.value !== "") {
        e.target.parentElement.nextElementSibling.children[0].classList.add('block')
      } else {
        e.target.parentElement.nextElementSibling.children[0].classList.remove('block')
      }
    }
  })
}

// PIN KEYPRESS
const pinInput = document.querySelectorAll('.pin-input')
pinInput.forEach(pin => {
  pin.addEventListener('keypress', (e) => {
    if (isNaN(e.key)) e.preventDefault()
  })
})

//PASSWORD EYE ICON
const buttons = document.querySelectorAll('button[type=button]')
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const input = button.previousElementSibling
    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text')
      e.target.src = "../../assets/auth/eye-off.svg"
    } else {
      input.setAttribute('type', 'password')
      e.target.src = "../../assets/auth/eye-logo.svg"
    }
  })
})

lucide.createIcons()