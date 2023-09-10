import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'

export const CanvasHolder = () => {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 2000,
				position: [-4, 0.5, 5],
			}}
		>
			<Experience />
		</Canvas>
	)
}
