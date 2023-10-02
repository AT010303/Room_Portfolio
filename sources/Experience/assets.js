export default [
    {
        name: 'base',
        data: {},
        items:
        [
            {name : 'RoomModel' , source: '/assets/roomModel.glb', type: 'model'},
            {name : 'chairTop' , source: '/assets/chairTop.glb', type: 'model'},


            //textures
            //night
            {name : 'nightBaked0', source: '/assets/furniture.jpg', type : 'texture'},
            {name : 'nightBaked1', source: '/assets/deskShelfStuf.jpg', type : 'texture'},
            {name : 'nightBaked2', source: '/assets/chairTvclockstuf.jpg', type : 'texture'},
            {name : 'nightBaked3', source: '/assets/plantNight.jpg', type : 'texture'},
            //day
            {name : 'dayBaked0', source: '/assets/furnitureDay.jpg', type : 'texture'},
            {name : 'dayBaked1', source: '/assets/deskShelfStufDay.jpg', type : 'texture'},
            {name : 'dayBaked2', source: '/assets/chairTvclockstufDay.jpg', type : 'texture'},
            {name : 'dayBaked3', source: '/assets/plantDay.jpg', type : 'texture'},

        ]
    }
]