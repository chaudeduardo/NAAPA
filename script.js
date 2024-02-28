// Função para preencher a lista suspensa das UEs com base na DRE selecionada
function preencherListaUEs(selectedDRE) {
    // Mapeamento das siglas abreviadas das DREs com as opções na lista suspensa
    var dreMappings = {
        "BT": "Butantã",
        "CL": "Campo Limpo",
        "CS": "Capela do Socorro",
        "FB": "Freguesia/Brasilândia",
        "G": "Guaianases",
        "IP": "Ipiranga",
        "IQ": "Itaquera",
        "JT": "Jaçanã/Tremembé",
        "MP": "São Miguel Paulista",
        "PE": "Penha",
        "PJ": "Pirituba/Jaçanã",
        "SA": "Santo Amaro",
        "SM": "São Mateus",
        // Adicione mais mapeamentos conforme necessário
    };

    // Obtém o nome completo da DRE com base na sigla abreviada
    var dreCompleta = dreMappings[selectedDRE];

    if (!dreCompleta) {
        console.error("Não foi possível encontrar a DRE correspondente para a sigla: " + selectedDRE);
        return;
    }

    // URL do endpoint da API que retorna os dados das UEs com base na DRE selecionada
    var endpointURL = 'https://script.google.com/macros/s/AKfycbwwU_EQgiw0jCDPefOsomf6gDPUk99uYNY-Yi_x9I_plyo_mrfB7nGdqjTZhgDfsWICAA/exec';

    // Realiza uma requisição GET para o endpoint da API
    fetch(endpointURL)
        .then(response => response.json())
        .then(data => {
            // Limpa as opções existentes da lista suspensa das UEs
            var selectUE = document.getElementById('unidadeEducacionalDropdown');
            selectUE.innerHTML = '';

            // Verifica se a DRE selecionada está presente nos dados retornados pela API
            if (data[dreCompleta]) {
                // Preenche a lista suspensa das UEs com base nos dados da API
                data[dreCompleta].forEach(function(ue) {
                    var option = document.createElement('option');
                    option.value = ue;
                    option.textContent = ue;
                    selectUE.appendChild(option);
                });
            } else {
                // Caso a DRE selecionada não tenha UEs associadas, exibe uma mensagem ou realiza alguma outra ação
                console.log('Nenhuma UE encontrada para a DRE selecionada: ' + dreCompleta);
            }

            // Habilita a lista suspensa das UEs após preenchê-la
            selectUE.removeAttribute('disabled');
        })
        .catch(error => {
            console.error('Erro ao obter dados das UEs:', error);
        });
}

// Adiciona um ouvinte de evento para a lista suspensa das DREs
var selectDRE = document.getElementById('menu');
selectDRE.addEventListener('change', function() {
    var selectedDRE = this.value; // Obtém a DRE selecionada
    preencherListaUEs(selectedDRE); // Chama a função para preencher a lista suspensa das UEs
});

// Função para preencher a lista suspensa das UEs com base na DRE selecionada
function preencherListaUEs(selectedDRE) {
    // Mapeamento das siglas abreviadas das DREs com as opções na lista suspensa
    var dreMappings = {
        "Butantã": "Butantã",
        "CL": "Campo Limpo",
        "CS": "Capela do Socorro",
        // Adicione mais mapeamentos conforme necessário
    };

    // Obtém o nome completo da DRE com base na sigla abreviada
    var dreCompleta = dreMappings[selectedDRE];

    if (!dreCompleta) {
        console.error("Não foi possível encontrar a DRE correspondente para a sigla: " + selectedDRE);
        return;
    }

    // URL do endpoint da API que retorna os dados das UEs com base na DRE selecionada
    var endpointURL = 'https://script.google.com/macros/s/AKfycbwwU_EQgiw0jCDPefOsomf6gDPUk99uYNY-Yi_x9I_plyo_mrfB7nGdqjTZhgDfsWICAA/exec';

    // Realiza uma requisição GET para o endpoint da API
    fetch(endpointURL)
        .then(response => response.json())
        .then(data => {
            // Limpa as opções existentes da lista suspensa das UEs
            var selectUE = document.getElementById('unidadeEducacionalDropdown');
            selectUE.innerHTML = '';

            // Verifica se a DRE selecionada está presente nos dados retornados pela API
            if (data[dreCompleta]) {
                // Preenche a lista suspensa das UEs com base nos dados da API
                data[dreCompleta].forEach(function(ue) {
                    var option = document.createElement('option');
                    option.value = ue;
                    option.textContent = ue;
                    selectUE.appendChild(option);
                });
            } else {
                // Caso a DRE selecionada não tenha UEs associadas, exibe uma mensagem ou realiza alguma outra ação
                console.log('Nenhuma UE encontrada para a DRE selecionada: ' + dreCompleta);
            }

            // Habilita a lista suspensa das UEs após preenchê-la
            selectUE.removeAttribute('disabled');
        })
        .catch(error => {
            console.error('Erro ao obter dados das UEs:', error);
        });
}
