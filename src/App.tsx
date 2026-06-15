import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '~/components/layout/Layout'
import { Text } from '~/components/ui/Text'
import { Projects } from '~/pages/Projects'

const Home = () => (
	<div>
		<h1 className="text-2xl font-mono text-mint-400 mb-4">~/home</h1>
		<Text>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, et?
		</Text>
	</div>
)
const Skills = () => (
	<div>
		<h1 className="text-2xl font-mono text-mint-400">./skills</h1>
	</div>
)
const Contact = () => (
	<div>
		<h1 className="text-2xl font-mono text-mint-400">bash contact.sh</h1>
	</div>
)

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="skills" element={<Skills />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
