import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '~/components/layout/Layout'
import { Home } from '~/pages/Home/Index'
import { Projects } from '~/pages/Projects'

const Skills = () => (
	<div>
		<h1 className="text-2xl font-mono text-teal-300">./skills</h1>
	</div>
)
const Contact = () => (
	<div>
		<h1 className="text-2xl font-mono text-teal-300">bash contact.sh</h1>
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
