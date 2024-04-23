const EventEmitter = require('events')

const customnEmitter = new EventEmitter()


customnEmitter.on('irelia', (ireliasThing) =>{
    console.log(ireliasThing)
})


customnEmitter.emit('irelia', 'lâminas')