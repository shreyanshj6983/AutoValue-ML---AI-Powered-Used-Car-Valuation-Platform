document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    const predictBtn = document.getElementById('predictBtn');
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('spinner');
    
    // Set max year to current year
    const yearInput = document.getElementById('model_year');
    const currentYear = new Date().getFullYear();
    yearInput.max = currentYear;
    yearInput.placeholder = `e.g., ${currentYear - 3}`;
    
    // Initialize option cards
    initOptionCards('brandOptions', 'brand');
    initOptionCards('fuelOptions', 'fuel_type');
    initOptionCards('transmissionOptions', 'transmission');
    initOptionCards('accidentOptions', 'accident');
    initOptionCards('titleOptions', 'clean_title');
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all selections
        const isValid = validateForm();
        if (!isValid) return;
        
        // Show loading state
        btnText.textContent = 'Analyzing...';
        spinner.style.display = 'block';
        predictBtn.disabled = true;
        
        // Submit the form
        setTimeout(() => {
            form.submit();
        }, 1500);
    });
    
    // Initialize option cards functionality
    function initOptionCards(containerId, inputId) {
        const container = document.getElementById(containerId);
        const cards = container.querySelectorAll('.option-card');
        const hiddenInput = container.querySelector('.hidden-input');
        
        cards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove selected class from all cards in this group
                cards.forEach(c => c.classList.remove('selected'));
                
                // Add selected class to clicked card
                this.classList.add('selected');
                
                // Update hidden input value
                hiddenInput.value = this.dataset.value;
                
                // Validate the form
                validateForm();
            });
        });
    }
    
    // Validate form before submission
    function validateForm() {
        let isValid = true;
        const requiredInputs = form.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                // Highlight the container if it's a card selection
                const container = input.closest('.options-container');
                if (container) {
                    container.style.boxShadow = '0 0 0 2px var(--danger)';
                    setTimeout(() => {
                        container.style.boxShadow = '';
                    }, 2000);
                }
            }
        });
        
        return isValid;
    }
    
    // Add input animations
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('label').style.color = '#4895ef';
            this.style.boxShadow = '0 0 0 3px rgba(72, 149, 239, 0.3)';
        });
        
        // Remove focus effect
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('label').style.color = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add animation to result if present
    const result = document.querySelector('.result');
    if (result) {
        result.style.animation = 'pulse 2s infinite';
        
        // Stop pulsing after 5 seconds
        setTimeout(() => {
            result.style.animation = '';
        }, 5000);
    }
});