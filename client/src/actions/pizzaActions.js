import axios from "axios";
export const getAllPizzas = ()=>dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try {
        const response = axios.get('/api/pizzas/getpizzas')
        console.log(response);
        dispatch({type:'GET_PIZZA_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
    } 
}