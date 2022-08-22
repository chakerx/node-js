const fs=require('fs')
fs.readdir(process.argv[2], function (err, list){
    if (err) {
        return console.error(err)
    }
    let v=list.filter(el=>el.endsWith('.'+process.argv[3])).map(el=>console.log(el))
    
})