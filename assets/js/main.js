
(function () {

  const overlay   = $('.overlay'),
        hamburger = $('.header__hamburguer'),
        sideMenu  = $('.header__contain__nav');

  function $ (el) {
    return document.querySelector.bind(document)(el);
  }

  new Vue({
    el: '#app',

    data () {
      return {
        isMenuOpened: false,
        isOverlayVisible: false
      };
    },

    methods: {
      toggleSideMenu () {
        const { isMenuOpened, isOverlayVisible } = this;

        overlay.classList.toggle('visible', !isMenuOpened);
        sideMenu.classList.toggle('open', !isOverlayVisible);

        if (!isMenuOpened) {
          this.resetPosition();
        }

        this.isMenuOpened = !this.isMenuOpened;
        this.isOverlayVisible = !this.isOverlayVisible;
      },

      handleOverlay () {
        const { isMenuOpened, toggleSideMenu } = this;

        isMenuOpened && toggleSideMenu();
      },

      resetPosition () {
        window.scrollTo(0, 0);
      }
    },

    computed: {
    },

    created () {
      overlay.addEventListener('click', this.handleOverlay);
      hamburger.addEventListener('click', this.toggleSideMenu);
    }
  });

})();
