import { Html, useGLTF } from '@react-three/drei'
import { FC } from 'react'

export const Laptop: FC<{}> = () => {
	const computer = useGLTF('./laptop.gltf')
	return (
		<>
			<primitive
				object={computer.scene}
				position-y={-1.2}
			>
				<Html
					transform
					wrapperClass='htmlScreen'
					distanceFactor={1.17}
					position={[0, 1.56, -1.4]}
					rotation-x={-0.256}
				>
					<iframe src='https://nickgillham.dev' />
				</Html>
			</primitive>
		</>
	)
}
useGLTF.preload('./laptop.gltf')
