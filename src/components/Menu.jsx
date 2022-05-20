import {appWindow} from "@tauri-apps/api/window"

import "./menu.css";

const Menu = () => {
	return <header data-tauri-drag-region className="menu">
		<div className="toolbar">
 			<i class="fa-solid fa-face-grin-tongue-wink fa-2xl"></i>
			<h3 style={{margin: "10px"}}>Leegfer</h3>
		</div>
		
		<div className="toolbar">
			<i class="fa-solid fa-magnifying-glass search-icon" />
			<input className="search" placeholder="Search..."/>
		</div>

		<div className="toolbar">
			<div className="toolbar-item" onClick={() => appWindow.minimize()} ><i class="fa-solid fa-minus fa-sm" /></div>
			<div className="toolbar-item" onClick={() => appWindow.toggleMaximize()}><i class="fa-solid fa-window-restore" /></div>
			<div className="toolbar-item" onClick={() => appWindow.close()}><i class="fa-solid fa-xmark fa-sm"/></div>
		</div>
	</header>;
};

export default Menu
