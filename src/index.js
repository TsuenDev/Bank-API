const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

// Routes
app.use(require('./routes/routes'));

app.get("/", (req, res) => {
    res.send("<h2>Bank API</h2>")
});

// Server
app.listen(PORT, () => {
 console.log(`Listening on PORT ${PORT}`);
});