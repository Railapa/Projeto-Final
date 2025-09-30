document.addEventListener('DOMContentLoaded', () => {
            // --- BASE DE DADOS DOS ANIMAIS ---
            const dadosAnimais = {
                rex: {
                    nome: "Rex",
                    tags: ["Macho", "2 anos", "Porte Médio", "Energia Alta"],
                    historia: "Fui resgatado de uma situação de negligência, mas nunca perdi a minha alegria de viver! Sou um cão extremamente leal, brincalhão e adoro correr atrás de bolas. O meu passatempo favorito é receber festas na barriga e dar longos passeios no parque. Procuro uma família ativa que me possa dar todo o amor e atenção que mereço.",
                    detalhes: ["Vacinado", "Desparasitado", "Castrado", "Dá-se bem com outros cães", "Dá-se bem com crianças"],
                    imagens: [
                        'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1974&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2070&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1974&auto=format&fit=crop'
                    ]
                },
                mimi: {
                    nome: "Mimi",
                    tags: ["Fêmea", "1 ano", "Porte Pequeno", "Calma"],
                    historia: "Sou uma gatinha muito doce e um pouco tímida no início, mas depois de ganhar confiança, adoro um bom colo e um carinho atrás das orelhas. Gosto de observar o movimento pela janela e de longas sestas ao sol. Sou a companhia perfeita para quem procura uma amiga tranquila e amorosa.",
                    detalhes: ["Vacinada", "Desparasitada", "Castrada", "Prefere ser filha única"],
                    imagens: [
                        'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=2080&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1513360371669-443f07a48f8d?q=80&w=2070&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop'
                    ]
                },
                thor: {
                    nome: "Thor",
                    tags: ["Macho", "3 anos", "Porte Grande", "Brincalhão"],
                    historia: "Sou um grandalhão com um coração de ouro. Adoro pessoas, festas e brincadeiras. Sou um pouco trapalhão por causa do meu tamanho, mas sou todo amor. Dou-me bem com toda a gente e só quero uma família que tenha espaço e energia para acompanhar o meu ritmo. Prometo ser o seu melhor amigo e protetor.",
                    detalhes: ["Vacinado", "Desparasitado", "Castrado", "Dá-se bem com crianças"],
                    imagens: [
                        'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1976&auto=format&fit=crop'
                    ]
                },
                bolinha: {
                    nome: "Bolinha",
                    tags: ["Macho", "5 anos", "Porte Pequeno", "Preguiçoso"],
                    historia: "A vida para mim é uma longa sesta interrompida por petiscos. Sou um perito em encontrar o lugar mais confortável da casa e ronco como um trator. Se procura um companheiro para maratonas de séries, sou o seu cão ideal. A minha maior aventura é ir da cama para a tigela de comida.",
                    detalhes: ["Vacinado", "Desparasitado", "Castrado", "Dá-se bem com todos"],
                    imagens: [
                        'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1974&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?q=80&w=1974&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1594167383428-97103855a152?q=80&w=1974&auto=format&fit=crop'
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
                }
            };

            // Script do Menu Mobile
            const botaoMenu = document.getElementById('botao-menu-mobile');
            const menu = document.getElementById('menu-navegacao');
            botaoMenu.addEventListener('click', () => {
                menu.classList.toggle('menu-mobile-ativo');
            });

            // --- SCRIPT DO CARROSSEL ---
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

            // --- LÓGICA DE NAVEGAÇÃO E DADOS DINÂMICOS ---
            const conteudoPrincipal = document.getElementById('conteudo-principal');
            const conteudoDetalhe = document.getElementById('conteudo-detalhe');
            const botoesAdotar = document.querySelectorAll('.botao-adotar[data-animal]');
            const botaoVoltar = document.getElementById('botao-voltar');

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
                    listaContainer.innerHTML += `<li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>${detalhe}</li>`;
                });

                const miniaturasContainer = document.getElementById('detalhe-miniaturas');
                miniaturasContainer.innerHTML = '';
                animal.imagens.forEach((imgSrc, index) => {
                    const activeClass = index === 0 ? 'miniatura-ativa' : '';
                    miniaturasContainer.innerHTML += `<img src="${imgSrc}" alt="Miniatura de ${animal.nome} ${index + 1}" class="${activeClass}" onclick="mudarImagem(this)">`;
                });
            };

            const mostrarDetalhe = (animalId) => {
                popularDetalhes(animalId);
                conteudoPrincipal.style.display = 'none';
                conteudoDetalhe.style.display = 'block';
                window.scrollTo(0, 0);
            };

            const mostrarPrincipal = () => {
                conteudoPrincipal.style.display = 'block';
                conteudoDetalhe.style.display = 'none';
                window.scrollTo(0, 0);
            };

            botoesAdotar.forEach(botao => {
                botao.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    const animalId = botao.dataset.animal;
                    if (animalId) {
                        mostrarDetalhe(animalId);
                    }
                });
            });

            if (botaoVoltar) {
                botaoVoltar.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    mostrarPrincipal();
                });
            }
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