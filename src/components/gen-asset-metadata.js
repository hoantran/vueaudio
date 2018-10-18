var fs = require('fs')

function containsSpace(str) {
  return str.indexOf(' ') !== -1
}

function removeSpaces(str) {
  return str.replace(/ /g,'')
}

function copyFile(pathParts, oldName, newName) {
  pathParts.pop()
  pathParts.push(oldName)
  var oldPath = pathParts.join('/')
  pathParts.pop()
  pathParts.push(newName)
  var newPath = pathParts.join('/')
  console.log(oldPath,'-->',newPath)
  fs.createReadStream(oldPath).pipe(fs.createWriteStream(newPath));
}

//     title: '前前前世',
//     artist: 'RADWIMPS',
//     src: 'http://0.0.0.0:3000/aplayer/yourname.mp3',
//     pic: require('../assets/mc-really-long-ass-url-without-space.jpg')
function getMetaDataByExtension(pathParts, fileName){
  pathParts.pop()
  pathParts.push(fileName)
  var fullSrc = pathParts.join('/')

  var fileParts = fileName.split('.')
  var fileNameLength = fileParts.length
  if (fileNameLength > 0){
    let key = undefined
    var extension = fileParts[fileNameLength - 1]
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      key = 'pic'
    } else if (extension === 'mp3' || extension === 'wav') {
      key = 'src'
    } else if (extension === 'artist') {
      key = 'artist'
    } else if (extension === 'title') {
      key = 'title'
    }
    return {  key: key,
              value: fullSrc
            }
  } else {
    return undefined
  } 
}

function objExists(obj) {
  return obj !== undefined && obj.key !== undefined
}

// the folder structure has to be in this format:
// root_dir
//   song1_dir
//     file1
//     file2
//     filex
//   song2_dir
//     file1
//     file2
//     filex
function getFiles (dir, files_){
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  var song = undefined
  for (var i in files){
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()){
      if (song) {
        files_.push(song)
      }
      getFiles(name, files_);
    } else {
      var pathParts = name.split('/')
      var length = pathParts.length
      if (length > 0) {
        var fileName = pathParts[length - 1]
        if (fileName !== '.DS_Store') {
          if (containsSpace(fileName)) {
            var newName = removeSpaces(fileName)
            copyFile(pathParts, fileName, newName)
            fileName = newName
          }
          let obj = (getMetaDataByExtension(pathParts, fileName))
          if (objExists(obj)) {
            song = song || {}
            song[obj.key] = 'require(\''+obj.value+'\')'
          }
        }
      }
    }
    // console.log(song)
  }
  if (song) {
    files_.push(song)
  }
  return files_;
}


if (process.argv.length <= 2) {
  console.log("Usage: node " + __filename + " path/to/directory")
  process.exit(-1)
}

var path = process.argv[2]
var fileList = getFiles(path)
let str = '[\n'
var len = fileList.length
fileList.forEach(element => {
  var substr = undefined
  for (var key in element) {
    if (element.hasOwnProperty(key)) {
      substr = substr || ''
      substr += '    '+key+': '+element[key]+',\n'
    }
  }
  if (substr){
    substr = substr.slice(0, -2)
    str += '  {\n'
    str += substr
    str += '\n  }'
  }
  len -= 1
  if (len > 0) {
    str += ',\n'
  } else {
    str += '\n'
  }
})
str += ']'

console.log(str)

