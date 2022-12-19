// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachItem, getFilteredList, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachItem

  const opacityClassName = isActive ? 'active' : 'normal'

  const sendImage = () => {
    getFilteredList(id)
  }

  return (
    <li className="list-el">
      <button
        onClick={sendImage}
        type="button"
        className={`button ${opacityClassName}`}
      >
        <img alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
