class TicTacToe {
    constructor() {
        this.storage =[ [  null, null ,null ], [  null, null ,null ], [  null, null ,null ] ];
        this.player ='x';
        this.winner = 1;
        this.count =0;
    }

    getCurrentPlayerSymbol() {


        return this.player;

    }

    nextTurn(rowIndex, columnIndex) {
        if (this.storage[rowIndex][columnIndex] == null){
            this.storage[rowIndex][columnIndex] = this.player;
            this.count++;
            if(this.player == 'x'){
                this.player ='o';


            }else {
                this.player = 'x';

            }

        }


        if (this.storage[0][0]==this.player && this.storage[0][1]==this.player && this.storage[0][2]==this.player){
            this.winner =this.player;
         }
       else if (this.storage[1][0]==this.player && this.storage[1][1]==this.player && this.storage[1][2]==this.player){
            this.winner =this.player;
        }  else if (this.storage[2][0]==this.player && this.storage[2][1]==this.player && this.storage[2][2]==this.player){
            this.winner =this.player;
        } else if (this.storage[0][0]==this.player && this.storage[1][1]==this.player && this.storage[2][2]==this.player){
            this.winner =this.player;
        } else if (this.storage[0][2]==this.player && this.storage[1][1]==this.player && this.storage[2][0]==this.player){
        this.winner =this.player;
    } else if (this.storage[0][0]==this.player && this.storage[1][0]==this.player && this.storage[2][0]==this.player){
            this.winner =this.player;
        } else if (this.storage[0][1]==this.player && this.storage[1][1]==this.player && this.storage[2][1]==this.player){
            this.winner =this.player;
        }else if (this.storage[0][2]==this.player && this.storage[1][2]==this.player && this.storage[2][2]==this.player){
            this.winner =this.player;
        }





    }

    isFinished() {
   /*if (this.count ==9) {
       return null;
   } else if(this.winner == 'x') {
       return 'o';
   } else if(this.winner == 'o'){
       return 'x';*/
    }
}

    getWinner() {

    }

    noMoreTurns() {
        if(this.count == 9){
            return true;
        } else{
            return false;
        }

    }

    isDraw() {


        }
    }

    getFieldValue(rowIndex, colIndex) {
    return this.storage[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
