export const color =[
    'white',
    'Black',
    'Red',
    'marun',
    'Being',
    'pink',
    'Green',
    'Yellow',
];

export const filters=[
    {
        id:'color',
        name:'Color',
        options:[
            {value:'white',label:'white'},
            {value:'beige',label:'Beige'},
            {value:'blue',label:'Blue'},
            {value:'brown',label:'Brown'},
            {value:'green',label:'Green'},
            {value:'purple',label:'Purple'},
            {value:'yellow',label:'Yellow'}


        ],
    },
    {
        id:'size',
        name:'Size',
        options:[
            {value:'S',label:'S'},
            {value:'M',label:'M'},
            {value:'L',label:'L'},

        ],
    }
];

export const singleFilter=[
    {
        id:'Price',
        name:"Price",
        options:[
            {value:'159-399',label:"Rs159 To Rs399"},
            {value:'399-999',label:"Rs399 To Rs999"},
            {value:'999-1000',label:"Rs999 To Rs2999"},
            {value:'3999-4999',label:"Rs3999 To Rs4999"},



        ],
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {
            value:'10',
            label:'10% And Above',
        
        },
        {value:"20",label:"20% And Above"},
        {value:"30",label:"30% And Above"},
        {value:"40",label:"40% And Above"},
        {value:"50",label:"50% And Above"},
        {value:"60",label:"60% And Above"},
        {value:"70",label:"70% And Above"},
        {value:"80",label:"80% And Above"},

        ],
    },
    {
        id:'stock',
        name:'Availability',
        options:[
            {value:'in-stock',label:'In Stock'},
            {value:'out_of_stock',label:'Out Of Stock'},

        ],

    },
];
export const sortOptions=[
    {
        name:"Price:Low to High ",query:"price_low", current:false
    },
    {
        name:'Price:High to Low ',query:'price_high', current:false
    }
];