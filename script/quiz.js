import { baseurl } from "./baseurl.js";
let form = document.getElementById("form");

form.addEventListener("submit",function() {
    event.preventDefault();

    //let title = form.problem.value;
    //let optionA =form.optionA.value;
    //let optionB =form.optionB.value;
    //let optionC =form.optionC.value;
    //let optionD =form.optionD.value;
    let title = document.getElementById("problem").value;
    let optionA = document.getElementById("optionA").value;
    let optionB = document.getElementById("optionB").value;
    let optionC = document.getElementById("optionC").value;
    let optionD = document.getElementById("optionD").value;
    let correctoption = document.getElementById("select").value;

    //let correctoption = form.Select.value;

    let queobject={
        title,
        optionA,
        optionB,
        optionC,
        optionD,
        correctoption,
        reviewStatus:false
    };

    fetch(`${baseurl}/questions`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(queobject)
    }).then(()=>{
        alert("created succesfully");
        form.reset()
    }).catch((err)=>{
        alert("some went wrong");
        console.log(err)
    })
    });
