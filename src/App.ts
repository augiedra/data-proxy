import * as express from 'express';
import * as Nexus from 'nexushub-client';

class App {
    public express;

    private client;

    constructor () {
        this.express = express();
        this.client = new Nexus();
        this.mountRoutes();
    }

    private mountRoutes (): void {
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

export default new App().express;