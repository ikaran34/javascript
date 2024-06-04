function addUser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name && email) {
        var table = document.getElementById('userTableBody');
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = '<button type="button" onclick="editUser(this)">Edit</button> ' +
            '<button type="button" onclick="deleteUser(this)">Delete</button>';

        document.getElementById('userForm').reset();
    } else {
        alert('Please enter both name and email.');
    }
}

function editUser(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var email = row.cells[1].innerHTML;

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;

    row.remove();
}

function deleteUser(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}
