// library ref: because we are loading a module
import * as THREE from 'three';
//SCENE
const scene = new THREE.Scene()
//A: the geometry
const loader = new THREE.TextureLoader();

//const material = new THREE.MeshBasicMaterial()
const grass_texture = await loader.loadAsync('textures/grass_dirt.png');
//need to ensure that the textures are encoded correctly - mapping the colors correctly.
grass_texture.colorSpace = THREE.SRGBColorSpace;

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

window.requestAnimationFrame(animate)
let elapsedTime = 0  //
function animate(timer) {
    //calculate the difference since last frame
    let deltaTime = timer - elapsedTime
    elapsedTime = timer //update  new elapsedTime
    mesh.rotation.y += 0.001 * deltaTime
    mesh.rotation.x += 0.002 * deltaTime

    // Update objects -> elapsed time increases ...
    mesh_2.position.x = Math.cos(elapsedTime / 1000)
    mesh_2.position.y = Math.sin(elapsedTime / 1000)

    camera.position.x = Math.cos(elapsedTime / 10000)
    camera.position.y = Math.sin(elapsedTime / 10000)
    camera.position.z = 4 + Math.cos(elapsedTime / 100)



    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)

}

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -2
const sizes = {
    width: 800,
    height: 600
}
//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

camera.position.z = 3
//Access the Canvas
const canvas = document.querySelector('canvas#three-ex')
//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)

//render:





renderer.render(scene, camera)
