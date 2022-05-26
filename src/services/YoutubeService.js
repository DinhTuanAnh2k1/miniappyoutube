import { YoutubeAction } from '../redux/actions';
import Store from '../redux/Store';
const KEYAPI = "AIzaSyDhXTnh9CJlI05kQaXPQQgdVqOxNen9OQM";

class YoutubeService{
    searchByKeyword = async(keyword)=>{
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&key=${KEYAPI}`);
        const jsonRes = await res.json();
        return jsonRes.items;
    }

    initPlayer = () => {
        const {listMusic,playing} = Store.getState().youtube;
        if(playing){

        }else{
            if(listMusic && listMusic.length > 0){
                Store.dispatch({
                    type: YoutubeAction.NEXT_SONG
                })
            }
        }
    }
}

export default new YoutubeService();