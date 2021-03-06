/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Asset_1 = __webpack_require__(/*! ./scenes/Asset */ \"./src/scenes/Asset.ts\");\r\nconst mainMenuScene_1 = __webpack_require__(/*! ./scenes/mainMenuScene */ \"./src/scenes/mainMenuScene.ts\");\r\nconst config = {\r\n    title: \"TroubleColor\",\r\n    width: 1280,\r\n    height: 720,\r\n    type: Phaser.AUTO,\r\n    parent: \"game\",\r\n    scene: [mainMenuScene_1.mainMenuScene, Asset_1.Asset],\r\n    input: {\r\n        keyboard: true,\r\n        mouse: true,\r\n        touch: true,\r\n        gamepad: false\r\n    },\r\n    physics: {\r\n        default: \"arcade\",\r\n        arcade: {\r\n            debug: true\r\n        }\r\n    },\r\n    backgroundColor: \"#000000\"\r\n};\r\nclass game {\r\n    constructor(config, parent = null) {\r\n        this.game = new Phaser.Game(1280, 720, Phaser.AUTO, parent, { init: this.init, create: this.create }, false, false);\r\n    }\r\n    init() {\r\n    }\r\n    create() {\r\n        this.game.state.add('Asset', Asset_1.Asset);\r\n        this.game.state.add('MainMenu', mainMenuScene_1.mainMenuScene);\r\n        ;\r\n        this.game.state.start('Asset', true, false);\r\n    }\r\n}\r\nwindow.onload = () => {\r\n    window[\"game\"] = new game(config);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/scenes/Asset.ts":
/*!*****************************!*\
  !*** ./src/scenes/Asset.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Asset {\r\n    preload() {\r\n        ;\r\n        this.game.load.reset(true, true);\r\n        this.game.load.image(\"startLine\", \"./assets/UI_startline.png\");\r\n        this.game.load.image(\"hand\", \"./assets/UI_hand.png\");\r\n        this.game.load.image(\"leftArrow\", \"./assets/UI_arrowleft.png\");\r\n        this.game.load.image(\"rightArrow\", \"./assets/UI_arrowright.png\");\r\n        this.game.load.image(\"character\", \"./assets/Shape_triangle.png\");\r\n        this.game.load.image(\"enemyDiamond\", \"./assets/Shape_diamond.png\");\r\n        this.game.load.image(\"enemySquare\", \"./assets/Shape_square.png\");\r\n        this.game.load.image(\"enemyRound\", \"./assets/Shape_round.png\");\r\n        this.game.load.image(\"enemyDrop\", \"./assets/Shape_drop.png\");\r\n        this.game.load.image(\"enemyHexagon\", \"./assets/Shape_hexagon.png\");\r\n        this.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);\r\n    }\r\n    onLoadComplete() {\r\n        this.game.state.start('MainMenu', true, false, true);\r\n    }\r\n}\r\nexports.Asset = Asset;\r\n\n\n//# sourceURL=webpack:///./src/scenes/Asset.ts?");

/***/ }),

