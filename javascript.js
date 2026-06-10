/* ==========================================================
🚀 MOVELAR PLANEJADOS
📌 JAVASCRIPT PREMIUM
📌 Desenvolvido por Paulo Ricardo
========================================================== */

/* ==========================================================
🚀 INTRO PREMIUM
========================================================== */

const intro = document.querySelector(".intro-premium");

window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    intro.classList.add("ocultar");

    setTimeout(() => {
      intro.remove();

      document.body.style.overflow = "auto";
    }, 1200);
  }, 4500);
});

/* ==========================================================
🌟 HEADER
========================================================== */

const cabecalho = document.querySelector(".cabecalho");
const botaoMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

/* ==========================================================
📱 MENU MOBILE
========================================================== */

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });

  /* Fecha ao clicar em um link */

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
    });
  });

  /* Fecha automaticamente ao voltar para Desktop */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      menu.classList.remove("ativo");
    }
  });
}

/* ==========================================================
📱 FECHAR MENU AO CLICAR NO LINK
========================================================== */

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});

/* ==========================================================
🌟 HEADER AO ROLAR A PÁGINA
========================================================== */

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    cabecalho.classList.add("scroll");
  } else {
    cabecalho.classList.remove("scroll");
  }
});

/* ==========================================================
🏠 HOME
========================================================== */

const home = document.querySelector(".home");

/* ==========================================================
🌄 EFEITO PARALLAX
========================================================== */

window.addEventListener("scroll", () => {
  if (!home) return;

  const scroll = window.pageYOffset;

  home.style.backgroundPositionY = scroll * 0.5 + "px";
});

/* ==========================================================
🚀 SCROLL SUAVE
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (evento) {
    evento.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* ==========================================================
🏆 SOBRE
========================================================== */

const contadores = document.querySelectorAll(".contador");
const secaoSobre = document.querySelector("#sobre");

let contadorIniciado = false;

/* ==========================================================
📊 CONTADOR ANIMADO
========================================================== */

function iniciarContador() {
  contadores.forEach((contador) => {
    const alvo = Number(contador.dataset.target);

    let numero = 0;

    const incremento = alvo / 240;

    function atualizar() {
      numero += incremento;

      if (numero < alvo) {
        contador.textContent = Math.floor(numero);

        requestAnimationFrame(atualizar);
      } else {
        contador.textContent = alvo;
      }
    }

    atualizar();
  });
}

/* ==========================================================
👀 OBSERVER
========================================================== */

const observerSobre = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !contadorIniciado) {
        contadorIniciado = true;

        iniciarContador();
      }
    });
  },
  {
    threshold: 0.5,
  },
);

observerSobre.observe(secaoSobre);

/* ==========================================================
📸 PROJETOS
========================================================== */

const cardsProjetos = document.querySelectorAll(".card-servico");

/* ==========================================================
✨ REVEAL DOS CARDS
========================================================== */

const observerProjetos = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

cardsProjetos.forEach((card) => {
  card.classList.add("escondido");

  observerProjetos.observe(card);
});

/* ==========================================================
🖱️ EFEITO 3D NOS CARDS
========================================================== */

cardsProjetos.forEach((card) => {
  card.addEventListener("mousemove", (evento) => {
    const x = evento.offsetX / card.offsetWidth - 0.5;

    const y = evento.offsetY / card.offsetHeight - 0.5;

    card.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});

/* ==========================================================
🎥 VÍDEOS
========================================================== */

const videos = document.querySelectorAll(".video-card");
const todosVideos = document.querySelectorAll("video");

/* ==========================================================
🎬 REVEAL DOS VÍDEOS
========================================================== */

const observerVideos = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("video-show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

videos.forEach((video) => {
  video.classList.add("video-hidden");

  observerVideos.observe(video);
});

/* ==========================================================
▶ APENAS UM VÍDEO TOCANDO
========================================================== */

todosVideos.forEach((videoAtual) => {
  videoAtual.addEventListener("play", () => {
    todosVideos.forEach((outroVideo) => {
      if (outroVideo !== videoAtual) {
        outroVideo.pause();

        outroVideo.currentTime = 0;
      }
    });
  });
});

/* ==========================================================
📱 PAUSAR TODOS OS VÍDEOS AO SAIR DA ABA
========================================================== */

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    todosVideos.forEach((video) => {
      video.pause();
    });
  }
});

