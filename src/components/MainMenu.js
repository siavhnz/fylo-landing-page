import styleUtils from "./MainMenu.module.css";

const MainMenu = () => {
  const data = ["Features", "Team", "Sign In"];

  return (
    <nav className={styleUtils.menu}>
      <ul>
        {data.map((item) => {
          return (
            <li key={item}>
              {/* 
                It must be a route Link but for this solution
                I use anchar
            */}
              <a href="./" className={styleUtils.item}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenu;
