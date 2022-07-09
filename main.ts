namespace SpriteKind {
    export const animal = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage2`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim`,
        50,
        false
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim0`,
        50,
        false
        )
    }
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.setImage(assets.image`myImage4`)
        pause(50)
        mySprite2.setImage(assets.image`myImage3`)
        Sheep += -1
        if (Sheep == 0) {
            mySprite2.destroy()
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage`)
    facing = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage0`)
    facing = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage1`)
})
let facing = 0
let Sheep = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(assets.image`myImage3`, SpriteKind.animal)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 11))
Sheep = 3
forever(function () {
    if (Sheep != 0) {
        mySprite2.x += randint(-2, 2)
        mySprite2.y += randint(-2, 2)
        pause(500)
    }
})
