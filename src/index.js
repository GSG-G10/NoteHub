require('env2')('config.env');
const app = require('./server');

const Port = app.get('port');

app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at http://localhost:${Port}`);
});
