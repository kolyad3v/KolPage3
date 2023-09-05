import {
	Html,
	PresentationControls,
	Float,
	Environment,
	useGLTF,
	ContactShadows,
	Text3D,
	useMatcapTexture,
	MeshWobbleMaterial,
} from '@react-three/drei'
import { Cup } from './Cup'

export default function Experience() {
	const computer = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
	)
	const [mcTexture] = useMatcapTexture('FBB43F_FBE993_FB552E_FCDD65', 256)
	const scale = 0.23

	return (
		<>
			{/* <Perf position='top-left' /> */}

			<Environment preset='apartment' />

			<color
				args={['#FFF4E6']}
				attach='background'
			/>
			<PresentationControls
				global
				rotation={[0.13, 0.1, 0]}
				polar={[-0.4, 0.2]}
				azimuth={[-1, 1]}
				config={{ mass: 2, tension: 400 }}
				snap={{ mass: 4, tension: 400 }}
			>
				<Float rotationIntensity={0.4}>
					<rectAreaLight
						width={2.5}
						height={1.65}
						intensity={20}
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
					<mesh
						position={[2, -0.3, 1]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={[scale, scale, scale]}
					>
						<circleGeometry args={[]} />
						<MeshWobbleMaterial
							factor={0.2}
							speed={1.2}
							color={'#3B2F27'}
							metalness={1}
							roughness={0}
						/>
					</mesh>

					<Cup />

					<Text3D
						font='./mono.json'
						// fontSize={1}
						size={0.15}
						lineHeight={1}
						letterSpacing={0}
						position={[1.75, 1, -0.5]}
						rotation-y={-1}
						height={0.04}

						// // maxWidth={2}
					>
						{/* <meshStandardMaterial color={'#fb8500'} /> */}
						<meshMatcapMaterial matcap={mcTexture} />
						{'  nick gillham\nvue-react-3js-c#'}
					</Text3D>
				</Float>
			</PresentationControls>
			<ContactShadows
				position-y={-1.4}
				opacity={1}
				scale={7}
				blur={2.4}
			/>
		</>
	)
}
