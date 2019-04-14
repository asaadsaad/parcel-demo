//λ npm install -g parcel-bundler
// npm install rxjs
import { fromEvent } from './node_modules/rxjs'


fromEvent(output, 'click').subscribe(e => {
    output.innerHTML = parseInt(e.target.innerHTML) + 1
})

// parcel serve index.html