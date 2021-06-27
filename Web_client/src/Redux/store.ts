import * as redux from 'redux';



type Action = {
	type: string,
	data?: any
}

const initialState = {

}



const baseReducer = (state: any = initialState, action: Action) =>{

}


export const store = redux.createStore(baseReducer)