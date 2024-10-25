const fs=require('fs')
/*
fs.stat('node1.js',(err,stats)=>{
    if(err) throw err
    console.log("Stats of the file", JSON.stringify(stats))
}) */
/* fs.rename('node.js','New_Data.txt', (err)=>{
    if(err) throw err
    console.log("Rename Successful")
    fs.stat('New_Data.txt',(err,stats)=>{
        if(err) throw err
        console.log("Stats of the file", JSON.stringify(stats))
    })
})
*/
/* fs.readFile('counter.html','utf-8',(err.data)=>{
    if (err) throw err
    console.log("Contents of the file", data)
})
console.log("Reading the contents of the file") */
/*const data=fs.readFileSync('counter.html','utf-8')
console.log('Contentsof the file are' ,data")
console.log("Reading the contents of the file");
console.log("File data ends here"); */
/* fs.appendFile('test1.txt','Web Tech, Data Science', function(err){
    if(err) throw err
    console.log("Data written Successful")
    fs.readFile('test1.txt','utf-8',(err,data)=>{
        if(err) throw err
        console.log("Contents of the file", data)
})
}) */
/* fs.open('test1.txt','r+',function(err,fd){
    if(err) throw err
    fs.ftruncate(fd,3,function(err){
        if (err) throw err
        console.log("File truncated sucessfully")
    })
}) */
fs.unlink('test1.txt', function(){
    
})
