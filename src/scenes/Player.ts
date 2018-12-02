export enum Colors {
    Blue = 0x17deee,
    Red = 0xff4162,
    Green = 0x66bb6a,
    Purple = 0xa983c7
}

export class Player extends Phaser.Group {
    private _player: Phaser.Sprite;
    private _color: any = null; 
    public onPlayerAction: Phaser.Signal = new Phaser.Signal();

    constructor(game: Phaser.Game) {
        super(game, null, 'Player', false);
        this.init();
    }

    private init(): void { 
        this._player = this.game.add.sprite(0, 0, 'character', null, this);
        this._player.anchor.set(0.5, 0.5);
        this._player.scale.set(0.25, 0.25);
        this._player.position.set(640, 360); 
        this.game.physics.enable(this._player, Phaser.Physics.ARCADE);
        this._player.body.immovable = true;
        this.color = this.getRandomColors(); // Create Dynamic Colors
        this.initEvents(); 
    }  

    private initEvents(): void {
        this.game.canvas.addEventListener('mousedown', () => { 
            this.game.input.mouse.locked = true; 
        });

        this.game.canvas.addEventListener('mouseup', () => {
            this.game.input.mouse.locked = false; 
        });    

        this.game.canvas.addEventListener('mousemove', (e) => {
            this.onPointerMove(e);
        });    
    }    

    private onPointerMove(pointer) {
        if (this.game.input.mouse.locked) {
            this._player.x += pointer.movementX;
            this._player.y += pointer.movementY;

            this._player.x = Phaser.Math.wrap(this._player.x, 0, this.game.renderer.width);
            this._player.y = Phaser.Math.wrap(this._player.y, 0, this.game.renderer.height);
        }
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
            this._player.tint = value; // Tinting      
            this.onPlayerAction.dispatch("PlayerColor", value);
        }
    }

    public get playerSprite(): Phaser.Sprite {
        return this._player;
    }
} 