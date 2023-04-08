// Insert your code here
document.querySelector('#register').addEventListener('click', function() {
   
        const nameUser =  document.querySelector('#registerName').value
        const nameEmail = document.querySelector('#registerEmail').value
        const userPassword = document.querySelector('#registerPassword').value
    
        const formData = {
            name : nameUser,
            email : nameEmail,
            password : userPassword
        }
        console.log(formData)
    fetch('https://back-end-app-weather-z3cy.vercel.app/users/signup', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
         if(data.result) {
             window.location.assign('./index.html')
        }
    })
})


document.querySelector('#connection').addEventListener('click', function(){
    const emailUser = document.querySelector('#connectionEmail').value
    const passwordUser = document.querySelector('#connectionPassword').value

    const loginData = {
        email : emailUser,
        password : passwordUser
    }
    console.log(loginData)

    fetch('https://back-end-app-weather-z3cy.vercel.app/users/signin',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.result) {
            window.location.assign('./index.html')
        }
    })
})