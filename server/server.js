/* express & parsers */
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
/* server */
import http from 'http';
import cors from 'cors';
/* handlers */
import prodcuts from './src/routes/products/getProducts.js';

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({credentials: true, origin: '*'}));

app.get('/api/products', prodcuts)
app.get('/api/products/:id', prodcuts)

server.listen(3000, () => {
	console.log(`Listening on port ${3000}`);
});
