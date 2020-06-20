import express = require('express');

const app = express();

(async () => {
    await import('./lib/env');

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    app.listen(process.env.PORT, function () {
        console.log(`App listening on port ${process.env.PORT}`);
    })

})();
