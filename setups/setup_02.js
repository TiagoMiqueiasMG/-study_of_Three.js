const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x000000
    
};

//antialias permite tirar o serrrilhado da borda da imagem
const renderer = new THREE.WebGLRenderer(
    {antialias: true }
);

//Pixel Ratio adapta de foma correta o numero de pixel para o tamanho da tela
renderer.setPixelRatio(
    window.devicePixelRatio
);

//***Observar se aplicações que melhoram as imagens pesam os computadores***

renderer.setSize(
    options.width, options.height
);

document.querySelector(
   options.targetSelector
).appendChild(renderer.domElement);

const scene= new THREE.Scene();
scene.background = new THREE.Color(
   options.backgroundColor
);

const camera = new THREE.PerspectiveCamera(
    50,options.width/options.height
);
camera.position.x= 1.5;
camera.position.y= 6.8;
camera.position.z= 11.83;

// AmbienteLight ilumina o objeto de todos os lados possíveis, com uma luz só, não respeitando as leis da física. "Tipo uma luz fake"
//const light = new THREE.AmbientLight(
   // 0x2728F5, 5
//);


// No HemisphereLight temos a opção de colocar duas fontes de luz, a do hemisfério (cima) e do chão (de baixo), tendo a ideia da luz que vem de cima e reflete
const light = new THREE.HemisphereLight
(
    0xE3DC07, 0x998450, 1
)

//Aqui ativamos a luz do código acima

scene.add(light);

//Aqui chamamos o X3, criando as linhas guias e base do cenário
const x3 = new THREEx3(
    {
     THREE,
     OrbitControls: THREE.OrbitControls,
     camera,
     renderer,
     scene,
    }
);

//Ferramenta para adicionar câmera, podendo ser controlada pela barra lateral a direita.
x3.add(camera);

//adicionando câmera
//x3.add(light);

//caso queira desativar o HemisphereLightHelper: 
x3.add(light, { helper:{visible:false}});

//Tirar opções da câmera

//x3.add(camera, { open: false});


