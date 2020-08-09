import uuid from 'react-uuid';

export default class TodoModel {
    constructor({ text, id = uuid(), isCompleted = false }) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
    }
}