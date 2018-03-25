export class AuthorsService {
    static getData(){
        return fetch('https://jsonplaceholder.typicode.com/users')
               .then(response => response.json())
    }
}
