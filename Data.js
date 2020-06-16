const data = new Date()

const x = {
    day: data.getDate(),
    month: data.getMonth() + 1,
    year: data.getFullYear(),
    hour: data.getHours(),
    minute: data.getMinutes(),
    second: data.getSeconds()
}

console.log(`Hoje ${x.day}/${x.month}/${x.year} ás ${x.hour}:${x.minute}`)

const y = {
    day: 16,
    month: 6, 
    year: 2020,
    hour: 13,
    minute: 49,
    second: 33
}

let postData = ''


if(x.month - y.month == 0){

    postData = `${x.day - y.day} dias atrás`

    //postado ontem
    if(x.day - y.day == 1){
        postData = `Ontem ás ${y.hour}:${y.minute}` 
    }
    //postado hoje
    else if(x.day - y.day == 0){

        var hour = x.hour - y.hour
        postData = `Há ${hour}h atrás`

        //postado na mesma hora
        if(hour == 0){
            var minute = x.minute - y.minute
            postData = `Há ${minute}min atrás`

            //postado agr
            if(minute == 0){
                postData = 'Agora mesmo'
            }
        }
}
}

else {
    postData = `Postado em ${y.day}/${y.month}/${y.year}`
}


console.log(postData)