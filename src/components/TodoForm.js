import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault(); // prevent the browser from refreshing the page when the form is submitted
        
        const now = new Date();
        let idGenerated = now.getHours();
        idGenerated *= 100;
        idGenerated += now.getMinutes();
        idGenerated *= 100;
        idGenerated += now.getSeconds();

        props.onSubmit({
            id: idGenerated,
            text: input
        });

        setInput('');
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input 
                type='text' 
                placeholder='Update item'
                value={input}
                name='text'
                className='todo-input shadow'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button shadow'>Update</button>
            </>
        ) : (
            <>
            <input 
                type='text' 
                placeholder='Add content'
                value={input}
                name='text'
                className='todo-input shadow'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button shadow'>Add</button>
            </>
        )
    }
    </form>
  );
}

export default TodoForm
