function getData(){
    console.log("function work")
    var getObj=JSON.parse(localStorage.getItem("userlogin"))
    console.log(getObj)
    
    var firstname=document.getElementById("firstname")
    var  lastname=document.getElementById("lastname")
    var Email=document.getElementById("Email")
    var password=document.getElementById("password")
    
    if(getObj.FirstName==undefined &&getObj.LastName==undefined){
        
        firstname.value=""
        foo()
        return
    }
    
    firstname.value=getObj.FirstName
    lastname.value=getObj.LastName
    foo()
}

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
function foo(){
    var Email=document.getElementById("Email")
    var password=document.getElementById("password")
    var getObj=JSON.parse(localStorage.getItem("userlogin"))

    Email.value=getObj.EMAIL
    password.value=getObj.Password
}

// function updatData(){
//     var firstname=document.getElementById("firstname")
//     var  lastname=document.getElementById("lastname")
//     var Email=document.getElementById("Email")
//     var password=document.getElementById("password")

   
//     // console.log(newOBJ)
//     var getLoginObj=JSON.parse(localStorage.getItem("userlogin"))
    


//     getLoginObj.EMAIL=Email.value
//     getLoginObj.FirstName=firstname.value
//     getLoginObj.LastName=lastname.value
//     getLoginObj.Password=password.value


//     // console.log(getLoginObj.EMAIL)

//     var getLoginObj2={
//         firstname:getLoginObj.FirstName,
//         lastname:getLoginObj.LastName,
//         email:getLoginObj.EMAIL,
//         password:getLoginObj.Password,

//     }
//     localStorage.setItem("userlogin",JSON.stringify(getLoginObj2))
//     console.log(getLoginObj2)

//     firstname.value=""
//     lastname.value=""
//     Email.value=""
//     password.value=""




// }