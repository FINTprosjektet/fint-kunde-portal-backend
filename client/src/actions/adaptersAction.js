export const FETCH_REQUEST="FETCH_REQUEST";
export const FETCH_SUCCESS="FETCH_SUCCESS";
export const FETCH_ERROR="FETCH_ERROR";

export const url='https://content.viaplay.se/pc-se/serier/samtliga';
//export const url='https://pokeapi.co/api/v2/pokemon';
console.log(url);
function fetchPostsRequest(){
  return {
    type: FETCH_REQUEST
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

function fetchPostsError() {
  return {
    type: FETCH_ERROR
  }
}
export function fetchPostsWithRedux() {
	console.log('fetching', "background: blue; color: yellow; padding-left:10px;");	
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
      	console.log('fetching', "background: blue; color: yellow; padding-left:10px;");	
    	if(response.status === 200){
        dispatch(fetchPostsSuccess(json));
      }
      else{
    	console.log('fetching', "background: blue; color: yellow; padding-left:10px;");	
        dispatch(fetchPostsError());
      }
    })
  }
}

function fetchPosts() {
  
  return fetch(url, { method: 'GET'})
     .then( response => Promise.all([response,response.json()]));
}