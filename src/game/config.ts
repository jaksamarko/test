import { Types } from 'phaser';
import { GameScene } from './GameScene';
import MenuScene from './MenuScene';

const gameConfig: Types.Core.GameConfig = {
	fps: { target: 60, min: 30, smoothStep: true } as Types.Core.FPSConfig,
	type: Phaser.WEBGL,

	scale: {
		//mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
		parent: 'phaser-game',
		max: {
			height: window.innerHeight,
			width: window.innerWidth,
		},
		fullscreenTarget: 'phaser-game',
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: false,
			gravity: { y: 1500 },
		},
	},
	input: {
		gamepad: true,
	},
	render: {
		antialias: false,
		pixelArt: true,
		roundPixels: true,
	},
	scene: [MenuScene, GameScene],
};

export default gameConfig;
