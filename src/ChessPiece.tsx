import { useGLTF } from '@react-three/drei'
import { RootState, useFrame } from '@react-three/fiber'

import { useControls } from 'leva'
import { FC, useRef } from 'react'
import * as THREE from 'three'

interface IProps {}

const ChessPiece: FC<IProps> = () => {
	const model = useGLTF('./lowPolyKing.glb')
	const eventHandler = () => {
		window.open('https://chessbean.xyz', '_blank')
	}
	const canvas = document.getElementsByTagName('canvas')
	const chessPieceProps = useControls('king', {
		position: [1.7, -0.9, 2.4],
		scale: 0.4,
		rotation: [0, 0, 0],
		rotationMultiplier: { x: 0.6, y: 1, z: 0.6 },
		rotationAmplitude: { x: 3, y: 3, z: 3 },
		positionMultiplier: { x: 1, y: 1, z: 0.5 },
		positionAmplitude: { x: 12, y: 1, z: 3.9 },
	})

	const kingRef = useRef<THREE.Mesh>(null!)

	useFrame((_state: RootState, delta: number) => {
		// kingRef.current.rotation.x =
		// 	Math.cos(elapsedTime * chessPieceProps.rotationMultiplier.x) /
		// 	chessPieceProps.rotationAmplitude.x

		// kingRef.current.rotation.z =
		// 	Math.sin(elapsedTime * chessPieceProps.rotationMultiplier.z) /
		// 	chessPieceProps.rotationAmplitude.z

		kingRef.current.rotation.y +=
			Math.sin(delta * chessPieceProps.rotationMultiplier.y) /
			chessPieceProps.rotationAmplitude.y
	})

	return (
		<>
			<primitive
				{...chessPieceProps}
				ref={kingRef}
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

export default ChessPiece

useGLTF.preload('./lowPolyKing.glb')
