import app from './app.js'
import {PORT} from './config.js'

app.listen(PORT);

console.log('Serve running on port', PORT);