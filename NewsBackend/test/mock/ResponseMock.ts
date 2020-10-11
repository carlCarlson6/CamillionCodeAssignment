export class ResponseMock {
    statusCode: number;
    body: any;

    status(value: number) {
        this.statusCode = value;
        return this;
    }

    send(body?: any) {
        this.body = body;
        return this;
    }

}