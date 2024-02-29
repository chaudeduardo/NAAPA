// Função para preencher a lista suspensa das UEs com base na DRE selecionada
function preencherListaUEs(dreSelecionada) {
    var selectUE = document.getElementById('unidadeEducacionalDropdown');
    selectUE.innerHTML = '<option value="" selected>Selecione a Unidade Educacional</option>';
    var dreAbreviada = dreSelecionada;
    if (dreAbreviada) {
        // Aqui você pode usar a abreviatura da DRE para buscar as UEs na sua planilha
        // Exemplo:
        // dreAbreviada = "BT"; // Supondo que a DRE selecionada seja Butantã
        // Agora você pode usar "BT" para buscar as UEs correspondentes na planilha
        // Após obter as UEs, você pode preencher a lista suspensa como estava fazendo antes
    } else {
        console.log('Abreviatura da DRE não encontrada para: ' + dreSelecionada);
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
});
