/* express & parsers */
import express from 'express';
import cookieParser from 'cookie-parser';
/* constants */
import { port } from './Config/constants.js'
/* server */
import http from 'http';
import cors from 'cors';
/* handlers */
import prodcuts from './src/routes/products/getProducts.js';
import emailSub from './src/routes/newsletter/emailSub.js';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: '*'}));

app.get('/api/products', prodcuts)
app.get('/api/products/:id', prodcuts)
app.post('/api/submit-email', emailSub)

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
