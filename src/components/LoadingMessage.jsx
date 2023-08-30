import PropTypes from 'prop-types';

export const LoadingMessage = ({ category }) => {
  return (
    <>
        <h2 className='text-body-secondary text-center'>{ `Exploring "${category}" in the Gif-Verse` }</h2>
        <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
        </div>
    </>
  )
}

LoadingMessage.propTypes = {
  category: PropTypes.string.isRequired,
}