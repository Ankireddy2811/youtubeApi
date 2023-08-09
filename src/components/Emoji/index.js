import './index.css'

const Emoji = props => {
  const {eachContent, onButtonClicked} = props
  const {name, imageUrl} = eachContent

  const onEmojiClick = () => {
    onButtonClicked()
  }
  return (
    <li className="each-emoji">
      <button className="button" type="button" onClick={onEmojiClick}>
        <img src={imageUrl} alt={name} className="emoji-image" />
      </button>

      <p className="description">{name}</p>
    </li>
  )
}

export default Emoji
