import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;
const { Pool } = pg;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mahasiswa',
  password: '085225',
  port: 5432,
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});