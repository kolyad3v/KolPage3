import { FC } from 'react'
import TextCreator from '../Utils/TextCreator'
export const Landing: FC = () => {
	return (
		<>
			<TextCreator
				name='nickGillham'
				fontSize={0.4}
				color='white'
				rotation={[0, 1, 0]}
				position={[7.9, 0.2, 1.2]}
				text='Nick Gillham'
			/>
		</>
	)
}
