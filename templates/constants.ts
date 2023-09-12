
export class TemplateConstants {

    static COMPONENTS = {
        CONTAINER: "componentContainer",
        GAP: "componentGap",
        LIST: "componentList",
        // TEXT: "componentText",
        PRODUCT: "componentProduct",
        OFFER: "componentOffer"
    }

    static COMPONENT_FIELD = {
        COMPONENT_TYPE: "componentType",
        META: "meta",
        bound: "bound",
        CHILDREN: "children", // array
       
    }

    static BOUND:{
        DIRECTION: "direction", // row, column
        WRAP: "wrap", // bool,
        FLEX: "flex", // bool, percent
        HEIGHT: "height",
        WIDTH: "width",
    }

    static DIRECTION: {
        HORIZONTAL: 0,
        VERITCAL: 1,
    }

    

    static BREAKPOINTS: {
        XSmall: "xs"// 600,//xs
        Small: "sm",//[600 , 960], // sm
        Medium: "md",//[960 , 1280], //md
        Large:  "lg"//[1280 , 1920], //lg
        XLarge: "xl"//1920, //xl

    }

    // related to height and width
    static DIMENTION: {
        MATCH: -1,
        WRAP: -2,
        GROW: -3,
        PERCENT: 25 //25,50,75,100
    }
}