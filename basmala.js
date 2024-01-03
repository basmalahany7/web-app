let arr = [{username:"basmala",password:"Pass1!",age:18,phonenum:"01118885910"}];
function signup(){
var username = document.getElementById("uname").value;
var password = document.getElementById("pass").value;
var age = document.getElementById("age").value;
var phone = document.getElementById("phone").value;
var cpassword = document.getElementById("cpass").value;

if (username != "" && password !="")
{
    if (password == cpassword){
    var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_=+]).{8,15}$/;
    if (regex.test(password))
    {
        var userdata = {
            namez : username,
            pass : password,
            phone:phone,
            age:age,
            cpass:cpassword,
        }
        arr.push(userdata)
        alert("Sign up Succssesfuly");
        console.log(userdata)
}
else{
    alert("please enter at least 5 pass and at most 15 pass and enter digits and chars and spechial");
}
}
else {
    alert("enter same pass");
}
}
else {
    alert("Enter Data");
}
document.getElementById("contain").style.display="block";
}
function login() {
var n = document.getElementById("uname").value
var p = document.getElementById("pass").value
if (n != "" && p != "")
{
arr.forEach(data => {
    if( data.namez == n && data.pass == p)
    {
        alert("Done");
    }
});
}
else{
    alert("Please enter values ");
}
location.href='form.html';
}

function forgetpass()
{
    let user_name = document.getElementById("uname");
    let pass = document.getElementById("npass");
    let look = false;
    for(let i=0; i<arr.length ;i++)
    {
        if(arr[i].namez == user_name.value)
        {
            arr[i].pass = pass.value;
            alert('the password has changed');
            look = true
        }
    }
    if(look == false)
    {
        alert('this is not user');
    }
}

