import styles from "./styles.module.scss"

const Dropdown = () => {
  return (
    <nav className={styles.menu}>
      <ol>
        <li className="menu-item">
          <a href="#0">Frontend</a>
          <ol className="sub-menu">
            <li className="menu-item">
              <a href="https://react.dev/">React 18</a>
            </li>
            <li className="menu-item">
              <a href="https://www.typescriptlang.org/">Typescript</a>
            </li>
            <li className="menu-item">
              <a href="https://redux-toolkit.js.org/">Redux</a>
            </li>
            <li className="menu-item">
              <a href="https://tailwindcss.com/">Tailwindcss</a>
            </li>
            <li className="menu-item">
              <a href="https://react-hook-form.com/">React-hook-form</a>
            </li>
            <li className="menu-item">
              <a href="https://nice-avatar.dapiok.com/">React-nice-avatar</a>
            </li>
            {/* <li className="menu-item">
              <a href="https://react-slick.neostack.com/">React-slick</a>
            </li> */}
          </ol>
        </li>
        <li className="menu-item">
          <a href="#0">Backend</a>
          <ol className="sub-menu">
            <li className="menu-item">
              <a href="https://nodejs.org/en">Node</a>
            </li>
            <li className="menu-item">
              <a href="https://expressjs.com/ru/">Express</a>
            </li>
            <li className="menu-item">
              <a href="https://www.mongodb.com/">Mongodb</a>
            </li>
            <li className="menu-item">
              <a href="https://www.prisma.io/">Prisma</a>
            </li>
          </ol>
        </li>
      </ol>
    </nav>
  )
}

export default Dropdown
