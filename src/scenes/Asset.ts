export class Asset {
    protected game: Phaser.Game; 

    preload(): void {  ;
        this.game.load.reset(true, true);
        this.game.load.image("startLine", "./assets/UI_startline.png");
        this.game.load.image("hand", "./assets/UI_hand.png");
        this.game.load.image("leftArrow", "./assets/UI_arrowleft.png");
        this.game.load.image("rightArrow", "./assets/UI_arrowright.png");
        this.game.load.image("character", "./assets/Shape_triangle.png");
        this.game.load.image("enemyDiamond", "./assets/Shape_diamond.png");
        this.game.load.image("enemySquare", "./assets/Shape_square.png");
        this.game.load.image("enemyRound", "./assets/Shape_round.png");
        this.game.load.image("enemyDrop", "./assets/Shape_drop.png");
        this.game.load.image("enemyHexagon", "./assets/Shape_hexagon.png");    
        this.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    }

    private onLoadComplete(): void {  
        this.game.state.start('MainMenu', true, false, true);
    } 
}