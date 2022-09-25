import { Input, Scene, Types } from 'phaser';

type Control = KeyboardControls | Input.Gamepad.Gamepad | undefined;

export interface KeyboardControls {
	W: Input.Keyboard.Key;
	S: Input.Keyboard.Key;
	A: Input.Keyboard.Key;
	D: Input.Keyboard.Key;
	I: Input.Keyboard.Key;
	J: Input.Keyboard.Key;
	K: Input.Keyboard.Key;
	L: Input.Keyboard.Key;
	Q: Input.Keyboard.Key;
	E: Input.Keyboard.Key;
}

export interface PlayerData {
	color: number;
	control: Control;
}

class GamepadHelper {
	pad: Input.Gamepad.Gamepad;
	justPressed: boolean[];
	hasPressed: boolean[];
	constructor(pad: Input.Gamepad.Gamepad) {
		this.justPressed = [];
		this.hasPressed = [];
		this.pad = pad;
		pad.buttons.forEach((v, i) => {
			this.justPressed.push(false);
			this.hasPressed.push(false);
		});
	}

	update() {
		for (let b in this.pad.buttons)
			if (this.pad.buttons[b].value) {
				if (!this.hasPressed[b]) {
					this.justPressed[b] = true;
					this.hasPressed[b] = true;
				} else this.justPressed[b] = false;
			} else this.hasPressed[b] = false;
	}
}

class PlayerColumn {
	sprite: Types.Physics.Arcade.SpriteWithStaticBody;
	//group: Phaser.GameObjects.Group;
	column: Phaser.GameObjects.Rectangle;
	color: number;
	gray: number;
	ready: boolean;
	ui: Phaser.GameObjects.Group;
	ui_buttons: Phaser.GameObjects.Sprite[];
	ui_ready: Phaser.GameObjects.Group;

	control: Control;
	gpHelper: GamepadHelper | undefined;

	constructor(x: number, y: number, color: Phaser.Display.Color) {
		const scene = MenuScene.scene;
		const w = scene.scale.width,
			h = scene.scale.height;

		const map = scene.make.tilemap({ key: 'player_select_ui' });
		map.addTilesetImage('ui', 'ui', 16, 16);

		this.color = color.color;
		this.gray = new Phaser.Display.Color().gray((160 + 100 * x) / w).color;

		this.column = scene.add.rectangle(x, h / 2, w / 4, h, this.gray);

		this.ui = scene.add.group();
		for (let i = 0; i < 3; i++) {
			const layer = map.createLayer('' + i, 'ui', x - map.widthInPixels / 2, h / 2);
			this.ui.add(layer);
		}
		this.ui_ready = scene.add.group();
		for (let i = 0; i < 2; i++) {
			this.ui_ready.add(map.createLayer('ready ' + i, 'ui', x - map.widthInPixels / 2, h / 2));
		}

		this.ui_buttons = [];
		for (let i = 0; i < 2; i++) {
			this.ui_buttons.push(
				scene.add.sprite(x + 16, h / 2 + 32 + i * 16, 'ui-buttons', 0).setVisible(false)
			);
			this.ui.add(this.ui_buttons[i]);
		}
		this.ui.setDepth(1).setVisible(false);
		this.ui_ready.setDepth(1).setVisible(false);

		this.ready = false;

		this.control = undefined;

		this.sprite = scene.physics.add
			.staticSprite(x, y, 'player')
			.setOrigin(0.5, 0.5)
			.setScale(2)
			.play('idle');

		//this.group = scene.add.group(column, this.sprite);
		this.sprite.setDepth(1);
	}

	updateUiButtons(indexes: number[]) {
		this.ui_buttons.forEach((v, i) => {
			v.setFrame(indexes[i]);
		});
	}

