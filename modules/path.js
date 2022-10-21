const { parse } = require("path");
const path = require("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretório atual
console.log(path.dirname(__filename));

// Extensões do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'))