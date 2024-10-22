const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const ibge = document.getElementById('ibge');

function limpa_formulario() {
    //Limpa valores do formulário de cep.
    rua.value = ("");
    bairro.value = ("");
    cidade.value = ("");
    estado.value = ("");
    ibge.value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        rua.value = (conteudo.logradouro);
        bairro.value = (conteudo.bairro);
        cidade.value = (conteudo.localidade);
        estado.value = (conteudo.uf);
        ibge.value = (conteudo.ibge);
    } else {
        //CEP não Encontrado.
        limpa_formulario();
        alert("CEP não encontrado")
    }
}

function pesquisa_cep(valor) {
    //Nova variável "cep" somente com dígitos.
    let cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            rua.value = "...";
            bairro.value = "...";
            cidade.value = "...";
            estado.value = "...";
            ibge.value = "...";

            //Cria um elemento javascript.
            let script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } else {
            //Cep é inválido
            limpa_formulario();
            alert("Formato de CEP inválido.");
        }

    } else {
        //cep sem valor, limpa formulário.
        limpa_formulario();
    }
};