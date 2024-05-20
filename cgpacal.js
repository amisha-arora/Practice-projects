const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const percentage = parseFloat(document.querySelector('#percentage').value);
    const results = document.querySelector('#results');

    if (isNaN(percentage) || percentage < 0) {
        results.innerHTML = `Please provide a valid percentage.`;
    } else {
        const cgpa = (percentage / 9.5).toFixed(2);
        let message = `<span>${cgpa}</span>`;
        
        if (cgpa > 8.5) {
            message += `<p>Passed and got Top division</p>`;
        } else if (cgpa >= 3.0) {
            message += `<p>Passed</p>`;
        } else {
            message += `<p>Failed</p>`;
        }
        
        results.innerHTML = message;
    }
});
