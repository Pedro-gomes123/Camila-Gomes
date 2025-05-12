
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


function baixarEPular(caminho) {
    const link = document.createElement('a');
    link.href = caminho;
    link.download = caminho.split('/').pop(); // nome do arquivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redirecionar após 1 segundo
    setTimeout(() => {
        window.open(caminho, '_blank');
    }, 1000);
}




