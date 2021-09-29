import Todo from './Todo';

const Todos = () => {

    const todos = [...Array(6)];

    return (
        <section id="todos">
            <h1>My Todos</h1>
            <div class="todo_articles">
                {todos.map((i) =>
                    <Todo key={i} />
                )}
            </div>
        </section>
    );
}

export default Todos;