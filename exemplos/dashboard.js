// ============================================
// Página Dashboard - Funcionalidade JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Elementos das tabs
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const settingsForm = document.getElementById('settings-form');
    const resetBtn = document.getElementById('reset-btn');

    // Função para alternar tabs
    function switchTab(tabName) {
        // Remove active de todas as tabs
        tabButtons.forEach(btn => {
            const item = btn.closest('.tabs__item');
            item.classList.remove('tabs__item--active');
            btn.setAttribute('aria-selected', 'false');
        });

        // Esconde todos os painéis
        tabPanels.forEach(panel => {
            panel.setAttribute('hidden', 'true');
        });

        // Ativa a tab selecionada
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeButton) {
            const activeItem = activeButton.closest('.tabs__item');
            activeItem.classList.add('tabs__item--active');
            activeButton.setAttribute('aria-selected', 'true');

            // Mostra o painel correspondente
            const panelId = activeButton.getAttribute('aria-controls');
            const activePanel = document.getElementById(panelId);
            if (activePanel) {
                activePanel.removeAttribute('hidden');
            }
        }
    }

    // Adiciona event listeners nas tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Formulário de Configurações
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica de salvamento
            alert('Configurações salvas com sucesso! (Esta é uma demonstração)');
        });
    }

    // Botão Restaurar Padrões
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja restaurar as configurações padrão? Todas as alterações serão perdidas.')) {
                settingsForm.reset();
                // Restaura valores padrão
                const siteName = document.getElementById('site-name');
                const siteEmail = document.getElementById('site-email');
                const timezone = document.getElementById('timezone');
                const notifications = document.getElementById('notifications');
                const maintenance = document.getElementById('maintenance');

                if (siteName) siteName.value = 'Meu Sistema';
                if (siteEmail) siteEmail.value = 'contato@example.com';
                if (timezone) timezone.value = 'America/Sao_Paulo';
                if (notifications) notifications.checked = true;
                if (maintenance) maintenance.checked = false;
            }
        });
    }
});
