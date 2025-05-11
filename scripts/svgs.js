const container = document.getElementById('svg-container');
const originalList = [
  'camera.svg',
  'camera2.svg',
  'celular.svg',
  'claquete.svg',
  'computador.svg',
  'mais.svg',
  'menos.svg',
  'microfone.svg'
];

const svgList = originalList.flatMap(file => [file, file]);

const positions = [];
const minDistance = 10;
const minDistancePair = 25;
const placedPairs = {};

function isFarEnough(x1, y1) {
  return positions.every(([x2, y2]) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy) >= minDistance;
  });
}

function loadSVG(file, x, y, angle, delay) {
  fetch(`imagens/svg/${file}`)
    .then(res => res.text())
    .then(svgText => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = svgText;

      const svg = wrapper.querySelector('svg');
      svg.classList.add('css-img');

      svg.style.position = 'absolute';
      svg.style.top = `${y}vh`;
      svg.style.left = `${x}vw`;
      svg.style.transform = `translateX(-100vw) rotate(${angle}deg)`;
      svg.style.opacity = 0;
      svg.style.transition = 'transform 1s ease-out, opacity 0.5s ease';
      svg.style.willChange = 'transform, opacity';

      container.appendChild(svg);

      setTimeout(() => {
        svg.style.transform = `rotate(${angle}deg)`;
        svg.style.opacity = 1;
      }, delay);
    });
}

svgList.forEach(file => {
  let x, y, isSecondOfPair = placedPairs[file] !== undefined;
  let attempts = 0;

  do {
    x = 50 + Math.random() * 50;
    y = Math.random() * 90;
    attempts++;

    const farFromAll = isFarEnough(x, y);

    let farFromPair = true;
    if (isSecondOfPair) {
      const [px, py] = placedPairs[file];
      const dx = x - px;
      const dy = y - py;
      const dist = Math.sqrt(dx * dx + dy * dy);
      farFromPair = dist >= minDistancePair;
    }

    if (farFromAll && farFromPair) break;

    if (attempts > 100) break;
  } while (true);


  if (!isSecondOfPair) placedPairs[file] = [x, y];
  positions.push([x, y]);

  const angle = (Math.random() * 70 - 35).toFixed(1);
  const delay = Math.random() * 400;

  loadSVG(file, x, y, angle, delay);
});
