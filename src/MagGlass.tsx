import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { FC, useMemo, useRef, useState } from 'react'
import { animated, config, useSpring } from '@react-spring/three'

interface IMagGlassProps {
	zoomToScreen: () => void
}

export const MagGlass: FC<IMagGlassProps> = ({ zoomToScreen }) => {
	const canvas = useMemo(() => {
		const canvas = document.getElementsByTagName('canvas')
		return canvas
	}, [])

	const model = useGLTF('./magGlass.glb')
	const { x, y, z, rx, ry, rz } = useControls('mag Glass', {
		x: 2,
		y: 0.4,
		z: 0,
		rx: 0,
		ry: -0.5,
		rz: 0,
	})

	const [active, setActive] = useState(false)
	const { scale } = useSpring({ scale: active ? 1.2 : 1, config: config.wobbly })

	return (
		<animated.mesh
			position={[x, y, z]}
			scale={scale}
			onPointerEnter={() => {
				setActive(true)
				canvas[0].classList.add('pointer')
			}}
			onPointerLeave={() => {
				setActive(false)
				canvas[0].classList.remove('pointer')
			}}
		>
			<primitive
				onClick={zoomToScreen}
				object={model.scene}
				rotation={[rx, ry, rz]}
				scale={5}
			/>
		</animated.mesh>
	)
}

useGLTF.preload('./magGlass.glb')

export default MagGlass
