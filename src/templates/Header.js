const Header = () => {
    const view = `
    <ul class="nav justify-content-end">
        <li class="nav-item">
          <span>SPA con Javascript Vanilla consumiendo API de Rick and Morty</span>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/about/">Acerca de</a>
        </li>
        <li class="nav-item">
      </ul>
    `;
    return view;
  };
  export default Header;