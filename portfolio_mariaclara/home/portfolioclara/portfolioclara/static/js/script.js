/* 
  DECLARAÇÃO DE USO DE IA (REQUISITO DA DISCIPLINA SENAC)
  Ferramenta utilizada: IA Generativa (Gemini)
  Finalidade: Auxílio na estruturação de código semântico e lógica modular de validação.
*/

document.addEventListener('DOMContentLoaded', () => {

  const btnTema = document.getElementById('btn-tema');
  const iconeTema = btnTema.querySelector('.icone-tema');

  function atualizarIconeTema(modoEscuro) {
    iconeTema.textContent = modoEscuro ? '☀️' : '🌙';
  }

  function alternarTema() {
    const modoEscuro = document.body.classList.toggle('dark-mode');
    atualizarIconeTema(modoEscuro);
    localStorage.setItem('tema-portfolioclara', modoEscuro ? 'dark' : 'light');
  }

  const temaSalvo = localStorage.getItem('tema-portfolioclara');
  if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode');
    atualizarIconeTema(true);
  } else {
    atualizarIconeTema(false);
  }

  btnTema.addEventListener('click', alternarTema);

  const btnHamburguer = document.getElementById('btn-hambuerguer');
  const navList = document.getElementById('nav-list');

  function alternarMenu() {
    const estaAberto = navList.classList.toggle('active');
    btnHamburguer.setAttribute('aria-expanded', estaAberto);
  }

  btnHamburguer.addEventListener('click', alternarMenu);

  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
        btnHamburguer.setAttribute('aria-expanded', 'false');
      }
    });
  });

  function obterSaudacao(hora) {
    if (hora >= 5 && hora < 12) {
      return "Bom dia ☀️";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde 🌤️";
    } else {
      return "Boa noite 🌙";
    }
  }

  const campoSaudacao = document.getElementById('saudacao');
  const horaAtual = new Date().getHours();
  campoSaudacao.textContent = `${obterSaudacao(horaAtual)}, bem-vindo(a)!`;

  const listaProjetos = [
    {
      titulo: "Protótipo MatchCine",
      descricao: "Wireframe navegável e protótipo de alta fidelidade para plataforma de descoberta conjunta de filmes.",
      imagem: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=400",
      techs: ["Figma", "UI/UX"],
      categoria: "Figma",
      link: "#"
    },
    {
      titulo: "Quiz Interativo de TI",
      descricao: "Aplicação interativa de perguntas e respostas com computação de pontuação dinâmica ao final.",
      imagem: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400",
      techs: ["HTML/CSS", "JavaScript"],
      categoria: "JavaScript",
      link: "#"
    },
    {
      titulo: "Landing Page Institucional",
      descricao: "Página institucional fictícia desenvolvida com HTML5 semântico e estilização totalmente responsiva.",
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
      techs: ["HTML/CSS"],
      categoria: "HTML/CSS",
      link: "#"
    }
  ];

  const containerProjetos = document.getElementById('projetos-container');

  function renderizarProjetos(filtro = 'todos') {
    containerProjetos.innerHTML = '';
    
    const projetosFiltrados = filtro === 'todos' 
      ? listaProjetos 
      : listaProjetos.filter(p => p.categoria === filtro || p.techs.includes(filtro));

    projetosFiltrados.forEach(proj => {
      const article = document.createElement('article');
      article.className = 'card-projeto';
      article.innerHTML = `
        <img src="${proj.imagem}" alt="Captura de tela do projeto ${proj.titulo}" class="card-img">
        <div class="card-corpo">
          <h3>${proj.titulo}</h3>
          <p>${proj.descricao}</p>
          <div class="card-techs">
            ${proj.techs.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <a href="${proj.link}" class="btn btn-principal" style="text-align: center; margin-top: auto;">Ver Projeto</a>
        </div>
      `;
      containerProjetos.appendChild(article);
    });
  }

  renderizarProjetos();

  document.querySelectorAll('.btn-filtro').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderizarProjetos(e.target.dataset.filtro);
    });
  });

  const formContato = document.getElementById('form-contato');

  function validarFormulario() {
    let valido = true;

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const consentimento = document.getElementById('consentimento').checked;

    document.querySelectorAll('.msg-erro').forEach(el => el.style.display = 'none');

    if (nome === '') {
      document.getElementById('erro-nome').style.display = 'block';
      valido = false;
    }

    if (email === '' || !email.includes('@') || !email.includes('.')) {
      document.getElementById('erro-email').style.display = 'block';
      valido = false;
    }

    if (mensagem.length < 20) {
      document.getElementById('erro-mensagem').style.display = 'block';
      valido = false;
    }

    if (!consentimento) {
      document.getElementById('erro-consentimento').style.display = 'block';
      valido = false;
    }

    return valido;
  }

  formContato.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      const msgSucesso = document.getElementById('mensagem-sucesso');
      msgSucesso.style.display = 'block';
      formContato.reset();

      setTimeout(() => {
        msgSucesso.style.display = 'none';
      }, 5000);
    }
  });

  document.getElementById('ano-atual').textContent = new Date().getFullYear();

  const btnTopo = document.getElementById('btn-topo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTopo.classList.add('visivel');
    } else {
      btnTopo.classList.remove('visivel');
    }
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});