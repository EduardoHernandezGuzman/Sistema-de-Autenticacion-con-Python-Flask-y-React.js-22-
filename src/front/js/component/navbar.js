import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{/* <Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link> */}
				<div className="ml-auto">

					<Link to="/">
						

						{store.auth === true ? <button onClick={()=>actions.logout()} className="btn btn-primary" style={{marginLeft:"60rem"}}>Logout</button> : null}




					</Link>
				</div>
			</div>
		</nav>
	);
};
