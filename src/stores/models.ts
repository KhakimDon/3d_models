import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModels = defineStore('models', () => {

    const models = [
        {
            _id: 1,
            title: "3d skin",
            description: '',    
            price: '', 
            url: '',
            image: '',

        },
        {
            _id: 1,
            title: "3d skin",
            description: '',    
            price: '', 
            url: '',
            image: '',

        },
    ]

    return {models}

})
