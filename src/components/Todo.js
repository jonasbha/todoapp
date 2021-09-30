const Todo = ({title, content, list, deleteTodo, current}) => {

    const handleClick = () => {
        deleteTodo(list.filter(item => item !== current));
    }

    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
            <span><button onClick={handleClick}>Complete</button></span>
        </article>
    );
}

export default Todo;