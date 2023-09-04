import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const navBarItems = [
    {
      label: 'Dinner Recipes',
      path: '/',
    },
    {
      label: 'Cocktail Recipes',
      path: '/cocktails',
    },
    {
      label: 'Baking',
      path: '/baking',
    },
  ]

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between p-6 bg-blue_gray drop-shadow-sm">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-3xl text-white">
          Recipe<span className="text-blue_gray_light">Book</span>
        </span>
      </div>
      <ul className="sm:flex sm:justify-end sm:items-center ">
        {
          navBarItems.map((item) => 
            <li
              key={item.label}
            >
              <NavLink
                to={item.path}
                className="[&.active]:underline focus:underline hover:underline underline-offset-8 decoration-2 decoration-blue_gray_light text-white transition duration-200 hover:delay-75 ml-4"
              >
                { item.label }
              </NavLink>
            </li>
          )
        }
      </ul>
      </nav>
    </>
  )
}
