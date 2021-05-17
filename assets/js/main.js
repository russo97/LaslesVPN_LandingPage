
(function () {

  const overlay   = $('.overlay'),
        hamburger = $('.header__hamburguer'),
        sideMenu  = $('.header__contain__nav');

  function $ (el) {
    return document.querySelector.bind(document)(el);
  }

  new Vue({
    el: '#app',

    methods: {
      toggleSideMenu () {
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('visible', this.isMenuOpened);
      },

      handleOverlay () {
        const { isMenuOpened, toggleSideMenu } = this;

        isMenuOpened && toggleSideMenu();
      }
    },

    computed: {
      isMenuOpened () {
        return sideMenu.classList.contains('open')
      }
    },

    created () {
      overlay.addEventListener('click', this.handleOverlay)
      hamburger.addEventListener('click', this.toggleSideMenu);
    }
  });

})();
