const Form = () => {

    return (
        <form>
            <fieldset>
                <label for="tA1">
                    <span class="form_titles">Tittel</span><br />
                </label>
                <textarea name="textarea1" id="tA1" rows="4" cols="25"></textarea>
            </fieldset>
            <fieldset>
                <label for="textarea">
                    <span class="form_titles">Content</span><br />
                </label>
                <textarea name="textarea2" id="tA2" rows="10" cols="50"></textarea>
                <span><button>Add</button></span>
            </fieldset>
        </form>
    );
}

export default Form;