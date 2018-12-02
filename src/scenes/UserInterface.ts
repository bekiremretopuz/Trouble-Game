
export class UserInterface extends Phaser.Group {
    private _startLine: Phaser.Sprite;
    private _uiHand: Phaser.Sprite;
    private _leftArrow: Phaser.Sprite;
    private _rightArrow: Phaser.Sprite;
    private _playerMoveTween: TweenLite;
    private _enemyMoveTween: TweenLite;
    public onClickEvent: Phaser.Signal = new Phaser.Signal();

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, null, 'UserInterface', false);
        this.position.set(x, y);
        this.initProperties();
    }

    private initProperties(): void {  
        let startGameButton = this.game.add.button(0, 0, null, () => {
            this.uiHandDown();
        }, null, null, null, null, null, this);
        startGameButton.width = 1280;
        startGameButton.height = 720; 

        this._startLine = this.game.add.sprite(640, 50, "startLine", null, this); // start line 
        this._startLine.anchor.set(0.5, 0.5);
        this._startLine.scale.setTo(0.5, 0.5);

        this._leftArrow = this.game.add.sprite(150, 360, "leftArrow", null, this); //  left arrow
        this._leftArrow.anchor.set(0.5, 0.5); 
        this._leftArrow.scale.setTo(0.5, 0.5);

        this._rightArrow = this.game.add.sprite(1100, 360, "rightArrow", null, this); // rigth arrow
        this._rightArrow.anchor.set(0.5, 0.5); 
        this._rightArrow.scale.setTo(0.5, 0.5);

        this._uiHand = this.game.add.sprite(1170, 360, "hand", null, this); // ui hand
        this._uiHand.anchor.set(0.5, 0.5);  
        this._uiHand.scale.setTo(0.5, 0.5);

        TweenMax.to(this._uiHand.position, 2, {
            x: 100,
            yoyo: true,
            repeat: -1
        }); 
    }

    private uiHandDown(): void { 
        this.visible = false;
        this.onClickEvent.dispatch('StartGame', true);
    }
}
