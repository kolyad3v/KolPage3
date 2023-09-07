import { useRef } from 'react'
import {
	CuboidCollider,
	Physics,
	RapierRigidBody,
	RigidBody,
	RigidBodyProps,
} from '@react-three/rapier'
import { GitHubIcon } from './GitHubIcon'
import { RootState, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const PhysicsFun = () => {
	const eventHandler = (e?: Event) => {
		console.log(e)
		e?.stopPropagation()
		window.open('https://github.com/kolyad3v', '_blank')
	}

	let cube = useRef<RapierRigidBody>()
	let twister = useRef<RapierRigidBody>()

	// Length of the vector determines the strength
	// add rageQuit function to KC
	const cubeJump = () => {
		const mass = cube.current!.mass()
		cube.current!.applyImpulse({ x: 0, y: 5 * mass, z: 0 }, true)
		cube.current!.applyTorqueImpulse({ x: 0, y: 1, z: 1 }, true)
	}

	useFrame((state: RootState) => {
		let time = state.clock.getElapsedTime()
		const eulerRotation = new THREE.Euler(0, time, 0)
		const quaternion = new THREE.Quaternion()
		quaternion.setFromEuler(eulerRotation)
		twister.current?.setNextKinematicRotation(quaternion)

		const angle = time * 0.5
		const x = Math.cos(angle)
		const z = Math.sin(angle)

		twister.current?.setNextKinematicTranslation({ x: x, y: 5, z: z })
	})
	return (
		<>
			<Physics
				debug
				// gravity={[0, -5.16, 0]}
			>
				<RigidBody colliders='ball'>
					<mesh
						castShadow
						position={[0, 3, 0]}
					>
						<sphereGeometry />
						<meshStandardMaterial color='orange' />
					</mesh>
				</RigidBody>

				<RigidBody colliders='trimesh'>
					<mesh
						castShadow
						scale={1.5}
						rotation={[Math.PI / 2, Math.PI / 5, 0]}
						position={[0, 1, 0]}
					>
						<torusGeometry />
						<meshStandardMaterial color='red' />
					</mesh>
				</RigidBody>

				<RigidBody
					// @ts-ignore
					ref={cube}
					restitution={1}
				>
					<mesh
						onClick={cubeJump}
						castShadow
						position={[2, 2, 0]}
					>
						<boxGeometry />
						<meshStandardMaterial color='mediumpurple' />
					</mesh>
					<CuboidCollider
						mass={10.1}
						args={[0.5, 0.5, 0.5]}
						position={[2, 2, 0]}
					></CuboidCollider>
				</RigidBody>
				<RigidBody
					position={[-2.5, 0.5, -1]}
					rotation={[0, 0, 0]}
				>
					<GitHubIcon eventHandler={eventHandler} />
				</RigidBody>

				<RigidBody
					// restitution={1} Bouncyness
					// friction={}
					type='fixed'
				>
					<mesh
						receiveShadow
						position-y={-1.25}
					>
						<boxGeometry args={[20, 0.5, 20]} />
						<meshStandardMaterial color='greenyellow' />
					</mesh>
				</RigidBody>
				<RigidBody
					ref={twister}
					// will only move if force applied to it
					type='kinematicPosition'
					position={[5, 5, 5]}
				>
					<mesh
						castShadow
						scale={[0.4, 0.4, 3]}
					>
						<boxGeometry />
						<meshStandardMaterial color={'red'} />
					</mesh>
				</RigidBody>
			</Physics>
		</>
	)
}
