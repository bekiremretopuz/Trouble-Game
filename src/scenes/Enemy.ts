export enum Colors {
    Blue = 0x17deee,
    Red = 0xff4162,
    Green = 0x66bb6a,
    Purple = 0xa983c7
} 
export const Enemys = {
    Diamond: { key: "enemyDiamond", enemyCount: 35 },
    Drop:    { key: "enemyDrop",    enemyCount: 35 },
    Hexagon: { key: "enemyHexagon", enemyCount: 35 },
    Round:   { key: "enemyRound",   enemyCount: 35 },
    Square:  { key: "enemySquare",  enemyCount: 35 }
} 

export class Enemy extends Phaser.Group { 
    private _color: any = null; 
    private _enemy: Phaser.Sprite[] = [];
    public onEnemyAction: Phaser.Signal = new Phaser.Signal();
    private _selectionEnemyCount: number;
    private _selectionEnemy: any;
    private _offsetYFactory: number; // Optianal Enemy X Offset  
    private _enemyContainer: Phaser.Group;

    constructor(game: Phaser.Game, x: number, y: number) { 
        super(game, null, 'Enemy', false);  
        this.createEnemy();
    }

    private enemyVerticalAnimation(): void {   
        TweenLite.to(this._enemyContainer, 4, {
            y: 720,
            onComplete: () => { 
                this.destroy();
                this.onEnemyAction.dispatch("EnemyCompleteAnimation");
            }
        });
    } 
    
    private createEnemy(): void {
        this._enemyContainer = this.game.add.group(this, "EnemyContainer"); 

        let rndEnemyElement: number = this.getRandomNumbers(1, 5);
        switch (rndEnemyElement) {
            case 1:
                this._selectionEnemy = Enemys.Diamond.key;
                this._selectionEnemyCount = Enemys.Diamond.enemyCount;
                this._offsetYFactory = 150;
                break;
            case 2:
                this._selectionEnemy = Enemys.Drop.key;
                this._selectionEnemyCount = Enemys.Drop.enemyCount;
                this._offsetYFactory = 150;
                break;
            case 3:
                this._selectionEnemy = Enemys.Hexagon.key;
                this._selectionEnemyCount = Enemys.Hexagon.enemyCount;
                this._offsetYFactory = 150;
                break;
            case 4:
                this._selectionEnemy = Enemys.Round.key;
                this._selectionEnemyCount = Enemys.Round.enemyCount;
                this._offsetYFactory = 150;
                break;
            case 5:
                this._selectionEnemy = Enemys.Square.key;
                this._selectionEnemyCount = Enemys.Square.enemyCount;
                this._offsetYFactory = 150;
                break;
        }
        for (let i = 0; i < this._selectionEnemyCount; i++) {  
            this._enemy[i] = this.game.add.sprite(0, 0, this._selectionEnemy, null, this._enemyContainer);
            this._enemy[i].scale.set(0.1, 0.1); 
            this._enemy[i].position.setTo(50 + i * 50, 50);   
            this.game.physics.enable(this._enemy[i], Phaser.Physics.ARCADE);     
            this._enemy[i].body.immovable = true; 
        }  

        this.color = this.getRandomColors(); // Create Dynamic Colors 
        this.enemyVerticalAnimation();
    }  

    private getRandomColors(): number {
        let rndColor: number = this.getRandomNumbers(1, 4); // Colors Enum Range
        let colorInt: number;
        switch (rndColor) {
            case 1:
                colorInt = Colors.Purple;
                break;
            case 2:
                colorInt = Colors.Blue;
                break;
            case 3:
                colorInt = Colors.Green;
                break;
            case 4:
                colorInt = Colors.Red;
                break;
            default:
                colorInt = 0xfdff58; // Default Color Tint (Yellow)
                break;
        }
        return colorInt;
    }

    private getRandomNumbers(minimun: number, maximum: number) { 
        return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;
    }
   
    // GETTERS AND SETTERS 

    public get color(): number {
        return this._color;
    }

    public set color(value: number) { 
        if (this._color != value) {
            this._color = value; 
            for (let i = 0; i < this._enemyContainer.children.length; i++) {
                this._enemy[i].tint = value; // Tinting    
            } 
            this.onEnemyAction.dispatch("EnemyColor", value);
        }
    }

    public get enemyContainer(): Phaser.Group {
        return this._enemyContainer;
    }
} 