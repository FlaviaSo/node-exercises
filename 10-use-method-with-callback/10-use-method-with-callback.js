import { writeFile, readFile } from 'node:fs';

writeFile('test.txt', "Test", err => {
  if (err) throw err
  console.log('Saved!')

  readFile('test.txt', (err, data) => {
    if (err) throw err
    console.log(`${data}`)
  })

})