// Handling UnCaughtException
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log('ERROR: ', err.name, err.message);
  process.exit(1);
});

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log(`Database connected successfully!`));

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`App runningon port: ${port}...`)
);

// Handling UnhandleRejection
process.on('unhandledRejection', err => {
  console.log('ERROR 💥💥💥: ', err);
  console.log('ERROR: ', err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
