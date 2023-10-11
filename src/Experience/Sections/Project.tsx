import { useControls } from 'leva'
import ProjectHtml from './ProjectHtml'
import { FC } from 'react'
import { IPosAndRotControls } from '../Utils'

interface ProjcetProps extends IPosAndRotControls {
	name: string
}

const Project: FC<ProjcetProps> = (props) => {
	const { name, position, rotation } = props

	const spacePosition = {
		position,
		rotation,
	}
	return (
		<>
			<group {...spacePosition}>
				<ProjectHtml />
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshNormalMaterial />
				</mesh>
			</group>
		</>
	)
}

export default Project
