export default class Preload extends Phaser.Scene {

    width = null
    height = null
    handlerScene = null
    sceneStopped = false

    constructor() {
        super({ key: 'preload' })
    }

    preload() {
        // Images
        this.load.image('logo', 'assets/images/logo.png')
        this.load.image('guide', 'assets/images/540x960-guide.png')
        this.load.image('button', 'assets/images/button.png')
        //---------------------------------------------------------------------->
        this.canvasWidth = this.sys.game.canvas.width
        this.canvasHeight = this.sys.game.canvas.height

        this.width = this.game.screenBaseSize.width
        this.height = this.game.screenBaseSize.height

        this.handlerScene = this.scene.get('handler')
        this.handlerScene.sceneRunning = 'preload'
        this.sceneStopped = false

        let progressBox = this.add.graphics()
        progressBox.fillStyle(0x000, 0.8)
        progressBox.fillRect((this.canvasWidth / 2) - (210 / 2), (this.canvasHeight / 2) - 5, 210, 30)
        let progressBar = this.add.graphics()

        this.load.on('progress', (value) => {
            progressBar.clear()
            progressBar.fillStyle(0xFF5758, 1)
            progressBar.fillRect((this.canvasWidth / 2) - (200 / 2), (this.canvasHeight / 2), 200 * value, 20)
        })

        this.load.on('complete', () => {
            progressBar.destroy()
            progressBox.destroy()
            this.time.addEvent({
                delay: this.game.debugMode ? 3000 : 4000,
                callback: () => {
                    this.sceneStopped = true
                    this.scene.stop('preload')
                    this.handlerScene.cameras.main.setBackgroundColor("#020079")
                    this.handlerScene.launchScene('title')
                },
                loop: false
            })
        })
    }

    create() {
        const { width, height } = this
        // CONFIG SCENE         
        this.handlerScene.updateResize(this)
        if (this.game.debugMode)
            this.add.image(0, 0, 'guide').setOrigin(0).setDepth(1)
        // CONFIG SCENE 

        // GAME OBJECTS  
        this.add.image(width / 2, height / 2, 'logo').setOrigin(.5)
        // GAME OBJECTS  
    }
}
