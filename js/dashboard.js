const user =
  JSON.parse(
    localStorage.getItem('user')
  )

document.getElementById('welcome')
  .innerText =
    `Halo ${user.nama}`

document.getElementById('roleUser')
  .innerText =
    user.role

async function loadDashboard(){

  const response =
    await fetch(
      `${WEBAPP_URL}?action=dashboard`
    )

  const data =
    await response.json()

  document.getElementById('totalHadir')
    .innerText =
      data.total

  renderTable(data.data)

  renderChart(data.divisi)

}

setInterval(loadDashboard,3000)

loadDashboard()

function renderTable(data){

  const tbody =
    document.getElementById('tableData')

  tbody.innerHTML = ''

  for(let i=1;i<data.length;i++){

    tbody.innerHTML += `

    <tr>

      <td>${data[i][0]}</td>

      <td>${data[i][1]}</td>

      <td>${data[i][2]}</td>

      <td>${data[i][3]}</td>

    </tr>

    `

  }

}