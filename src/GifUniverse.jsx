import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { AddCategory, GifGrid } from './components/index';

export const GifUniverse = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (category) => {
        if(categories.includes(category)) return;
        setCategories([ category, ...categories ]);
    }

    const handleDeleteCategories = () => {
        const isConfirmed = window.confirm('Are you sure you want to delete all categories?');
        isConfirmed && setCategories([]);
    }

    const handleDeleteCategory = (e) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this category?');
        if(!isConfirmed) return; 
        const parentWithDataId = e.target.closest('[data-id]');
        const category = parentWithDataId.getAttribute('data-id');
        const newCategories = categories.filter(cat => cat !== category);
        setCategories(newCategories);
    }

    return (
        <Container>
            
            <h1 className="text-center my-md-5 my-4">Gif Universe</h1>

            <AddCategory onAddNewCategory={ onAddCategory } />

            {
                categories.length === 0 ? (
                    <h2 className='text-body-secondary'>Your gifs will be displayed here :')</h2>
                ) : (
                    categories.map(category => (
                        <GifGrid
                            category={ category }
                            key={ category }
                            numberCategories={ categories.length }
                            handleDeleteCategories={ handleDeleteCategories }
                            handleDeleteCategory={ handleDeleteCategory }   
                        />
                    ))
                )
            }
            
        </Container>
    )
}