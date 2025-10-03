// O código é dividido em dois blocos para garantir que o módulo Firebase seja carregado e executado primeiro.

// --- BLOCO 1: LÓGICA DO FIREBASE (MÓDULO) ---
// Importa as funções necessárias do Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// SUA CONFIGURAÇÃO DO FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCBXZgcVZCloA0AdyoPgrsAOpAyb5dx2z0",
    authDomain: "adote-um-amigo-455a2.firebaseapp.com",
    projectId: "adote-um-amigo-455a2",
    storageBucket: "adote-um-amigo-455a2.appspot.com",
    messagingSenderId: "1099318261847",
    appId: "1:1099318261847:web:3db253a614006e1637cb12"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// ELEMENTOS DO DOM PARA AUTENTICAÇÃO
const formLogin = document.getElementById('formulario-login');
const formCadastro = document.getElementById('formulario-cadastro');
const feedbackLogin = document.getElementById('feedback-login');
const feedbackCadastro = document.getElementById('feedback-cadastro');
const linkParaCadastro = document.getElementById('link-para-cadastro');
const linkParaLogin = document.getElementById('link-para-login');
const botaoLogout = document.querySelector('.botao-logout');
const infoUsuario = document.querySelector('.email-usuario');
const body = document.body;

// FUNÇÃO PARA TRATAR ERROS DO FIREBASE
const getFirebaseErrorMessage = (error) => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return 'Este e-mail já está cadastrado.';
        case 'auth/invalid-email':
            return 'O formato do e-mail é inválido.';
        case 'auth/weak-password':
            return 'A senha precisa ter no mínimo 6 caracteres.';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'E-mail ou senha incorretos.';
        default:
            return 'Ocorreu um erro. Tente novamente.';
    }
};

// LÓGICA DE CADASTRO
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;
    const confirmaSenha = document.getElementById('cadastro-senha-confirma').value;
    const checkboxLgpd = document.getElementById('lgpd-cadastro');
    const submitButton = formCadastro.querySelector('button[type="submit"]');

    feedbackCadastro.classList.remove('sucesso', 'erro', 'feedback-visivel');

    if (!checkboxLgpd.checked) {
        feedbackCadastro.textContent = 'Você precisa aceitar a Política de Privacidade.';
        feedbackCadastro.classList.add('erro', 'feedback-visivel');
        return;
    }

    if (senha !== confirmaSenha) {
        feedbackCadastro.textContent = 'As senhas não coincidem.';
        feedbackCadastro.classList.add('erro', 'feedback-visivel');
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Criando...';

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            formCadastro.reset();
        })
        .catch((error) => {
            feedbackCadastro.textContent = getFirebaseErrorMessage(error);
            feedbackCadastro.classList.add('erro', 'feedback-visivel');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Criar Conta';
        });
});

// LÓGICA DE LOGIN
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;
    const submitButton = formLogin.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = 'Entrando...';
    feedbackLogin.classList.remove('sucesso', 'erro', 'feedback-visivel');

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            formLogin.reset();
        })
        .catch((error) => {
            feedbackLogin.textContent = getFirebaseErrorMessage(error);
            feedbackLogin.classList.add('erro', 'feedback-visivel');
        })
         .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Entrar';
        });
});

// LÓGICA DE LOGOUT
botaoLogout.addEventListener('click', () => {
    signOut(auth).catch((error) => {
        console.error("Erro ao fazer logout:", error);
    });
});

// OBSERVADOR DE ESTADO DE AUTENTICAÇÃO
onAuthStateChanged(auth, (user) => {
    if (user) {
        body.classList.remove('logged-out');
        body.classList.add('logged-in');
        infoUsuario.textContent = user.email;

        if (document.getElementById('conteudo-auth').style.display === 'block') {
            window.dispatchEvent(new CustomEvent('mostrarPrincipal'));
        }
    } else {
        body.classList.remove('logged-in');
        body.classList.add('logged-out');
        infoUsuario.textContent = '';
    }
});

// Alternar entre formulários de login e cadastro
linkParaCadastro.addEventListener('click', () => {
    formLogin.style.display = 'none';
    formCadastro.style.display = 'grid';
});
linkParaLogin.addEventListener('click', () => {
    formCadastro.style.display = 'none';
    formLogin.style.display = 'grid';
});


