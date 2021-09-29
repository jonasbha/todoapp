import Todo from './Todo';

const Todos = () => {


    return (
        <section id="todos">
            <h1>My Todos</h1>
            <div class="todo_articles">
            {[...Array(6)].map((i) =>
                <Todo key={i} />
            )}
            </div>
        </section>
    );
}

export default Todos;