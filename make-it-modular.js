var mymodule = require('./mymodule.js');
let dirPath = process.argv[2];
let fileExt = process.argv[3];

mymodule(dirPath, fileExt, function (err, data) {
  if (err) {
    return console.error('There was an error:', err);
  }
  data.forEach(function (file) {
    console.log(file);
  });
});