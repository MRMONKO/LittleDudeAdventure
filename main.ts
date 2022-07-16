namespace SpriteKind {
    export const animal = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const EntityItem = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage2`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite3)) {
        if (farmquest1 == 0) {
            story.printCharacterText("Well Howdy, Little Fella, Need Somethin To Do?", "")
            pause(500)
            story.printCharacterText("I've Got A Job That Could use Some Doin!", "")
            pause(500)
            story.printCharacterText("I Left My Seeds Across That There Bridge, But I'm Too Weak To Go Get Them", "")
            pause(500)
            story.printCharacterText("Could You Help Me Out, There's Something In It For you!", "")
            farmquest1 = 1
        } else if (farmquest1 == 1) {
            if (seedhave == 0) {
                story.printCharacterText("It's Across The Bridge, Hurry Back!", "")
            } else if (seedhave == 1) {
                story.printCharacterText("Thanks Little One, You're A Life Saver!", "")
                pause(500)
                story.printCharacterText("This Was My Fathers Pass, If You Take It, You can get access to the caves!", "")
                pause(500)
                story.printCharacterText("They're Closed Right Now, But Try Again Later!", "")
                pause(500)
                farmquest1 = 2
            } else {
                story.printCharacterText("I'll Have More Chores For You Later if You Like!", "")
            }
        } else {
        	
        }
    }
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
let seedhave = 0
let farmquest1 = 0
let mySprite3: Sprite = null
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
mySprite3 = sprites.create(assets.image`myImage5`, SpriteKind.NPC)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(7, 2))
farmquest1 = 0
let mySprite4 = sprites.create(assets.image`myImage6`, SpriteKind.EntityItem)
tiles.placeOnTile(mySprite4, tiles.getTileLocation(17, 5))
game.onUpdate(function () {
	
})
forever(function () {
    if (Sheep != 0) {
        mySprite2.x += randint(-2, 2)
        mySprite2.y += randint(-2, 2)
        pause(500)
    }
    if (mySprite.overlapsWith(mySprite4)) {
        mySprite4.destroy()
        seedhave = 1
    }
})
