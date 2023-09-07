// import { useLoader } from '@react-three/fiber'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Clone, Float, useGLTF } from '@react-three/drei'
import { FC } from 'react'

export const Model: FC<{}> = () => {
	// const model = useLoader(GLTFLoader, './model.gltf', (loader) => {
	// 	const dracoLoader = new DRACOLoader()
	// NEEDS DRACO FOLDER IN PUBLIC !
	// 	dracoLoader.setDecoderPath('./draco/')
	// 	loader.setDRACOLoader(dracoLoader)
	// })

	const model = useGLTF('./model.gltf')

	return (
		<>
			{/* <Clone
				object={model.scene}
				position={[3, -0.5, -1]}
				rotation={[Math.PI / 4, Math.PI / -6, Math.PI / 5]}
				scale={[2, 2, 2]}
			></Clone>
			<Clone
				object={model.scene}
				position={[6, -0.5, -1]}
				rotation={[Math.PI / 4, Math.PI / -6, Math.PI / 5]}
				scale={[2, 2, 2]}
			></Clone> */}
			<Float>
				<Clone
					object={model.scene}
					position={[4, -0.5, -3]}
					rotation={[Math.PI / 4, Math.PI / -6, Math.PI / 7]}
					scale={[2, 2, 2]}
				/>
			</Float>
		</>
	)
}

useGLTF.preload('./model.gltf')
