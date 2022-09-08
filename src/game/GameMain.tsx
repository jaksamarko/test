import { Input, Scene, Types } from "phaser";
import { useRef } from "react";
import { useGame } from "./useGame";

interface Controls {
  W: Input.Keyboard.Key;
  S: Input.Keyboard.Key;
  A: Input.Keyboard.Key;
  D: Input.Keyboard.Key;
}

export class BootScene extends Scene {
  preload() {
    this.load.spritesheet("player", "/assets/player1.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
  }

  create() {
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [0, 1, 2, 3],
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [4, 5, 6, 7],
      }),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: "kick",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [8, 9, 10, 11],
      }),
      frameRate: 6,
      repeat: -1,
    });

    /*const spr = this.physics.add.sprite(200, 200, "player").setScale(4);
    spr.play("walk");*/

    var playerBody = this.physics.add
      .group({
        collideWorldBounds: true,
      })
      .setOrigin(0.5, 0.5);

    const spr = playerBody
      .create(200, 200)
      .setScale(4)
      .setOrigin(0.5, 0.5) as Types.Physics.Arcade.SpriteWithDynamicBody;
    spr.play("idle");

    const control = this.input.keyboard.addKeys("W,A,S,D") as Controls;

    control.W.on("down", () => {
      console.log("Yay");
    });

    this.game.events.on("step", (time: number, delta: number) => {
      if (control.D.isDown) spr.setVelocityX(delta * 4);
      else if (control.A.isDown) spr.setVelocityX(-(delta * 4));
      else spr.setVelocityX(0);
    });
  }
}

const gameConfig: Types.Core.GameConfig = {
  width: "100%",
  height: "100%",
  fps: { target: 60, min: 30, smoothStep: true } as Types.Core.FPSConfig,
  type: Phaser.AUTO,
  /*scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },*/
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 500 },
    },
  },
  render: {
    antialias: false,
    pixelArt: true,
    roundPixels: true,
  },
  scene: BootScene,
};

const GameMain = () => {
  const parentEl = useRef<HTMLDivElement>(null);
  useGame(gameConfig, parentEl);
  return <div ref={parentEl} className="gameContainer" />;
};

export default GameMain;
