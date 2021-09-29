import Todo from './Todo';

const Todos = ({list}) => {

    const todos = [{title : "Title", content : "something"}];

    return (
        <section id="todos">
            <h1>My Todos</h1>
            <div class="todo_articles">
                {todos.map((i) =>
                    <Todo key={i} title={i.title} content={i.content}/>
                )}
            </div>
        </section>
    );
}

export default Todos;