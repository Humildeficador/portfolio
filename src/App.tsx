import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '~/components/layout/Layout'
import { Text } from './components/ui/Text'

const Home = () => (
	<div>
		<h1 className="text-2xl font-mono text-mint-400 mb-4">~/home</h1>
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quisquam accusamus amet ducimus harum quam aliquid autem itaque, doloremque quidem incidunt facere ullam distinctio aperiam enim necessitatibus aut vitae sapiente dolor? Beatae consequuntur nisi incidunt aperiam eum animi repudiandae, sunt ea iure commodi fugiat dolores fugit praesentium, modi vel eligendi maxime distinctio atque veritatis, in ipsa quo ullam recusandae. Minima unde temporibus consectetur autem sint. Exercitationem similique earum corporis iure aut nihil deleniti. Suscipit accusantium cupiditate odio explicabo non sit autem ullam obcaecati magni ad soluta tenetur iusto totam, quae voluptates harum veritatis minus, aspernatur, eum aperiam quia similique distinctio fugiat? Quos nostrum ducimus optio. Praesentium cum, facilis tempore natus, sequi, quibusdam alias debitis quidem eveniet nostrum delectus a? Adipisci eius laboriosam impedit voluptatum cum aliquam harum, tempora nobis assumenda facilis quod animi, expedita accusantium corporis minima enim excepturi vero eveniet deleniti delectus voluptate quo rem eum? Nemo tempora iure molestias quod possimus vel necessitatibus doloremque velit, modi officiis quia iste ab nobis error repellendus qui beatae sed veritatis atque. Reprehenderit facilis eos non. Quas qui adipisci voluptatem, sint ducimus maxime, sed et aspernatur veritatis iure quaerat magni distinctio mollitia, ullam quis. Soluta qui, laudantium ullam corporis fugiat iusto fuga!</Text>
	</div>
)
const Projects = () => (
	<div>
		<h1 className="text-2xl font-mono text-mint-400">./projects</h1>
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