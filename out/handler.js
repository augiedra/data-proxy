"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    constructor() {
    }
    Greeting(request, response) {
        response.json({
            message: 'pong!'
        });
    }
}
exports.default = new Handler();
//# sourceMappingURL=handler.js.map