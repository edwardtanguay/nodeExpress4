const routes = (app) => {
    app.route('/contact')
        .get((req, res) =>
            res.send('GET success'))
        .post((req, res) =>
            res.send('POST success'))
        .get((req, res) =>
            res.send('GET success'))
        .post((req, res) =>
            res.send('POST success'));
}