class Handler {
    constructor () {

    }

    public Greeting(request, response): void {
        response.json({
            message: 'pong!'
        });
    }

}

export default new Handler();