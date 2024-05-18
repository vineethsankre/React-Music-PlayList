import styled from 'styled-components'

export const MusicPlaylistContainer = styled.div`
    background-color: #152850;
    min-height: 70vh;
    display:flex;
    flex-direction:column;
    align-items:center;

`
export const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:90%;
    margin-top:30px;
`
export const Heading = styled.h1`
    color:#ffffff;
    font-family:"Roboto";
    font-size:24px;
    font-weight:500;
`
export const SearchInputContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:30px;
    border:none;
    background-none;
    outline:none;
    border:1px solid #ffffff;
    border-radius: 4px;
    padding:6px 10px;
`
export const SearchInput = styled.input`
    border: none;
    outline:none;
    color:#cbd5e1;
    font-family:"Roboto";
    background-color:transparent;
    height:30px;
`
export const TrackListContainer = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    overflow-y: auto;
    width:90%;
    padding-left:0px;
    margin-bottom:40px;
`
export const NoSongsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

export const NoSongsText = styled(Heading)`
    font-size: 48px;
    font-weight:600;
`
