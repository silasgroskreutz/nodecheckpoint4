const express = require('express');

const app = express():

app.get('/playstore.js', (req, res) => {
    const { search = " ", sort } = req.query;

    if (sort) {
        if (!['rating', 'app'].includes(sort)) {
            return res
            .status(400)
            .send('Sort must be one of rating or rank');
        }
    }

    let results = playstore
        .filter(game =>
            game    
                .title
                .toLowerCase()
                .includes(search.toLowerCase()));

    if (sort) {
        results
        .sort((a, b) => {
            return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
        });
    }

    res
        .json(results);
});

app.listen(8000, () => {
    console.log('Server started on PORT 8000');
});
