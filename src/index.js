import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();
const router = express.Router();

import { Controllers } from './controllers/controllers.js';

app.use(cors());
app.use('/', router);

app.use((req, res) => {
  res.send({ ok: false, error: '404. Page not found.' });
});

router.get('/user/:id', Controllers.user.getUser);

app.listen(PORT, (err) => {
  err ? console.log(`Error: ${err}`) : console.log(`Server listening on *:${PORT} port.`);
});
