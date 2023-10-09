// import { OrbitControls } from '@react-three/drei'
import { FC, Suspense } from 'react'
import { Loader } from './Utils/Loader'
import { Perf } from 'r3f-perf'

import EnvironmentWrapper from './Environment/EnvironmentWrapper'

// import { Leva } from 'leva'
import { Landing } from './Sections/Landing'
import { Disk } from './Environment/Disk'
import { useControls } from 'leva'
import { Camera } from './Utils/Camera'

export const Experience: FC = () => {
	const spacePosition = useControls('main', {
		rotation: [0, 0, 0],
	})

	return (
		<>
			{/* Helpers */}
			{/* <Leva hidden /> */}
			<Perf />

			{/* Camera Movements */}
			<Camera />

			{/* Environment */}
			{/* <OrbitControls /> */}
			<EnvironmentWrapper />

			{/* Sections */}
			<group {...spacePosition}>
				<Suspense fallback={<Loader />}>
					<Disk />
					<Landing />
				</Suspense>
			</group>
		</>
	)
}
