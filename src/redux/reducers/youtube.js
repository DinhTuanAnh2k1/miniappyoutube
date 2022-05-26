import { YoutubeAction } from '../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
	playing: undefined,
	listMusic: [],
	selectVideoIndex: null,
}

const youtube = (state = initialState, action) => {
	switch (action.type) {
		case YoutubeAction.SELECT_ITEM:
			let oldList = [...state.listMusic];
			oldList.push(action.data);
			AsyncStorage.setItem('LIST_MUSIC', JSON.stringify(oldList));
			return {
				...state,
				listMusic: oldList,
			};
		case YoutubeAction.UPDATE_LIST:
			return{
				...state,
				listMusic: action.data,
			}
		case YoutubeAction.NEXT_SONG:
			if(!state.listMusic.length) return state;
			let nextSong = state.listMusic[0];
			let newList = [...state.listMusic];
			newList = newList.slice(1);
			return{
				...state,
				listMusic: newList,
				playing: nextSong
			}
		case YoutubeAction.SELECT_VIDEO:
			let selectVideo = state.selectVideoIndex;
			let newListVideo = [...state.listMusic];
			newListVideo = newList.slice(selectVideo);
			return{
				...state,
				listMusic: newList,
				playing: selectVideo
			}
		default:
			return state;
	}
}

export default youtube;
