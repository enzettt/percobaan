let chart = null

function renderChart(divisi){

  const labels =
    Object.keys(divisi)

  const values =
    Object.values(divisi)

  if(chart){

    chart.destroy()

  }

  const ctx =
    document.getElementById('chart')

  chart =
    new Chart(ctx,{

      type:'doughnut',

      data:{

        labels:labels,

        datasets:[{

          data:values,

          borderWidth:0

        }]

      }

    })

}