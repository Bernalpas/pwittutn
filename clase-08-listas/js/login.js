

let administrador = {
    userAdmin: 'useradmin@gmail.com',
    passAdmin: '123456PPo'
}

console.log(administrador);

console.log(administrador.userAdmin);
console.log(administrador.passAdmin);

const loginAdmin = () =>{
    
    let userAdmin = 'useradmin@gmail.com';
    let passAdmin = '123456PPo';
    
    let userEmail = document.getElementById("emailLogin").value;
    let userPassword = document.getElementById("passwordLogin").value;
    
    console.log(userAdmin, passAdmin);
    console.log(userEmail, userPassword);


    if(administrador.userAdmin == userEmail && passAdmin == userPassword){
        alert('Bienvenido admin');
        window.location.href = '../pages/formulario.html';
    }else{
        alert('User o Password incorrectos')
        window.location.href = '../pages/error.html';
    }
    
}