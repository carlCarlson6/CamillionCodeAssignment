export class AddNewsRequest {
    title: String;
    description: String; 
    text: String;
    author: String;

    constructor(requestBody: any) {
        const validation: boolean = requestBody.title && requestBody.description && requestBody.text && requestBody.author

        if(validation) {
            this.title = requestBody.title;
            this.description = requestBody.description;
            this.text = requestBody.text;
            this.author = requestBody.author;
        } else {
            throw Error('bad request');
        }
        
    }

}