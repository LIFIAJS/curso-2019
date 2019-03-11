const { readFileSync } = require('fs');
const path = require('path');

const LINE_SEPARATOR = '\n'
const FILE_REF_REGEX = /^FILE: (.+)$/;

const isFileReference = (line) => FILE_REF_REGEX.test(line);
const loadFileContent = (line, basePath) => {
    const filePath = line.match(FILE_REF_REGEX)[1];

    return readFileSync(path.join(basePath, filePath), 'utf8');
};

const preprocess = async (markdown) =>
    markdown
        .split(LINE_SEPARATOR)
        .map(line => isFileReference(line) ? loadFileContent(line, './') : line)
        .join(LINE_SEPARATOR);

module.exports = preprocess;