/***/ "./src/scenes/Enemy.ts":
/*!*****************************!*\
  !*** ./src/scenes/Enemy.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Colors;\r\n(function (Colors) {\r\n    Colors[Colors[\"Blue\"] = 1564398] = \"Blue\";\r\n    Colors[Colors[\"Red\"] = 16728418] = \"Red\";\r\n    Colors[Colors[\"Green\"] = 6732650] = \"Green\";\r\n    Colors[Colors[\"Purple\"] = 11109319] = \"Purple\";\r\n})(Colors = exports.Colors || (exports.Colors = {}));\r\nexports.Enemys = {\r\n    Diamond: { key: \"enemyDiamond\", enemyCount: 35 },\r\n    Drop: { key: \"enemyDrop\", enemyCount: 35 },\r\n    Hexagon: { key: \"enemyHexagon\", enemyCount: 35 },\r\n    Round: { key: \"enemyRound\", enemyCount: 35 },\r\n    Square: { key: \"enemySquare\", enemyCount: 35 }\r\n};\r\nclass Enemy extends Phaser.Group {\r\n    constructor(game, x, y) {\r\n        super(game, null, 'Enemy', false);\r\n        this._color = null;\r\n        this._enemy = [];\r\n        this.onEnemyAction = new Phaser.Signal();\r\n        this.createEnemy();\r\n    }\r\n    enemyVerticalAnimation() {\r\n        TweenLite.to(this._enemyContainer, 4, {\r\n            y: 720,\r\n            onComplete: () => {\r\n                this.destroy();\r\n                this.onEnemyAction.dispatch(\"EnemyCompleteAnimation\");\r\n            }\r\n        });\r\n    }\r\n    createEnemy() {\r\n        this._enemyContainer = this.game.add.group(this, \"EnemyContainer\");\r\n        let rndEnemyElement = this.getRandomNumbers(1, 5);\r\n        switch (rndEnemyElement) {\r\n            case 1:\r\n                this._selectionEnemy = exports.Enemys.Diamond.key;\r\n                this._selectionEnemyCount = exports.Enemys.Diamond.enemyCount;\r\n                this._offsetYFactory = 150;\r\n                break;\r\n            case 2:\r\n                this._selectionEnemy = exports.Enemys.Drop.key;\r\n                this._selectionEnemyCount = exports.Enemys.Drop.enemyCount;\r\n                this._offsetYFactory = 150;\r\n                break;\r\n            case 3:\r\n                this._selectionEnemy = exports.Enemys.Hexagon.key;\r\n                this._selectionEnemyCount = exports.Enemys.Hexagon.enemyCount;\r\n                this._offsetYFactory = 150;\r\n                break;\r\n            case 4:\r\n                this._selectionEnemy = exports.Enemys.Round.key;\r\n                this._selectionEnemyCount = exports.Enemys.Round.enemyCount;\r\n                this._offsetYFactory = 150;\r\n                break;\r\n            case 5:\r\n                this._selectionEnemy = exports.Enemys.Square.key;\r\n                this._selectionEnemyCount = exports.Enemys.Square.enemyCount;\r\n                this._offsetYFactory = 150;\r\n                break;\r\n        }\r\n        for (let i = 0; i < this._selectionEnemyCount; i++) {\r\n            this._enemy[i] = this.game.add.sprite(0, 0, this._selectionEnemy, null, this._enemyContainer);\r\n            this._enemy[i].scale.set(0.1, 0.1);\r\n            this._enemy[i].position.setTo(50 + i * 50, 50);\r\n            this.game.physics.enable(this._enemy[i], Phaser.Physics.ARCADE);\r\n            this._enemy[i].body.immovable = true;\r\n            this.color = this.getRandomColors(); // Create Dynamic Colors \r\n        }\r\n        this.enemyVerticalAnimation();\r\n    }\r\n    getRandomColors() {\r\n        let rndColor = this.getRandomNumbers(1, 4); // Colors Enum Range\r\n        let colorInt;\r\n        switch (rndColor) {\r\n            case 1:\r\n                colorInt = Colors.Purple;\r\n                break;\r\n            case 2:\r\n                colorInt = Colors.Blue;\r\n                break;\r\n            case 3:\r\n                colorInt = Colors.Green;\r\n                break;\r\n            case 4:\r\n                colorInt = Colors.Red;\r\n                break;\r\n            default:\r\n                colorInt = 0xfdff58; // Default Color Tint (Yellow)\r\n                break;\r\n        }\r\n        return colorInt;\r\n    }\r\n    getRandomNumbers(minimun, maximum) {\r\n        return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;\r\n    }\r\n    // GETTERS AND SETTERS \r\n    get color() {\r\n        return this._color;\r\n    }\r\n    set color(value) {\r\n        if (this._color != value) {\r\n            this._color = value;\r\n            for (let i = 0; i < this._enemyContainer.children.length; i++) {\r\n                this._enemy[i].tint = value; // Tinting    \r\n            }\r\n            this.onEnemyAction.dispatch(\"EnemyColor\", value);\r\n        }\r\n    }\r\n    get enemyContainer() {\r\n        return this._enemyContainer;\r\n    }\r\n}\r\nexports.Enemy = Enemy;\r\n\n\n//# sourceURL=webpack:///./src/scenes/Enemy.ts?");

/***/ }),