	updateControl(control: Control) {
		let iconShift = 48;
		if (control instanceof Input.Gamepad.Gamepad) {
			this.gpHelper = new GamepadHelper(control);
			this.gpHelper.update();
			const id = control.id.toLowerCase();
			//For PS dual shock
			iconShift = 0;
			//Xbox
			if (id.indexOf('xbox') !== -1 || id.indexOf('xinput') !== -1) iconShift = 16;
			//Joycon
			if (
				id.indexOf('nintendo') !== -1 ||
				id.indexOf('joycon') !== -1 ||
				id.indexOf('switch') !== -1
			)
				iconShift = 32;
		}
		this.updateUiButtons([1 + iconShift, 2 + iconShift]);
		this.control = control;

		this.column.fillColor = !control ? this.gray : this.color;
		this.ui.setVisible(control !== undefined);
	}

	setReady(value: boolean) {
		const scene = MenuScene.scene;
		if (value && scene.allReady) {
			scene.startGame();
		}
		if (!(value || this.ready)) this.updateControl(undefined);
		this.ready = value;

		this.ui.setVisible(!this.ready && this.control !== undefined);
		this.ui_ready.setVisible(this.ready);
	}

	update() {
		if (this.control instanceof Input.Gamepad.Gamepad) {
			this.gpHelper?.update();
			if (this.gpHelper?.justPressed[0]) this.setReady(true);
			if (this.gpHelper?.justPressed[1]) this.setReady(false);
		} else if (this.control) {
			if (justDown(this.control.K)) this.setReady(true);
			//Need to be last because control becomes null
			if (justDown(this.control.L)) this.setReady(false);
		}
	}
}

function justDown(key: Input.Keyboard.Key) {
	return Phaser.Input.Keyboard.JustDown(key);
}

class MenuScene extends Scene {
	static scene: MenuScene;
	static grayPlugin: any;
	players: PlayerColumn[];
	allReady: boolean;
	constructor() {
		super('MenuScene');
		MenuScene.scene = this;

		this.players = [];
		this.allReady = false;
	}

	preload() {
		this.load.spritesheet('player', '/assets/player1.png', {
			frameWidth: 24,
			frameHeight: 24,
		});

		this.load.tilemapTiledJSON('player_select_ui', '/assets/player_select_ui.json');
		this.load.image('ui', '/assets/GUI.png');
		this.load.spritesheet('ui-buttons', '/assets/ui-buttons.png', {
			frameWidth: 16,
			frameHeight: 16,
		});
	}

	assignControl(control: Control): boolean {
		const player = this.players.find((v, i) => !v.control);
		if (!player) return false;

		if (this.players.find(v => v.control === control)) return false;
		player.updateControl(control);

		return true;
	}

	startGame() {
		this.scene.stop('MenuScene').start('GameScene');
	}

	create() {
		const scene = this.scene.scene;

		this.game.anims.create({
			key: 'idle',
			frames: this.anims.generateFrameNumbers('player', {
				frames: [0, 1, 2, 3],
			}),
			frameRate: 8,
			repeat: -1,
		});
		this.game.anims.create({
			key: 'walk',
			frames: this.anims.generateFrameNumbers('player', {
				frames: [4, 5, 6, 7],
			}),
			frameRate: 10,
			repeat: -1,
		});
		this.game.anims.create({
			key: 'kick',
			frames: this.anims.generateFrameNumbers('player', {
				frames: [8, 9, 10, 11],
			}),
			frameRate: 6,
			repeat: -1,
		});

		scene.scale.setGameSize(512, 512 / scene.scale.gameSize.aspectRatio);
		let w = this.scale.width,
			h = this.scale.height;

		for (let i = 0; i < 4; i++)
			this.players.push(
				new PlayerColumn(w * ((i + 0.5) / 4), h * 0.25, new Phaser.Display.Color().random(25, 200))
			);

		const control = scene.input.keyboard.addKeys('W,A,S,D,I,J,K,L,Q,E') as KeyboardControls;

		scene.events.on('update', () => {
			for (const player of this.players) {
				player.update();
			}

			for (const gamepad of this.input.gamepad.gamepads) {
				if (gamepad.A) {
					if (this.assignControl(gamepad)) continue;
				}
			}
			if (justDown(control.K)) {
				this.assignControl(control);
			}

			this.allReady = this.players.filter(v => !v.ready && v.control).length === 0;
		});
	}
}

export default MenuScene;
