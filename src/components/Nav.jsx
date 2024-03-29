import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useContext } from "react";

export default function Nav() {
  const { items } = useContext(CartContext);

  const getTotal = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
  }
  const Price = items.map((item) => item.price)
  // console.log(getTotal(Price));
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar bg-base-100 mb-10 shadow-xl rounded-box">
          <div className="flex-1">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">
              ProductShop
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {items.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex="0"
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    {items.length} Items
                  </span>
                  <span className="text-info">Subtotal: ${getTotal(Price)}</span>
                  <div className="card-actions">
                    <Link
                      to={"/checkout"}
                      className="btn btn-primary btn-block"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://api.lorem.space/image/face?hash=33791"
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"#"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>Settings</Link>
                </li>
                <li>
                  <Link to={"#"}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
