import { useState } from 'react';

export const AddCategory = ({ onAddNewCategory }) => {

    const [ valueInput, setValueInput ] = useState('');
    const [ isValid, setIsValid ] = useState(true);

    const onNewCategory = (e) => {
        setValueInput(e.target.value);
    }

    const onAddCategory = (e) => {
        e.preventDefault();
        const newCategory = valueInput.trim().toLowerCase();
        newCategory === '' ? setIsValid(false) : (
            onAddNewCategory(newCategory),
            setIsValid(true),
            e.target.querySelector('input').blur()
        );
        setValueInput('');
    }

    return (
        <form onSubmit={ onAddCategory } className='mb-md-5 mb-3'>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className={ isValid ? 'form-control' : 'form-control is-invalid' }
                    id="floatingInputValue"
                    placeholder="Search gifs"
                    value={ valueInput }
                    onChange={ onNewCategory }
                />
                <label htmlFor="floatingInputValue">Search gifs</label>
            </div>
        </form>
    )
}