const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('__ENV_BASE_URL__', process.env.NOCODB_BASE_URL || '');
html = html.replace('__ENV_TOKEN__', process.env.NOCODB_TOKEN || '');
html = html.replace('__ENV_TABELA_PRODUTOS__', process.env.TABELA_PRODUTOS || '');
html = html.replace('__ENV_TABELA_CONFIG__', process.env.TABELA_CONFIG || '');

fs.writeFileSync('index.html', html);
