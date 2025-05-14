async function getUsers() {
  try {
    const url = 'https://randomuser.me/api/?results=10'
    const res = await fetch(url)
    if (!res.ok) throw new Error(res.statusText)
    const { results } = await res.json()

    const history = document.querySelector('#transactionHistory')
    const tbody = document.createElement('tbody')

    results.forEach(element => {
      const row = document.createElement('tr')
      const photo = document.createElement('td')
      const imgUser = document.createElement('img')
      const name = document.createElement('td')
      const phone = document.createElement('td')
      const transaction = document.createElement('td')
      const tdButton = document.createElement('td')
      const delButton = document.createElement('button')
      const imgDelete = document.createElement('img')
      imgUser.src = element.picture.thumbnail
      name.innerText = `${element.name.first} ${element.name.last}`
      phone.innerText = `${element.phone}`
      transaction.innerText = 'Rp. 50.000,-'
      transaction.classList.add('green')
      imgDelete.src = '../../assets/history/delete.svg'
      photo.append(imgUser)
      delButton.append(imgDelete)
      tdButton.append(delButton)
      row.append(photo, name, phone, transaction, tdButton)
      tbody.append(row)
      history.append(tbody)
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}

getUsers()

async function getUsersPanel() {
  try {
    const url = 'https://randomuser.me/api/?results=10'
    const res = await fetch(url)
    if (!res.ok) throw new Error(res.statusText)
    const { results } = await res.json()

    const historyPanel = document.querySelector('#historyPanel')
    results.forEach(element => {
      const wrapper = document.createElement('div')
      const userWrap = document.createElement('div')
      const imgUser = document.createElement('img')
      const textWrap = document.createElement('div')
      const h4 = document.createElement('h4')
      const p = document.createElement('p')
      const span = document.createElement('span')
      imgUser.src = element.picture.thumbnail
      h4.innerText = `${element.name.first} ${element.name.last}`
      p.innerText = 'Transfer'
      span.innerText = '+Rp 50.000'
      span.classList.add('green')
      textWrap.append(h4, p)
      userWrap.append(imgUser, textWrap)
      wrapper.append(userWrap, span)
      historyPanel.append(wrapper)
    })
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}

getUsersPanel()

const chart = document.getElementById('chart')
Chart.defaults.backgroundColor = 'oklch(54.6% 0.245 262.881)';
new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Income',
      data: [12000, 1000, 100000, 28000, 42000, 21000, 17000],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})