function sent(){
    var txtnum = window.document.querySelector('input#inum')
    var tab = window.document.getElementById('imult')
    if(txtnum == 0){
        window.alert('Please, verify the data.')
    }else{
    //receive the number:
    var num = Number(txtnum.value)
    var item = window.document.createElement('option')
    tab.innerHTML = ''
    //table:
    for(n = 1; n = 10; n++){  
        var res = num * n
        item.Text = `${num} x ${n} = ${res}`
        item.value = `tab${n}`
        tab.appendChild(item)
    }
    }
}