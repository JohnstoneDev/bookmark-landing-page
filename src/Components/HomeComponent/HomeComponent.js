import { TopBox } from "../BoxView/Box"
import { NavBar } from "../Navigation/NavBar"
import { Features } from "../Features/Features"
import { Download } from "../IconCard/DownloadSection"

export const HomeComponent = () => {
	return (
		<div className="p-8 min-w-screen min-h-screen space-y-8 bg-whitish">
			<NavBar />
			<TopBox />
			<Features />
			<Download />
		</div>
	)
}
