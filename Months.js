const monthsData = [
    {
        id: 6,
        name: 'junho',
        year: 2019
    },
    {
        id: 7,
        name: 'julho',
        year: 2019
    },
    {
        id: 8,
        name: 'agosto',
        year: 2019
    },
    {
        id: 9,
        name: 'setembro',
        year: 2019
    },
    {
        id: 10,
        name: 'outubro',
        year: 2019
    },
    {
        id: 11,
        name: 'novembro',
        year: 2019
    },
    {
        id: 12,
        name: 'dezembro',
        year: 2019
    },
    {
        id: 1,
        name: 'janeiro',
        year: 2020
    },
    {
        id: 2,
        name: 'fevereiro',
        year: 2020
    },
    {
        id: 3,
        name: 'março',
        year: 2020
    },
    {
        id: 4,
        name: 'abril',
        year: 2020
    },
    {
        id: 5,
        name: 'maio',
        year: 2020
    },
   

]
function last6Months(months){


    var date = new Date()
    var today = {
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
    console.log(`Hoje é ${today.month}/${today.year}`)

    months.push({
        id: today.month,
        name: 'Junho',
        year: today.year
    })


    var lastMonths = []
    //var index = 0
    var year = today.year

    for(var i = 6; i > 0; i--){

        var value = (today.month + 1)- i
        var lastMonth = []
        if(value <= 0){
            
            lastMonth = months.filter( v => v.id == (12 + value) && v.year !== year)
        }
        

        else{
        lastMonth = months.filter(v => {
            if(v.id == value &&  v.year == year){
                return v
            }
        })
        }

        //a função filter sempre retornar um array, portanto é necessário trasformar os dados em objeto

        function arrayToObject(array){
            /*var object = {
                month: array[0]//vai pegar indice 0 do array, que é um objeto e colocar dentro de outro objeto
            }*/
            return array[0]
        }

        lastMonths.push(arrayToObject(lastMonth))
        
    }


    lastMonths.map(v => {
        console.log(`${v.name}/${v.year}`)
    })
}

last6Months(monthsData)