/***/ "./src/scenes/Player.ts":
/*!******************************!*\
  !*** ./src/scenes/Player.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Colors;\r\n(function (Colors) {\r\n    Colors[Colors[\"Blue\"] = 1564398] = \"Blue\";\r\n    Colors[Colors[\"Red\"] = 16728418] = \"Red\";\r\n    Colors[Colors[\"Green\"] = 6732650] = \"Green\";\r\n    Colors[Colors[\"Purple\"] = 11109319] = \"Purple\";\r\n})(Colors = exports.Colors || (exports.Colors = {}));\r\nclass Player extends Phaser.Group {\r\n    constructor(game, x, y) {\r\n        super(game, null, 'Player', false);\r\n        this._color = null;\r\n        this.onPlayerAction = new Phaser.Signal();\r\n        this.init();\r\n        this.initEvents();\r\n        this.color = null;\r\n    }\r\n    init() {\r\n        this._player = this.game.add.sprite(0, 0, 'character', null, this);\r\n        this._player.anchor.set(0.5, 0.5);\r\n        this._player.scale.set(0.25, 0.25);\r\n        this._player.position.set(640, 360);\r\n        this.game.physics.enable(this._player, Phaser.Physics.ARCADE);\r\n        this._player.body.immovable = true;\r\n        this.color = this.getRandomColors(); // Create Dynamic Colors\r\n    }\r\n    initEvents() {\r\n        this.game.canvas.addEventListener('mousedown', () => {\r\n            this.game.input.mouse.locked = true;\r\n        });\r\n        this.game.canvas.addEventListener('mouseup', () => {\r\n            this.game.input.mouse.locked = false;\r\n        });\r\n        this.game.canvas.addEventListener('mousemove', (e) => {\r\n            this.onPointerMove(e);\r\n        });\r\n    }\r\n    onPointerMove(pointer) {\r\n        if (this.game.input.mouse.locked) {\r\n            this._player.x += pointer.movementX;\r\n            this._player.y += pointer.movementY;\r\n            this._player.x = Phaser.Math.wrap(this._player.x, 0, this.game.renderer.width);\r\n            this._player.y = Phaser.Math.wrap(this._player.y, 0, this.game.renderer.height);\r\n        }\r\n    }\r\n    getRandomColors() {\r\n        let rndColor = this.getRandomNumbers(1, 4); // Colors Enum Range\r\n        let colorInt;\r\n        switch (rndColor) {\r\n            case 1:\r\n                colorInt = Colors.Purple;\r\n                break;\r\n            case 2:\r\n                colorInt = Colors.Blue;\r\n                break;\r\n            case 3:\r\n                colorInt = Colors.Green;\r\n                break;\r\n            case 4:\r\n                colorInt = Colors.Red;\r\n                break;\r\n            default:\r\n                colorInt = 0xfdff58; // Default Color Tint (Yellow)\r\n                break;\r\n        }\r\n        return colorInt;\r\n    }\r\n    getRandomNumbers(minimun, maximum) {\r\n        return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;\r\n    }\r\n    // GETTERS AND SETTERS\r\n    get color() {\r\n        return this._color;\r\n    }\r\n    set color(value) {\r\n        if (this._color != value) {\r\n            this._color = value;\r\n            this._player.tint = value; // Tinting      \r\n            this.onPlayerAction.dispatch(\"PlayerColor\", value);\r\n        }\r\n    }\r\n    get playerSprite() {\r\n        return this._player;\r\n    }\r\n}\r\nexports.Player = Player;\r\n\n\n//# sourceURL=webpack:///./src/scenes/Player.ts?");

/***/ }),

