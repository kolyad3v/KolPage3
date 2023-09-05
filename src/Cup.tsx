import { MeshWobbleMaterial, useGLTF } from '@react-three/drei'
import { FC } from 'react'

export const Cup: FC<{}> = () => {
	const cup = useGLTF('./cup.gltf')
	const scale = 0.23
	return (
		<>
			<mesh
				position={[2, -0.3, 1]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[scale, scale, scale]}
			>
				<circleGeometry args={[]} />
				<MeshWobbleMaterial
					factor={0.2}
					speed={1.2}
					color={'#3B2F27'}
					metalness={1}
					roughness={0}
				/>
			</mesh>
			<primitive
				object={cup.scene}
				position={[2, -0.5, 1]}
			></primitive>
		</>
	)
}
