
 
import { Player } from "./Player";  
import { Enemy } from "./Enemy";
import { UserInterface } from "./UserInterface";

export class mainMenuScene {
    protected game: Phaser.Game;
    private _player: Player; // Player Component
    private _enemy: Enemy; // Enemy Component
    private _userInterface: UserInterface; //Ui Component 
    private _playerColor: number;
    private _enemyColor: number;

    create(): void { 
        this.game.physics.startSystem(Phaser.Physics.ARCADE); 

        this._player = new Player(this.game, 0, 0);
        this.game.world.addChild(this._player); 

        this._userInterface = new UserInterface(this.game, 0, 0);
        this.game.world.addChild(this._userInterface);

        this.initEvents(); 
    }    

    private makeEnemy(): void {  
        this._enemy = new Enemy(this.game, 0, 0);
        this.game.world.addChild(this._enemy); 
        this._enemy.onEnemyAction.add(this.enemyActionTaken, this);
    }  

    private initEvents(): void {
        this._userInterface.onClickEvent.add(this.playerActionTaken, this);
        this._player.onPlayerAction.add(this.playerActionTaken, this);  
    }  

    
    private getRandomNumbers(minimun: number, maximum: number) {
        return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;
    }

    private playerActionTaken(value: any, status: any) {  
        switch (value) {
            case "PlayerColor":
                this._playerColor = status;
                break; 
            case "StartGame":
                this.makeEnemy();
                break; 
        }
    }
    private enemyActionTaken(value: any, status: any) { 
        switch (value) { 
            case "EnemyColor":
                this._enemyColor = status;
                break; 
            case "EnemyCompleteAnimation":
                this.makeEnemy();
                break; 
        }
    }

    update(): void {
        if (this._enemy) {  
            console.log(this._player.playerSprite, this._enemy.enemyChildrens,);
            let a = this.game.physics.arcade.collide(this._player.playerSprite, this._enemy.enemyChildrens, () => { console.log("GameOver"); }, null, this);
            this.checkHitTest(this._player.playerSprite, this._enemy.enemyChildrens); 
        } 
    }

    private gameOver(obj1, obj2): void { 
        if (this._enemyColor != this._playerColor) { 

        }
    }

    private checkHitTest(object1, object2): boolean { 
        let object1BoundsA = object1.getBounds();
        let object2BoundsB = object2.getBounds(); 
        console.log(Phaser.Rectangle.intersects(object1BoundsA, object2BoundsB));
        return Phaser.Rectangle.intersects(object1BoundsA, object2BoundsB); 
    }
}
