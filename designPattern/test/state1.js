/**
 *  author      : t1ng
 *  createTime  : 2019/1/14
 *  description : 状态模式：运动状态，可以对状态修改或者调用
 */

class MarryState {
    constructor() {
        this._currentState = {};
        this.states = {
            jump: this.jump,
            shoot: this.shoot
        }
    }


    jump() {
        console.log('jump')
    }

    shoot() {
        console.log('shoot')
    }
}

class Action {
    constructor() {
        this._currentState = {};
        this.marryState = new MarryState();
    }

    changeState() {
        let arg = arguments;

        if (arg.length) {
            for (let i = 0; i < arg.length; i++) {
                this._currentState[arg[i]] = true;
            }
        }

    }

    goes() {
        console.log('动作触发一次')
        for (let i in this._currentState) {
            this.marryState.states[i] && this.marryState.states[i]()
        }

    }
}

class MarryControl {
    constructor() {
        this.action = new Action();
    }

    change() {
        this.action.changeState(...arguments);
        return this;
    }

    goes() {

        this.action.goes();
        return this;
    }
}

let marry = new MarryControl();
marry.change('jump', 'shoot')
    .goes()
    .goes()
    .change('shoot')
    .goes()