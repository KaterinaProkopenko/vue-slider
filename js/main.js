const app = new Vue({
    el: '#app',
    data: {
        activeElement: 0,
        animals: [
            {
                animal: 'cat',
                image: 'cat.jpg',
            },
        
            {
                animal: 'parrots',
                image: 'parrots.jpg'
            },
        
            {
                animal: 'fish',
                image: 'fish.jpg'
            },
        
            {
                animal: 'alpacas',
                image: 'alpacas.jpg'
            },
        
            {
                animal: 'eagle',
                image: 'eagle.jpg'
            },
        ],
    },
    methods: {
        nextButton(){
            if (this.activeElement === this.animals.length - 1){
                this.activeElement = 0;
            } else {
                this.activeElement++;
            }
        },
        previousButton(){
            if (this.activeElement === 0){
                this.activeElement = this.animals.length - 1;
            } else {
                this.activeElement--;
            }
        }
    }
});