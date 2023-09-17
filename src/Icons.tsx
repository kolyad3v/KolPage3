// import { config, useSpring } from '@react-spring/three'
import { ContactShadows, Float, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import ReactIcon from './ReactIcon'

export const Icons = () => {
	const CSharp = useGLTF('./CSharp.glb')
	const vueModel = useGLTF('./vuejs.glb')

	const cSharpPosition = useControls('csharp', {
		x: -3,
		y: -0.7,
		z: -1,
	})
	const reactPosition = useControls('react', {
		x: -3,
		y: 0.5,
		z: -1,
		scale: 0.17,
	})

	const vuePosition = useControls('vue', {
		x: -3,
		y: 1.2,
		z: -1,
		scale: 0.08,
	})

	const bloomProps = useControls({
		luminanceThreshold: 0.8,
		mipmapBlur: true,
		luminanceSmoothing: 0.1,
		intensity: 1,
	})

	return (
		<>
			<EffectComposer multisampling={8}>
				<Bloom {...bloomProps} />
			</EffectComposer>
			<Float
				speed={0.8}
				floatIntensity={0.2}
			>
				<primitive
					object={vueModel.scene}
					position={[vuePosition.x, vuePosition.y, vuePosition.z]}
					scale={[vuePosition.scale, vuePosition.scale, vuePosition.scale]}
				></primitive>
			</Float>

			<Float
				speed={0.8}
				floatIntensity={0.2}
			>
				<ReactIcon
					scale={reactPosition.scale}
					position={[reactPosition.x, reactPosition.y, reactPosition.z]}
				/>
			</Float>

			<Float
				speed={0.8}
				floatIntensity={0.2}
			>
				<primitive
					object={CSharp.scene}
					position={[cSharpPosition.x, cSharpPosition.y, cSharpPosition.z]}
					scale={[0.01, 0.01, 0.01]}
				></primitive>
			</Float>
			<ContactShadows
				opacity={1}
				scale={10}
				blur={1}
				position-y={-1.4}
			/>
		</>
	)
}
