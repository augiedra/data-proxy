"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = 3232;
// 7068 - elemental fire
// const client = new Nexus();
// client.get('/wow-classic/v1/search?query=a').then(function (res) {
//     console.log(res);
// });
// client.get('/wow-classic/v1/items/firemaw-horde/deals?limit=1000').then(function (res) {
//     console.log(res);
// })
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map