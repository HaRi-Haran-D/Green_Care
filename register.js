//document.addEventListener('DOMContentLoaded', ()=> {

const myform = document.getElementById('myform')




myform.addEventListener('submit', (e) => {
    e.preventDefault();
    const floatingInput = document.getElementById('floatingInput').value;
    const floatingfname = document.getElementById('floatingfname').value;
    //const floatinglname = document.getElementById('floatinglname').value;
    const floatingPassword = document.getElementById('floatingPassword').value;
    
    const obj = {username: floatingfname,email: floatingInput, password: floatingPassword}

    const changedata = JSON.stringify(obj);
    console.log(changedata)

    localStorage.setItem('userdata',changedata);
    alert("Successfully Registered");
    window.location.href = "index.html";
    myform.reset();
});
//});