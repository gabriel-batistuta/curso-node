class Person {
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        return `\nHello my name is ${this.name}!\n`
    }
}

module.exports = {
    Person,
};