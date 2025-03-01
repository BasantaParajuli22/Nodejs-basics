import express from 'express';
import router from './route.js';


const PORT = 5000;
const app = express();

app.use(express.json());

app.use( ('/'), router); 


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});