// ============================================
// Página Perfil do Usuário - Funcionalidade JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Elementos das tabs
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const forms = {
        informacoes: document.getElementById('perfil-form-informacoes'),
        configuracoes: document.getElementById('perfil-form-configuracoes'),
        seguranca: document.getElementById('perfil-form-seguranca')
    };

    // Elementos de exibição
    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');
    const displayBio = document.getElementById('display-bio');
    const avatarImage = document.getElementById('avatar-image');

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
        // Validação de telefone
        else if (field.type === 'tel' && field.value.trim()) {
            const phoneRegex = /^[\d\s\(\)\-]+$/;
            if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 10) {
                isValid = false;
                errorMessage = 'Digite um telefone válido';
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

    // Validação de confirmação de senha
    function validatePasswordConfirmation() {
        const newPassword = document.getElementById('new-password');
        const confirmPassword = document.getElementById('confirm-password');
        const confirmError = document.getElementById('confirm-password-error');

        if (newPassword && confirmPassword && confirmError) {
            if (confirmPassword.value.trim() && newPassword.value !== confirmPassword.value) {
                confirmPassword.classList.add('form-input--error');
                confirmError.textContent = 'As senhas não coincidem';
                confirmError.removeAttribute('hidden');
                return false;
            } else if (confirmPassword.value.trim()) {
                confirmPassword.classList.remove('form-input--error');
                confirmError.textContent = '';
                confirmError.setAttribute('hidden', 'true');
                return true;
            }
        }
        return true;
    }

    // Validação em tempo real para todos os formulários
    Object.values(forms).forEach(form => {
        if (!form) return;

        const allInputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea');
        allInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
                // Valida confirmação de senha se for o campo de confirmação
                if (this.id === 'confirm-password') {
                    validatePasswordConfirmation();
                }
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
                // Valida confirmação de senha em tempo real
                if (this.id === 'new-password' || this.id === 'confirm-password') {
                    validatePasswordConfirmation();
                }
            });
        });
    });

    // Submit do formulário de Informações
    if (forms.informacoes) {
        forms.informacoes.addEventListener('submit', function(e) {
            e.preventDefault();

            const inputs = this.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
            let isFormValid = true;

            inputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Atualiza informações exibidas
                const fullname = document.getElementById('fullname').value;
                const email = document.getElementById('email').value;
                const bio = document.getElementById('bio').value;

                if (displayName) displayName.textContent = fullname;
                if (displayEmail) displayEmail.textContent = email;
                if (displayBio) displayBio.textContent = bio || 'Nenhuma biografia informada.';

                alert('Informações salvas com sucesso! (Esta é uma demonstração)');
            } else {
                const firstError = this.querySelector('.form-input--error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });

        // Botão Cancelar Informações
        const cancelInformacoesBtn = document.getElementById('cancel-informacoes-btn');
        if (cancelInformacoesBtn) {
            cancelInformacoesBtn.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja cancelar? Todas as alterações serão perdidas.')) {
                    forms.informacoes.reset();
                    const errorElements = forms.informacoes.querySelectorAll('.form-input-error');
                    errorElements.forEach(error => {
                        error.textContent = '';
                        error.setAttribute('hidden', 'true');
                    });
                    const errorInputs = forms.informacoes.querySelectorAll('.form-input--error');
                    errorInputs.forEach(input => {
                        input.classList.remove('form-input--error');
                    });
                }
            });
        }
    }

    // Submit do formulário de Configurações
    if (forms.configuracoes) {
        forms.configuracoes.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Configurações salvas com sucesso! (Esta é uma demonstração)');
        });

        // Botão Cancelar Configurações
        const cancelConfiguracoesBtn = document.getElementById('cancel-configuracoes-btn');
        if (cancelConfiguracoesBtn) {
            cancelConfiguracoesBtn.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja cancelar? Todas as alterações serão perdidas.')) {
                    forms.configuracoes.reset();
                }
            });
        }
    }

    // Submit do formulário de Segurança
    if (forms.seguranca) {
        forms.seguranca.addEventListener('submit', function(e) {
            e.preventDefault();

            const inputs = this.querySelectorAll('input[type="password"]');
            let isFormValid = true;

            inputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            // Valida confirmação de senha
            if (!validatePasswordConfirmation()) {
                isFormValid = false;
            }

            if (isFormValid) {
                alert('Senha atualizada com sucesso! (Esta é uma demonstração)');
                this.reset();
            } else {
                const firstError = this.querySelector('.form-input--error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });

        // Botão Cancelar Segurança
        const cancelSegurancaBtn = document.getElementById('cancel-seguranca-btn');
        if (cancelSegurancaBtn) {
            cancelSegurancaBtn.addEventListener('click', function() {
                if (confirm('Tem certeza que deseja cancelar? Todas as alterações serão perdidas.')) {
                    forms.seguranca.reset();
                    const errorElements = forms.seguranca.querySelectorAll('.form-input-error');
                    errorElements.forEach(error => {
                        error.textContent = '';
                        error.setAttribute('hidden', 'true');
                    });
                    const errorInputs = forms.seguranca.querySelectorAll('.form-input--error');
                    errorInputs.forEach(input => {
                        input.classList.remove('form-input--error');
                    });
                }
            });
        }
    }

    // Editar Avatar
    const editAvatarBtn = document.getElementById('edit-avatar-btn');
    if (editAvatarBtn) {
        editAvatarBtn.addEventListener('click', function() {
            // Em uma aplicação real, aqui abriria um seletor de arquivo
            const newAvatarUrl = prompt('Digite a URL da nova imagem de avatar (ou deixe em branco para cancelar):');
            if (newAvatarUrl && newAvatarUrl.trim()) {
                avatarImage.src = newAvatarUrl.trim();
                alert('Avatar atualizado! (Esta é uma demonstração)');
            }
        });
    }
});
