const Todo = ({title, content}) => {

    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
            <span><button>Complete</button></span>
        </article>
    );
}

export default Todo;