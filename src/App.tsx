import { Menu } from 'lucide-react'
import { Icon } from './components/Icon/Icon'
import { Text } from './components/Text/Text'

export function App() {
	return (
		<div className="flex flex-col">
			<Text intent={'primary'} size={'sm'}>
				Hello World!
			</Text>
			<Text intent={'secondary'} size={'md'}>
				Hello World!
			</Text>
			<Text intent={'accent'} size={'lg'}>
				Hello World!
			</Text>
			<Icon svg={Menu} size={'sm'} color={'primary'} clickable />
			<Icon svg={Menu} size={'md'} color={'secondary'} clickable />
			<Icon svg={Menu} size={'lg'} color={'accent'} clickable />
		</div>
	)
}
