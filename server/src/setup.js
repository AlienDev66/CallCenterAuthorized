/** Importando o axios */
const axios = require('axios');

const init = async function (){
    /** Concectando com a API da totalvoice */
   const ura = (await axios({
        url: 'https://api.totalvoice.com.br/ura',
        method: 'post',
        /** Criando a autenticação utilizando uma variável ambiente */
        headers:{
            'Access-Token': process.env.TOTALVOICE_API_KEY

        },
        data:{
            nome: `URA ${Math.floor(Math.random() * 10000 )}`,
            dados:[
            {
                acao: 'tts',
                coletar_dtmf: "6",
                timeout: "20",
                acao_dados:{
                    mensagem: 'Olá, bem-vindo ao canal ALIEN SHIKADAI, digite o código que está aparecendo na sua tela.'
                }
            },
            /** Encaminhando os dados para um webhook (Criei uma conta no Pipedream), porque estamos rodando o projecto localmente. */
            {
                acao: "dinamico",
                acao_dados:{
                    // url: 'https://82a10379757e20ead7a895b75ac84aec.m.pipedream.net'
                    url: 'https://e21057112829eb27776c51fbcc492afd.m.pipedream.net'
                }
            }
        ]
        }
    })).data;
    console.log(ura);
};

init();