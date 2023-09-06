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
        <span className="text-2xl text-white sm:text-3xl">
          Recipe<span className="text-blue_gray_light">Book</span>
        </span>
      </div>
      <ul className="flex items-center justify-end gap-4">
        {
          navBarItems.map((item) => 
            <li
              key={item.label}
            >
              <NavLink
                to={item.path}
                className="[&.active]:underline text-sm sm:text-base focus:underline hover:underline underline-offset-8 decoration-2 decoration-blue_gray_light text-white transition duration-200 hover:delay-75"
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
