function showTab(tabId) {
    // Ocultar todas las pestañas
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Mostrar la pestaña seleccionada
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}

// Mostrar la primera pestaña por defecto
document.addEventListener('DOMContentLoaded', function() {
    showTab('tab1');
});
