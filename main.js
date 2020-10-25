import Handler from "./scenes/handler.js"
import Title from "./scenes/title.js"
import Preload from "./scenes/preload.js"

const maxSizeWidthScreen = 1920;
const maxSizeHeightScreen = 1080;
const minSizeWidthScreen = 320;
const minSizeHeightScreen = 480;
const sizeWidthScreen = 640;
const sizeHeightScreen = 960;

const config = {
    title: "Math Attack",
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: "game",
        width: sizeWidthScreen,
        height: sizeHeightScreen,
        min: {
            width: minSizeWidthScreen,
            height: minSizeHeightScreen
        },
        max: {
            width: maxSizeWidthScreen,
            height: maxSizeHeightScreen
        }
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 1000 }
        }
    },
    dom: {
        createContainer: true
    },
    scene: [Handler, Preload, Title]
};

const game = new Phaser.Game(config);

game.screenSize = {
    maxWidth: maxSizeWidthScreen,
    minHeight: maxSizeHeightScreen,
    minWidth: minSizeWidthScreen,
    maxHeight: minSizeHeightScreen,
    width: sizeWidthScreen,
    height: sizeHeightScreen
}

