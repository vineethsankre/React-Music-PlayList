import {AiOutlineDelete} from 'react-icons/ai'
import {
  TrackListItem,
  TrackImgNameContainer,
  TrackImage,
  TrackNameGenreContainer,
  TrackName,
  Genre,
  Duration,
  DeleteButton,
  DurationDeleteContainer,
} from './styledComponents'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDeleteIcon = () => {
    deleteTrack(id)
  }
  return (
    <TrackListItem>
      <TrackImgNameContainer>
        <TrackImage src={imageUrl} alt="track" />
        <TrackNameGenreContainer>
          <TrackName>{name}</TrackName>
          <Genre>{genre}</Genre>
        </TrackNameGenreContainer>
      </TrackImgNameContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onClickDeleteIcon}
        >
          <AiOutlineDelete color="#ffffff" size={20} />
        </DeleteButton>
      </DurationDeleteContainer>
    </TrackListItem>
  )
}

export default TrackItem
