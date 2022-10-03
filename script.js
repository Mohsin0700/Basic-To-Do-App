//********** I starts with the name of Almighty Allah **********
let num = 0;
const mainFunc = () => {

    // *****To increase serial number***** 
    num++;

    // *****Taking input field's value*****
    let input = document.getElementById("inputField").value;
    
    // *****Resetting input field's value*****
    document.getElementById("inputField").value = '';

    // *****Taking Table to add rows*****
    let table = document.getElementById("task_container");
    
    // *****Creating rows to add them in table*****
    let tr = document.createElement("tr");

    // *****Creating columns to show data*****
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    // *****Creating Delete Button*****
    let del_btn = document.createElement("button");
    
    // *****Putting text into button*****
    del_btn.innerHTML = "Delete";
    
    // Setting classes for displaying data.
    td1.className = "sn";
    td2.className = "task";
    td3.className = "dlt-btn";
    del_btn.className = "dlt-btn";


    // ***** Using JS DOM for inserting and showing data*****
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td3.appendChild(del_btn);
    table.appendChild(tr);

    // *****Adding 0 if serail number is less than 10*****
    if (num < 10) {
        td1.innerHTML = "0" + num;
    } else {
        td1.innerHTML = num;
    }

    // ***** Inserting Description of input field*****
    td2.innerHTML = input;

    // ***** Inserting onclick event and calling delete row f unction for each row*****
    del_btn.setAttribute("onclick", "deleteRow(this)");
    
}


// ***** Creating delete Row function*****
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("task_container").deleteRow(i);
}


// *************** Work by Mohsin Hussain***************

let input = document.getElementById("inputField");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        mainFunc();
    }
});
