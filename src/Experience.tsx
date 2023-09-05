import {
	PresentationControls,
	Float,
	Environment,
	ContactShadows,
	Text3D,
} from '@react-three/drei'
import { Cup } from './Cup'
import { Perf } from 'r3f-perf'
import { Model } from './Model'
import { Suspense } from 'react'
// import { Laptop } from './Laptop'
import Placeholder from './Placeholder'
import { LaptopDeep } from './LaptopDeep'
import Fox from './Fox'

export default function Experience() {
	return (
		<>
			<Perf position='top-left' />

			<Environment preset='forest' />

			<color
				args={['#FFF4E6']}
				attach='background'
			/>
			<Suspense fallback={<Placeholder position={[0, -1, 0]} />}>
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
						{/* <Laptop /> */}
						<LaptopDeep />
						<Cup />
						<Model />
						<Fox />
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
							<meshStandardMaterial color='orange' />
							{'  nick gillham\nvue-react-3js-c#'}
						</Text3D>
					</Float>
				</PresentationControls>
			</Suspense>
			<ContactShadows
				position-y={-1.4}
				opacity={1}
				scale={10}
				blur={2.4}
			/>
		</>
	)
}
