const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial(
    {color: 0xFFFFFF}
);

const cube = new THREE.Mesh(
    geometry, material
);

scene.add(cube);

//adicionando cubo com x3
//, {label: 'cube'} --- Esse código serve para você nomear seu objeto, servindo assim como orientação.
x3.add(cube, {label: 'cube'});



//Aqui você gera uma imagem statica do cubo
//cube.rotation.x = 90;
//cube.rotation.y = 90;


//Aqui é o código que gera a animação do cubo
renderer.setAnimationLoop(() =>{      
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //importante para os objetos usando o x3
    x3.tick();

    //Código para medir fps:
    x3.fps(()=>{
        renderer.render(scene,camera);
    });   
});


