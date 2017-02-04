class TicTacToe {
    constructor() {

        this.storage =[ [  null, null ,null ], [  null, null ,null ], [  null, null ,null ] ];
        this.player ='x';
        this.winner=null;
        this.count =0;

    }

    getCurrentPlayerSymbol() {

        return this.player;

    }

    nextTurn(rowIndex, columnIndex) {

        if(rowIndex>-1&& rowIndex<3 && columnIndex>-1 && columnIndex<3) {

            if (this.storage[rowIndex][columnIndex] == null) {
                this.storage[rowIndex][columnIndex] = this.player;
                this.count++;
                if (this.player == 'x') {
                    this.player = 'o';


                } else {
                    this.player = 'x';

                }

            }
            if (this.count >= 3) {
                if (this.storage[0][0] != null && this.storage[0][1] == this.storage[0][0] && this.storage[0][2] == this.storage[0][1]) {
                    this.winner = this.storage[0][0];
                    return this;
                } else if (this.storage[1][0] != null && this.storage[1][1] == this.storage[1][0] && this.storage[1][1] == this.storage[1][2]) {
                    this.winner = this.storage[1][0];
                    return this;
                } else if (this.storage[2][0] != null && this.storage[2][1] == this.storage[2][0] && this.storage[2][2] == this.storage[2][1]) {
                    this.winner = this.storage[2][0];
                } else if (this.storage[0][0] != null && this.storage[1][1] == this.storage[0][0] && this.storage[2][2] == this.storage[0][0]) {
                    this.winner = this.storage[0][0];
                    return this;
                } else if (this.storage[0][2] != null && this.storage[1][1] == this.storage[0][2] && this.storage[2][0] == this.storage[0][2]) {
                    this.winner = this.storage[0][2];
                    return this;
                } else if (this.storage[0][0] != null && this.storage[1][0] == this.storage[0][0] && this.storage[2][0] == this.storage[1][0]) {
                    this.winner = this.storage[0][0];
                    return this;
                } else if (this.storage[0][1] != null && this.storage[1][1] == this.storage[0][1] && this.storage[2][1] == this.storage[1][1]) {
                    this.winner = this.storage[0][1];
                    return this;
                } else if (this.storage[0][2] != null && this.storage[1][2] == this.storage[0][2] && this.storage[2][2] == this.storage[0][2]) {
                    this.winner = this.storage[0][2];
                    return this;
                }
            }
        }
        
   return this;
    }

    isFinished() {

   if(this.winner == null && this.count!=9) {
       return false;
   } else {
       return true;
    }

}

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if(this.count == 9){
            return true;
        } else{
            return false;
        }

    }

    isDraw() {

    if (this.count == 9 && this.winner == null){
        return true;
    }else {
        return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
    return this.storage[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