/***/ "./src/scenes/UserInterface.ts":
/*!*************************************!*\
  !*** ./src/scenes/UserInterface.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass UserInterface extends Phaser.Group {\r\n    constructor(game, x, y) {\r\n        super(game, null, 'UserInterface', false);\r\n        this.onClickEvent = new Phaser.Signal();\r\n        this.position.set(x, y);\r\n        this.initProperties();\r\n    }\r\n    initProperties() {\r\n        let startGameButton = this.game.add.button(0, 0, null, () => {\r\n            this.uiHandDown();\r\n        }, null, null, null, null, null, this);\r\n        startGameButton.width = 1280;\r\n        startGameButton.height = 720;\r\n        this._startLine = this.game.add.sprite(640, 50, \"startLine\", null, this); // start line \r\n        this._startLine.anchor.set(0.5, 0.5);\r\n        this._startLine.scale.setTo(0.5, 0.5);\r\n        this._leftArrow = this.game.add.sprite(150, 360, \"leftArrow\", null, this); //  left arrow\r\n        this._leftArrow.anchor.set(0.5, 0.5);\r\n        this._leftArrow.scale.setTo(0.5, 0.5);\r\n        this._rightArrow = this.game.add.sprite(1100, 360, \"rightArrow\", null, this); // rigth arrow\r\n        this._rightArrow.anchor.set(0.5, 0.5);\r\n        this._rightArrow.scale.setTo(0.5, 0.5);\r\n        this._uiHand = this.game.add.sprite(1170, 360, \"hand\", null, this); // ui hand\r\n        this._uiHand.anchor.set(0.5, 0.5);\r\n        this._uiHand.scale.setTo(0.5, 0.5);\r\n        TweenMax.to(this._uiHand.position, 2, {\r\n            x: 100,\r\n            yoyo: true,\r\n            repeat: -1\r\n        });\r\n    }\r\n    uiHandDown() {\r\n        this.visible = false;\r\n        this.onClickEvent.dispatch('StartGame', true);\r\n    }\r\n}\r\nexports.UserInterface = UserInterface;\r\n\n\n//# sourceURL=webpack:///./src/scenes/UserInterface.ts?");

/***/ }),

/***/ "./src/scenes/mainMenuScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/mainMenuScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Player_1 = __webpack_require__(/*! ./Player */ \"./src/scenes/Player.ts\");\r\nconst Enemy_1 = __webpack_require__(/*! ./Enemy */ \"./src/scenes/Enemy.ts\");\r\nconst UserInterface_1 = __webpack_require__(/*! ./UserInterface */ \"./src/scenes/UserInterface.ts\");\r\nclass mainMenuScene {\r\n    create() {\r\n        this.game.physics.startSystem(Phaser.Physics.ARCADE);\r\n        this._player = new Player_1.Player(this.game, 0, 0);\r\n        this.game.world.addChild(this._player);\r\n        this._userInterface = new UserInterface_1.UserInterface(this.game, 0, 0);\r\n        this.game.world.addChild(this._userInterface);\r\n        this.initEvents();\r\n    }\r\n    makeEnemy() {\r\n        this._enemy = new Enemy_1.Enemy(this.game, 0, 0);\r\n        this.game.world.addChild(this._enemy);\r\n        this._enemy.onEnemyAction.add(this.enemyActionTaken, this);\r\n    }\r\n    initEvents() {\r\n        this._userInterface.onClickEvent.add(this.playerActionTaken, this);\r\n        this._player.onPlayerAction.add(this.playerActionTaken, this);\r\n    }\r\n    getRandomNumbers(minimun, maximum) {\r\n        return Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;\r\n    }\r\n    playerActionTaken(value, status) {\r\n        console.log(\"Player : \", value, status);\r\n        switch (value) {\r\n            case \"PlayerColor\":\r\n                this._playerColor = status;\r\n                break;\r\n            case \"StartGame\":\r\n                this.makeEnemy();\r\n                break;\r\n        }\r\n    }\r\n    enemyActionTaken(value, status) {\r\n        console.log(\"Enemy : \", value, status);\r\n        switch (value) {\r\n            case \"EnemyColor\":\r\n                this._enemyColor = status;\r\n                break;\r\n            case \"EnemyCompleteAnimation\":\r\n                this.makeEnemy();\r\n                break;\r\n        }\r\n    }\r\n    update() {\r\n        if (this._enemy) {\r\n            this.game.physics.arcade.collide(this._player, this._enemy.enemyContainer, this.gameOver);\r\n        }\r\n    }\r\n    gameOver(obj1, obj2) {\r\n        console.log(this._enemy.color, this._player.color);\r\n        if (this._enemyColor != this._playerColor) {\r\n            console.log(\"Game Over\");\r\n        }\r\n    }\r\n}\r\nexports.mainMenuScene = mainMenuScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/mainMenuScene.ts?");

/***/ })

/******/ });