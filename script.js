// Mapeamento entre DREs abreviadas e seus nomes completos
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
};
// Função para preencher a lista suspensa das UEs com base na DRE selecionada
function preencherListaUEs(dreSelecionada) {
    // Seleciona o elemento do HTML para a lista suspensa das UEs
    var selectUE = document.getElementById('unidadeEducacionalDropdown');
    
    // Verifica se a DRE selecionada tem UEs associadas
    if (dreMappings[dreSelecionada]) {
        // Limpa as opções existentes da lista suspensa das UEs
        selectUE.innerHTML = '<option value="" selected>Selecione a Unidade Educacional</option>';
        
        // Preenche as opções com base na DRE selecionada
        dreMappings[dreSelecionada].forEach(ue => {
            selectUE.innerHTML += '<option value="' + ue + '">' + ue + '</option>';
        });

        // Remove a propriedade "disabled" para habilitar a lista suspensa das UEs
        selectUE.removeAttribute('disabled');
    } else {
        // Caso a DRE selecionada não tenha UEs associadas, exibe uma mensagem ou realiza alguma outra ação
        console.log('Nenhuma UE encontrada para a DRE selecionada: ' + dreSelecionada);
    }
}

// Adiciona um ouvinte de evento à lista suspensa das DREs
document.getElementById('menu').addEventListener('change', function() {
    // Obtém o valor selecionado na lista suspensa das DREs
    var dreSelecionada = this.value;
    
    // Chama a função para preencher a lista suspensa das UEs com base na DRE selecionada
    preencherListaUEs(dreSelecionada);
});
