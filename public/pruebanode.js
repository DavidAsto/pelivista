
import fs from 'node:fs' // USAR IMPORT 


fs.readdir('.', (error, files) => {
    if (error) {
        console.error('hay un error', error)
        return
    } else {
        files.forEach(file => {
            console.log(file)
        })
    }
})