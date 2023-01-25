import { useEffect } from "react";


export const DRAG = 'DRAG'

export function drag (second) {
  return async (dispatch) => {
    dispatch({
        type: DRAG,
        payload: second
    });
  }
}


export const setCount1 =  (count) => {



    return async (dispatch) => {

        let data = await fetch('https://easy-mock.24os.cn/mock/63200efce8a1c100166e1603/t1/test1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let response = await data.json();

        console.log(response.data.mock, '<--- response');

        dispatch({
            type: "INCREMENT",
            payload: response.data.mock
        });
        
    }
    // const getData = async () => {

    //     let data = await fetch('https://easy-mock.24os.cn/mock/63200efce8a1c100166e1603/t1/test1', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    
    //     let response = await data.json();

    //     console.log(response, '<--- response');
        
    //     return response;
    
    // }

    // let data = await getData();
    // console.log(data, '<---- data');
    




    // return {
    //     type: "INCREMENT",
    //     payload: count
    // }

    // return {
    //     type: "INCREMENT"
    // }

}