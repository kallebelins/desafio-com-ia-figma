// ============================================
// Página Sign Up - Funcionalidade JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Elementos das tabs
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const form = document.getElementById('signup-form');
    const cancelBtn = document.getElementById('cancel-btn');

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

    // Função para validar campo
    function validateField(field) {
        const errorElement = document.getElementById(field.id + '-error');
        let isValid = true;
        let errorMessage = '';

        // Remove classe de erro anterior
        field.classList.remove('form-input--error');

        // Validação de campo vazio
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        }
        // Validação de email
        else if (field.type === 'email' && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Digite um email válido';
            }
        }
        // Validação de senha
        else if (field.type === 'password' && field.value.trim()) {
            if (field.value.length < 6) {
                isValid = false;
                errorMessage = 'A senha deve ter pelo menos 6 caracteres';
            }
        }

        // Exibe ou remove mensagem de erro
        if (errorElement) {
            if (isValid) {
                errorElement.textContent = '';
                errorElement.setAttribute('hidden', 'true');
            } else {
                field.classList.add('form-input--error');
                errorElement.textContent = errorMessage;
                errorElement.removeAttribute('hidden');
            }
        }

        return isValid;
    }

    // Validação em tempo real
    const allInputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    allInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Remove erro quando o usuário começa a digitar
            if (this.classList.contains('form-input--error')) {
                const errorElement = document.getElementById(this.id + '-error');
                if (errorElement && errorElement.textContent) {
                    this.classList.remove('form-input--error');
                    errorElement.textContent = '';
                    errorElement.setAttribute('hidden', 'true');
                }
            }
        });
    });

    // Validação do checkbox de termos
    const termsCheckbox = document.getElementById('terms');
    const termsError = document.getElementById('terms-error');

    function validateTerms() {
        if (!termsCheckbox.checked) {
            termsError.textContent = 'Você deve aceitar os termos e condições';
            termsError.removeAttribute('hidden');
            return false;
        } else {
            termsError.textContent = '';
            termsError.setAttribute('hidden', 'true');
            return true;
        }
    }

    termsCheckbox.addEventListener('change', validateTerms);

    // Validação do formulário no submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtém os campos do painel ativo
        const activePanel = document.querySelector('.tab-panel:not([hidden])');
        const activeInputs = activePanel.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        
        let isFormValid = true;

        // Valida todos os campos do painel ativo
        activeInputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        // Valida checkbox de termos
        if (!validateTerms()) {
            isFormValid = false;
        }

        // Se o formulário for válido, pode enviar
        if (isFormValid) {
            // Aqui você pode adicionar a lógica de envio do formulário
            alert('Formulário enviado com sucesso! (Esta é uma demonstração)');
            // form.submit(); // Descomente para enviar o formulário real
        } else {
            // Foca no primeiro campo com erro
            const firstError = form.querySelector('.form-input--error');
            if (firstError) {
                firstError.focus();
            }
        }
    });

    // Botão Cancel
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja cancelar? Todos os dados serão perdidos.')) {
                form.reset();
                // Remove todas as mensagens de erro
                const errorElements = form.querySelectorAll('.form-input-error');
                errorElements.forEach(error => {
                    error.textContent = '';
                    error.setAttribute('hidden', 'true');
                });
                const errorInputs = form.querySelectorAll('.form-input--error');
                errorInputs.forEach(input => {
                    input.classList.remove('form-input--error');
                });
                // Volta para a primeira tab
                switchTab('individual');
            }
        });
    }
});
