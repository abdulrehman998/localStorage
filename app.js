function insertButton() {
    var inputName = document.getElementById("inputName").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var inputAge = document.getElementById("inputAge").value;
    var inputPhone = document.getElementById("inputPhone").value;

    var objectData = {
        Name: inputName,
        Email: inputEmail,
        Age: inputAge,
        Number: inputPhone,
    }

    localStorage.setItem("user", JSON.stringify(objectData));

}

function outputButton() {
    var heading = document.getElementById("heading")

    var user = localStorage.getItem("user");
    //    var convertedUser = JSON.parse(Key);

    //    console.log(convertedUser)


    heading.innerHTML = user;


}































// function insertButton() {
//     var inputName = document.getElementById("inputName").value;
//     var inputEmail = document.getElementById("inputEmail").value;
//     var inputAge = document.getElementById("inputAge").value;
//     var inputPhone = document.getElementById("inputPhone").value;
//     var Key = document.getElementById("inputKey").value;

//     var objectData = {
//         Name: inputName,
//         Email: inputEmail,
//         Age: inputAge,
//         Number: inputPhone,
//     }

//     localStorage.setItem( Key , JSON.stringify(objectData));
//     var user = localStorage.getItem(Key);
    
//     var heading = document.getElementById("heading")
//     heading.innerHTML += user ;
// }





