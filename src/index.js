import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 3000;
const app = express();
const router = express.Router();

import { controllers } from './controllers/controllers.js';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.use((req, res) => {
  res.send({ ok: false, error: '404. Page not found.' });
});

router.get('/user/:id', controllers.user.getUser);

router.post('/keno/createGame', controllers.keno.createGame);

app.listen(PORT, (err) => {
  err ? console.log(`Error: ${err}`) : console.log(`Server listening on *:${PORT} port.`);
});
