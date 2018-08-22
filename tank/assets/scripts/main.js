cc.Class({
    extends: cc.Component,
    properties: {
        // 选择的位置
        originLocY: -62,
        // 选择之后的坦克位置
        selectLocY: -112
    },
    onkeyDown (Event) {
        console.log(this.node);
        console.log(Event);
        // 采用w\s上下选择
        if (Event.keyCode === 87) {
            console.log('上');
        } 
        if (Event.keyCode === ) {

        }
    },
    //初始化监听键盘事件
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onkeyDown, this)
    }

    // update (dt) {},
});
