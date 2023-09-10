import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import { FC, useState } from 'react'

interface IProps {
	eventHandler?: (e?: Event) => void
	openGitHubHatch: boolean
}
export const GitHubIcon: FC<IProps> = (props: IProps) => {
	const canvas = document.getElementsByTagName('canvas')
	const gitHubPosition = useControls('github', {
		x: 4.8,
		y: 0.3,
		z: 0,
		scale: 0.3,
		rotation: 4.54,
	})
	const githubModel = useGLTF('./github.glb')
	const eventHandler = () => {
		window.open('https://github.com/kolyad3v', '_blank')
	}

	const [fallSound] = useState(() => new Audio('./fall.mp3'))

	const playAudio = () => {
		fallSound.currentTime = 0
		fallSound.volume = 0.3
		fallSound.play()
	}
	if (props.openGitHubHatch) {
		return (
			<>
				<RigidBody
					position={[1.2, 3, 0.5]}
					rotation={[0, 4.54, 0.5]}
					restitution={0.1}
					onCollisionEnter={playAudio}
				>
					<primitive
						onClick={eventHandler}
						onPointerEnter={() => {
							console.log('enter')
							canvas[0].classList.add('pointer')
						}}
						onPointerLeave={() => {
							console.log('leave')
							canvas[0].classList.remove('pointer')
						}}
						object={githubModel.scene}
						scale={[gitHubPosition.scale, gitHubPosition.scale, gitHubPosition.scale]}
					></primitive>
					{/* <CuboidCollider
						rotation={[Math.PI / 2, 0, Math.PI / 2]}
						args={[0.4, 0.05, 0.4]}
					/> */}
				</RigidBody>
			</>
		)
	}
}

useGLTF.preload('./model.gltf')
