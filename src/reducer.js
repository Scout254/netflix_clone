export const initialState = {
    trending:[],
    rated:[],
    popular:[],
    continuewatching:[],
    coming:[],
    selectedMovie:"",
    details:[],
    similar:[],
    user:null,

    
}
const reducer=(state,action) =>{
    console.log(action);
    switch(action.type){
        case "SET_TRENDING":
            return{
                ...state,
                trending:action.trending,
            }
        case "SET_TOP_RATED":
            return{
                ...state,
                rated:action.rated,
            }
        case "SET_POPULAR":
            return{
                ...state,
                popular:action.popular,
            }
        case "SET_CONTINUE_WATCHING":
            return{
                ...state,
                continuewatching:action.continuewatching,
            }
        case "SET_UPCOMING":
            return{
                ...state,
                coming:action.coming,
            }
        case "SET_SELECTED_MOVIE":
            return{
                ...state,
                selectedMovie:action.selectedMovie,
            }
        case "SET_DETAILS":
            return{
                ...state,
                details:[action.details],
            }
        case "SET_SIMILAR":
            return{
                ...state,
                similar:action.similar,
            }
        case "SET_LOGIN":
            return{
                ...state,
                user:action.user,
            }
        case "SET_LOGOUT":
            return{
                ...state,
                user:null,
            }
        
    }
}
export default reducer;