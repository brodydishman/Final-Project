


let inputEle = document.createElement("input");
inputEle.placeholder="Name";


let inputElePass = document.createElement("input");
inputElePass.placeholder="Password";
inputElePass.setAttribute("Type","password");


let messageEle = document.createElement("h3");


let button = document.createElement("button");
button.innerHTML = "Login";


button.addEventListener("click",function(){
    if(inputEle.value==="cool"&&inputElePass.value==="password"){
        messageEle.innerHTML="Logged in"

    }else{
        messageEle.innerHTML="Incorrect information"
        gradeview.innerHTML=""
    }


})
document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);


const pages = [
    {
        page:"Grade View",
        navigate: gradeview
    },
    {
        page: "Add Grades",
        navigate: addgrades

    }
]


function navButton(pg, pr, nv){

    let button=document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click",function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);

}

function navigation(){

    let nav = document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="Blue";
    for (obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);





}

function gradeview() {

    let gradeview = document.createElement("div");
    let gradeviewEle = document.createElement("h1");
    gradeview.innerHTML = "";
    gradeviewEle.innerHTML = "";
    gradeviewEle.innerHTML = "Grades";
    gradeview.appendChild(gradeviewEle);
    document.body.appendChild(gradeview);
    document.body.querySelector(".wrapper").appendChild(gradeview);
    button1.innerHTML = "";
    gradeviewEle.innerHTML = Note.value + Num.value;

}

function addgrades(){

    let addgrades = document.createElement("div");
    let addgradesEle = document.createElement("h1");
    addgrades.innerHTML="";
    addgradesEle.innerHTML="";
    addgradesEle.innerHTML="Add Grades";
    addgrades.appendChild(addgradesEle);
    document.body.appendChild(addgrades);
    document.body.querySelector(".wrapper").appendChild(addgrades);

    let inputEleNote = document.createElement("input");
    inputEleNote.placeholder="Student Name";


    let inputEleNum = document.createElement("input");
    inputEleNum.placeholder="Grade";



    let button1 = document.createElement("button");
    button1.innerHTML= "Submit Grade";
    button1.addEventListener("click",function (){


        let list = [];
        let listEle = document.createElement("div")
        function renderList(){

            listEle.innerHTML="";

            for(let i=0; i<list.length; i++){
                let ele = document.createElement("div")
                ele.innerHTML=list[i];
                listEle.appendChild(ele)
            }
        }




        document.body.appendChild(inputEleNote)&&document.body.appendChild(inputEleNum);
        list.push(inputEleNote.value)&&list.push(inputEleNum.value);


        document.body.appendChild(listEle);

        renderList();




    })

    document.body.appendChild(button1);

}









navigation();
gradeview();
addgrades();

