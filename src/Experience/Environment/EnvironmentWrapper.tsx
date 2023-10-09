// import { useControls } from 'leva'
import { useControls } from 'leva'
import Lighting from './Lighting'

const EnvironmentWrapper = () => {
	const backgroundColor = useControls({
		value: '#040507',
	})

	return (
		<>
			<color
				attach='background'
				args={[backgroundColor.value]}
			/>

			<Lighting />
		</>
	)
}

export default EnvironmentWrapper
