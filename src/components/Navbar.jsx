import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";
// import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
	const dispatch = useDispatch();

	const handleTheme = () => {
		dispatch(toggleTheme());
	};

	const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

	return (
		<nav className="bg-base-200 ">
			<div className="align-element navbar">
				<div className="navbar-start">
					{/* Logo */}
					<NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl">
						Amu
					</NavLink>
					{/* Drop down */}
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<HiMiniBars3 className="w-6 h-6"></HiMiniBars3>
						</label>
						<ul
							tabIndex={0}
							className="menu dropdown-content mt-4 z-[1] p-8 shadow-lg bg-base-100 rounded-box w-80">
							<NavLinks></NavLinks>
						</ul>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal">
						<NavLinks></NavLinks>
					</ul>
				</div>
				<div className="navbar-end">
					{/* THEME*/}

					{
						<label className="swap swap-rotate">
							<input type="checkbox" onClick={handleTheme}></input>
							{
								/*SUN */
								<BsSunFill className="swap-off h-4 w-4"></BsSunFill>
							}
							{
								/*Moon*/
								<BsMoonFill className="swap-on h-4 w-4"></BsMoonFill>
							}
						</label>
					}

					{/* CART */}
					<NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4 ">
						<div className="indicator">
							<BsCart3 className="w-6 h-6"></BsCart3>
							<span className="badge badge-sm badge-primary indicator-item">
								{numItemsInCart}
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
