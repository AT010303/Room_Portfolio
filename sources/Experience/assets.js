export default [
    {
        name: 'base',
        data: {},
        items:
        [
            //draco

            {name: 'RoomModelDraco', source: '/assets/roombasedraco.glb', type: 'model'},
            {name : 'chairTopDraco' , source: '/assets/chairtopDraco.glb', type: 'model'},


            //textures
            //night
            {name : 'nightBaked', source: '/assets/bakedTextureNightcmp.jpg', type : 'texture'},
            //Day
            {name : 'dayBaked', source: '/assets/bakedTextureDaycmp.jpg', type : 'texture'},
            //LightMap
            {name : 'lightMap', source: '/assets/roomTextureLightMapcmp.jpg', type : 'texture'},

        ]
    }
]