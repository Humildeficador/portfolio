import { Outlet } from 'react-router-dom'
import { NavBar } from '~/components/layout/NavBar'

export function Layout() {
	return (
		<div className="flex min-h-screen">
			<NavBar />
			<main className="flex-1 p-8 md:p-12">
				<Outlet />
			</main>
		</div>
	)
}
