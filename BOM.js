const API_URL = 'https://jsonplaceholder.typicode.com/users'
async function loadUsers() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return `
        <div>
        name:${name}
        phone number:${phone}
        e-mail:${email}
        </div> `
    } catch (e) {
        alert(e.message)
    }
}



async function renderUsers() {
    try {
        const users = await loadUsers()
        users.array.forEach( function(user) {
            const {name,email,phone} = user;
            cardTemplate = createCardTemplate(name,phone,email)
            $root.innerHTML += cardTemplate
        });
        console.log($root.innerHTML = 1)
    } catch (e) {
        alert(e.message)
    }
}
renderUsers();