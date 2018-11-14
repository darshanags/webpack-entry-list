const { readdirSync } = require('fs');
const { basename, extname, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class WebpackEntryList {
	static generateEntryList(dPath = '', ext = '.js') {
		const dir = dPath;
		let entries = {};
		let filePath = '';
		let entryName = '';
		let files = this._fileList(dir);

		for (let file of files) {
			filePath = resolve(dir, file);
			entryName = basename(file, ext);

			if (extname(file) == ext) {
				entries[entryName] = filePath;
			} else {
				continue;
			}
		}

		return entries;
	}

	static generateHTMLPluginList(dPath = '', extension = '.pug', htmlWPOptions = { inject: true }) {
		const dir = dPath;
		const ext = extension;
		let files = this._fileList(dir);
		let plugins = [];
		let entryName = '';
		let filePath = '';
		let config;

		for (let file of files) {
			filePath = resolve(dir, file);
			entryName = basename(file, ext);

			if (extname(file) == ext) {
				config = Object.assign({
					filename: `${entryName}.html`,
					template: `${filePath}`
				}, htmlWPOptions);

				plugins.push(new HtmlWebpackPlugin(config));
			} else {
				continue;
			}
		}

		return plugins;

	}

	static _fileList(dPath = '') {
		let files;

		if (dPath === '') {
			throw 'Directory path cannot be empty.';
		}

		try {
			files = readdirSync(dPath);
		} catch (err) {
			throw `An error occurred while trying to read the input directory: ${err}.`;
		}

		return files;
	}
}

module.exports = WebpackEntryList;