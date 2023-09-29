let name   = document.getElementById('name');
let department   = document.getElementById('department');
let sallary   = document.getElementById('sallary');
let security   = document.getElementById('security');
let tax   = document.getElementById('tax');
let net_sallary   = document.getElementById('net_sallary');
let save   = document.getElementById('save');
let status  = 'save';
let xx ;


function calc_sallary() {

    if(sallary.value != ''){
        
    let total = sallary.value - security.value - tax.value;

    net_sallary.value = total;

    net_sallary.style.background = 'green'
    }
    else{
        net_sallary.value = '';

        net_sallary.style.background = 'white'
    }
}


 if(localStorage.employee != null){

    emloyee = JSON.parse(localStorage.employee)
 }else 
 {
    let emloyee = [];

 }



save.addEventListener('click', function(){

    let em = {
        name : name.value,
        department : department.value,
        sallary : sallary.value,
        security : security.value,
        tax : tax.value,
        net_sallary : net_sallary.value,
    }

    if(status === 'save'){

     emloyee.push(em)

    }else{

        emloyee[xx] = em;

        status = 'save';
        save.innerHTML = 'حفظ البيانات';

    }


     
     localStorage.setItem('employee', JSON.stringify(emloyee))
     

     clearData();
     showDate();

});


function clearData() {
    name.value = '',
    department.value = '',
    sallary.value = '',
    security.value = '',
    tax.value = '',
    net_sallary.value = ''
}



function showDate(){

    let table = '';


    for (let i=0; i<emloyee.length; i++){

        table +=  `
        
        
          <tr>
                <td>${emloyee[i].name}</td>
                <td>${emloyee[i].department}</td>
                <td>${emloyee[i].net_sallary}</td>
                <td> <button onclick="updateData(${i})">تعديل</button></td>
                <td> <button onclick="deletData()">حذف</button> </td>
                
            </tr>
          
        
        `

    }




    document.getElementById('tbody').innerHTML = table;
}

showDate()  




function deletData(i){

    emloyee.splice( i , 1 );
    localStorage.employee = JSON.stringify(emloyee);

    
    showDate();
}


function deletAllData(){

    localStorage.clear();

    emloyee.splice(0);

    showDate();
}

function updateData(i){


    name.value = emloyee[i].name;
    department.value = emloyee[i].department;
    sallary.value = emloyee[i].sallary;
    security.value = emloyee[i].security;
    tax.value = emloyee[i].tax;
    net_sallary.value = emloyee[i].net_sallary;
    save.innerHTML = "تعديل البيانات";
    status ='update';
    xx = i;

    scroll({
        top:0,
        behavior:"smooth"
    });

}
