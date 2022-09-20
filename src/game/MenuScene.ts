import { Scene } from 'phaser';

class PlayerColumn {
	sprite: Phaser.GameObjects.Image;
	constructor(x: number, y: number) {
		this.sprite = MenuScene.scene.add.image(x, y, 'player', 0).setOrigin(0.5, 0.5).setScale(2);
	}
}

class MenuScene extends Scene {
	static scene: MenuScene;
	constructor() {
		super('MenuScene');
		MenuScene.scene = this;
	}

	preload() {
		this.load.spritesheet('player', '/assets/player1.png', {
			frameWidth: 24,
			frameHeight: 24,
		});
	}

	create() {
		/*this.scene.stop('MenuScene');
		this.scene.start('GameScene');*/
		const scene = this.scene.scene;

		scene.scale.setGameSize(512, 512 / scene.scale.gameSize.aspectRatio);
		let w = this.scale.width,
			h = this.scale.height;
		const players: PlayerColumn[] = [];

		for (let i = 0; i < 4; i++) players.push(new PlayerColumn(w * ((i + 0.5) / 4), h * 0.25));

		console.log(players);

		scene.events.on('update', () => {
			for (const gamepad of this.input.gamepad.gamepads) {
				if (gamepad.A) {
				}
			}
		});
	}
}

export default MenuScene;
