import { Html, useGLTF } from '@react-three/drei'
import { FC, useRef } from 'react'

export const Laptop: FC<{}> = () => {
	const computer = useGLTF('./laptop.gltf')

	const laptop = useRef()
	return (
		<>
			<primitive
				object={computer.scene}
				position-y={-1.2}
				// onScroll={eventHandler}
				ref={laptop}
			>
				<Html
					transform
					wrapperClass="htmlScreen"
					distanceFactor={1.17}
					position={[0, 1.56, -1.4]}
					rotation-x={-0.256}
				>
					<iframe src="https://laptop-portfolio-pi.vercel.app/" />
				</Html>
			</primitive>
		</>
	)
}
useGLTF.preload('./laptop.gltf')
