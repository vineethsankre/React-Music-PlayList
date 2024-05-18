import styled from 'styled-components'

export const TrackListItem = styled.li`
    list-style-type: none;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;
`
export const TrackImgNameContainer = styled.div`
    display:flex;
    align-items:center;
`
export const TrackImage = styled.img`
    width: 100px;
    height:80px;
    margin-right: 15px;
`
export const TrackNameGenreContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`
export const TrackName = styled.p`
    color:#ffffff;
    font-family:"Roboto";
    font-size:16px;
    font-weight:500;
    margin:0px
`
export const Genre = styled(TrackName)`
    color:#3b82f6;
    margin-top:5px;
`
export const DurationDeleteContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`
export const Duration = styled(TrackName)`
    font-size:16px;
`
export const DeleteButton = styled.button`
    border:none;
    background:none;
    outline:none;
    cursor: pointer;
    margin-left:25px;
`
