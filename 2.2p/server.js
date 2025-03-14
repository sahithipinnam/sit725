const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
 
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
 
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send({ error: 'Please provide valid numbers' });
    }
 
    const result = num1 + num2;
    res.json({ result });
});
 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});