import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModels = defineStore('models', () => {

    const models = [
        {
            _id: 1,
            title: "Akr - 47",
            description: 'Lorem ipsum dolor.',
            url: '../../public/akms_polish_circle_11_from_radom.glb',
            image: '../../public/akr2.png',
            hotspots: [
                {
                    position: '-0.010827445092932576m -0.08774892664746206m -0.24417347387766528m',
                    normal: "-0.999999999999603m 7.891073660985632e-7m -4.1421079806914297e-7m",
                    annotation: 'Магазин',
                },
                {
                    position: '-0.00840842181350288m 0.08172440198518133m -0.5974367635652008m',
                    normal: "-0.9857473658942755m 0.16823237094119758m -2.7408532094728688e-8m",
                    annotation: 'Ствол',
                },
                {
                    position: '0.0015826896468656409m 0.028337243192085346m -0.06106689348373606m',
                    normal: "-0.0000024930049048323137m 0.3741283836523488m -0.9273769204263529m",
                    annotation: 'курок',
                },
                {
                    position: '-0.011369250460656566m -0.02650395731955238m 0.006301384438310242m',
                    normal: "-1m 0m 0m",
                    annotation: 'рукоядка',
                },

            ]
        },
        {
            _id: 2,
            title: "AWM 256",
            description: 'Такой себе AWM из cs 1.6',
            price: '',
            url: '../../public/awm.glb',
            image: '../../public/awm.png',
            hotspots: [
                {
                    position: '0.02261878138466522m 0.21533452445476078m -0.05136516682748746m',
                    normal: "0.7650671948189491m 0.5845043676466699m 0.270234771289393m",
                    annotation: 'прицел',
                },
                {
                    position: '0.015884565984075838m 0.12051252058696676m 0.8709693886260625m',
                    normal: "0.9238793869971718m -0.3826835828286241m 0.0003920652723727027m",
                    annotation: 'Ствол',
                },
                {
                    position: '0.014750888716814847m -0.051430915058564286m -0.014081797178562727m',
                    normal: "0.9999999999999906m 1.334003646221892e-7m 3.6244241572363917e-8m",
                    annotation: 'магазин',
                },
                {
                    position: '0.0030139538587325987m 0.054478035566537686m -0.15957476725180975m',
                    normal: "-0.003747694939570575m 0.4712765363814502m 0.8819775399855393m",
                    annotation: 'курок',
                },
                {
                    position: '0.026333464815800234m 0.07761909220933062m -0.41970870497422563m',
                    normal: "0.9999886824263298m -0.0034686632489064097m 0.003256285386601901m",
                    annotation: 'корпус',
                },

            ]
        },
        {
            _id: 3,
            title: "AWM 256",
            description: 'Такой себе AWM из cs 1.6',
            price: '',
            url: '../../public/w.glb',
            image: '../../public/awm.png',
            materialz:[
                '../../public/akrmaterialz/1.png',
                '../../public/akrmaterialz/2.png',
                '../../public/akrmaterialz/3.png',
                '../../public/akrmaterialz/4.png',
                '../../public/akrmaterialz/5.png',
                '../../public/akrmaterialz/6.png',
            ],
            hotspots: [
                {
                    position: '0.02261878138466522m 0.21533452445476078m -0.05136516682748746m',
                    normal: "0.7650671948189491m 0.5845043676466699m 0.270234771289393m",
                    annotation: 'прицел',
                },
                {
                    position: '0.015884565984075838m 0.12051252058696676m 0.8709693886260625m',
                    normal: "0.9238793869971718m -0.3826835828286241m 0.0003920652723727027m",
                    annotation: 'Ствол',
                },
                {
                    position: '0.014750888716814847m -0.051430915058564286m -0.014081797178562727m',
                    normal: "0.9999999999999906m 1.334003646221892e-7m 3.6244241572363917e-8m",
                    annotation: 'магазин',
                },
                {
                    position: '0.0030139538587325987m 0.054478035566537686m -0.15957476725180975m',
                    normal: "-0.003747694939570575m 0.4712765363814502m 0.8819775399855393m",
                    annotation: 'курок',
                },
                {
                    position: '0.026333464815800234m 0.07761909220933062m -0.41970870497422563m',
                    normal: "0.9999886824263298m -0.0034686632489064097m 0.003256285386601901m",
                    annotation: 'корпус',
                },

            ]
        },
    ]

    return { models }

})
