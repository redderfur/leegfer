import "./sidebar.css";

const Sidebar = () => {
	return <nav className="sidebar">
		<ul className="sidebar-info">
			<li className = "sidebar-item">
				<i className="sidebar-icon fa-solid fa-gear fa-lg" />
				<span className="sidebar-text">Settings</span>
			</li>

			<li className="sidebar-item">
				<a target="_blank" href="https://discord.gg/R9vxmjEX49">
					<i className="sidebar-icon fa-brands fa-discord fa-lg" />
					<span className="sidebar-text">Discord</span>
				</a>
			</li>

		</ul>
	</nav>;
};

export default Sidebar;
