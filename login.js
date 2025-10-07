const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const exampleDropdownFormEmail1 = document.getElementById('exampleDropdownFormEmail1').value;
    const exampleDropdownFormPassword1 = document.getElementById('exampleDropdownFormPassword1').value;
    const storedData = localStorage.getItem('userdata');
    const dropdownMenuButton1 = document.getElementById('dropdownMenuButton1')
    // const dropdown = document.getElementById('dropdown')
    const div1 = document.getElementById('div1')
    const div2 = document.getElementById('div2')
    const div3 = document.getElementById('div3')
    const log = document.getElementById('log')
    const butn = document.getElementById('butn')

    const newData = JSON.parse(storedData);

    if(newData.email === exampleDropdownFormEmail1 && newData.password === exampleDropdownFormPassword1){
        //window.location.href = "index.html";
        // myForm.reset();
        dropdownMenuButton1.innerHTML = newData.username;
        dropdownMenuButton1.style.margin = "0px 60px";
        // dropdown.style.display = "none";
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        log.innerHTML = "Logout";
        butn.style.display = "none";
    }
    else{
        alert("Something went wrong! Please try again.");
    }
})