// ============================================
// Página Cadastro em Sistema - Funcionalidade JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro-form');
    const cancelBtn = document.getElementById('cancel-btn');

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
                errorMessage = 'Digite um e-mail válido';
            }
        }
        // Validação de senha
        else if (field.type === 'password' && field.id === 'senha' && field.value.trim()) {
            if (field.value.length < 8) {
                isValid = false;
                errorMessage = 'A senha deve ter pelo menos 8 caracteres';
            }
        }
        // Validação de confirmação de senha
        else if (field.type === 'password' && field.id === 'confirmar-senha' && field.value.trim()) {
            const senhaField = document.getElementById('senha');
            if (field.value !== senhaField.value) {
                isValid = false;
                errorMessage = 'As senhas não coincidem';
            }
        }
        // Validação de telefone (opcional, mas se preenchido, deve ser válido)
        else if (field.type === 'tel' && field.value.trim()) {
            const phoneRegex = /^[\d\s\(\)\-]+$/;
            const digitsOnly = field.value.replace(/\D/g, '');
            if (!phoneRegex.test(field.value) || digitsOnly.length < 10) {
                isValid = false;
                errorMessage = 'Digite um telefone válido';
            }
        }
        // Validação de nome completo
        else if (field.id === 'nome-completo' && field.value.trim()) {
            const nameParts = field.value.trim().split(/\s+/);
            if (nameParts.length < 2) {
                isValid = false;
                errorMessage = 'Digite seu nome completo';
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
    const allInputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="tel"]');
    allInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
            
            // Valida confirmação de senha quando a senha é alterada
            if (this.id === 'senha') {
                const confirmarSenha = document.getElementById('confirmar-senha');
                if (confirmarSenha && confirmarSenha.value.trim()) {
                    validateField(confirmarSenha);
                }
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
            
            // Valida confirmação de senha em tempo real quando ambas estão preenchidas
            if (this.id === 'senha' || this.id === 'confirmar-senha') {
                const senha = document.getElementById('senha');
                const confirmarSenha = document.getElementById('confirmar-senha');
                if (senha.value.trim() && confirmarSenha.value.trim()) {
                    validateField(confirmarSenha);
                }
            }
        });
    });

    // Máscara de telefone
    const telefoneField = document.getElementById('telefone');
    if (telefoneField) {
        telefoneField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                if (value.length <= 10) {
                    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
                } else {
                    value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
                }
                e.target.value = value;
            }
        });
    }

    // Validação do checkbox de termos
    const termosCheckbox = document.getElementById('termos');
    const termosError = document.getElementById('termos-error');

    function validateTerms() {
        if (!termosCheckbox.checked) {
            termosError.textContent = 'Você deve aceitar os termos de uso e política de privacidade';
            termosError.removeAttribute('hidden');
            return false;
        } else {
            termosError.textContent = '';
            termosError.setAttribute('hidden', 'true');
            return true;
        }
    }

    termosCheckbox.addEventListener('change', validateTerms);

    // Validação do formulário no submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isFormValid = true;

        // Valida todos os campos obrigatórios
        const requiredInputs = form.querySelectorAll('input[required]');
        requiredInputs.forEach(input => {
            if (input.type !== 'checkbox' && !validateField(input)) {
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
            alert('Conta criada com sucesso! (Esta é uma demonstração)');
            // form.submit(); // Descomente para enviar o formulário real
        } else {
            // Foca no primeiro campo com erro
            const firstError = form.querySelector('.form-input--error');
            if (firstError) {
                firstError.focus();
            } else if (!termosCheckbox.checked) {
                termosCheckbox.focus();
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
            }
        });
    }

    // Botões de autenticação social (demonstração)
    const socialButtons = document.querySelectorAll('.btn--social');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('btn--google') ? 'Google' : 'Facebook';
            alert(`Cadastro com ${provider} (Esta é uma demonstração)`);
        });
    });
});
