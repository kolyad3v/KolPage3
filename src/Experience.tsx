import { ContactShadows, PresentationControls, Text } from '@react-three/drei'

import { FC, Suspense, useState } from 'react'

import { Laptop } from './Laptop'
import { Vector3 } from 'three'

import { useFrame, useThree } from '@react-three/fiber'

import { Physics, RigidBody } from '@react-three/rapier'
import { GitHubIcon } from './GitHubIcon'
import { Leva, useControls } from 'leva'
import { Loader } from './Loader'
import MagGlass from './MagGlass'
import Lighting from './Lighting'
import { Perf } from 'r3f-perf'

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

	const [openGitHubHatch, setOpenGitHubHatch] = useState(false)

	useThree(({ camera }) => camera.lookAt(0, 0.5, 0))
	function Rig() {
		return useFrame(({ camera }) => {
			vec.set(-0.014147792215132737, 1.636652515918077, 3.5)
			camera.position.lerp(vec, 0.025)
			camera.lookAt(0, 0.5, 0)
		})
	}

	function RigOut() {
		return useFrame(({ camera }) => {
			vec.set(-4, 1, 5)
			camera.position.lerp(vec, 0.025)
			camera.lookAt(0, 0.5, 0)
		})
	}
	const color = useControls({
		value: '#0d1117',
	})

	return (
		<>
			<Leva hidden />

			<Perf />
			<color
				attach="background"
				args={[color.value]}
			/>
			{/* <OrbitControls></OrbitControls> */}
			{Zoom && <Rig />}
			{ZoomOut && <RigOut />}
			<MagGlass zoomToScreen={zoomToScreen} />
			<Lighting />
			<Text
				font="./majorMono.woff"
				fontSize={0.2}
				position={[2.5, 1.5, -0.5]}
				rotation-y={-1}
				color={'white'}
			>
				{'nick gillham'}
			</Text>

			<Suspense fallback={<Loader />}>
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
						azimuth={[-1, 0.5]}
						config={{ mass: 2, tension: 400 }}
						snap={{ mass: 4, tension: 400 }}
					>
						<GitHubIcon openGitHubHatch={openGitHubHatch} />
						<RigidBody
							restitution={0.2}
							friction={0.5}
							type="fixed"
						>
							<Laptop />
						</RigidBody>
					</PresentationControls>
				</Physics>
			</Suspense>
			<ContactShadows
				opacity={1}
				scale={10}
				blur={1}
				position-y={-1.4}
			/>
		</>
	)
}
