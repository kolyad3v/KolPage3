import { useControls } from 'leva'

const Lighting = () => {
	const directionLightProps = useControls('light', {
		position: [0, 5, 0],
		intensity: 1,
	})
	return (
		<>
			<directionalLight {...directionLightProps} />
			<ambientLight intensity={0.5} />
		</>
	)
}

export default Lighting
