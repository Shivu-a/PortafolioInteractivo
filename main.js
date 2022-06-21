// Importar librerias
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DoubleSide, Scene } from "three";

//Escena
const escena = new THREE.Scene();

// Camara
const camara = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camara.position.setZ(30);
camara.position.setY(5);

// Renderizador
const renderizador = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true,
});

renderizador.setPixelRatio(window.devicePixelRatio);
renderizador.setSize(window.innerWidth, window.innerHeight);
renderizador.outputEncoding = THREE.sRGBEncoding;

// Orbita
const orbita = new OrbitControls(camara, renderizador.domElement);

//grid helper
const helper = new THREE.GridHelper(150, 150);
escena.add(helper);

// Esfera - Luna
const geometriaEsfera = new THREE.SphereGeometry(15, 32, 16);
const materialEsfera = new THREE.MeshBasicMaterial({ color: 0xffffff });
const esfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
esfera.position.setX(30);
esfera.position.setY(100);
esfera.position.setZ(-200);
escena.add(esfera);

//casa
const geometriaCubo = new THREE.BoxGeometry(10, 10, 10, 10);
const materialCubo = new THREE.MeshStandardMaterial({ color: 0x1e1e1e });
const cubo = new THREE.Mesh(geometriaCubo, materialCubo);
cubo.position.y = 5;

const geometriaTriangulo = new THREE.ConeGeometry(5, 10, 150);
const materialTriangulo = new THREE.MeshStandardMaterial({ color: 0x1e1e1e });
const triangulo = new THREE.Mesh(geometriaTriangulo, materialTriangulo);
triangulo.position.y = 15;

const casa = new THREE.Group();
casa.add(cubo);
casa.add(triangulo);
escena.add(casa);

//piso
const pisoGeometria = new THREE.PlaneGeometry(150, 150);
const pisoMaterial = new THREE.MeshStandardMaterial({
  color: 0x141414,
  side: DoubleSide,
});
const piso = new THREE.Mesh(pisoGeometria, pisoMaterial);
piso.position.y = 0.2;
piso.position.x = 0;
piso.position.z = 0;
piso.rotation.x = 1.57;

escena.add(piso);

//modelo
const loader = new GLTFLoader();
loader.load(
  "modelo/scene.gltf",
  (gltf) => {
    escena.add(gltf.scene);
  },
  undefined,
  (error) => {
    console.log(error);
  }
);

// luz
const luz = new THREE.DirectionalLight(0xffffff);
luz.position.y = 100;
luz.position.x = 30;
luz.position.z = -200;
escena.add(luz);

// animar funcion
function animar() {
  requestAnimationFrame(animar);
  casa.rotation.y += 0.02;
  renderizador.render(escena, camara);
}

animar();
