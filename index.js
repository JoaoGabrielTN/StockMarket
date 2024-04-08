const bt_login = document.getElementById('bt_login')

var table = document.getElementById('div_table').getElementsByTagName('table')[0].getElementsByTagName('tbody')[0]

const in_v1 = document.getElementById('in_v1')
const in_v2 = document.getElementById('in_v2')
const in_v3 = document.getElementById('in_v3')

const p_error_value = document.getElementById('form').getElementsByTagName('p')[0]

const bt_add = document.getElementById('bt_add')

function addRow(v1, v2, v3){
    if(v1 && v2 && v3)
    {
        p_error_value.style.display = 'none'
        var row = table.insertRow(table.rows.length);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        c1.innerHTML = v1;
        c2.innerHTML = v2;
        c3.innerHTML = v3;
    }
    else
    {
        p_error_value.style.display = 'block'
    }
}

bt_add.onclick = function(){
    addRow(in_v1.value, in_v2.value, in_v3.value)
};

bt_login.onclick = () => {
    if(bt_login.value == 'LOGIN')
    {
        bt_login.value = 'LOGOUT'
    }
    else
    {
        bt_login.value = 'LOGIN'
    }
}