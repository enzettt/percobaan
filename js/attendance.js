async function submitAttendance(){

  const user =
    JSON.parse(
      localStorage.getItem('user')
    )

  const response =
    await fetch(WEBAPP_URL,{

      method:'POST',

      body:JSON.stringify({

        action:'attendance',

        nama:user.nama,

        divisi:user.divisi,

        role:user.role,

        token:scannedToken

      })

    })

  const data =
    await response.json()

  document.getElementById('status')
    .innerText =
      data.message

}