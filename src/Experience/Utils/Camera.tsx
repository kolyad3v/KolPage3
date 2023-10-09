import { RootState, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

// import * as THREE from 'three'

export const Camera = () => {
	const { x, y, z } = useControls('cameraPosition', {
		x: 10,
		y: 0.5,
		z: 4,
	})
	const { xLookAt, yLookAt, zLookAt } = useControls('cameraPosition', {
		xLookAt: 0,
		yLookAt: 0,
		zLookAt: -14,
	})

	useThree(({ camera }) => {
		camera.position.set(x, y, z)
		camera.lookAt(xLookAt, yLookAt, zLookAt)

		console.log(camera)
	})

	useThree((state: RootState) => {
		console.log(state)
	})

	return <></>
}
