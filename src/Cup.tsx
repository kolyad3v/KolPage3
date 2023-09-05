import { ContactShadows, useGLTF } from '@react-three/drei'
import { FC } from 'react'

export const Cup: FC<{}> = () => {
	const cup = useGLTF('./cup.gltf')
	return (
		<>
			<primitive
				object={cup.scene}
				position={[2, -0.5, 1]}
			></primitive>
		</>
	)
}
