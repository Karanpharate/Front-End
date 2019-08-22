const fs = require("fs");
fs.writeFileSync('sample.txt', 'My name is Karan.');
fs.readFile('sample.txt', 'UTF8', (err, content) => {
	if (err) console.log(err);
	console.log(content);
});
