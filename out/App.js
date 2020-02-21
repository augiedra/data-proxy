"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Nexus = require("nexushub-client");
class App {
    constructor() {
        this.express = express();
        this.client = new Nexus();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/ping', function (req, res) {
            res.send('pong!');
        });
        router.get('/pricing/:itemId/:timeRange', function (req, res) {
            let url = `/wow-classic/v1/items/firemaw-horde/${req.params['itemId']}/prices?timerange=${req.params['timeRange']}`;
            this.client.get(url).then(function (apiResponse) {
                res.send(apiResponse);
            });
        }.bind(this));
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map