export class AuthorService {
    static getData(authorID){
        return fetch("https://jsonplaceholder.typicode.com/users/" + authorID)
               .then(response => response.json())
    }
}