import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import productRouter from './routes/productsRouter.js'
import usersRouter from './routes/usersRouter.js'
import cartRouter from './routes/cartRouter.js'
import cookieParser from 'cookie-parser';

config()
const app = express();
const port =process.env.PORT || 7777

app.use(express.static('static'))
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ['http://localhost:8080', 'https://screenscape-e5d1b.web.app'];
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

app.get('/', (req, res) => {
    res.send('Welcome to the API. Use /users to get a list of users, /user/:id to get a specific user, /register to create a new user, and /products to get a list of products.');
});

app.use('/products', productRouter);

app.use('/users', cartRouter)

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})