/* ==========================================================
🎬 BOTÃO VER MAIS PROJETOS
========================================================== */

const botaoVerMais = document.querySelector(".btn-ver-mais");
const secaoVidracaria = document.querySelector(".vidracaria-extra");

if (botaoVerMais && secaoVidracaria) {
  botaoVerMais.addEventListener("click", () => {
    secaoVidracaria.classList.toggle("ativo");

    if (secaoVidracaria.classList.contains("ativo")) {
      botaoVerMais.innerText = "Ver Menos";

      secaoVidracaria.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      botaoVerMais.innerText = "Ver Mais Projetos";
    }
  });
}

/* ==========================================================
🪞 VIDRAÇARIA
========================================================== */

const videosVidracaria = document.querySelectorAll(".item-vidracaria");

/* ==========================================================
✨ REVEAL DA VIDRAÇARIA
========================================================== */

const observerVidracaria = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("video-show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

videosVidracaria.forEach((video) => {
  video.classList.add("video-hidden");

  observerVidracaria.observe(video);
});

/* ==========================================================
⭐ POR QUE ESCOLHER A MOVELAR
========================================================== */

const beneficios = document.querySelectorAll(".beneficio");

/* ==========================================================
✨ REVEAL DOS BENEFÍCIOS
========================================================== */

const observerBeneficios = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("beneficio-show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

beneficios.forEach((beneficio) => {
  beneficio.classList.add("beneficio-hidden");

  observerBeneficios.observe(beneficio);
});

/* ==========================================================
🌟 AVALIAÇÕES
========================================================== */

const avaliacoes = document.querySelectorAll(".avaliacao");

let indiceAtual = 0;

/* ==========================================================
⭐ CARROSSEL AUTOMÁTICO
========================================================== */

function mostrarAvaliacao() {
  avaliacoes.forEach((avaliacao, indice) => {
    avaliacao.style.display = indice === indiceAtual ? "block" : "none";
  });

  indiceAtual++;

  if (indiceAtual >= avaliacoes.length) {
    indiceAtual = 0;
  }
}

if (avaliacoes.length > 0) {
  mostrarAvaliacao();

  setInterval(mostrarAvaliacao, 5000);
}

/* ==========================================================
✨ REVEAL DAS AVALIAÇÕES
========================================================== */

const observerAvaliacoes = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("avaliacao-show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

avaliacoes.forEach((card) => {
  card.classList.add("avaliacao-hidden");

  observerAvaliacoes.observe(card);
});

/* ==========================================================
📍 LOCALIZAÇÃO
========================================================== */

const itensLocalizacao = document.querySelectorAll(
  ".item-localizacao, .mapa-container",
);

/* ==========================================================
✨ REVEAL DA LOCALIZAÇÃO
========================================================== */

const observerLocalizacao = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("local-show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

itensLocalizacao.forEach((item) => {
  item.classList.add("local-hidden");

  observerLocalizacao.observe(item);
});

/* ==========================================================
📨 CONTATO
========================================================== */

const formulario = document.querySelector(".formulario");

const itensContato = document.querySelectorAll(".card-contato, .formulario");


/* ==========================================================
✨ REVEAL DO CONTATO
========================================================== */

const observerContato = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("contato-show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

itensContato.forEach((item) => {
  item.classList.add("contato-hidden");

  observerContato.observe(item);
});

/* ==========================================================
📨 FORMULÁRIO - EMAILJS
========================================================== */

// Seleciona os elementos
const formularioContato = document.querySelector("#formulario-contato");
const botaoEnviar = document.querySelector("#btn-enviar");

// Verifica se o formulário existe
if (formularioContato) {
  formularioContato.addEventListener("submit", function (e) {
    e.preventDefault();

    // Desabilita o botão
    botaoEnviar.disabled = true;
    botaoEnviar.innerText = "Enviando...";

    // Envia o formulário
    emailjs
      .sendForm("service_3jkvnr9", "template_eyrgrc2", formularioContato)
      .then((response) => {
        console.log("SUCESSO:", response);

        // Limpa o formulário
        formularioContato.reset();

        // Altera o botão
        botaoEnviar.innerHTML = "✔ Mensagem enviada!";
        botaoEnviar.style.background = "#16a34a";

        // Após 3 segundos volta ao normal
        setTimeout(() => {
          botaoEnviar.disabled = false;
          botaoEnviar.innerHTML = "Solicitar Orçamento";
          botaoEnviar.style.background = "#00eaff";
        }, 3000);
      })
      .catch((error) => {
        console.log("ERRO:", error);

        botaoEnviar.innerHTML = "❌ Erro ao enviar";
        botaoEnviar.style.background = "#dc2626";

        setTimeout(() => {
          botaoEnviar.disabled = false;
          botaoEnviar.innerHTML = "Solicitar Orçamento";
          botaoEnviar.style.background = "#00eaff";
        }, 3000);
      });
  });
}

/* ==========================================================
🏆 FOOTER
========================================================== */

const footer = document.querySelector(".footer");

/* ==========================================================
✨ REVEAL DO FOOTER
========================================================== */

const observerFooter = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("footer-show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

if (footer) {
  footer.classList.add("footer-hidden");

  observerFooter.observe(footer);
}

/* ==========================================================
✨ SCROLL REVEAL GERAL
========================================================== */

const secoesAnimadas = document.querySelectorAll(
  ".sobre, .servicos, .videos, .porque, .avaliacoes, .localizacao, .contato",
);

function revelarSecoes() {
  const alturaTela = window.innerHeight * 0.85;

  secoesAnimadas.forEach((secao) => {
    const topo = secao.getBoundingClientRect().top;

    if (topo < alturaTela) {
      secao.classList.add("mostrar");
    }
  });
}

/* ==========================================================
💬 BOTÃO FLUTUANTE DO WHATSAPP
========================================================== */

const botaoWhatsapp = document.querySelector(".whatsapp");

function controlarWhatsapp() {
  if (!botaoWhatsapp) return;

  if (window.scrollY > 400) {
    botaoWhatsapp.style.opacity = "1";
    botaoWhatsapp.style.visibility = "visible";
  } else {
    botaoWhatsapp.style.opacity = "0.8";
    botaoWhatsapp.style.visibility = "visible";
  }
}

/* ==========================================================
🌟 EVENTO DE SCROLL
========================================================== */

window.addEventListener("scroll", () => {
  revelarSecoes();

  controlarWhatsapp();
});

/* ==========================================================
🚀 INICIALIZAÇÃO
========================================================== */

window.addEventListener("DOMContentLoaded", () => {
  revelarSecoes();

  controlarWhatsapp();
});

/* ==========================================================
🔥 CONSOLE
========================================================== */

console.clear();

console.log(`
╔══════════════════════════════════════════════╗
║                                              ║
║      🚀 MOVELAR PLANEJADOS PREMIUM           ║
║                                              ║
║      ✔ JavaScript Inicializado               ║
║      ✔ Sistema Responsivo                    ║
║      ✔ Scroll Reveal                         ║
║      ✔ Observers                             ║
║      ✔ Menu Mobile                           ║
║      ✔ Vídeos                               ║
║                                              ║
║      Desenvolvido por Paulo Ricardo          ║
║                                              ║
╚══════════════════════════════════════════════╝
`);