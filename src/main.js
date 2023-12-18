import express from 'express';
import { fileURLToPath, URL } from 'node:url';

import { Config } from './config/config.js';

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', fileURLToPath(new URL('views', import.meta.url)));

app.use('/', router);
app.use(express.static('public'));

// index page
router.get('/', (req, res) => {
  res.render('pages/index', {
    keno: {
      steps: [
        { id: 1, multiplier: 0.0 },
        { id: 2, multiplier: 0.0 },
        { id: 3, multiplier: 0.0 },
        { id: 4, multiplier: 0.0 },
        { id: 5, multiplier: 3.5 },
        { id: 6, multiplier: 8.0 },
        { id: 7, multiplier: 13.0 },
        { id: 8, multiplier: 63.0 },
        { id: 9, multiplier: 500.0 },
        { id: 10, multiplier: 800.0 },
        { id: 11, multiplier: 1000.0 },
      ],
    },
  });
});

app.listen(Config.port, (err) => {
  !err && console.log(`Server is listening on port ${Config.port}`);
});
