import Todo from './Todo';

const Todos = ({list, deleteTodos}) => {

    return (
        <section id="todos">
            <h1>My Todos</h1>
            <div className="todo_articles">
                {list.map((i) =>
                    <Todo key={i.content} current={i} title={i.title} content={i.content} deleteTodo={deleteTodos} list={list}/>
                )}
            </div>
        </section>
    );
}

export default Todos;