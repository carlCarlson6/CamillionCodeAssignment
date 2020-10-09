export class AddNewsRequest {
    title: String;
    description: String; 
    text: String;
    author: String;

    constructor(requestBody: any) {
        if(requestBody.title) {
            this.title = requestBody.title;
        } else {
            throw Error('bad request')
        }
        
        if(requestBody.description, 'description') {
            this.description = requestBody.description;
        } else {
            throw Error('bad request')
        } 
        
        if(requestBody.text) {
            this.text = requestBody.text;
        } else {
            throw Error('bad request')
        } 
        
        if(requestBody.author) {
            this.author = requestBody.author;
        } else {
            throw Error('bad request')
        } 
        
    }

}