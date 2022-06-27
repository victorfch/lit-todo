import {LitElement, html} from 'lit'

export default class TodoList extends LitElement {
    static properties = {
        todos: {type: Array}
    }

    render() {
        return html`
            <div>
                ${this.todos.map(item => html`
                    <div>
                        <input @change=${this.handleChange(item.text)} type="checkbox" ?checked=${item.done}/>
                        <label>${item.text}</label>
                    </div>
                `)}
            </div>
        `
    }
}

