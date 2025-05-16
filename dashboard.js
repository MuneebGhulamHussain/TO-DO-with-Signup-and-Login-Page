function add(){
    var inputtodo=document.getElementById("inputtodo")
    var getloginobj=JSON.parse(localStorage.getItem("userlogin"))
    // console.log(getloginobj)
    var newtodo=localStorage.getItem("todos")
    // console.log(newtodo)
    var addtodoObj={
        todo:inputtodo.value,
        email:getloginobj.EMAIL,
    }

    if(!inputtodo.value){
        inputtodo.setAttribute("class","handleError")
        inputtodo.setAttribute("placeholder","Input Feild Recquired!")
        inputtodo.setAttribute("onfocus","Removeerror()")
        
        console.log(inputtodo)
        return
    }
    
    
    // console.log(inputtodo.value)
    
    // return

    
    if(newtodo==null){
        var todoArrObj=[addtodoObj]
        localStorage.setItem("todos",JSON.stringify(todoArrObj))
    }
    else{
        var newArrtodo=JSON.parse(newtodo)
        newArrtodo.push(addtodoObj)
        localStorage.setItem("todos",JSON.stringify(newArrtodo))
    }
    loader()
    inputtodo.value=""
}

function Removeerror(){
         inputtodo.setAttribute("class","REMError")
         inputtodo.setAttribute("placeholder","Enter Task....")
}



function delAll(){
    var append=document.getElementById("append")
    append.innerHTML=""
    var getTodo=JSON.parse(localStorage.getItem("todos"))
    getTodo.splice(0,getTodo.length)
    localStorage.setItem("todos",JSON.stringify(getTodo))
    loader()
    // arrCopy.remove()
    // console.log(getTodo)
}












function loader(){
    // console.log("hello world")
    // console.log("loader function activated")
    var gettodo=JSON.parse(localStorage.getItem("todos"))
    var append=document.getElementById("append")
    // console.log(forappend)
    // console.log(gettodo)
    append.innerHTML=""
// console.log(gettodo)
// return
    if(gettodo==null){
        // console.log("Empty")
    }
else{

    
    
    for(var i=0;i<gettodo.length;i++){
        // console.log(gettodo[i].todo)
        append.innerHTML+=`<ul class="forunorder">
        <li class="list">
        <p >${gettodo[i].todo}</p>
        <div class="listbtn">
        <button onclick="Edittodo(${i})"><i class="fa-solid fa-pen" style="color: #000000;"></i></button>
        <button onclick="deltodo(${i})"><i class="fa-solid fa-trash" style="color: #000000;"></i></button>
        <button id="notdone" onclick="completeTodo(this)"><i id="icon" class=" fa-solid fa-xmark" style="color: #000000;"></i></button>
        
        </div>
        </li>
        </ul> `
    }
    
    // append.innerHTML=""
}

}



function Edittodo(indexNumber){
    console.log(indexNumber)
    var gettodo=JSON.parse(localStorage.getItem("todos"))
    var obj=gettodo[indexNumber]
    console.log(obj)

    var editprompt=prompt("Enter Updated Value",obj.todo)

    var newobj={
        todo:editprompt,
        email:obj.email,
    }
    gettodo[indexNumber]=newobj
    localStorage.setItem("todos",JSON.stringify(gettodo))
    loader()
    // console.log(gettodo)
    // console.log(newobj)
}
function deltodo(indexNumber){
    var getTodo=JSON.parse(localStorage.getItem("todos"))
    // console.log(getTodo)
    getTodo.splice(indexNumber,1)
    // console.log(getTodo)
    localStorage.setItem("todos",JSON.stringify(getTodo))
    loader()
}
function completeTodo(element){

    // console.log(element.childNodes[0])
    console.log(element.parentNode.previousElementSibling)
    // loader()
    if(element.id=="notdone"){
        element.id="done"
        element.childNodes[0].className="fa-solid fa-check"
        element.parentNode.previousElementSibling.id="linethrough"
    }
    else{
        element.id="notdone"
        element.childNodes[0].className="fa-solid fa-xmark"
        element.parentNode.previousElementSibling.id="Remlinethrough"
    }

}
