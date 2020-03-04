new Vue({
    el: '#root',
    data() {
        return {
            life: 100,
            isEndGame: false
        };
    },
    methods: {
        gebuk: function () {
            this.life -= 10;
            if (this.life <= 0) {
                this.isEndGame = true;
            }
        },
        restart: function () {
            this.life = 100;
            this.isEndGame = false;
        }
    },
    computed: {
        burstBagClass() {
            return {
                burstBag: this.isEndGame,
            }
        }
    }
});