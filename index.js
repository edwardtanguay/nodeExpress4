import express from 'express';
import routes from './src/routes/crmRoutes';

// this comment should not be in the 001 branch

const app = express();
const PORT = 3011;

routes(app);

app.get('/', (req, res) =>
    res.send(`Serveur node et express sur port ${PORT}, ok.`)
);

app.listen(PORT, () =>
    console.log(`votre serveur est sur le port ${PORT}`)
);
