const DWebIndex = require('./')
const ram = require('random-access-memory')

const idx = new DWebIndex(ram, { valueEncoding: 'json' })

idx.add({
  title: 'also cool'
}, {
  keywords: ['test']
})

idx.add({
  title: 'also cooling'
}, {
  keywords: ['test', 'testing']
})

idx.add({
  title: 'cool stuff'
}, {
  keywords: ['stuff']
}, function () {
  DWebIndex.or(idx.lookup('test'), idx.lookup('testing'))
    .on('data', console.log)
    .on('end', () => console.log('done!'))
})
