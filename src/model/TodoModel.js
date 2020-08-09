export default class TodoModel {
    constructor(text, isCompleted = false) {
        this.text = text;
        this.isCompleted = isCompleted;
    }
}