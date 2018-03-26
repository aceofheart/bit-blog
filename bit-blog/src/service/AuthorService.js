export class AuthorService {
    static getData(authorID) {
        return fetch("http://localhost:3004/users/" + authorID)
            .then(response => response.json())
    }
}