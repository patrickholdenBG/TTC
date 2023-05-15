import express from 'express';
import router from './routes/data';
// import * as errorHandlers from './utils/errorHandlers';

const app = express();
const port = process.env.port || 3001;

// Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with the appropriate origin
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.use('/api/data', router);

// Error handling middleware
// app.use(errorHandlers.handleNotFound);
// app.use(errorHandlers.handleError);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});