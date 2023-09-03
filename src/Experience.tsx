import {
	Text,
	Html,
	PresentationControls,
	Float,
	Environment,
	useGLTF,
	ContactShadows,
	Text3D,
	Center,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience() {
	const computer = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
	)

	const plant = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/plant/model.gltf'
	)
	return (
		<>
			<Perf position='top-left' />

			<Environment preset='city' />

			<color
				args={['#03000e']}
				attach='background'
			/>
			<PresentationControls
				global
				rotation={[0.13, 0.1, 0]}
				polar={[-0.4, 0.2]}
				azimuth={[-1, 0.75]}
				config={{ mass: 4, tension: 400 }}
				snap={{ mass: 4, tension: 400 }}
			>
				<Float rotationIntensity={0.5}>
					<rectAreaLight
						width={2.5}
						height={1.65}
						intensity={35}
						color={'#0000ff'}
						rotation={[0.1, Math.PI, 0]}
						position={[0, 0.55, -1.15]}
					/>

					<primitive
						object={computer.scene}
						position-y={-1.2}
					>
						<Html
							transform
							wrapperClass='htmlScreen'
							distanceFactor={1.17}
							position={[0, 1.56, -1.4]}
							rotation-x={-0.256}
						>
							<iframe src='https://nickgillham.dev' />
						</Html>
					</primitive>

					<Text3D
						font='./mono.json'
						// fontSize={1}
						size={0.2}
						lineHeight={1}
						letterSpacing={0}
						position={[1.75, 1, -0.5]}
						rotation-y={-1}
						height={0.01}
						// // maxWidth={2}
						// // textAlign='left'
					>
						<meshStandardMaterial color={'#fb8500'} />
						{'nick\ngillham\nvue-react-C#'}
					</Text3D>
				</Float>
			</PresentationControls>
			<ContactShadows
				position-y={-1.4}
				opacity={1}
				scale={5}
				blur={2.4}
			/>
			{/* <Float rotationIntensity={0.1}>
				<primitive
					object={plant.scene}
					position-y={-0.2}
					position-x={-2.4}
					position-z={-3}
				/>
			</Float>
			<ContactShadows position-y={-1.4} opacity={1} scale={5} blur={2.4} /> */}
		</>
	)
}
