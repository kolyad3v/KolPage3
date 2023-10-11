import { FC } from 'react'
import { useControls } from 'leva'
export const Disk: FC = () => {
	const spacePosition = useControls('Disk', {
		position: [0, 0, 0],
		rotation: [-Math.PI / 2, 0, 0],
	})

	return (
		<>
			<mesh {...spacePosition}>
				<circleGeometry args={[10, 128]} />
				<meshStandardMaterial
					metalness={1}
					roughness={0}
				/>
			</mesh>
		</>
	)
}
