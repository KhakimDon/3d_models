<template>
    <div class="h-[700px] max-w-[1200px] mx-auto mt-[100px]">
        <model-viewer src="../../public/weapon_rif_ak47.glb" class="w-[100%] h-[100%]" ar ar-modes="webxr scene-viewer quick-look" camera-controls
              shadow-intensity="1" autoplay exposure="0.4" tone-mapping="neutral">
            <div class="progress-bar hide" slot="progress-bar">
                <div class="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
                View in your space
            </button>
            <div id="ar-prompt">
                <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
            </div>
        </model-viewer>




    </div>
</template>

<script setup>
import('@google/model-viewer')

const modelViewerColor = document.querySelector("model-viewer#color");


function func() {
    const colorString = event.target.dataset.color;
    // console.log(colorString);   
    //   const [material] = modelViewerColor.model.materials;
    //   material.pbrMetallicRoughness.setBaseColorFactor(colorString);
}

// document.querySelector('#color-controls').addEventListener('click', (event) => {
//   const colorString = event.target.dataset.color;
//   const [material] = modelViewerColor.model.materials;
//   material.pbrMetallicRoughness.setBaseColorFactor(colorString);
// });
</script>

<style></style>