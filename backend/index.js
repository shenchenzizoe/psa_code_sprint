const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3333;

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});