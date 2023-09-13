import { useControls } from 'leva'

const Lighting = () => {
	const directionLightProps = useControls({
		position: [1, 9, 3],
		intensity: 1,
	})
	return (
		<>
			{/* <Sky
				distance={450000}
				sunPosition={[0, 1, 0]}
				inclination={0}
				azimuth={0.25}
			/> */}
			{/* <Environment preset='forest' /> */}
			<directionalLight {...directionLightProps} />
			<ambientLight intensity={0.5} />
			{/* <Stage /> */}
		</>
	)
}

export default Lighting
