import * as THREE from 'three';
const container = document.getElementById("box");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.offsetWidth, container.offsetWidth);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const edges = new THREE.EdgesGeometry( geometry ); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { 
	color: 0x00ff00,
} ) ); 
scene.add( line );

camera.position.z = 5;
function animate() {

	requestAnimationFrame( animate );

	line.rotation.y += 0.005;

	renderer.render( scene, camera );

}

animate();