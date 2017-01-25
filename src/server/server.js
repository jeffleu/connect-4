import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

// Render static index route
app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => { console.log(`server.js has been served on port: ${port}`); });
