


function passTogle(){
    var icon=document.getElementById("icon")
    var password=document.getElementById("password")
    console.log(icon)
    console.log(password.type)
    // console.log(icon)
    if(password.type=="password"){
        icon.className=" icon fa-solid fa-eye"
        password.type="text"

    }
    else{
        icon.className=" icon fa-solid fa-eye-slash"
        password.type="password"

    }
}
function signUp(){
    var firstname=document.getElementById("firstname")
    var lastname=document.getElementById("lastname")
    var Email=document.getElementById("Email")
    var TrimEmail=Email.value.trim()




    var password=document.getElementById("password")
    // console.log(firstname.value)
    // console.log(lastname.value)
    // console.log(Email.value)
    // console.log(password.value)
    var myObj={
        FirstName:firstname.value,
        LastName:lastname.value,
        EMAIL:TrimEmail,
        Password:password.value,

    }
    if(!TrimEmail ){
        // alert("email")

        console.log(Email)
        Email.setAttribute("class","emailRed")
        Email.setAttribute("placeHolder","Email Recquired!")
        Email.setAttribute("onfocus","redRemove()")
        return
    }
    else if(!password.value){
        // alert("ppassword")
        password.setAttribute("class","emailRed")
        password.setAttribute("placeHolder","Password  Recquired!")
        password.setAttribute("onfocus","passwordEdit()")
        console.log(password)
        return

    }
    var getval=localStorage.getItem("users")
    // console.log(getval)
    if(getval==null){
        var arr=[myObj]
        localStorage.setItem("users",JSON.stringify(arr))

    }
    else{
        // var newArr=localStorage.getItem("users")
        var newArr=JSON.parse(getval)
        for(var i=0;i<newArr.length;i++){
            console.log("array Object",newArr[i].EMAIL)
            console.log("direct object",myObj.EMAIL)
            if(myObj.EMAIL==newArr[i].EMAIL){
                    alert("Email already exist")
                    return
                }
            }
            newArr.push(myObj)
        localStorage.setItem("users",JSON.stringify(newArr))

        // console.log(newArr)
        // console.log("else work")
    }
    firstname.value=""
    lastname.value=""
    TrimEmail=""
    password.value=""
    window.location.replace("./login.html")

}
function redRemove(){
    console.log("Onfocus activate")
    var Email=document.getElementById("Email")
    Email.className="redremove"
    Email.removeAttribute("placeholder")
    Email.setAttribute("placeholder","Email Address")
    
    // var password=document.getElementById("password")
    
}
function passwordEdit(){

    console.log("Onfocus activate for pass")
    var password=document.getElementById("password")
    // console.log(password)
    password.className="redremove"
    password.removeAttribute("placeholder")
    password.setAttribute("placeholder","Password")
}
function login(){
    var Email=document.getElementById("Email")
    // console.log(Email.value)
    var password=document.getElementById("password")
    // console.log(password.value)
    var para=document.getElementById("para")
    var getStrg=JSON.parse(localStorage.getItem("users"))
    console.log(getStrg)
    for(var obj of getStrg){

        // console.log(obj.EMAIL)
        // console.log(obj.Password)
        if(obj.EMAIL==Email.value && obj.Password==password.value){
            localStorage.setItem("userlogin",JSON.stringify(obj))
            alert("Email or Password is correct")
            para.innerText=""        
             para.innerText=""  

             window.location.replace("./dashboard.html")
            return
        }
        // alert("email or passwor is incorrect")
        
        // Email.setAttribute("onfocus","RemoveStylePara()")
    }
    para.innerText="Email or Password is In correct !"
    para.setAttribute("class","parared")
    Email.value=""
    password.value=""
}
// function RemoveStylePara(){
//     var Email=document.getElementById("Email")
//     Email.className=
// }