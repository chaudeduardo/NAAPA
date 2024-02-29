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
    var selectUE = document.getElementById('unidadeEducacionalDropdown');
    selectUE.innerHTML = '<option value="" selected>Selecione a Unidade Educacional</option>';
    var unidadesEducacionais = dreMappings[dreSelecionada];
    if (unidadesEducacionais) {
        unidadesEducacionais.forEach(function(ue) {
            selectUE.innerHTML += '<option value="' + ue + '">' + ue + '</option>';
        });
        selectUE.removeAttribute('disabled');
    } else {
        console.log('Nenhuma UE encontrada para a DRE selecionada: ' + dreSelecionada);
    }
}

// Função para obter geolocalização
function obterLocalizacao() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var locationString = "Latitude: " + latitude + ", Longitude: " + longitude;
            document.getElementById('ilocal').value = locationString;
        });
    } else {
        alert("Geolocalização não suportada pelo navegador.");
    }
}

// Adiciona um ouvinte de evento à lista suspensa das DREs
document.getElementById('menu').addEventListener('change', function() {
    // Obtém o valor selecionado na lista suspensa das DREs
    var dreSelecionada = this.value;
    
    // Chama a função para preencher a lista suspensa das UEs com base na DRE selecionada
    preencherListaUEs(dreSelecionada);
});Es com base na DRE selecionada
    preencherListaUEs(dreSelecionada);
});
