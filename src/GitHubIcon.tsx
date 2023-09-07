// import { useLoader } from '@react-three/fiber'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Float, Sparkles, useGLTF } from '@react-three/drei'
import { FC } from 'react'

interface IProps {
	eventHandler: (e?: Event) => void
}
export const GitHubIcon: FC<IProps> = (props: IProps) => {
	// const model = useLoader(GLTFLoader, './model.gltf', (loader) => {
	// 	const dracoLoader = new DRACOLoader()
	// NEEDS DRACO FOLDER IN PUBLIC !
	// 	dracoLoader.setDecoderPath('./draco/')
	// 	loader.setDRACOLoader(dracoLoader)
	// })

	const model = useGLTF('./github-icon.glb')
	// console.log(model)

	// const [hovered, setHovered] = useState<boolean>(false)
	// useCursor(hovered, 'pointer')

	const canvas = document.getElementsByTagName('canvas')

	return (
		<>
			<primitive
				onClick={props.eventHandler}
				onPointerEnter={() => {
					console.log('enter')
					canvas[0].classList.add('pointer')
				}}
				onPointerLeave={() => {
					console.log('leave')
					canvas[0].classList.remove('pointer')
				}}
				object={model.scene}
				scale={[0.32, 0.32, 0.32]}
			/>
		</>
	)
}

useGLTF.preload('./model.gltf')
