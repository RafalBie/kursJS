

const filename = '/path/to/file/file.txt';
const pathParts = filename.split('/');
console.log(pathParts);





const getPath = (filename) => {
    
    // pathParts.filter(function(el, key){})
    
    const [last] = pathParts.filter((el,k)=>{
    return k === pathParts.length - 1
    })
    
    const withoutFilename = pathParts.filter((el,k)=>{
    return k !== pathParts.length - 1
    })    
    const [name, extention] = last.split('.')
    // const path = pathParts.filter(function(index){
    //     return index[0,3];
    // })
    // const extension = pathParts.filter(function(index){
    //     return index[4];
    // })
    // console.log(extension)
  
    return {
        path: withoutFilename.join("/"),
        filename: last,
        extention: extention,
        // path: path.join("/"),
        // // filename: filename.join(),
        // extension: extension.join(),
    }
}
console.log (getPath(filename))