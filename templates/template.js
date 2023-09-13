var templates =

{
    "type": "componentList",
    "bound": {
        "direction": "row",
        "wrap": true,

        "height": -2

    },

    "valueType": "object",
    "children": [templateOffers, templateProduct]

}


var templateOffers = {
    "type": "componentList",
    "bound": {
        "direction": "column",
        "flex": {
            "xs": false,
            "sm": 66.67,
            "md": 50,
            "lg": 50,
            "xl": 50

        },
        "height": {
            "xs": -2,
            "sm": -1,
            "md": -1,
            "lg": -1,
            "xl": -1
        }

    },

    "valueType": "object",
    "valueModel": "modelOffer",
    "childCount": 2,
    "children": [
        {
            "type": "componentOffer",
            "bound": {
                "flex": 50,
            }

        }
    ]

}


var templateProduct = {
    "type": "componentProduct",

    "valueType": "object",
    "valueModel": "modelProduct",
    "bound": {
        "flex": {
            "xs": 50,
            "sm": 33.33,
            "md": 25,
            "lg": 25,
            "xl": 25

        },
        "height": {
            "xs": -2,
            "sm": -2,
            "md": -2,
            "lg": -2,
            "xl": -2
        }

    }


}
