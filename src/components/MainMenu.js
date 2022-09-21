const MainMenu = () => {
  const data = ["Features", "Team", "Sing In"];

  return (
    <nav>
      <ul>
        {data.map((item) => {
          return (
            <li key={item}>
              {/* 
                It must be a route Link but for this solution
                I use anchar
            */}
              <a href="./">{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenu;
