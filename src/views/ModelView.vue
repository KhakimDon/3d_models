<template>
    <div class="mx-auto pt-[50px]">
        <div class="m max-w-[1200px] flex mx-auto"><button class="h-[40px] borderall w-[120px] mb-[20px]"
                @click="this.$router.push('/')"> НАЗАД</button>
            <h1 class="ls">{{ item.title }}</h1>
            <!-- <div class="h-[100%] ml-[30px]">
                <div class="h-[50px] w-[50px] ml-[20px] borderpink"></div>
            </div> -->
        </div>
        <div class="mx-auto flex flex-col items-center min-h-[100vh] flex">
            <div class="h-[500px] sticky top-0 z-40  bg-[#333] ter w-[100%] items-center justify-center">
                <!-- <ModelViewer src="../../public/export.glb" class="h-[100%] w-[100%]" auto-rotate camera-controls>
                </ModelViewer> -->
                <model-viewer @load="onloadViewer()" id="transform" orientation="20deg 0 0" :src="item.url" ar class="h-[100%] w-[100%]"
                    exposure="1" ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce"
                    shadow-intensity="1" camera-orbit="-137.5deg 94.59deg 1.631m" field-of-view="22.98deg">

                    <select id="normals2">
                        <option>None</option>   
                        <option value="../../public/akrmaterialz/1.png">1</option>
                        <option value="../../public/akrmaterialz/2.png">2</option>
                        <option value="../../public/akrmaterialz/3.png">3</option>
                    </select>


                    <button v-for="(i, index) of item.hotspots" :key="item.id" class="Hotspot"
                        :slot="`hotspot-${index + 1}`" :data-position="i.position" :data-normal="i.normal"
                        data-visibility-attribute="visible">
                        <div class="HotspotAnnotation">{{ i.annotation }}</div>
                    </button>

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
            <div class="h-[100%] m414 w-[50%] p-[20px] borderall mt-[20px]">
                <label class="cursor-pointer label gap-[20px] flex items-start justify-start">
                    <h2 class="text-[30px] text-white mb-[30px]">Exposures:</h2>
                    <input @input="exp()" type="range" value="1" max="2" class="range-secondary boxhrang range ">
                </label>
                <label class="cursor-pointer label gap-[20px] flex items-start justify-start">
                    <h2 class="text-[30px] text-white mb-[30px]">Hotpoints:</h2>
                    <input @click="hot()" type="checkbox" class="checkbox mt-[10px] checkbox-secondary" />
                </label>
                <label class="cursor-pointer label gap-[20px] flex items-start justify-start">
                    <h2 class="text-[30px] text-white mb-[30px]">background:</h2>
                    <input @click="bg()" type="checkbox" class="checkbox mt-[10px] checkbox-secondary" />
                </label>
                <h2 class="text-[30px] text-white mb-[30px]">Transforms:</h2>
                <div class="controls flex  flex-wrap gap-[20px]">
                    <div class="w-[48%] flex flex-col">
                        <div class="mb-[10px] w-[100%]">Roll: <input type="range" id="roll" value="20" size="3"
                                class="number range-secondary boxhrang range"> </div>
                        <div class="mb-[10px] w-[100%]">Pitch: <input type="range" id="pitch" value="0" size="3"
                                class="number range-secondary boxhrang range"> </div>
                        <div class="mb-[10px] w-[100%]">Yaw: <input type="range" id="yaw" value="0" size="3"
                                class="number range-secondary boxhrang range"> </div>
                    </div>
                    <div class="w-[48%] flex flex-col">
                        <div class="mb-[10px] ">
                            Scale: X: <input type="range" id="x" value="1" size="3"
                                class="number range-secondary boxhrang range ">
                        </div>
                        <div class="mb-[10px] ">
                            Y: <input id="y" type="range" value="1" size="3"
                                class="number w-[100%] range-secondary boxhrang range ">
                        </div>
                        <div class="mb-[10px] ">
                            Z: <input id="z" value="1" type="range" size="3"
                                class="number w-[100%] range-secondary boxhrang range ">
                        </div>
                    </div>
                    <div>
                        <button class="borderall px-[20px] py-[12px] mt-[20px]" id="frame">Update Framing</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ModelViewer from '../components/ModelViewer.vue'
