document.addEventListener('DOMContentLoaded', function() {
    // Botão de clima
    const weatherBtn = document.getElementById('showWeather');
    const weatherInfo = document.getElementById('weatherInfo');
    weatherBtn.addEventListener('click', function() {
        weatherInfo.classList.toggle('d-none');
    });
    
    // Informações de destinos
    const destBtns = document.querySelectorAll('.destino-btn');
    const destinoInfo = document.querySelector('#destinoInfo .alert');
    const cidadeNome = document.getElementById('cidadeNome');
    const cidadeDesc = document.getElementById('cidadeDesc');
    
    const destinosDetalhes = {
        'Marrakech': 'Conhecida como a "Cidade Vermelha", Marrakech é uma mistura fascinante de antigo e moderno. Explore os souks da Medina, visite o Jardim Majorelle, admire o Palácio Bahia e experimente a agitação da Praça Jemaa el-Fnaa à noite, com seus músicos, contadores de histórias e vendedores de comida.',
        'Fez': 'A cidade de Fez abriga a Medina mais antiga e bem preservada do mundo árabe. Seu labirinto de 9.000 ruas estreitas é Patrimônio Mundial da UNESCO. Visite a Universidade Al-Qarawiyyin (a mais antiga do mundo), os curtumes tradicionais e as madrassas históricas decoradas com mosaicos e caligrafia árabe.',
        'Chefchaouen': 'Localizada nas montanhas do Rif, Chefchaouen encanta com suas casas pintadas em diferentes tons de azul. Este cenário único oferece ótimas oportunidades para fotos. A cidade tem uma atmosfera relaxada, artesanato local único e vistas panorâmicas das montanhas circundantes.'
    };
    
    destBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cidade = this.getAttribute('data-cidade');
            cidadeNome.textContent = cidade;
            cidadeDesc.textContent = destinosDetalhes[cidade];
            destinoInfo.classList.remove('d-none');
            // Scroll suave até as informações
            destinoInfo.scrollIntoView({behavior: 'smooth'});
        });
    });
    
    // Galeria com modal
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    
    galleryImgs.forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src;
            imageModal.show();
        });
    });
    
    // Formulário de contato
    const contatoForm = document.getElementById('contatoForm');
    const formSucesso = document.getElementById('formSucesso');
    
    contatoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você adicionaria o código para enviar os dados do formulário
        // Para este exemplo, apenas mostraremos a mensagem de sucesso
        formSucesso.classList.remove('d-none');
        contatoForm.reset();
        // Ocultar a mensagem após 5 segundos
        setTimeout(() => {
            formSucesso.classList.add('d-none');
        }, 5000);
    });
    
    // Scroll suave para todos os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
