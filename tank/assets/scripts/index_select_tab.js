// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

// 脚本用户首页选择游戏模式单人游戏还是双人游戏

cc.Class({
    extends: cc.Component,

    properties: {
        // 根据键盘的方向移动坦克
        keyUpLocal: -60,
        keydown: -110
    },

    onLoad () {
        // 键盘的监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
    },
    onKeyDown(event) {
        if (event.keyCode === 38) {
            this.node.y = -60
        }
        if (event.keyCode === 40) {
            this.node.y = -110
        }
        if (event.keyCode === 32) {
            console.log('开始游戏！');
            cc.director.loadScene("play");
        }
    },
    onDestroy () {
        // 取消键盘的监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
    },

    start () {
    },
});
