const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5001;

router.get('/', cors(), (req, res) => {
    res.json({ message: 'Hello rebder!'});
});
app.use('/', router);
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports =app;