var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["empDept"] = document.getElementById("empDept").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.salary;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.empDept;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.mobile;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Update</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("empDept").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[1].innerHTML;
    document.getElementById("empDept").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.salary;
    selectedRow.cells[2].innerHTML = formData.empDept;
    selectedRow.cells[3].innerHTML = formData.mobile;
    selectedRow.cells[4].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}