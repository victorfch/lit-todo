import {LitElement, html, css} from 'lit'
import TodoList from "../TodoList";

export default class MyTodos extends LitElement {
    static properties = {
        todos: {},
    }

    constructor() {
        super()
        this.todos = [
            {text: "Ir al gym", done: false},
            {text: "Leer un libro", done: true},
            {text: "Comer", done: false},
        ]
    }

    get input() {
        return this.renderRoot?.querySelector('#input') ?? null;
    }

    addTodo() {
        console.log(this.input.value)
        this.todos = [...this.todos, {text: this.input.value, done: false}]
        console.log(this.todos)
        this.input.value = ''
    }

    handleChange = (text) => (e) => {
        this.todos.forEach(todo => todo.text == text ? todo.done = e.target.checked : todo)
        console.log(this.todos)
    }

    render() {
        return html`
            <div>
                <todo-list .handleChange=${this.handleChange} .todos=${this.todos}></todo-list>
                <div>
                    <input id="input" type="text"/>
                    <button @click=${this.addTodo}>ADD</button>
                </div> 
            </div>
        `
    }
}

window.customElements.define('todo-list', TodoList)


