var fs = require('fs')

function getFiles (dir, files_){
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files){
      var name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()){
        getFiles(name, files_);
      } else {
        console.log(name.split('/'))
        files_.push(name);
      }
  }
  return files_;
}


if (process.argv.length <= 2) {
  console.log("Usage: node " + __filename + " path/to/directory")
  process.exit(-1)
}

var path = process.argv[2]
getFiles(path)

// fs.readdir(path, (err, items) => {
//   if (err) {
//     return console.log('Unable to scan directory: ' + err);
//   }

//   for (var i=0; i<items.length; i++) {
//       var file = path + '/' + items[i];

//       console.log("Start: " + file);
//       fs.stat(file, f => {
//           return (err, stats) => {
//              console.log(f)
//              console.log(stats["size"])
//           }
//       }(file));
//   }
// });
