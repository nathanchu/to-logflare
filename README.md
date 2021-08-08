# to-logflare
## An unoffcial npm package to send logs to logflare ([logflare.app](https://logflare.app))

### CLI
#### Install
```bash
$ npm install -g to-logflare # or yarn global add to-logflare
```
#### Usage
```bash
some-command | to-logflare --source source-id-here --api-key api-key-here
```

### API
#### Install
```bash
$ npm install to-logflare # or yarn add to-logflare
```
#### Usage
```javascript
const toLogflare = require('to-logflare');

toLogflare({
    message: 'some message',
    metadata: {
        some: 'metadata'
    },
    source: 'source-id-here',
    apiKey: 'api-key-here'
}).then(() => {
    // Success
}).catch(err => {
    // Error
});
```
