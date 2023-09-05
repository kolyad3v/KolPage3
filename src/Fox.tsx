import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { useControls } from 'leva'

const Fox = () => {
	const model = useGLTF('./Fox.glb')
	const animation = useAnimations(model.animations, model.scene)

	const { animationName } = useControls({
		animationName: { options: animation.names },
	})

	useEffect(() => {
		const action = animation.actions[animationName]
		action?.reset().fadeIn(0.5).play()

		return () => {
			console.log('clean up phase')
			action?.fadeOut(0.5)
		}
	}, [animationName])

	return (
		<primitive
			object={model.scene}
			scale={[0.01, 0.01, 0.01]}
			position={[2, -1, 2]}
			rotation={[0, -Math.PI / 3, 0]}
		></primitive>
	)
}

export default Fox

useGLTF.preload('./Fox/glTF-Binary/Fox.glb')
