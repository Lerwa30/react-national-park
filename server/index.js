const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env






app.listen(PORT, () => console.log('Server running'))