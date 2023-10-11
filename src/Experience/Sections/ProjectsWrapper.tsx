import { useControls } from 'leva'
import React, { FC } from 'react'
import ProjectModel from './ProjectModel'
import Project from './Project'
import { K_vector3Array } from '../Utils'

const ModelsWrapper: FC = () => {
	const chessControls = useControls('ChessProject', {
		position: [3, 1, -7],
		scale: 0.4,
		rotation: [0, 0, 0],
	})
	const mushroomControls = useControls('MushroomManiaProject', {
		position: [3, 1, -7],
		scale: 0.4,
		rotation: [0, 0, 0],
	})
	const stayThePathControls = useControls('stayThePathProject', {
		position: [3, 1, -7],
		scale: 0.4,
		rotation: [0, 0, 0],
	})

	return (
		<>
			<Project
				name="Chess Project"
				{...chessControls}
			/>
			<Project
				name="MushroomManiaProject"
				{...mushroomControls}
			/>
			<Project
				name="stayThePathProject"
				{...stayThePathControls}
			/>

			{/* <ProjectModel
				projectUrl='https://chessbean.xyz'
				modelUrl='./lowPolyKing.glb'
				modelProps={chessPieceProps}
			/>
			<ProjectModel
				projectUrl='https://github.com/kolyad3v'
				modelUrl='./github.glb'
				modelProps={gitHubPosition}
			/> */}
		</>
	)
}

export default ModelsWrapper
