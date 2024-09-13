import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import usersRouter from './routes/usersRouter.js';
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js ';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
config();
const app = express();
const port = process.env.PORT || 7777;
app.use(express.static('static'));
app.use(express.json());
app.use(cookieParser());
// CORS Configuration: Allow specific origins
const allowedOrigins = ['http://localhost:8080', 'https://tonguetied-4afc5.web.app'];
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // Enable cookies and other credentials
}));
// Body parser for JSON and URL-encoded payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// General API Info Route
app.get('/', (req, res) => {
    res.send('Welcome to the API. Use /users to get a list of users, /user/:id to get a specific user, /register to create a new user, and /products to get a list of products.');
});
// User Routes
app.use('/users', usersRouter);
// Product Routes
app.use('/products', productsRouter);
// Order Routes
app.use('/users', cartRouter); // Changed from '/user' to '/order' for clarity
// Error handling middleware for 404 (Not Found)
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});