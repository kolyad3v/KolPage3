import { useControls } from 'leva'

export const floatProps = useControls('float', {
	speed: 1, // Animation speed, defaults to 1
	rotationIntensity: 1, // XYZ rotation intensity, defaults to 1
	floatIntensity: 1, // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1,
	floatingRange: [1, 2],
})
