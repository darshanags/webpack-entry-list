const fs = require('fs');
const path = require('path');

function genEntryList(dPath, ext) {
	const dirPath = dPath;
	const files = fs.readdirSync(dirPath);

	const fileExt = ext;

	let entries = {};
	let filePath = '';
	let entryName = '';

	for (let file of files) {
		filePath = path.join(dirPath, file);
		entryName = path.basename(file, fileExt);

		if (path.extname(file) == fileExt) {
			entries[entryName] = filePath;
		} else {
			continue;
		}
	}

	return entries;
}

module.exports = genEntryList;