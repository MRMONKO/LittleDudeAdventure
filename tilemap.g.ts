// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "level":
            case "level1":return tiles.createTilemap(hex`1e00140001010101010101010101040401010101070707070a0a0b0a0a0a0a0a0a0a01010301010101010103040401010101070707070a0a0c0c0c0c0c0a0a0a01010201080301010202040403010101070807070a0a0c0c0c0c0c0a0a0a01030802020202020202040403080103070707070a0a0a0a0a0c0c0a0a0a01010303010101030302040401010101070707070a0a0a0a0a0c0c0a0a0a01010201010303010104040403020301070707070a0a0a0c0c0c0c0c0c0c01010203010302010104040301010201070707070a0a0a0c0c0c0c0c0c0c01030102010302010506010103010102070707070a0a0a0c0c0a0a0a0c0c01010102010302010506010103010102070707070a0a0a0c0c0a0a0a0c0c01010108010302040403010103010802070807070c0c0c0c0c0a0a0a0c0c01010101020302040401010101030102070707070c0c0c0c0c0a0a0a0c0c01010202010104040401010101030102070707070a0a0a0a0a0a0a0a0c0c01010101020104040101010101010302070707070a0a0a0a0a0a0a0a0c0c01010101010404040202020202030202070707070a0a0a0a0a0a0a0a0c0c01010101040404010101010103010101070707070a0a0a0a0a0a0a0a0c0c08080808040404080808080801010101070707070a0a0a0a0a0a0a0a0c0c07070707040404070707070807070707070707070a0a0c0c0c0c0c0c0c0c07070707040404070707070807070807070707070a0a0c0c0c0c0c0c0c0c07070707040404070707070807070707070707070a0a0c0c0a0a0a0a0c0c07070707040404070707070808070707070707070a0a0c090a0a0a0a0c0c`, img`
..........22........2222222222
..........22........22.....222
....2.....22.....2..22.....222
..2.......22.2......22222..222
..........22........22222..222
.........222........222.......
.........22.........222.......
....................222..222..
....................222..222..
...2...22.....2..2.......222..
.......22................222..
......222...........22222222..
......22............22222222..
.....222............22222222..
....222.............22222222..
222222222222........22222222..
....222....2........22........
....222....2..2.....22........
....222....2........22..2222..
....222....22.......22..2222..
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.tileGrass1,myTiles.tile7,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
