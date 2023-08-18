import { NavDropdown, Row } from 'react-bootstrap';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem, LoadingMessage } from './index';

export const GifGrid = ({ category, numberCategories, handleDeleteCategories, handleDeleteCategory }) => {

    const { dataGifs, isLoading } = useFetchGifs(category);

    return (
        <>
            {
                isLoading ? <LoadingMessage category={ category } /> :
                <>
                    {/* Title category and options*/}
                    <div className="h3 pb-2 mb-4 border-3 border-bottom border-dark-subtle" data-id={category}>
                        <NavDropdown
                            title={ category.charAt(0).toUpperCase() + category.slice(1) }
                            menuVariant="dark">
                            <NavDropdown.Item onClick={ handleDeleteCategory }>{ `Delete ${category} category` }</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={ handleDeleteCategories }>Delete all categories</NavDropdown.Item>
                        </NavDropdown>
                    </div>

                    {/* Show all gifs of the category */}
                    <Row xs={1} md={2} lg={3} className="g-4 mb-4 mb-md-5">
                    {
                        dataGifs.length === 0 ? <h3 className='text-body-secondary'>{ `Not results for "${category}" :(` }</h3> :
                        dataGifs.map(dataGif => (
                            <GifItem
                                key={ dataGif.id }
                                { ...dataGif }
                            />
                        ))
                    }
                    </Row>
                </>
            }
        </>
    )
}