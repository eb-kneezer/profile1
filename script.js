
let root = document.documentElement;

document.addEventListener('click', (e) => {
  // if (e.target.id === 'blue') {
  //   root.style.setProperty('--theme', 'blue')
  // } else if (e.target){
  // }

  switch (e.target.id) {
    case 'blue':
      root.style.setProperty('--theme', 'blue');
      break;
    case 'green':
      root.style.setProperty('--theme', 'rgb(82, 165, 0)');
      break;
    case 'red':
      root.style.setProperty('--theme', 'rgb(209, 0, 0)');
      break;
    case 'purple':
      root.style.setProperty('--theme', 'darkmagenta');
      break;

  }
})