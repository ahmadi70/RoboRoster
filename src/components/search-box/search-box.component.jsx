import './search-box.styles.css'

const SearchBox = ({ onChangeHandler }) => {
  return (
    <input
      className='search-box-container'
      onChange={onChangeHandler}
      placeholder='search'
      type='search'
    />
  )
}

export default SearchBox