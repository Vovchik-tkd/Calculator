let buttonClean = document.querySelector('.btnClean'),
    numEquals = document.querySelector('.btnEquals'),
    text = document.querySelector('.text'),
    i = 0;

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        text.textContent += this.value;
    })
}) 

buttonClean.onclick = function() {
    text.textContent = text.textContent.slice(0, -1);
    i++;
    if (i == 2) {
        text.textContent = '';
        i = 0;
    }
} 
numEquals.onclick = function() {
    try {
        text.textContent = eval(text.textContent);
    } catch {
        text.textContent = 'Error';
    }
}