// --- BLOCO 2: LÓGICA DO SITE (SCRIPT NORMAL) ---
document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DADOS DOS ANIMAIS ---
    const dadosAnimais = {
        rex: {
            nome: "Rex",
            tags: ["Macho", "2 anos", "Porte Médio", "Energia Alta"],
            historia: "Fui resgatado de uma situação de negligência, mas nunca perdi minha alegria de viver! Sou um cão extremamente leal, brincalhão e adoro correr atrás de bolas. Meu passatempo favorito é receber carinho na barriga e dar longos passeios no parque. Procuro uma família ativa que possa me dar todo o amor e atenção que mereço.",
            detalhes: ["Vacinado", "Vermifugado", "Castrado", "Sociável com outros cães", "Sociável com crianças"],
            imagens: [
                'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1974&auto=format&fit=crop'
            ]
        },
        mimi: {
            nome: "Mimi",
            tags: ["Fêmea", "1 ano", "Porte Pequeno", "Calma"],
            historia: "Sou uma gatinha muito doce e um pouco tímida no início, mas depois de ganhar confiança, adoro um bom colo e um carinho atrás das orelhas. Gosto de observar o movimento pela janela e de longas sonecas ao sol. Sou a companhia perfeita para quem procura uma amiga tranquila e amorosa.",
            detalhes: ["Vacinada", "Vermifugada", "Castrada", "Prefere ser filha única"],
            imagens: [
                'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=2080&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1513360371669-443f07a48f8d?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop'
            ]
        },
        thor: {
            nome: "Thor",
            tags: ["Macho", "3 anos", "Porte Grande", "Brincalhão"],
            historia: "Sou um grandalhão com um coração de ouro. Adoro pessoas, festas e brincadeiras. Sou um pouco desajeitado por causa do meu tamanho, mas sou todo amor. Me dou bem com todo mundo e só quero uma família que tenha espaço e energia para acompanhar meu ritmo. Prometo ser seu melhor amigo e protetor.",
            detalhes: ["Vacinado", "Vermifugado", "Castrado", "Sociável com crianças"],
            imagens: [
                'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1976&auto=format&fit=crop'
            ]
        },
        bolinha: {
            nome: "Bolinha",
            tags: ["Macho", "5 anos", "Porte Pequeno", "Preguiçoso"],
            historia: "A vida para mim é uma longa soneca interrompida por petiscos. Sou um especialista em encontrar o lugar mais confortável da casa e ronco como um trator. Se você procura um companheiro para maratonas de séries, sou o cão ideal. Minha maior aventura é ir da cama para a tigela de comida.",
            detalhes: ["Vacinado", "Vermifugado", "Castrado", "Sociável com todos"],
            imagens: [
                'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1575425186775-b8de9a427e67?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1594167383428-97103855a152?q=80&w=1974&auto=format&fit=crop'
            ]
        },
        nina: {
            nome: "Nina",
            tags: ["Fêmea", "2 anos", "Pelo Longo", "Elegante"],
            historia: "Sou uma gata de linhagem nobre, ou pelo menos gosto de pensar que sim. Exijo ser escovada diariamente e aprecio os prazeres mais finos da vida, como salmão e almofadas de veludo. Não me entrego para qualquer um, mas se conquistar minha confiança, terá uma rainha a governar seu lar com elegância e afeto.",
            detalhes: ["Vacinada", "Vermifugada", "Castrada"],
            imagens: [
                'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516283086498-75c13b52b2b3?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1974&auto=format&fit=crop'
            ]
        },
         biscoito: {
            nome: "Biscoito",
            tags: ["Macho", "8 meses", "Porte Médio", "Dócil"],
            historia: "Fui encontrado na rua, um pouco assustado, mas cheio de vontade de dar e receber amor. Sou um filhote muito inteligente e aprendo truques muito rápido. Adoro carinho e sou o campeão mundial de abanar o rabo. Só preciso de uma chance para mostrar o companheiro incrível que posso ser.",
            detalhes: ["Vacinado", "Vermifugado", "Sociável com outros cães"],
            imagens: [
                'https://images.unsplash.com/photo-1588269842424-917132db95c6?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1559214352-a43b1a836934?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1588269842424-917132db95c6?q=80&w=1974&auto=format&fit=crop'
            ]
        },
        frajola: {
            nome: "Frajola",
            tags: ["Fêmea", "3 anos", "Porte Pequeno", "Independente"],
            historia: "Tenho uma pelagem elegante preta e branca e um ar de mistério. Gosto do meu espaço, mas não dispenso uma boa sessão de carinho no sofá no final do dia. Sou uma ótima ouvinte e a companhia perfeita para quem aprecia a independência e o charme felino. Gosto de caçar brinquedos e observar pássaros da janela.",
            detalhes: ["Vacinada", "Vermifugada", "Castrada", "Tímida com estranhos"],
            imagens: [
                'https://images.unsplash.com/photo-1570458467431-b53833f47940?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516332114985-7871b6582452?q=80&w=1974&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1595433723348-844c3569942a?q=80&w=1974&auto=format&fit=crop'
            ]
        }
    };

    // --- ELEMENTOS DO DOM ---
    const botaoMenu = document.getElementById('botao-menu-mobile');
    const menu = document.getElementById('menu-navegacao');
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    const paginasConteudo = {
        detalhe: document.getElementById('conteudo-detalhe'),
        'saber-mais': document.getElementById('conteudo-saber-mais'),
        ajudar: document.getElementById('conteudo-ajudar'),
        'finais-felizes': document.getElementById('conteudo-finais-felizes'),
        guia: document.getElementById('conteudo-guia'),
        auth: document.getElementById('conteudo-auth'),
        privacidade: document.getElementById('conteudo-privacidade')
    };
    
    const botoesAdotar = document.querySelectorAll('.botao-adotar[data-animal]');
    const linksNavegacao = document.querySelectorAll('.menu-link, .botao-principal, .botao-secundario, .botao-voltar-pagina, .botao-login');
    const linksPrivacidade = document.querySelectorAll('.link-privacidade');
    
    // --- FUNÇÕES DE NAVEGAÇÃO ---
    const mostrarPagina = (paginaId) => {
        conteudoPrincipal.style.display = 'none';
        Object.values(paginasConteudo).forEach(pagina => {
            if (pagina) pagina.style.display = 'none';
        });

        if (paginasConteudo[paginaId]) {
            paginasConteudo[paginaId].style.display = 'block';
        }
        
        window.scrollTo(0, 0);
    };

    const mostrarPrincipal = (callback) => {
        conteudoPrincipal.style.display = 'block';
        Object.values(paginasConteudo).forEach(pagina => {
            if (pagina) pagina.style.display = 'none';
        });

        if (callback && typeof callback === 'function') {
            setTimeout(callback, 50);
        } else {
            window.scrollTo(0, 0);
        }
    };
     // Evento customizado para voltar para a página principal após login
    window.addEventListener('mostrarPrincipal', () => mostrarPrincipal());

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
        });
        atualizarBotoes();
    }

    // --- EVENT LISTENERS DE NAVEGAÇÃO ---
    botoesAdotar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault();
            const animalId = botao.dataset.animal;
            if (animalId) {
                popularDetalhes(animalId);
                mostrarPagina('detalhe');
            }
        });
    });

    linksNavegacao.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault();
            const secaoId = link.getAttribute('data-secao');
            const paginaId = link.getAttribute('data-pagina');

            if (secaoId) {
                mostrarPrincipal(() => {
                    const secao = document.getElementById(secaoId);
                    if (secao) {
                        secao.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            } else if (paginaId) {
                if (paginaId === 'voltar') {
                    mostrarPrincipal();
                } else {
                    mostrarPagina(paginaId);
                }
            }
             if (menu.classList.contains('menu-mobile-ativo')) {
                menu.classList.remove('menu-mobile-ativo');
            }
        });
    });
    
    // CORREÇÃO: Listener específico para os links de privacidade
    linksPrivacidade.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault();
            evento.stopPropagation();
            mostrarPagina('privacidade');
        });
    });


    // --- FUNÇÃO DE ENVIO DE FORMULÁRIO COM AJAX (Formspree) ---
    const handleFormSubmit = (formElement, feedbackElement) => {
        formElement.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const checkbox = formElement.querySelector('input[type="checkbox"]');
            if (checkbox && !checkbox.checked) {
                feedbackElement.textContent = "Você precisa aceitar a Política de Privacidade.";
                feedbackElement.classList.add('erro', 'feedback-visivel');
                setTimeout(() => feedbackElement.classList.remove('feedback-visivel'), 5000);
                return;
            }

            const submitButton = formElement.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            feedbackElement.classList.remove('sucesso', 'erro', 'feedback-visivel');

            const formData = new FormData(formElement);
            try {
                const response = await fetch(formElement.action, {
                    method: formElement.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    feedbackElement.textContent = "Mensagem enviada com sucesso! Agradecemos o contato.";
                    feedbackElement.classList.add('sucesso', 'feedback-visivel');
                    formElement.reset();
                } else {
                    throw new Error('Houve um problema com a resposta do servidor.');
                }
            } catch (error) {
                feedbackElement.textContent = "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.";
                feedbackElement.classList.add('erro', 'feedback-visivel');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                setTimeout(() => {
                   feedbackElement.classList.remove('feedback-visivel');
                }, 5000);
            }
        });
    };

    // Anexando a nova função aos formulários de contato e voluntário
    const formContato = document.getElementById('formulario-contato');
    const feedbackContato = document.getElementById('feedback-contato');
    if (formContato) handleFormSubmit(formContato, feedbackContato);
    
    const formVoluntario = document.getElementById('formulario-voluntario');
    const feedbackVoluntario = document.getElementById('feedback-voluntario');
    if(formVoluntario) handleFormSubmit(formVoluntario, feedbackVoluntario);


    // --- FUNCIONALIDADE DO BOTÃO COPIAR PIX ---
    const btnCopiarPix = document.getElementById('btn-copiar-pix');
    if (btnCopiarPix) {
        btnCopiarPix.addEventListener('click', () => {
            const chavePix = document.getElementById('chave-pix').innerText;
            navigator.clipboard.writeText(chavePix).then(() => {
                const originalText = btnCopiarPix.textContent;
                btnCopiarPix.textContent = 'Copiado!';
                setTimeout(() => {
                    btnCopiarPix.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar a chave PIX:', err);
            });
        });
    }

    // --- LÓGICA PARA MOSTRAR/ESCONDER SENHA ---
    const botoesMostrarSenha = document.querySelectorAll('.btn-mostrar-senha');
    botoesMostrarSenha.forEach(btn => {
        btn.addEventListener('click', () => {
            const inputSenha = btn.previousElementSibling;
            const eyeIcon = btn.querySelector('.icon-eye');
            const eyeSlashIcon = btn.querySelector('.icon-eye-slash');

            if (inputSenha.type === 'password') {
                inputSenha.type = 'text';
                eyeIcon.style.display = 'none';
                eyeSlashIcon.style.display = 'block';
                btn.setAttribute('aria-label', 'Esconder senha');
            } else {
                inputSenha.type = 'password';
                eyeIcon.style.display = 'block';
                eyeSlashIcon.style.display = 'none';
                btn.setAttribute('aria-label', 'Mostrar senha');
            }
        });
    });

    // --- LÓGICA DO BANNER DE COOKIES ---
    const cookieBanner = document.getElementById('cookie-banner');
    const aceitarCookiesBtn = document.getElementById('aceitar-cookies');

    if (!localStorage.getItem('lgpd_consent')) {
        setTimeout(() => {
            cookieBanner.classList.add('visible');
        }, 1000);
    }

    aceitarCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('lgpd_consent', 'true');
        cookieBanner.classList.remove('visible');
    });


    // --- FUNÇÕES DE PREENCHIMENTO DINÂMICO ---
    const popularDetalhes = (animalId) => {
        const animal = dadosAnimais[animalId];
        if (!animal) return;

        document.getElementById('detalhe-nome').textContent = animal.nome;
        document.getElementById('detalhe-historia').textContent = animal.historia;
        document.getElementById('detalhe-imagem-principal').src = animal.imagens[0];
        document.getElementById('detalhe-imagem-principal').alt = `Imagem de ${animal.nome}`;
        const botaoAdotarDetalhe = document.getElementById('detalhe-botao-adotar');
        botaoAdotarDetalhe.textContent = `Quero Adotar o ${animal.nome}!`;
        
        const novoBotao = botaoAdotarDetalhe.cloneNode(true);
        botaoAdotarDetalhe.parentNode.replaceChild(novoBotao, botaoAdotarDetalhe);
        
        novoBotao.addEventListener('click', (e) => {
            e.preventDefault();
             mostrarPrincipal(() => {
                document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
                document.getElementById('contato-assunto').value = `Interesse em adotar: ${animal.nome}`;
             });
        });
        
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
            miniaturasContainer.innerHTML += `<img src="${imgSrc}" alt="Miniatura de ${animal.nome} ${index + 1}" class="${activeClass}" loading="lazy" onclick="mudarImagem(this)">`;
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

