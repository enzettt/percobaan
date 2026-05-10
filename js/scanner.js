function onScanSuccess(decodedText){

  scannedToken = decodedText

  document.getElementById('status')
    .innerText =
      'QR berhasil discan'

}

function startScanner(){

  const html5QrCode =
    new Html5Qrcode("reader")

  html5QrCode.start(

    {
      facingMode:"environment"
    },

    {
      fps:10,
      qrbox:250
    },

    onScanSuccess

  )

}

startScanner()