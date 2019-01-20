/**
 *  author      : t1ng
 *  createTime  : 2019/1/20
 *  description :建造者模式：
 */
class Human {
    constructor(param) {
        console.log('111', param)
        this.skill = param && param.skill || '保密';
        this.hobby = param && param.hobby || '保密';
    }

    getSkill() {
        return this.skill;
    }

    getHobby() {
        return this.hobby;
    }
}

class Named {
    constructor(name) {
        this.wholeName = name;
        if (name.indexOf(' ') > -1) {
            this.FirstName = name.slice(0, name.indexOf(' '));
            this.secondName = name.slice(name.indexOf(' '));
        }
    }
}

class Work {
    constructor(work) {
        this._getWork(work);
    }

    changeWork(work) {
        this._getWork(work);
    }

    changeDescript(setence) {
        this.workDescript = setence;
    }

    _getWork(work) {
        switch (work) {
            case'code':
                this.work = '工程师';
                this.workDescript = "coding evey day ";
            case 'UI':
            case 'UE':
                this.work = '设计师';
                this.workDescript = 'design is art';
            case 'teach':
                this.work = '教师';
                this.workDescript = 'share make me happy';
            default:
                this.work = work;
                this.workDescript = "sorry,can't find you work description";
        }
    }
}


class Person extends Human {
    constructor(name, work, param) {
        super(param);
        this.name = new Named(name);
        this.work = new Work(work);

    }
}

let p = new Person('tt w', 'code', {hobby: 'game'})
console.log(p.hobby)
console.log(p.name.FirstName)
console.log(p.work.work)
p.work.changeDescript('change desc')
console.log(p.work.workDescript);

