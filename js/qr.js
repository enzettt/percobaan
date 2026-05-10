let scannedToken = ''

async function generateQR(){

  const response =
    await fetch(
      `${WEBAPP_URL}?action=token`
    )

  const data =
    await response.json()

  document.getElementById('qrcode')
    .innerHTML = ''

  new QRCode(
    document.getElementById('qrcode'),
    {
      text:data.token,
      width:220,
      height:220
    }
  )

}

generateQR()

let timer = 15

setInterval(()=>{

  timer--

  document.getElementById('timer')
    .innerText = timer

  if(timer <= 0){

    timer = 15

    generateQR()

  }

},1000)