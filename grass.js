class Grass{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
             [this.x + 1, this.y + 1]
        ];

    


    }

     chooseCell(charactor){
         let found = [];
         for(let i in this.directions){
             let newX = this.directions[i][0]
             let newY = this.directions[i][1]
             if (newX >= 0 && newX < matrix[0].length && newY >= 0 && newY < matrix.length)
             if(matrix[newY][newX] == charactor){
                 found.push(this.directions[i])
             }
         }
         return found;
     }

    mull(){
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var chooseObject = random(emptyCells);

    // console.log(emptyCells, chooseObject);
    if(chooseObject && this.multiply >= 2){
        var newX = chooseObject[0];
        var newY = chooseObject[1];
        matrix[newY][newX] = 1;

        var newGrass = new Grass(newX, newY);
        grasses.push(newGrass);
        this.multiply = 0;
    }


    }
}

