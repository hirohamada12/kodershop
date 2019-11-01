export default [
    {
        "menu_title": "Home",
        "type": "menu",
        "path": "/",
        "icon": "FaHome"
    },
    {
        "menu_title": "Category",
        "path": "/category",
        "type": "subMenu",
        "child_routes": [
            {
                "path": "/category/shirt",
                "menu_title": "Shirt",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
            {
                "path": "/shop/clothing/29",
                "menu_title": "Product Detail",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
        ],
    },
    {
        "menu_title": "Blog",
        "path": "/Blogfullwidth",
        "mega": true,
        "icon": "party_mode",
        "type": "subMenu",
        "child_routes": [
            {
                "path": "/Blogfullwidth",
                "menu_title": "Blog Full Width",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
            {
                "path": "/Blogsinglepage",
                "menu_title": "Blog Post Single",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
        ]
    },

    {
        "menu_title": "Pages",
        "type": "subMenu",
        "path": "",
        "icon": "home",
        "child_routes": [
            {
                "path": "/Aboutus",
                "menu_title": "About Us",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
            {
                "path": "/Contactus",
                "menu_title": "Contact Us",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
            {
                "path": "/ComingSoon",
                "menu_title": "Coming Soon",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
            {
                "path": "/Maintenance",
                "menu_title": "Maintenance",
                "icon": "arrow_right_alt",
                "child_routes": null
            },
            {
                "path": "/404",
                "menu_title": "Page Not Found",
                "icon": "arrow_right_alt",
                "child_routes": null
            }
        ]
    },
]
