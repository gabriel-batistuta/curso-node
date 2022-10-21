const fs = require('fs');
const path = require('path');

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log("Erro: ", error); 
    } 

    console.log("Pasta criada com sucesso!")
})

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.html'), '<h1>Hello Node!</h1>', (error) => {
    if (error) {
        return console.log('Erro: ', error);
    }

    console.log('arquivo criado com sucesso!');

    // Adicionar a um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.html'), 'Hello World!', (error) => {
    if (error) {
        return console.log('Erro: ', error);
    }

    console.log('arquivo modificado com sucessor')
    })

    // Ler um arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.html'), 'utf-8', (error, data) => {
    if (error) {
        return console.log('Erro: ', error);
    }

    console.log(data);
    })

})



