function data() {
    return {
        
        email:"Abedelrahmand9@gmail.com",
        phone:"+961 76/368702",
        dialUrl:"tel:961368702",
        whatsappUrl:"https://api.whatsapp.com/send?phone=96176368702",
        githubUrl:"https://github.com/AbedelrahmanD?tab=repositories",
        cvUrl:"https://drive.google.com/file/d/1ZpHwP-MDE0seYce7P5O7NlIVPeYUwdTX/view?usp=sharing",
        selectedNavItem: "home",
        nav: [
            {
                name: "home",
                icon: "akar-icons:home"
            },
            {
                name: "technologies",
                icon: "bi:code-slash"
            },
            {
                name: "projects",
                icon: "carbon:idea"
            },
            {
                name: "contactMe",
                icon: "carbon:email"
            },
            // {
            //     name: "cv",
            //     icon: "icon-park-outline:doc-success"
            // },
            // {
            //     name: "github",
            //     icon: "akar-icons:github-fill"
            // },
        ],
        selectedStack: 0,
        stack: [
            {
                color: "rgb(4 249 80)",
                name: "Web Developer",
                icon:"carbon:application-web"
            },
            {
                color: "#F35268",
                name: "Mobile Developer",
                icon:"carbon:application-mobile"
            },
            {
                color: "rgb(67 110 231)",
                name: "Full Stack Developer",
                icon:"carbon:ibm-z-cloud-mod-stack"
            }
        ],
        technologies:[
            {
                id:"html",
                name:"Html",
                icon:"vscode-icons:file-type-html"
            },
            {
                id:"css",
                name:"CSS",
                icon:"vscode-icons:file-type-css"
            },
            {
                id:"javascript",
                name:"Javascript",
                icon:"vscode-icons:file-type-js-official"
            },
            {
                id:"jquery",
                name:"JQuery",
                icon:"cib:jquery",
                color:"#78CFF5"
            },
            {
                id:"sass",
                name:"Sass",
                icon:"logos:sass",
            },
            {
                id:"bootstrap",
                name:"Bootstrap",
                icon:"logos:bootstrap"
            },
           
            {
                id:"materialize",
                name:"Materialize",
                icon:"logos:materializecss"
            },
            {
                id:"alpine",
                name:"Alpine.js",
                icon:"logos:alpinejs-icon"
            },
            {
                id:"vue",
                name:"Vue.js",
                icon:"logos:vue"
            },
            {
                id:"express",
                name:"Express.js",
                icon:"simple-icons:express",
                color:"#a79d9d"
            },
            {
                id:"php",
                name:"PHP",
                icon:"vscode-icons:file-type-php"
            },
            {
                id:"laravel",
                name:"Laravel",
                icon:"logos:laravel"
            },
            {
                id:"mysql",
                name:"MySQL",
                icon:"logos:mysql"
            },
            {
                id:"flutter",
                name:"Flutter",
                icon:"logos:flutter"
            },
            {
                id:"restapi",
                name:"Rest API",
                icon:"logos:postman-icon",
                color:"white"

            }

           
        ],
        projects:[
            {
                img:"goblogs.png",
                technologies:["jquery","sass","laravel","mysql"],
                link:"http://go-blogs.great-site.net"
            },
            {
                img:"menubook.png",
                technologies:["jquery","css","laravel","mysql"],
                link:"http://menu-book.great-site.net"
            },
            {
                img:"adshop.png",
                technologies:["jquery","sass","php","mysql"],
                link:"http://ad-shop.epizy.com/"
            },
            {
                img:"sellink.png",
                technologies:["vue","bootstrap","express","mysql"],
                link:"https://sellink.netlify.app"
            },
            // {
            //     img:"sellink.png",
            //     technologies:["vue","express","mysql"],
            //     link:"https://sellink.netlify.app"
            // }
        ]
      
    };
}

