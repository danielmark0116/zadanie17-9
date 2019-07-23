const app = require('./modules/server');
const handlers = require('./modules/handlers');

app.use('/', handlers);

// PAGE NOT FOUND HANDLER
app.use('/', (req, res) => {
  res.send('page not found...');
});
