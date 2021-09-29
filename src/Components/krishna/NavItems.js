import cart from "./images/cart.png";
import searchicon from "./images/searchicon.png";
import profile from "./images/profile.png";



export const navItems=[
    {id:1, title:"Shop", path:"./shop", cName:"nav-item"},
    {id:2, title:"About", path:"./about", cName:"nav-item"},
    {id:3, title:"Store Locator", path:"./store", cName:"nav-item"}
    
];
export const navIcons=[

    {id:1, icon:"./navImg/lsearchicon.svg",name:"searchicon",path:"",cName:"navicon", src:searchicon},
    {id:2, icon:"./navImg/profile.svg",name:"profileicon",path:"",cName:"navicon", src:profile},
    {id:3, icon:"./cart.png",path:"",name:"carticon",cName:"navicon",src:cart},
]
export const shopDropdown1=[
   {id:1, title:"Herbal Supplements", path:"./HerbalSuppplements", cName:"shopDropdown-bold"},
   {id:2, title:"Oral Care", path:"./oralCare", cName:"shopDropdown-bold"},
   {id:3, title:"Personal Care", path:"./personalcare", cName:"shopDropdown-bold"},
   {id:4, title:"Single Herb Supplement", path:"./singleherb", cName:"shopDropdown-light"},
   {id:5, title:"Adult Toothpaste", path:"./toothpaste", cName:"shopDropdown-light"},
   {id:6, title:"Face Care", path:"./facecare", cName:"shopDropdown-light"},
   {id:7, title:"Multi Ingredient Supplement", path:"./multiingredient", cName:"shopDropdown-light"},
   {id:8, title:"Kids Toothpaste", path:"./kidstoothpaste", cName:"shopDropdown-light"},
   {id:9, title:"Cleansing Bars", path:"./cleansingbars", cName:"shopDropdown-light"},

]


export const shopDropdown2=[
   {id:1, title:"Blood Sugar", path:"./bloodsugar", cName:"submenu-item"},
   {id:2, title:"Immune Supplement", path:"./immune", cName:"submenu-item"},
   {id:3, title:"Personal Care", path:"./personalcare", cName:"submenu-item"},
   {id:4, title:"Stress mood", path:"./stressmood", cName:"submenu-item"},
   {id:5, title:"Brain Cognitive", path:"./braincog", cName:"submenu-item"},
   {id:6, title:"Joint Mobility", path:"./joint", cName:"submenu-item"},
   {id:7, title:"Urinary", path:"./urinary", cName:"submenu-item"},
   {id:8, title:"Digestion", path:"./digestion", cName:"submenu-item"},
   {id:9, title:"Liver Cleanse", path:"./livclean", cName:"submenu-item"},
   {id:10, title:"Weight Management", path:"./weightmanagement", cName:"submenu-item"},
   {id:11, title:"Men's wellness", path:"./menwell", cName:"submenu-item"},
   {id:12, title:"LWomen's Wellness", path:"./womenwell", cName:"submenu-item"},
   {id:13, title:"Hair Skin and Nails", path:"./hairskin", cName:"submenu-item"},
   {id:14, title:"Respiratory", path:"./resp", cName:"submenu-item"},
   {id:15, title:"Sleep", path:"./sleep", cName:"submenu-item"},
   {id:16, title:"SHeart and Cardio", path:"./heartcardio",cName:"submenu-item"},
   {id:17, title:"Environment", path:"./env", cName:"submenu-item"},
   {id:18, title:"Ayurvedic", path:"./ayur", cName:"submenu-item"},

]