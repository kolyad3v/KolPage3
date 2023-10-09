import { useControls } from 'leva'
import { Text } from '@react-three/drei'
import { FC } from 'react'
import { K_vector3Array } from '.'

interface TextProps {
	name: string
	fontSize: number
	position: K_vector3Array
	rotation: K_vector3Array
	color: string
	text: string
}

const TextCreator: FC<TextProps> = (props) => {
	const { name, fontSize, position, rotation, color, text } = props
	const textProps = useControls(name, {
		fontSize,
		position,
		rotation,
	})
	return (
		<>
			<Text
				font='./majorMono.woff'
				{...textProps}
				color={color}
			>
				{text}
			</Text>
		</>
	)
}

export default TextCreator
