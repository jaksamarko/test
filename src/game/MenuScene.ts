import { Input, Scene, Types } from 'phaser';

type Control = KeyboardControls | Input.Gamepad.Gamepad | undefined;

export interface KeyboardControls {
	W: Input.Keyboard.Key;
	S: Input.Keyboard.Key;
	A: Input.Keyboard.Key;
	D: Input.Keyboard.Key;
	id: number;
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

	control: Control;
	gpHelper: GamepadHelper | undefined;

	constructor(x: number, y: number, color: Phaser.Display.Color) {
		const scene = MenuScene.scene;
		const w = scene.scale.width,
			h = scene.scale.height;

		this.color = color.color;
		this.gray = new Phaser.Display.Color().gray((160 + 100 * x) / w).color;

		this.column = scene.add.rectangle(x, h / 2, w / 4, h, this.gray);

		this.control = undefined;

		this.sprite = scene.physics.add
			.staticSprite(x, y, 'player')
			.setOrigin(0.5, 0.5)
			.setScale(2)
			.play('idle');

		//this.group = scene.add.group(column, this.sprite);
		this.sprite.setDepth(1);
	}

	updateControl(control: Control) {
		if (control instanceof Input.Gamepad.Gamepad) {
			this.gpHelper = new GamepadHelper(control);
		}
		this.control = control;

		this.column.fillColor = !control ? this.gray : this.color;
	}

	update() {
		if (this.control instanceof Input.Gamepad.Gamepad) {
			//console.log((this.control.pad as any).buttons[0].pressed);
			this.gpHelper?.update();
			if (this.control.B) this.updateControl(undefined);
		} else if (this.control) {
			if (this.control.S.isDown) this.updateControl(undefined);
		}
	}
}

class MenuScene extends Scene {
	static scene: MenuScene;
	static grayPlugin: any;
	players: PlayerColumn[];
	constructor() {
		super('MenuScene');
		MenuScene.scene = this;

		this.players = [];
	}

	preload() {
		this.load.spritesheet('player', '/assets/player1.png', {
			frameWidth: 24,
			frameHeight: 24,
		});
	}

	assignControl(control: Control): boolean {
		const player = this.players.find((v, i) => !v.control);
		if (!player) return false;

		if (this.players.find(v => v.control === control)) return false;
		player.updateControl(control);

		return true;
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

		const control = scene.input.keyboard.addKeys('W,A,S,D') as KeyboardControls;

		scene.events.on('update', () => {
			for (const gamepad of this.input.gamepad.gamepads) {
				if (gamepad.A) {
					if (this.assignControl(gamepad)) continue;
				}
			}
			if (control.W.isDown) {
				this.assignControl(control);
			}

			for (const player of this.players) {
				player.update();
			}
		});
	}
}

export default MenuScene;
