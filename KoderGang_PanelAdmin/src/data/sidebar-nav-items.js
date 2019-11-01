export default function () {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Sản phẩm",
      htmlBefore: '<i class="material-icons">shopping_basket</i>',
      to: "/product",
    },
    {
      title: "Danh Mục",
      htmlBefore: '<i class="material-icons">apps</i>',
      to: "/category",
    },
    {
      title: "Đơn Hàng",
      htmlBefore: '<i class="material-icons">list_alt</i>',
      to: "/order",
    },
    {
      title: "Kho",
      htmlBefore: '<i class="material-icons">all_inbox</i>',
      to: "/order",
    },
    {
      title: "Người Dùng",
      htmlBefore: '<i class="material-icons">supervised_user_circle</i>',
      to: "/users",
    },
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    // {
    //   title: "Users Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
