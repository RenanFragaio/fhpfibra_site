const swiper = new Swiper(".mySwiper", { 
  // 1. LOOP: O Swiper clona o primeiro e o último slide 
  // para dar a ilusão de que o carrossel nunca termina.
  loop: true,               

  // 2. AUTOPLAY: Um objeto dentro de outro objeto.
  // Aqui você define que o objeto 'autoplay' tem as propriedades de tempo.
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, // Mesmo se o usuário clicar, ele não para de rodar sozinho.
  },

  // 3. PAGINATION: Aqui você diz ao Swiper: 
  // "Ei, procure o elemento com essa classe no HTML e coloque os pontinhos lá dentro".
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },

  // 4. NAVIGATION: Mapeia quais botões físicos no seu HTML 
  // devem disparar as funções de avançar e voltar.
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});