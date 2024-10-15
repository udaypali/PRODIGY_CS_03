document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const charCount = document.getElementById('charCount');
    const copyPassword = document.getElementById('copyPassword');
    const strengthBar = document.getElementById('strengthBar');
    const criteriaList = document.getElementById('criteriaList');
    const submitButton = document.getElementById('submitButton');

    const criteria = [
        { label: 'At least 8 characters long', check: (pw) => pw.length >= 8 },
        { label: 'Contains uppercase letters', check: (pw) => /[A-Z]/.test(pw) },
        { label: 'Contains lowercase letters', check: (pw) => /[a-z]/.test(pw) },
        { label: 'Contains numbers', check: (pw) => /\d/.test(pw) },
        { label: 'Contains special characters', check: (pw) => /[!@#$%^&*]/.test(pw) },
        { label: 'No spaces allowed', check: (pw) => !/\s/.test(pw) },
        { label: 'No repeated characters', check: (pw) => !/(.)\1/.test(pw) },
        { label: 'At least 10 characters long', check: (pw) => pw.length >= 10 },
        { label: 'Contains both letters and numbers', check: (pw) => /[a-zA-Z]/.test(pw) && /\d/.test(pw) },
        { label: 'Contains mixed case', check: (pw) => /[a-z]/.test(pw) && /[A-Z]/.test(pw) },
    ];

    criteria.forEach(criterion => {
        const li = document.createElement('li');
        li.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${criterion.label}
        `;
        criteriaList.appendChild(li);
    });

    function updatePasswordStrength() {
        const password = passwordInput.value;
        charCount.textContent = `Characters: ${password.length}`;

        const metCriteria = criteria.filter(c => c.check(password));
        const strength = metCriteria.length / criteria.length;

        strengthBar.style.width = `${strength * 100}%`;
        
        if (strength < 0.4) {
            strengthBar.style.background = 'linear-gradient(to right, #ef4444, #dc2626)';
            strengthBar.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.7)';
        } else if (strength < 0.7) {
            strengthBar.style.background = 'linear-gradient(to right, #eab308, #ca8a04)';
            strengthBar.style.boxShadow = '0 0 10px rgba(234, 179, 8, 0.7)';
        } else {
            strengthBar.style.background = 'linear-gradient(to right, #22c55e, #16a34a)';
            strengthBar.style.boxShadow = '0 0 10px rgba(34, 197, 94, 0.7)';
        }

        criteriaList.querySelectorAll('li').forEach((li, index) => {
            if (criteria[index].check(password)) {
                li.classList.add('met');
                li.querySelector('svg').style.color = '#22c55e';
            } else {
                li.classList.remove('met');
                li.querySelector('svg').style.color = '#6b7280';
            }
        });

        submitButton.disabled = strength < 0.7;
        submitButton.textContent = strength < 0.7 ? 'Password not strong enough' : 'Submit';
    }

    passwordInput.addEventListener('input', updatePasswordStrength);

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.innerHTML = type === 'password' ? 
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>' :
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>';
    });

    copyPassword.addEventListener('click', () => {
        navigator.clipboard.writeText(passwordInput.value).then(() => {
            const originalText = copyPassword.querySelector('span').textContent;
            copyPassword.querySelector('span').textContent = 'Copied!';
            copyPassword.querySelector('svg').innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
            setTimeout(() => {
                copyPassword.querySelector('span').textContent = originalText;
                copyPassword.querySelector('svg').innerHTML = '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>';
            }, 2000);
        });
    });
});