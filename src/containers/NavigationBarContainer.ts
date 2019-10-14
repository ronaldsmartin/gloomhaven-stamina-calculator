import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import NavigationBar from '../components/NavigationBar';
import { AppState } from '../redux/reducers/app';
import { ALL_CHARACTERS, CharacterId } from '../redux/types/characters';
import { changeCharacter } from '../redux/actions/characters';

const mapStateToProps = (state: AppState) => {
    return {
        currentCharacterId: state.character.current.id,
        allCharacters: ALL_CHARACTERS,
    }
}
const matchDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleChange: (characterId: CharacterId) => dispatch(changeCharacter(characterId))
    }
}

const NavigationBarContainer = connect(
    mapStateToProps,
    matchDispatchToProps,
)(NavigationBar)

export default NavigationBarContainer;