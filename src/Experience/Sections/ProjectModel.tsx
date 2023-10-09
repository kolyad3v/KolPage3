import { useGLTF } from '@react-three/drei'
import { FC } from 'react'
import { K_vector3Array } from '../Utils/index'

interface ProjectModelProps {
	modelUrl: string
	projectUrl: string
	modelProps: {
		position: K_vector3Array
		scale: number
		rotation: K_vector3Array
	}
}

const ProjectModel: FC<ProjectModelProps> = (props) => {
	const { modelProps, modelUrl, projectUrl } = props

	const model = useGLTF(modelUrl)
	const eventHandler = () => {
		window.open(projectUrl, '_blank')
	}
	const canvas = document.getElementsByTagName('canvas')

	useGLTF.preload(modelUrl)

	return (
		<>
			<primitive
				{...modelProps}
				onClick={eventHandler}
				object={model.scene}
				onPointerEnter={() => {
					canvas[0].classList.add('pointer')
				}}
				onPointerLeave={() => {
					canvas[0].classList.remove('pointer')
				}}
			/>
		</>
	)
}

export default ProjectModel
