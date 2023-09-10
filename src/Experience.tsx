import {
	PresentationControls,
	Float,
	ContactShadows,
	Text,
	OrbitControls,
	Stage,
	Environment,
	Sky,
} from '@react-three/drei'

import { FC, Suspense, useMemo, useRef, useState } from 'react'
import Placeholder from './Placeholder'
import { Laptop } from './Laptop'
import { Vector3 } from 'three'
import { PhysicsFun } from './PhysicsFun'
import { useFrame } from '@react-three/fiber'

import { Icons } from './Icons'
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { GitHubIcon } from './GitHubIcon'
import { Leva, useControls } from 'leva'
import { Loader } from './Loader'
import MagGlass from './MagGlass'

export const Experience: FC<{}> = () => {
	const [Zoom, setZoom] = useState(false)
	const [ZoomOut, setZoomOut] = useState(false)
	const vec = new Vector3()
	const zoomToScreen = () => {
		if (!Zoom) {
			setZoom(true)
			!openGitHubHatch && setOpenGitHubHatch(true)
			ZoomOut && setZoomOut(false)
		} else {
			Zoom && setZoom(false)
			setZoomOut(true)
			setTimeout(() => {
				setZoomOut(false)
				console.log('close')
			}, 3000)
		}
	}
	const zoomOutFromScreen = () => {}

	const [openGitHubHatch, setOpenGitHubHatch] = useState(false)

	function Rig() {
		return useFrame(({ camera, mouse }) => {
			vec.set(-0.014147792215132737, 1.636652515918077, 3.5)
			camera.position.lerp(vec, 0.025)
			camera.lookAt(0, 0, 0)
		})
	}

	function RigOut() {
		return useFrame(({ camera, mouse }) => {
			vec.set(-4, 1, 5)
			camera.position.lerp(vec, 0.025)
			camera.lookAt(0, 0, 0)
		})
	}
	const color = useControls({
		value: 'white',
	})
	return (
		<>
			<color
				attach='background'
				args={[color.value]}
			/>
			{/* <OrbitControls></OrbitControls> */}
			{Zoom && <Rig />}
			{ZoomOut && <RigOut />}
			<Sky
				distance={450000}
				sunPosition={[0, 1, 0]}
				inclination={0}
				azimuth={0.25}
			/>
			{/* <Environment preset='forest' /> */}

			<Text
				font='./majorMono.woff'
				fontSize={0.2}
				position={[2.5, 1.5, -0.5]}
				rotation-y={-1}
				color={'black'}
				// // maxWidth={2}
			>
				{'nick gillham'}
			</Text>

			<directionalLight
				position={[-10, 10, 5]}
				intensity={1}
			/>
			<ambientLight intensity={0.5} />
			{/* <Stage /> */}
			<MagGlass zoomToScreen={zoomToScreen} />
			<Suspense fallback={<Loader />}>
				<Icons />
				{/* <Float rotationIntensity={0.4}> */}
				<rectAreaLight
					width={2.5}
					height={1.65}
					intensity={20}
					color={'#0000ff'}
					rotation={[0.1, Math.PI, 0]}
					position={[0, 0.55, -1.15]}
				/>
				<Physics>
					<PresentationControls
						global
						rotation={[0.13, 0.1, 0]}
						polar={[-0.4, 0.2]}
						azimuth={[-1, 1]}
						config={{ mass: 2, tension: 400 }}
						snap={{ mass: 4, tension: 400 }}
					>
						<GitHubIcon openGitHubHatch={openGitHubHatch} />
						<RigidBody
							restitution={0.2}
							type='fixed'
						>
							<Laptop />
						</RigidBody>
					</PresentationControls>
				</Physics>

				{/* </Float> */}
			</Suspense>
		</>
	)
}
