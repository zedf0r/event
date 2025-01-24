export class gameInit {
    constructor(element, playingField) {
        this._element = element ** 2;
        this._playingField = document.querySelector(playingField);
        this.count = 0;
        this.misCount = 0;
        this.onClick = this.onClick.bind(this)
        this._playingField.addEventListener('click', this.onClick);
    }

    buildField() {
        for (let i = 0; i < this._element; i++) {
            const cell = document.createElement('div');
            cell.classList.add('box');
            this._playingField.appendChild(cell)
        }
    }

    change() {
        let randomDuplicate = null;
        const imgCreate = document.createElement('img')
        imgCreate.src = './src/img/goblin.png'
        imgCreate.alt = 'Гоблин'
        imgCreate.id = 'img'
        imgCreate.classList.add('img')
        const boxs = this._playingField.querySelectorAll('.box')

        let random = Math.round(Math.random() * (this._element - 1))
        boxs[random].appendChild(imgCreate)
        
        const startInterval = setInterval(() => {
            do {
                random = Math.round(Math.random() * (this._element - 1))
            } while (random === randomDuplicate)
            boxs[random].appendChild(imgCreate)
            randomDuplicate = random
            this.misCount += 1;
            console.log(this.misCount)
            if (this.misCount === 5) {
                clearInterval(startInterval);
            }
        }, 1000);
    }

    onClick(e) {
        if (e.target.id === 'img') {
            this.count += 1;
            this.misCount -= 1;
            e.target.remove()
        }
    }
}