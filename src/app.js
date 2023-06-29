import express from 'express';
import carsRoutes from './routes/cars.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());
/* primero recibo los datos y lo convierto en javascript */

app.use('/api',carsRoutes);
app.use('/api',indexRoutes);

app.use((req, res, next) => {
    res.status(404).json({message:'endpoint not found'})
});

export default app;