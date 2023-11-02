function registerExpence(e) {
    e.preventDefault();
    alert("form is submitted");

    var amount = document.getElementById('amount').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;
    
    var obj = {
        amount, description, category
    };

    axios.post("http://localhost:3000/expence/add-expence", obj)
        .then((response) => {
            DispExpence(response.data.newExpenceDetails); 
            console.log(response.data.newExpenceDetails);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong... in post request <h4>"
            console.log(err)
        })
}
window.addEventListener("DOMContentLoaded", () => {
    const data = axios.get("http://localhost:3000/expence/get-expences")
        .then((response) => {
            //console.log(response)
            for (var i = 0; i < response.data.allExpences.length; i++) {
                DispExpence(response.data.allExpences[i]);
                console.log(response.data.allExpences[i]);
            }
        })
        .catch((err) => {
            console.log(err)
        })
})
function DispExpence(obj) {
    var pElement = document.getElementById('list');
    var cElement = document.createElement('li');
    cElement.textContent = obj.amount + " - " + obj.description+ " - " + obj.category;
    cElement.style.fontSize = "1.3rem";

    var del = document.createElement('input');
    del.type = 'button';
    del.value = 'Delete';
    del.style.backgroundColor = "rgb(236, 160, 160)";
    del.style.margin = "0 0 0 1rem ";
    del.style.padding= "0.2rem 0.5rem";

    function deleteExpence(expenceId) {
        axios.delete('http://localhost:3000/expence/delete-expence/'+expenceId)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    var edit = document.createElement('input');
    edit.type = 'button';
    edit.value = 'Edit';
    edit.style.backgroundColor = "rgb(145, 225, 189)";
    edit.style.margin = "0 0 0 1rem ";
    edit.style.padding= "0.2rem 0.5rem";

    function editExpence(expenceId) {
        // axios.put('http://localhost:3000/expence/edit-expence/'+expenceId)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        console.log()
    }
    cElement.appendChild(edit);
    cElement.appendChild(del);

    del.onclick = () => {
        pElement.removeChild(cElement);
        deleteExpence(obj.id);
    }
    
    edit.onclick = () => {
        pElement.removeChild(cElement);
        editExpence(obj.id);
        deleteExpence(obj.id);
        document.getElementById('amount').value = obj.amount;
        document.getElementById('description').value = obj.description;
        document.getElementById('category').value = obj.category;
    }
    pElement.appendChild(cElement);
}