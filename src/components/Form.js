import { useState } from 'react';

const Form = ({ addTodos }) => {

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    
    const handleTitleChange = (e) => {
        setNewTitle(e.currentTarget.value);
    }

    const handleContentChange = (e) => {
        setNewContent(e.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodos((prev) => [...prev, {title : newTitle, content : newContent}]);
      }

    return (
        <form>
            <fieldset>
                <label htmlFor="tA1">
                    <span className="form_titles">Tittel</span><br />
                </label>
                <textarea name="textarea1" id="tA1" rows="4" cols="25" onChange={handleTitleChange} value={newTitle}></textarea>
            </fieldset>
            <fieldset>
                <label htmlFor="tA2">
                    <span className="form_titles">Content</span><br />
                </label>
                <textarea name="textarea2" id="tA2" rows="10" cols="50" onChange={handleContentChange} value={newContent}></textarea>
                <span><button type="submit" onClick={handleSubmit}>Add</button></span>
            </fieldset>
        </form>
    );
}

export default Form;