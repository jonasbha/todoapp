import Todo from './Todo';

const Todos = ({list}) => {

    return (
        <section id="todos">
            <h1>My Todos</h1>
            <div className="todo_articles">
                {list.map((i) =>
                    <Todo key={i} title={i.title} content={i.content}/>
                )}
            </div>
        </section>
    );
}

export default Todos;