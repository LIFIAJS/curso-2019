const { readFileSync } = require('fs')
const path = require('path')

const LINE_SEPARATOR = '\n'
const FILE_REF_REGEX = /^FILE: (.+)$/
const CODE_FILE_REF_REGEX = /^CODE: (\S+) (\S+)( editable)?$/

const escapeHtml = unsafe =>
    unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")

const codeEditableTemplate = (code, lang = 'javascript') => (`<pre><code class='lang-${lang} hljs' data-trim contenteditable>${escapeHtml(code)}
</code></pre>`)

const codeTemplate = (code, lang = 'javascript') => (`\`\`\`${lang}
${code}
\`\`\``)

const isFileReference = line => FILE_REF_REGEX.test(line)
const isCodeFileReference = line => CODE_FILE_REF_REGEX.test(line)
const loadFileContent = (line, basePath) => {
    const filePath = line.match(FILE_REF_REGEX)[1]

    return preprocess(readFileSync(path.join(basePath, filePath), 'utf8'))
}

const loadCodeFileContent = (line, basePath) => {
    const filePath = line.match(CODE_FILE_REF_REGEX)[1]
    const lang = line.match(CODE_FILE_REF_REGEX)[2]
    const editable = line.match(CODE_FILE_REF_REGEX)[3]

    const code = readFileSync(path.join(basePath, filePath), 'utf8')

    return editable ? codeEditableTemplate(code, lang) : codeTemplate(code, lang)
}

const preprocess = (markdown) =>
    markdown
        .split(LINE_SEPARATOR)
        .map(line => {
            if (isFileReference(line)) return loadFileContent(line, 'src/sections')
            else if (isCodeFileReference(line)) return loadCodeFileContent(line, 'src/examples')
            return line
        })
        .join(LINE_SEPARATOR)

module.exports = preprocess
