const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

// Routes
app.use(require('./routes/transactions'));

// Server
app.listen(PORT, () => {
 console.log(`Listening on PORT ${PORT}`);
});

