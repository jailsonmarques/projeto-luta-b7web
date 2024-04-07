let char = new Knight('Jailson');
let monster = new BigMonster();

const stage = new Stage(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster')
);

stage.start();