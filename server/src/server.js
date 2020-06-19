/** Configurado e conectando o socket.io para o nosso banckend */

/** Conectando o socket.io com o modulo http (passar para o socket.io) */
const server = require('http').createServer();
const io = require('socket.io')(server);

/** Gerenciando as conexões */
io.on('connection', socket=>{
    /** Gerando um código aleatório de 6 dígitos */
    const code = `${Math.floor(Math.random() * 999999)}`.padStart(6,'0');

    /** Avisaando ao client  */
    socket.emit('code', code);
    socket.emit('status', 'waiting call...');

});

/** Liberando a audiçaõ do nosso servidor */
server.listen(3333);