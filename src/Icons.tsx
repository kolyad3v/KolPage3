// import { config, useSpring } from '@react-spring/three'
import { ContactShadows, Float, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import ReactIcon from './ReactIcon'
import ChessPiece from './ChessPiece'

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

	const bloomProps = useControls('bloom props', {
		luminanceThreshold: 0.8,
		mipmapBlur: true,
		luminanceSmoothing: 0.1,
		intensity: 1,
	})

	return (
		<>
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

			<ChessPiece />
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
			<EffectComposer
				multisampling={8}
				autoClear={false}
			>
				<Bloom {...bloomProps} />
				{/* <Outline
					selection={[kingRef]}
					edgeStrength={10} // the edge strength
					blur
					xRay={false}
					visibleEdgeColor={0xfff}
					selectionLayer={10} // selection layer
					blendFunction={BlendFunction.SCREEN}
				/> */}
				{/* <Glitch
					delay={[1.5, 3.5]} // min and max glitch delay
					duration={[0.6, 1.0]} // min and max glitch duration
					strength={[0.3, 1.0]} // min and max glitch strength
					mode={GlitchMode.SPORADIC} // glitch mode
					active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
					ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
				/> */}
			</EffectComposer>
		</>
	)
}

useGLTF.preload('./CSharp.glb')
useGLTF.preload('./vuejs.glb')
