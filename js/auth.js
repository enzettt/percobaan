async function login(){

  const username =
    document.getElementById('username').value

  const password =
    document.getElementById('password').value

  const response =
    await fetch(WEBAPP_URL,{

      method:'POST',

      body:JSON.stringify({

        action:'login',
        username,
        password

      })

    })

  const data =
    await response.json()

  if(data.success){

    localStorage.setItem(
      'user',
      JSON.stringify(data)
    )

    window.location =
      'dashboard.html'

  }else{

    document.getElementById('status')
      .innerText =
        data.message

  }

}