const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Boundary {
    static width = 40
    static height = 40
    constructor({position}){
        this.position = position
        this.width = 40
        this.height = 40
    }

    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const map = [
    ['-','-','-','-','-','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-',' ','-','-',' ','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-','-','-','-','-','-']
]
const boundaries = []

map.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        switch(Symbol){
            case '-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j, 
                            y: Boundary.height * i
                        }
                    }))
                break;
        }
    })
})

boundaries.forEach((boundary) =>{ boundary.draw()})