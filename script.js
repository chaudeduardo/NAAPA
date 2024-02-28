function category(c) {
    var item = document.getElementById('item-' + c).innerHTML;
    document.getElementById('menu').value = item;
    // Adicione chamada de função para preencher a lista suspensa de Unidade Educacional aqui
    fillUnidadeEducacionalDropdown(item);
}

function fillUnidadeEducacionalDropdown(selectedDRE) {
    var unidadeEducacionalDropdown = document.getElementById('unidadeEducacionalDropdown');
    // Limpa as opções existentes
    unidadeEducacionalDropdown.innerHTML = '<option value="" selected>Selecione a Unidade Educacional</option>';
    
    // Preenche as opções com base na DRE selecionada
    switch (selectedDRE) {
        case 'Butantã':
            unidadeEducacionalDropdown.innerHTML += '<option value="Unidade 1">Unidade 1</option>';
            unidadeEducacionalDropdown.innerHTML += '<option value="Unidade 2">Unidade 2</option>';
            // Adicione mais unidades conforme necessário
            break;
        case 'Campo Limpo':
            unidadeEducacionalDropdown.innerHTML += '<option value="Unidade 3">Unidade 3</option>';
            unidadeEducacionalDropdown.innerHTML += '<option value="Unidade 4">Unidade 4</option>';
            // Adicione mais unidades conforme necessário
            break;
        // Adicione mais casos conforme necessário para outras DREs
    }

    // Habilita a lista suspensa após preenchê-la
    unidadeEducacionalDropdown.removeAttribute('disabled');
}

// Função para obter a localização do usuário
function obterLocalizacao() {
    if (navigator.geolocation) {
        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            // Preencha o campo de localização com a latitude e longitude
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
