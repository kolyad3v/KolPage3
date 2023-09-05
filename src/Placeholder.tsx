import { FC } from 'react'

interface IProps {
	position: [x: number, y: number, z: number]
	scale?: [x: number, y: number, z: number]
}
const Placeholder: FC<IProps> = (props: IProps) => {
	return (
		<mesh
			position={props.position}
			scale={props.scale}
		>
			<boxGeometry args={[1, 1, 1, 2, 2, 2]} />
			<meshBasicMaterial
				wireframe
				color='red'
			/>
		</mesh>
	)
}

export default Placeholder
