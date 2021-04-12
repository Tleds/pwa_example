const url = 'http://localhost:3000/session_user';

async function handleLogin(){
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // const rawResponse = await fetch(url,{
    //     method: 'POST',
    //     // mode: 'no-cors',
    //     headers: new Headers({
    //         'Content-Type':'application/json',
    //     }),
    //     body: JSON.stringify({
    //         "email": email,
    //         "password": password
    //     })
    // });

    // const response = await rawResponse.json();

    window.location = "/pages/home/home.html"
}