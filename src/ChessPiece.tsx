import { useGLTF } from '@react-three/drei'
import { RootState, useFrame } from '@react-three/fiber'
// import { EffectComposer, Outline } from '@react-three/postprocessing'
// import { BlendFunction } from 'postprocessing'
import { useControls } from 'leva'
import { useRef } from 'react'
import * as THREE from 'three'

const ChessPiece = () => {
	const model = useGLTF('./lowPolyKing.glb')
	const eventHandler = () => {
		window.open('https://chessnchill.com', '_blank')
	}
	const canvas = document.getElementsByTagName('canvas')
	const chessPieceProps = useControls('king', {
		position: [1.7, -0.9, 2.4],
		scale: 0.5,
		rotation: [0, 0, 0],
		rotationMultiplier: { x: 0.6, y: 1, z: 0.6 },
		rotationAmplitude: { x: 3, y: 3, z: 3 },
		positionMultiplier: { x: 1, y: 1, z: 0.5 },
		positionAmplitude: { x: 12, y: 1, z: 3.9 },
	})

	const kingRef = useRef<THREE.Mesh>(null!)
	useFrame((state: RootState) => {
		const elapsedTime = state.clock.getElapsedTime()

		kingRef.current.rotation.x =
			Math.cos(elapsedTime * chessPieceProps.rotationMultiplier.x) /
			chessPieceProps.rotationAmplitude.x

		kingRef.current.rotation.z =
			Math.sin(elapsedTime * chessPieceProps.rotationMultiplier.z) /
			chessPieceProps.rotationAmplitude.z

		kingRef.current.rotation.y =
			Math.sin(elapsedTime * chessPieceProps.rotationMultiplier.y) /
			chessPieceProps.rotationAmplitude.y

		// kingRef.current.position.x =
		// 	Math.cos(elapsedTime * chessPieceProps.positionMultiplier.x) /
		// 		chessPieceProps.positionAmplitude.x +
		// 	2

		// kingRef.current!.position.y =
		// 	Math.sin(elapsedTime * chessPieceProps.positionMultiplier.y) /
		// 	chessPieceProps.positionAmplitude.y

		// kingRef.current!.position.z =
		// 	Math.cos(elapsedTime * chessPieceProps.positionMultiplier.z) /
		// 		chessPieceProps.positionAmplitude.z +
		// 	2.5
	})

	return (
		<>
			{/* TODO #1 */}
			{/* <EffectComposer
				multisampling={8}
				autoClear={false}
			>
				<Outline
					selection={[kingRef]}
					edgeStrength={500} // the edge strength
					blur
					xRay={false}
					blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
					visibleEdgeColor={0x000000}
				/>
			</EffectComposer> */}
			<primitive
				{...chessPieceProps}
				ref={kingRef!}
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
