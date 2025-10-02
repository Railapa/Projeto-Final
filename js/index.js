document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DADOS DOS ANIMAIS ---
    const dadosAnimais = {
        rex: {
            nome: "Rex",
            tags: ["Macho", "2 anos", "Porte Médio", "Energia Alta"],
            historia: "Fui resgatado de uma situação de negligência, mas nunca perdi a minha alegria de viver! Sou um cão extremamente leal, brincalhão e adoro correr atrás de bolas. O meu passatempo favorito é receber festas na barriga e dar longos passeios no parque. Procuro uma família ativa que me possa dar todo o amor e atenção que mereço.",
            detalhes: ["Vacinado", "Desparasitado", "Castrado", "Dá-se bem com outros cães", "Dá-se bem com crianças"],
            imagens: [
                'https://images.pexels.com/photos/16622616/pexels-photo-16622616.jpeg',
                'https://images.pexels.com/photos/16622600/pexels-photo-16622600.jpeg',
                'https://images.pexels.com/photos/16622672/pexels-photo-16622672.jpeg'
            ]
        },
        mimi: {
            nome: "Mimi",
            tags: ["Fêmea", "1 ano", "Porte Pequeno", "Calma"],
            historia: "Sou uma gatinha muito doce e um pouco tímida no início, mas depois de ganhar confiança, adoro um bom colo e um carinho atrás das orelhas. Gosto de observar o movimento pela janela e de longas sestas ao sol. Sou a companhia perfeita para quem procura uma amiga tranquila e amorosa.",
            detalhes: ["Vacinada", "Desparasitada", "Castrada", "Prefere ser filha única"],
            imagens: [
                'https://images.pexels.com/photos/18160469/pexels-photo-18160469.jpeg',
                'https://images.pexels.com/photos/33202406/pexels-photo-33202406.jpeg',
                'https://images.pexels.com/photos/10485356/pexels-photo-10485356.jpeg'
            ]
        },
        thor: {
            nome: "Thor",
            tags: ["Macho", "3 anos", "Porte Grande", "Brincalhão"],
            historia: "Sou um grandalhão com um coração de ouro. Adoro pessoas, festas e brincadeiras. Sou um pouco trapalhão por causa do meu tamanho, mas sou todo amor. Dou-me bem com toda a gente e só quero uma família que tenha espaço e energia para acompanhar o meu ritmo. Prometo ser o seu melhor amigo e protetor.",
            detalhes: ["Vacinado", "Desparasitado", "Castrado", "Dá-se bem com crianças"],
            imagens: [
                'https://images.pexels.com/photos/8850585/pexels-photo-8850585.jpeg',
                'https://images.pexels.com/photos/16219483/pexels-photo-16219483.jpeg',
                'https://images.pexels.com/photos/9470881/pexels-photo-9470881.jpeg'
            ]
        },
        bolinha: {
            nome: "Bolinha",
            tags: ["Macho", "5 anos", "Porte Pequeno", "Preguiçoso"],
            historia: "A vida para mim é uma longa sesta interrompida por petiscos. Sou um perito em encontrar o lugar mais confortável da casa e ronco como um trator. Se procura um companheiro para maratonas de séries, sou o seu cão ideal. A minha maior aventura é ir da cama para a tigela de comida.",
            detalhes: ["Vacinado", "Desparasitado", "Castrado", "Dá-se bem com todos"],
            imagens: [
                'https://images.pexels.com/photos/1289557/pexels-photo-1289557.jpeg',
                'https://images.pexels.com/photos/33870418/pexels-photo-33870418.jpeg',
                'https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg'
            ]
        },
        nina: {
            nome: "Nina",
            tags: ["Fêmea", "2 anos", "Pelo Longo", "Elegante"],
            historia: "Sou uma gata de linhagem nobre, ou pelo menos gosto de pensar que sim. Exijo ser escovada diariamente e aprecio os prazeres mais finos da vida, como salmão e almofadas de veludo. Não me dou a qualquer um, mas se conquistar a minha confiança, terá uma rainha a governar o seu lar com elegância e afeto.",
            detalhes: ["Vacinada", "Desparasitada", "Castrada"],
            imagens: [
                'https://images.pexels.com/photos/8931752/pexels-photo-8931752.jpeg',
                'https://images.pexels.com/photos/8931757/pexels-photo-8931757.jpeg',
                'https://images.pexels.com/photos/8931758/pexels-photo-8931758.jpeg'
            ]
        },
        
        biscoito: {
            nome: "Biscoito",
            tags: ["Macho", "8 meses", "Porte Médio", "Dócil"],
            historia: "Fui encontrado na rua, um pouco assustado, mas cheio de vontade de dar e receber amor. Sou um filhote muito inteligente e aprendo os truques muito depressa. Adoro festas e sou o campeão mundial de abanar a cauda. Só preciso de uma oportunidade para mostrar o companheiro incrível que posso ser.",
            detalhes: ["Vacinado", "Desparasitado", "Dá-se bem com outros cães"],
            imagens: [
                'https://images.pexels.com/photos/59965/dog-young-dog-puppy-59965.jpeg',
                'https://images.pexels.com/photos/59988/dog-puppy-animal-portrait-small-dog-59988.jpeg',
                'https://images.pexels.com/photos/30398763/pexels-photo-30398763.jpeg'
            ]
        },

        frajola: {
            nome: "Frajola",
            tags: ["Fêmea", "3 anos", "Porte Pequeno", "Independente"],
            historia: "Tenho um pelo elegante preto e branco e um ar de mistério. Gosto do meu espaço, mas não dispenso uma boa sessão de festas no sofá no final do dia. Sou uma ótima ouvinte e a companhia perfeita para quem aprecia a independência e o charme felino. Gosto de caçar brinquedos e observar pássaros da janela.",
            detalhes: ["Vacinada", "Desparasitada", "Castrada", "Tímida com estranhos"],
            imagens: [
                'https://images.pexels.com/photos/7275538/pexels-photo-7275538.jpeg',
                'https://images.pexels.com/photos/7347413/pexels-photo-7347413.jpeg',
                'https://images.pexels.com/photos/18156670/pexels-photo-18156670.jpeg'
            ]
        }
    };

    // --- ELEMENTOS DO DOM ---
    const botaoMenu = document.getElementById('botao-menu-mobile');
    const menu = document.getElementById('menu-navegacao');
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    const conteudoDetalhe = document.getElementById('conteudo-detalhe');
    const conteudoSaberMais = document.getElementById('conteudo-saber-mais');
    const botoesAdotar = document.querySelectorAll('.botao-adotar[data-animal]');
    const botaoSaberMais = document.getElementById('botao-saber-mais');
    const linksNavegacao = document.querySelectorAll('.menu-link[data-secao]');
    const formularioContato = document.getElementById('formulario-contato');
    const feedbackMensagem = document.getElementById('feedback-mensagem');
    

    // --- FUNÇÕES DE NAVEGAÇÃO ---
    const mostrarDetalhe = (animalId) => {
        popularDetalhes(animalId);
        conteudoPrincipal.style.display = 'none';
        conteudoSaberMais.style.display = 'none';
        conteudoDetalhe.style.display = 'block';
        window.scrollTo(0, 0);

        document.getElementById('botao-voltar').addEventListener('click', (evento) => {
            evento.preventDefault();
            mostrarPrincipal();
        }, { once: true });

        document.getElementById('detalhe-botao-adotar').addEventListener('click', (evento) => {
            evento.preventDefault();
            const animal = dadosAnimais[animalId];
            if (animal) {
                 mostrarPrincipal(() => {
                    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
                    document.getElementById('assunto').value = `Interesse em adotar: ${animal.nome}`;
                });
            }
        }, { once: true });
    };

    const mostrarSaberMais = () => {
        conteudoPrincipal.style.display = 'none';
        conteudoDetalhe.style.display = 'none';
        conteudoSaberMais.style.display = 'block';
        window.scrollTo(0, 0);

        document.getElementById('botao-voltar-sobre').addEventListener('click', (evento) => {
            evento.preventDefault();
            mostrarPrincipal();
        }, { once: true });
    }

    const mostrarPrincipal = (callback) => {
        conteudoPrincipal.style.display = 'block';
        conteudoDetalhe.style.display = 'none';
        conteudoSaberMais.style.display = 'none';
        if (callback) {
            setTimeout(callback, 50);
        } else {
            window.scrollTo(0, 0);
        }
    };

    // Script do Menu Mobile
    if (botaoMenu) {
        botaoMenu.addEventListener('click', () => {
            menu.classList.toggle('menu-mobile-ativo');
        });
    }

    // --- LÓGICA DO CARROSSEL ---
    const trilha = document.querySelector('.carrossel-trilha');
    if (trilha) {
        const slides = Array.from(trilha.children);
        const botaoProximo = document.querySelector('.carrossel-botao--direita');
        const botaoAnterior = document.querySelector('.carrossel-botao--esquerda');
        let indiceAtual = 0;
        
        const getNumSlidesVisiveis = () => {
            const viewport = document.querySelector('.carrossel-viewport');
            if (!viewport || slides.length === 0) return 0;
            const slideWidth = slides[0].offsetWidth;
            return slideWidth > 0 ? Math.round(viewport.offsetWidth / slideWidth) : 0;
        }

        const moverParaSlide = (novoIndice) => {
            const numSlidesVisiveis = getNumSlidesVisiveis();
            const maxIndice = slides.length - numSlidesVisiveis;
            novoIndice = Math.max(0, Math.min(novoIndice, maxIndice));

            const slideLargura = slides[0].getBoundingClientRect().width;
            trilha.style.transform = `translateX(-${slideLargura * novoIndice}px)`;
            indiceAtual = novoIndice;
            atualizarBotoes();
        }

        const atualizarBotoes = () => {
            const numSlidesVisiveis = getNumSlidesVisiveis();
            botaoAnterior.classList.toggle('is-hidden', indiceAtual === 0);
            botaoProximo.classList.toggle('is-hidden', indiceAtual >= slides.length - numSlidesVisiveis);
        }
        
        botaoProximo.addEventListener('click', () => moverParaSlide(indiceAtual + 1));
        botaoAnterior.addEventListener('click', () => moverParaSlide(indiceAtual - 1));
        
        window.addEventListener('resize', () => {
            moverParaSlide(0);
            atualizarBotoes();
        });
        atualizarBotoes();
    }

    // --- EVENT LISTENERS DE NAVEGAÇÃO ---
    botoesAdotar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault();
            const animalId = botao.dataset.animal;
            if (animalId) mostrarDetalhe(animalId);
        });
    });

    if (botaoSaberMais) {
        botaoSaberMais.addEventListener('click', (evento) => {
            evento.preventDefault();
            mostrarSaberMais();
        });
    }

    linksNavegacao.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault();
            const secaoId = link.getAttribute('data-secao');
            mostrarPrincipal(() => {
                const secao = document.getElementById(secaoId);
                if (secao) {
                    secao.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });

    // --- FUNCIONALIDADE DO FORMULÁRIO DE CONTATO ---
    if (formularioContato) {
        formularioContato.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            feedbackMensagem.classList.remove('sucesso', 'erro');

            if (nome === '' || email === '' || mensagem === '') {
                feedbackMensagem.textContent = "Por favor, preencha todos os campos obrigatórios.";
                feedbackMensagem.classList.add('erro', 'feedback-visivel');
            } else {
                feedbackMensagem.textContent = "Mensagem enviada com sucesso! Entraremos em contacto em breve.";
                feedbackMensagem.classList.add('sucesso', 'feedback-visivel');
                formularioContato.reset();
            }

            setTimeout(() => {
                feedbackMensagem.classList.remove('feedback-visivel');
            }, 5000);
        });
    }

    // --- FUNÇÕES DE PREENCHIMENTO DINÂMICO ---
    const popularDetalhes = (animalId) => {
        const animal = dadosAnimais[animalId];
        if (!animal) return;

        document.getElementById('detalhe-nome').textContent = animal.nome;
        document.getElementById('detalhe-historia').textContent = animal.historia;
        document.getElementById('detalhe-imagem-principal').src = animal.imagens[0];
        document.getElementById('detalhe-imagem-principal').alt = `Imagem de ${animal.nome}`;
        document.getElementById('detalhe-botao-adotar').textContent = `Quero Adotar o ${animal.nome}!`;
        
        const tagsContainer = document.getElementById('detalhe-tags');
        tagsContainer.innerHTML = '';
        animal.tags.forEach(tag => {
            tagsContainer.innerHTML += `<span class="tag-animal">${tag}</span>`;
        });

        const listaContainer = document.getElementById('detalhe-lista');
        listaContainer.innerHTML = '';
        animal.detalhes.forEach(detalhe => {
            listaContainer.innerHTML += `<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>${detalhe}</li>`;
        });

        const miniaturasContainer = document.getElementById('detalhe-miniaturas');
        miniaturasContainer.innerHTML = '';
        animal.imagens.forEach((imgSrc, index) => {
            const activeClass = index === 0 ? 'miniatura-ativa' : '';
            miniaturasContainer.innerHTML += `<img src="${imgSrc}" alt="Miniatura de ${animal.nome} ${index + 1}" class="${activeClass}" onclick="mudarImagem(this)">`;
        });
    };
});

// --- SCRIPT DA GALERIA DE IMAGENS ---
function mudarImagem(miniaturaClicada) {
    const novaImagemSrc = miniaturaClicada.src;
    const imagemPrincipal = document.getElementById('detalhe-imagem-principal');
    if (imagemPrincipal) {
        imagemPrincipal.src = novaImagemSrc;
    }
    
    const miniaturasContainer = document.getElementById('detalhe-miniaturas');
    if (miniaturasContainer) {
        miniaturasContainer.querySelectorAll('img').forEach(miniatura => {
            miniatura.classList.remove('miniatura-ativa');
        });
        miniaturaClicada.classList.add('miniatura-ativa');
    }
}