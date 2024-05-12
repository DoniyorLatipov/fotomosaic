function selectMode() {
  const select = document.getElementById('selectMode');

  select.addEventListener('change', () => {
    const activeMode = document.querySelector('.header__mode_active');
    activeMode.classList.remove('header__mode_active');
    switch (select.value) {
      case '0':
        const fillMode = document.getElementById('basic');
        fillMode.classList.add('header__mode_active');
        break;
      case '1':
        const formatMode = document.getElementById('format');
        formatMode.classList.add('header__mode_active');
        break;
      case '2':
        const selectMode = document.getElementById('select');
        selectMode.classList.add('header__mode_active');
        break;
      case '3':
        const moveMode = document.getElementById('move');
        moveMode.classList.add('header__mode_active');
        break;
      default:
        throw new Error('Unknown mod value');
    }
  });
}

export default selectMode;
