// Função para preencher a lista suspensa das UEs com base na DRE selecionada
function preencherListaUEs(dreSelecionada) {
    var selectUE = document.getElementById('unidadeEducacionalDropdown');
    selectUE.innerHTML = '<option value="" selected>Selecione a Unidade Educacional</option>';

    if (dreSelecionada) {
        google.script.run.withSuccessHandler(function(unidadesEducacionais) {
            unidadesEducacionais.forEach(function(ue) {
                selectUE.innerHTML += '<option value="' + ue + '">' + ue + '</option>';
            });
            selectUE.removeAttribute('disabled');
        }).getUnidadesEducacionais(dreSelecionada);
    } else {
        // Se não houver DRE selecionada, mantenha a lista suspensa vazia
        selectUE.removeAttribute('disabled');
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
