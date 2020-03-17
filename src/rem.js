function Rem () {
  // 设置根元素fontsize为布局视口宽度的1/10
  const fontSize = document.documentElement.clientWidth/10
  document.documentElement.style.fontSize = fontSize + 'px'
}
Rem()