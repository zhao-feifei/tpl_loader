import tpl from './info.tpl';

const oApp = document.querySelector('#app');

const info = {
  name: '赵飞飞',
  age: 18,
  career: '学生'
}
console.log(info);
oApp.innerHTML = tpl(info)