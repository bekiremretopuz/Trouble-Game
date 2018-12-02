import { Player } from "./Player";  
import { Enemy } from "./Enemy";
import { UserInterface } from "./UserInterface";

export class mainMenuScene {
    protected game: Phaser.Game;
    private _player: Player; // Player Component
    private _enemy: Enemy; // Enemy Component
    private _userInterface: UserInterface; //Ui Component 
    private _playerColor: number = 0;
    private _enemyColor: number = 0;

    init(): void {  
        this.game.physics.startSystem(Phaser.Physics.ARCADE); 
        this._player = new Player(this.game);
        this._userInterface = new UserInterface(this.game, 0, 0); 
        this.initEvents(); 
    }    

    create(): void {
        this.game.world.addChild(this._player); 
        this.game.world.addChild(this._userInterface);
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

    private playerActionTaken(value: any, status: any) { 
        console.log("Player Action : ", value, status);
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
        console.log("Enemy Action : ",value, status);
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
            this.game.physics.arcade.collide(this._player, this._enemy.enemyContainer, this.gameOver); 
        } 
    }

    private gameOver(gameObject1, gameObject2): void { 
        if (this._enemyColor == this._playerColor) { 
            console.log("Game Over");
        }
    } 
}
