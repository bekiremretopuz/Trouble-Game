import { Asset } from "./scenes/Asset";
import { mainMenuScene } from "./scenes/mainMenuScene";

const config: any = {
    title: "TroubleColor",
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    parent: "game",
    scene: [mainMenuScene, Asset],
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    backgroundColor: "#000000"
};

class game {
    private game: Phaser.Game;

    constructor(config: any, parent = null) {   
        this.game = new Phaser.Game(1280, 720, Phaser.AUTO, parent, { init: this.init, create: this.create }, false, false); 
    }

    init(): void { 

    }

    create(): void {
        this.game.state.add('Asset', Asset);
        this.game.state.add('MainMenu', mainMenuScene);;
        this.game.state.start('Asset', true, false);
    } 
}

window.onload = () => {
    window["game"] = new game(config);
};
