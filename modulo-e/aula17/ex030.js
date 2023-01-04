function sent(){
    //getting the number
    var txtnum = window.document.getElementById('inum')
    //getting the end
    var txtend = window.document.getElementById('iend')
    //getting the step
    var txtstep =  window.document.getElementById('istep')
    //getting the result place
    var msg = window.document.querySelector('div.res')

    if(txtnum.value.length == 0 || txtend.value.length == 0 || txtstep.value.length == 0 || txtstep.value.length <= 0 || txtstep.value.length > txtend.value.length){
        window.alert('Verify the data.')
    } else {
        var num = Number(txtnum.value)
        var end = Number(txtend.value)
        var step = Number(txtstep.value)
            if (num < end){
            while(num <= end){
                msg.innerHTML = `${num} --> `
                num += step
                } msg.innerHTML += ` &#x1F3C1`
                    } else{
                        while(num > end){
                            msg.innerHTML = `${num} --> `
                            num -= step
                        } msg.innerHTML += ` &#x1F3C1`
                    }
}
}