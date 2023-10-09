import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience/Experience'

export const App = () => {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 2000,
			}}
		>
			<Experience />
		</Canvas>
	)
}
