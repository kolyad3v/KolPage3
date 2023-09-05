import { useFrame } from '@react-three/fiber'
import { useRef, FC } from 'react'
import { Material, TorusGeometry } from 'three'

interface DonutProps {
	material: any
	torusGeometry: TorusGeometry | undefined
}

export const Donut: FC<DonutProps> = ({ material, torusGeometry }) => {
	// Put in experience function
	// useEffect(() => {
	// 	donnutTexture.colorSpace = THREE.SRGBColorSpace
	// 	donnutTexture.needsUpdate = true
	// 	material.matcap = donnutTexture
	// 	material.needsUpdate = true
	// }, [])

	// Goes in the function where the multiple donutai are spawned to enable rotation
	// const donutsGroup = useRef()
	// useFrame((state, delta) => {
	// 	for (const donut of donutsGroup.current!.children) {
	// 		donut.rotation.y += delta * 0.2
	// 	}
	// })
	return (
		<>
			<mesh
				material={material}
				geometry={torusGeometry}
				position={[
					(Math.random() - 0.5) * 20,
					(Math.random() - 0.5) * 10,
					(Math.random() - 1) * 20,
				]}
				scale={0.2 + Math.random() * 0.2}
				rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
			></mesh>

			{/*
			Render where you want to spawn multiple donutai
			<group ref={donutsGroup}>
			 {[...Array(20)].map((val, index) => (
				<Donut
					material={material}
					torusGeometry={torusGeometry}
					key={index}
				/>
				</group>
			))} */}
		</>
	)
}
