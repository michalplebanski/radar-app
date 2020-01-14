module.exports = function(app, connection) {
    app.get('/test', function(req, res) {
        connection.query('SELECT * FROM arduino', (err, data) => {
            (err) ? res.send(err) : res.json({users: data})
        })
    });
}