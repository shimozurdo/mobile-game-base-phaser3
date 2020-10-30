export default class Hud extends Phaser.Scene {

    constructor() {
        super("hud");
    }

    preload(){
        this.load.image("quit", "assets/images/quit.png");
    }

    create() {
        this.add.image(50, 50, "quit").setOrigin(0).setDepth(1);
    }

    getZoom() {
        return this.cameras.main.zoom;
    }

}