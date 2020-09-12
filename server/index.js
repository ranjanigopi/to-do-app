const express = require('express');
const app = express();

app.use(express.static(__dirname + '../public'));

app.get('/birthday', function(request, response) {
    const now = new Date();
    if (now.getMonth() === 7 && now.getDate() === 3) {
        response.send('YES');
    } else {
        response.send('NO');
    }
});
app.get('/wedding-day', function(request, response) {
    const now = new Date();
    if (now.getMonth() === 8 && now.getDate() === 16) {
        response.send('YES');
    } else {
        response.send('NO');
    }
});

app.listen(8080);
