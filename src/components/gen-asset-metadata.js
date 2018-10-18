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
function getMetaDataByExtension(pathParts, fileName, rawFileName){
  pathParts.pop()
  pathParts.push(fileName)
  var fullSrc = pathParts.join('/')

  var fileParts = fileName.split('.')
  var fileNameLength = fileParts.length
  if (fileNameLength > 1){
    let key = undefined
    let value = undefined
    let extension = fileParts[fileNameLength - 1]
    let baseName =  fileParts[fileNameLength - 2]
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      key = 'pic'
      value = fullSrc
    } else if (extension === 'mp3' || extension === 'wav') {
      key = 'src'
      value = fullSrc
    } else if (extension === 'artist') {
      key = 'artist'
      value = baseName
    } else if (extension === 'title') {
      key = 'title'
      value = baseName
    }
    return {  key: key,
              value: value
            }
  } else {
    return undefined
  } 
}

function isRequireType(rawFileName) {
  var fileParts = rawFileName.split('.')
  var fileNameLength = fileParts.length
  if (fileNameLength > 1){
    let extension = fileParts[fileNameLength - 1]
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' ||
        extension === 'mp3' || extension === 'wav') {
      return true
    }
  }
  return false
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
        var rawFileName = fileName
        if (fileName !== '.DS_Store') {
          if (isRequireType(rawFileName) && containsSpace(fileName)) {
            var newName = removeSpaces(fileName)
            copyFile(pathParts, fileName, newName)
            fileName = newName
          }
          let obj = (getMetaDataByExtension(pathParts, fileName, rawFileName))
          if (objExists(obj)) {
            song = song || {}
            if (obj.key === 'pic' || obj.key === 'src') {
              song[obj.key] = 'require(\''+obj.value+'\')'
            } else {
              song[obj.key] = '\'' + obj.value + '\''
            }
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

