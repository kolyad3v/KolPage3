import { useControls } from 'leva'
import React, { FC } from 'react'
import ProjectModel from './ProjectModel'

const ModelsWrapper: FC = () => {
	const chessPieceProps = useControls('chess piece', {
		position: [1.7, -0.9, 2.4],
		scale: 0.4,
		rotation: [0, 0, 0],
	})
	const gitHubPosition = useControls('github', {
		position: [1.7, -0.9, 2.4],
		scale: 0.3,
		rotation: [0, Math.PI + 1, 0],
	})

	return (
		<>
			<ProjectModel
				projectUrl='https://chessbean.xyz'
				modelUrl='./lowPolyKing.glb'
				modelProps={chessPieceProps}
			/>
			<ProjectModel
				projectUrl='https://github.com/kolyad3v'
				modelUrl='./github.glb'
				modelProps={gitHubPosition}
			/>
		</>
	)
}

export default ModelsWrapper
