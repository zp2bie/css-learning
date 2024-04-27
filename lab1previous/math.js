 function sayhello() {
    console.log("what is going on?")
}

function fortest(){
    array = ['hello','world']
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
}
function filetest(){
    const start = Date.now()
    var fs = require('fs');
    fs.stat('./hello.txt',function(err,stats){
        console.log(stats.isFile());
    })
    setTimeout(() => {
        console.log(Math.floor((Date.now() - start)/1000))
    }, 2000);
}
module.exports={
    sayhello,
    fortest,
    filetest
}