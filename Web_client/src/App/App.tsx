import * as React from 'react'
import styles from './App.module.sass'


interface Action {
	type: string,
	data?: any
}

interface Props{
	state: any,
	dispatch: (action:Action)=>void
}


export const App: React.FC<Props> = ({state, dispatch}) => {
	return (
		<div className={styles.App}>
			Cities game App
		</div>
	)
}