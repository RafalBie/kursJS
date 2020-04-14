// function absolute(base, relative) {
//     var stack = base.split("/"),
//         parts = relative.split("/");
//     stack.pop(); // remove current file name (or empty string)
//                  // (omit if "base" is the current folder without trailing slash)
//     for (var i=0; i<parts.length; i++) {
//         if (parts[i] == ".")
//             continue;
//         if (parts[i] == "..")
//             stack.pop();
//         else
//             stack.push(parts[i]);
//     }
//     return stack.join("/");
// }
// console.log(absolute())

const filename = '/path/to/file/file.txt';
const pathParts = filename.split('/');
console.log(pathParts);





const getPath = (filename) => {
    
            
    const path = pathParts.filter(function(index){
        return index[0,3];
    })
    const extension = pathParts.filter(function(index){
        return index[4];
    })
    console.log(extension)
  
    return {
        path: path.join("/"),
        // filename: filename.join(),
        extension: extension.join(),
    }
}
console.log (getPath(filename))