import { useModels } from '@/stores/models';




const store = useModels()
let item = {}
for (let i of store.models) {
    if (i._id == +window.location.pathname.split('/')[2]) {
        item = i
    }
}


let bgAR = false
let hotpoins = false
function exp() {
    document.querySelector("#transform").setAttribute('exposure', event.target.value)
}



function onloadViewer() {
    const modelViewerTexture = document.querySelector("#transform");
    const material = modelViewerTexture.model.materials[0];

    const createAndApplyTexture = async (channel, event) => {
        if (event.target.value == "None") {
            // Clears the texture.
            material[channel].setTexture(null);
            // Display the names values
        } else if (event.target.value) {
            // Creates a new texture.
            const texture = await modelViewerTexture.createTexture(event.target.value);
            // Set the texture name
            texture.name = event.target.options[event.target.selectedIndex].text.replace(/ /g, "_").toLowerCase();
            // Applies the new texture to the specified channel.
            material[channel].setTexture(texture);
            // Display the names values
        }
    }

    document.querySelector('#normals2').addEventListener('input', (event) => {
        createAndApplyTexture('normalTexture', event);
    });


}

function hot() {
    hotpoins = !hotpoins
    if (hotpoins) for (let i of document.querySelectorAll('.HotspotAnnotation')) i.classList.add("opac")
    else for (let i of document.querySelectorAll('.HotspotAnnotation')) i.classList.remove("opac")
}

function bg() {
    bgAR = !bgAR
    if (bgAR) document.querySelector('#transform').setAttribute('skybox-image', 'https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.jpg')
    else document.querySelector('#transform').removeAttribute('skybox-image', 'https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.jpg')
}

onMounted(() => {
    const modelViewerTransform = document.querySelector("model-viewer#transform");
    const roll = document.querySelector('#roll');
    const pitch = document.querySelector('#pitch');
    const yaw = document.querySelector('#yaw');
    const x = document.querySelector('#x');
    const y = document.querySelector('#y');
    const z = document.querySelector('#z');
    const frame = document.querySelector('#frame');

    frame.addEventListener('click', () => {
        modelViewerTransform.updateFraming();
    });

    const updateOrientation = () => {
        modelViewerTransform.orientation = `${roll.value}deg ${pitch.value}deg ${yaw.value}deg`;
    };

    const updateScale = () => {
        modelViewerTransform.scale = `${x.value} ${y.value} ${z.value}`;
    };

    roll.addEventListener('input', () => {
        updateOrientation();
    });
    pitch.addEventListener('input', () => {
        updateOrientation();
    });
    yaw.addEventListener('input', () => {
        updateOrientation();
    });
    x.addEventListener('input', () => {
        updateScale();
    });
    y.addEventListener('input', () => {
        updateScale();
    });
    z.addEventListener('input', () => {
        updateScale();
    });






})

</script>

<style>
.boxhrang {
    box-shadow: 0 0 10px rgb(255, 0, 234), inset 0 0 10px rgb(255, 0, 234);
    border: 1px solid rgb(255, 0, 234);
}

.ter {
    border-bottom: 2px solid rgb(255, 0, 234);
}

#ar-prompt {
    display: none;
}

.ls {
    color: rgb(255, 0, 234);
    font-size: 25px;
    margin-left: 20px;
    text-shadow: 0 0 10px rgb(255, 0, 234);
}

.HotspotAnnotation {
    opacity: 0;
    background: white;
    font-size: 10px;
    padding: 5px 15px;
    border-radius: 10px;
}

.borderall {
    border: 2px solid rgb(255, 0, 234);
    font-family: arial;
    font-weight: 600;
    color: rgb(255, 0, 234);
    box-shadow: 0 0 10px rgb(255, 0, 234), inset 0 0 10px rgb(255, 0, 234);
}

.opac {
    opacity: 1;
}

.borderpink {
    box-shadow: 0 0 10px rgb(255, 0, 234);
    margin-top: -5px;
    border: 2px solid rgb(255, 0, 234);
}


@media screen and (max-width: 414px) {
    .m414 {
        width: 90%;
    }

    .m {
        margin-left: 20px;
    }
}
</style>