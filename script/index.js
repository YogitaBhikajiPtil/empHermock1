let form = document.getElementById("form");

form.addEventListener("submit",function(){
    event.preventDefault()
    let email=form.email.value;
    let password=form.password.value;

    if(email=="bbbbb@gmail.com" &&password=="12@3"){
        alert("success")
        window.location.href="quiz.html"
    }
    else{
        alert("Failed")
    }
})