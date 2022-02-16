
const material = new THREE.MeshLambertMaterial(
    {color: 0x00B3A7}
);
//x,y,z (boxBufferGeometry tamanho do objeto em metros)
const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1), material
);

scene.add(cube);

const circle = new THREE.Mesh(
       //radius segments (tamanho)
    new THREE.CircleBufferGeometry(
        0.8,20
    ),
    material
);
//posição do círculo
circle.position.x = -3;
//rotação do círculo
circle.rotation.x = THREE.MathUtils.degToRad(-90);

//THREE.MathUtils.degToRad() essa função transforma a medida em radio em graus.

scene.add(circle);

x3.add(circle,{label: 'circle'});
//adicionando cubo com x3
//, {label: 'cube'} --- Esse código serve para você nomear seu objeto, servindo assim como orientação.
x3.add(cube, {label: 'cube'});



//Aqui você gera uma imagem statica do cubo
//cube.rotation.x = 90;
//cube.rotation.y = 90;


//Aqui é o código que gera a animação do cubo
renderer.setAnimationLoop(() =>{      
    

    //importante para os objetos usando o x3
    x3.tick();

    //Código para medir fps:
    x3.fps(()=>{
        renderer.render(scene,camera);
    });   
});

