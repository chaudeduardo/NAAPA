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

// Função para obter a localização do usuário
function obterLocalizacao() {
    if (navigator.geolocation) {
        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            // Preenche o campo de localização com a latitude e longitude
            document.getElementById("ilocal").value = "Latitude: " + latitude + ", Longitude: " + longitude;
        }
        function error(err) {
            console.log(err);
        }
        // Solicite a localização apenas quando o botão for clicado
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 5000
        });
    } else {
        alert("Geolocalização não é suportada neste navegador.");
    }
}

// Função para validar o formulário
function validarFormulario() {
    // Obter referências às caixas de seleção
    var checkbox1 = document.getElementById("ientrada");
    var checkbox2 = document.getElementById("isaida");
    
    // Verificar se pelo menos uma caixa de seleção está marcada
    if (!checkbox1.checked && !checkbox2.checked) {
        alert("Selecione pelo menos uma opção.");
        return false; // Impedir o envio do formulário
    }
    return true; // Permitir o envio do formulário
}

// Captura o campo de localização e o botão de envio
const localizacaoInput = document.getElementById('ilocal');
const botaoEnviar = document.getElementById('isubimit');

// Função para verificar se o campo de localização está vazio ou preenchido
function verificarCampoLocalizacao() {
    if (localizacaoInput.value === '') {
        botaoEnviar.setAttribute('disabled', 'true');
    } else {
        botaoEnviar.removeAttribute('disabled');
    }
}

// Adiciona um ouvinte de evento ao campo de localização
localizacaoInput.addEventListener('input', verificarCampoLocalizacao);

// Verifica o estado do campo de localização a cada 500ms
setInterval(verificarCampoLocalizacao, 500);
