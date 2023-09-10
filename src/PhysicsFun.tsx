import { useRef } from 'react'
import {
	CuboidCollider,
	Physics,
	RapierRigidBody,
	RigidBody,
} from '@react-three/rapier'

export const PhysicsFun = () => {
	let cube1 = useRef<RapierRigidBody>()
	let cube2 = useRef<RapierRigidBody>()
	let cube3 = useRef<RapierRigidBody>()
	// let cat = useRef<RapierRigidBody>()
	let twister = useRef<RapierRigidBody>()

	// Length of the vector determines the strength
	// add rageQuit function to KC
	// const catSpin = () => {
	// 	cat.current!.applyTorqueImpulse({ x: 0, y: -0.1, z: 0 }, true)
	// }
	const cubeJump = (whichCube: number) => {
		switch (whichCube) {
			case 1:
				let mass1 = cube1.current!.mass()
				cube1.current!.applyImpulse({ x: 0, y: 1 * mass1, z: -1 }, true)
				// cube1.current!.applyTorqueImpulse({ x: 0, y: 1, z: 1 }, true)
				break
			case 2:
				let mass2 = cube2.current!.mass()
				cube2.current!.applyImpulse({ x: 0, y: 1 * mass2, z: -1 }, true)
				// cube2.current!.applyTorqueImpulse({ x: 0, y: 1, z: 1 }, true)
				break
			case 3:
				let mass3 = cube3.current!.mass()
				cube3.current!.applyImpulse({ x: 0, y: 1 * mass3, z: -1 }, true)
				// cube3.current!.applyTorqueImpulse({ x: 0, y: 1, z: 1 }, true)
				break
			default:
				break
		}
	}

	// useFrame((state: RootState) => {
	// 	let time = state.clock.getElapsedTime()
	// 	const eulerRotation = new THREE.Euler(0, time, 0)
	// 	const quaternion = new THREE.Quaternion()
	// 	quaternion.setFromEuler(eulerRotation)
	// 	twister.current?.setNextKinematicRotation(quaternion)

	// 	const angle = time * 0.5
	// 	const x = Math.cos(angle)
	// 	const z = Math.sin(angle)

	// 	twister.current?.setNextKinematicTranslation({ x: x, y: 5, z: z })
	// })

	return (
		<>
			<Physics gravity={[0, -9.6, 0]}>
				{/* <RigidBody colliders='ball'>
					<mesh
						castShadow
						position={[0, 3, 0]}
					>
						<sphereGeometry />
						<meshStandardMaterial color='orange' />
					</mesh>
				</RigidBody> */}
				{/* 
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
				</RigidBody> */}

				{/* <RigidBody
					// @ts-ignore
					ref={cube1}
					restitution={0}
					position={[-3, 0.9, -1]}
					rotation={[0, Math.PI / 4, 0]}
					mass={100}
				>
					<mesh
						onClick={() => {
							cubeJump(1)
						}}
					>
						<boxGeometry args={[0.5, 0.5, 0.5]} />
						<meshStandardMaterial color='black' />
					</mesh>
				</RigidBody> */}

				{/* 
				<RigidBody
					// @ts-ignore
					ref={cube2}
					restitution={0}
					position={[-3, 0.6, -1]}
					rotation={[0, Math.PI / 1, 0]}
				>
					<mesh onClick={() => cubeJump(2)}>
						<boxGeometry args={[0.5, 0.5, 0.5]} />
						<meshStandardMaterial color='white' />
					</mesh>
				</RigidBody> */}

				{/* <RigidBody
					// @ts-ignore
					ref={cube3}
					restitution={0}
					position={[-3, 0, -1]}
					rotation={[0, Math.PI / 3, 0]}
				>
					<mesh onClick={() => cubeJump(3)}>
						<boxGeometry args={[0.5, 0.5, 0.5]} />
						<meshStandardMaterial color='black' />
					</mesh>
				</RigidBody> */}

				<RigidBody
					// restitution={1} Bouncyness
					// friction={}
					restitution={0}
					type='fixed'
				>
					<mesh
						receiveShadow
						position-y={-1.25}
					>
						{/* <boxGeometry args={[20, 0.01, 20]} /> */}
						{/* <meshStandardMaterial color={'white'} /> */}
						<CuboidCollider args={[20, 0.01, 20]} />
					</mesh>
				</RigidBody>
				{/* <RigidBody
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
				</RigidBody> */}
			</Physics>
		</>
	)
}
