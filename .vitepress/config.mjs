import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChatGLM3-Nofire模型",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/background.svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/ChatGLM3-Nofire消防规范问答模型是什么' },
      { text: '快速开始', link: '/快速开始' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '项目背景' ,link: '/beijing'},
          { text: 'ChatGLM3-Nofire消防规范问答模型是什么?', link: '/ChatGLM3-Nofire消防规范问答模型是什么' },
          { text: '快速开始', link: '/快速开始' },
          {text:'技术文档', link: '/技术文档' }

        ]
      }
    ],
        // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon:{
          svg:'<svg t="1713679361327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4266" width="20" height="20"><path d="M204.8 0h614.4C932.311 0 1024 91.689 1024 204.8v614.4c0 113.111-91.689 204.8-204.8 204.8H204.8C91.689 1024 0 932.311 0 819.2V204.8C0 91.689 91.689 0 204.8 0z m104.479 595.2c-13.118-9.933-27.925-16.896-43.162-23.02-31.099-12.247-63.672-16.68-96.88-15.83-7.834 0-15.657 0.634-23.696 1.054 0-0.635-0.635-1.474-0.635-2.53-2.12-23.654-4.659-47.298-6.349-70.522-1.474-19.425-2.109-38.85-2.54-58.266-0.634-37.376-0.634-74.537-0.634-111.902 0-8.868-0.635-7.813-7.403-4.864-20.941 8.448-41.677 16.69-62.618 24.709-0.635 0.635-1.69 2.744-1.27 3.789 6.349 23.654 11.008 47.933 14.183 72.007 3.174 20.9 5.918 41.165 8.878 61.645 2.54 17.95 4.229 35.891 6.348 54.057 2.12 18.36 4.66 36.73 6.77 55.317 2.119 17.735 4.228 34.836 6.348 52.572a1179.74 1179.74 0 0 1 3.81 37.785c0.634 9.933 1.474 19.845 1.689 29.348 0 2.11 0.635 3.175 2.754 3.175 4.65 0 8.878 0.624 13.323 0 21.575-2.12 43.15-3.595 64.307-6.759 16.281-2.54 32.153-6.338 47.81-11.612 22.221-7.393 41.247-20.06 59.659-34.632 7.823-5.908 14.172-13.086 16.916-22.17 5.929-14.99 3.38-25.118-7.608-33.351z m133.662 16.077c-1.105-12.186-2.201-24.986-3.747-37.171-1.536-16.794-3.298-33.588-4.834-50.596-1.536-15.534-2.201-30.864-3.307-46.408-1.536-21.412-3.297-42.834-4.844-64.256l-3.297-47.452c-0.44-5.878-2.867-7.342-9.236-6.922a834.662 834.662 0 0 1-22.887 1.464c-6.605 0.635-13.21 1.475-19.589 2.1 19.804 100.372 28.61 200.949 38.953 300.687 12.104 1.054 23.101 1.679 34.55 2.734 2.201 0.41 3.297 0 3.297-2.1l-1.096-11.55c-0.88-13.865-2.427-27.3-3.963-40.53z m-64.819 10.291c-1.362-12.493-2.54-24.78-3.911-37.263-1.362-14.152-2.54-28.519-4.301-42.67-0.983-8.745-2.355-17.07-3.523-25.396-0.389-3.133-2.355-4.587-5.478-4.167-5.489 0.614-11.356 0.614-17.03 1.454-7.833 1.044-15.667 2.498-23.879 3.543A19510.4 19510.4 0 0 0 349.747 678.4c11.745-1.67 22.897-3.123 34.253-4.577-0.39-4.168-0.983-8.325-1.372-12.083-1.567-13.732-3.134-27.055-4.506-40.172z m120.668 51.814c-0.41-20.858-1.024-41.082-1.443-61.941-0.41-25.703 0-51.815 0-77.517 0-5.694-0.41-10.957-0.615-16.65 0-2.53-1.464-4.629-4.157-4.629a838.164 838.164 0 0 0-32.553-0.645c-4.147 0-7.885 0.635-12.022 1.475 0.41 1.474 0.41 2.529 0.41 3.584 1.454 17.694 3.113 35.174 4.567 52.449 1.454 16.855 3.102 34.13 4.556 50.985 1.66 18.33 3.113 36.659 4.772 54.989 0 1.044 1.66 2.734 2.693 2.734 10.988 0.41 22.59 0 34.202 0-0.41-2.325-0.41-3.79-0.41-4.844zM358.4 484.71c-1.792-20.07-3.226-39.075-4.833-58.511-0.359-2.53-1.25-3.799-3.042-3.799-5.734 0-11.642 0-17.725 0.42 2.324 21.545 4.475 42.25 6.8 63.58 6.625-0.635 12.533-0.85 18.8-1.69zM512 494.89v-54.733c0-3.88-1.638-4.956-5.171-4.956H486.4v62.925c8.93 0.43 17.377 0.645 25.6 1.075v-4.3z m-179.2 1.372v-4.198c-0.952-10.896-2.294-21.381-3.246-32.287-0.574-6.912-1.331-13.62-1.915-20.756-0.379-1.68 0.39-4.199-2.294-3.769-6.113 0.625-12.032 2.09-18.145 2.724 3.44 20.757 6.687 40.888 10.127 61.225l15.473-2.939z m140.8 1.434v-32.533c0-8.56-0.481-17.551 0-26.112 0-3.205-1.198-3.85-4.3-3.85H448c1.915 22.262 3.584 43.233 5.499 64 6.461-0.43 12.923-0.86 20.101-1.495z m283.74 97.659c-13.107-9.933-27.914-16.896-43.141-23.03-31.089-12.247-63.662-16.691-96.86-15.841-7.823 0-15.647 0.634-23.685 1.054 0-0.635-0.635-1.474-0.635-2.54-2.11-23.654-4.65-47.308-6.349-70.553-1.474-19.435-2.11-38.87-2.53-58.296-0.634-37.397-0.634-74.578-0.634-111.964 0-8.868-0.635-7.813-7.404-4.854-20.93 8.448-41.656 16.691-62.597 24.709-0.635 0.42-1.69 2.54-1.474 3.584a563.077 563.077 0 0 1 14.162 72.038c3.174 20.92 5.929 41.196 8.888 61.686 2.54 17.961 4.23 35.912 6.349 54.078 2.11 18.38 4.649 36.761 6.758 55.347 2.12 17.746 4.23 34.857 6.349 52.603 1.475 12.677 2.744 25.139 3.799 37.816 0.635 9.933 1.485 19.855 1.7 29.358 0 2.11 0.635 3.175 2.744 3.175 4.65 0 8.878 0.624 13.322 0 21.576-2.12 43.142-3.595 64.287-6.759a286.618 286.618 0 0 0 47.79-11.622c22.21-7.394 41.247-20.07 59.638-34.642 7.823-5.919 14.172-13.107 16.916-22.19 6.144-14.787 3.595-24.924-7.393-33.157z m133.601 15.923c-1.105-12.186-2.201-24.986-3.747-37.171-1.536-16.794-3.298-33.588-4.834-50.596-1.536-15.534-2.201-30.864-3.307-46.408-1.536-21.412-3.297-42.834-4.844-64.256l-3.297-47.452c-0.44-5.878-2.867-7.342-9.236-6.922-7.711 0.624-15.186 1.044-22.887 1.464-6.605 0.635-13.21 1.475-19.589 2.1 19.804 100.372 28.61 200.949 38.953 300.687 12.104 1.054 23.101 1.679 34.55 2.734 2.201 0.41 3.297 0 3.297-2.1l-1.096-11.55c-0.88-13.865-2.427-27.3-3.963-40.53z m-64.819 10.291c-1.362-12.493-2.54-24.78-3.911-37.263-1.362-14.152-2.54-28.519-4.301-42.67-0.983-8.745-2.355-17.07-3.523-25.396-0.389-3.133-2.355-4.587-5.478-4.167-5.489 0.614-11.356 0.614-17.03 1.454-7.833 1.044-15.667 2.498-23.879 3.543A19510.4 19510.4 0 0 0 797.747 678.4 2574.848 2574.848 0 0 1 832 673.823c-0.39-4.168-0.983-8.325-1.372-12.083-1.567-13.732-3.134-27.055-4.506-40.172z m133.468 51.814c-0.41-20.858-1.024-41.082-1.443-61.941-0.41-25.703 0-51.815 0-77.517 0-5.694-0.41-10.957-0.615-16.65 0-2.53-1.464-4.629-4.157-4.629a838.185 838.185 0 0 0-32.553-0.645c-4.147 0-7.885 0.635-12.022 1.475 0.41 1.474 0.41 2.529 0.41 3.584 1.454 17.694 3.113 35.174 4.567 52.449 1.454 16.855 3.102 34.13 4.556 50.985 1.66 18.33 3.113 36.659 4.772 54.989 0 1.044 1.66 2.734 2.693 2.734 10.988 0.41 22.59 0 34.202 0-0.41-2.325-0.41-3.79-0.41-4.844zM806.4 484.71c-1.792-20.07-3.226-39.075-4.833-58.511-0.359-2.53-1.25-3.799-3.042-3.799-5.734 0-11.642 0-17.725 0.42 2.324 21.545 4.475 42.25 6.8 63.58 6.625-0.635 12.533-0.85 18.8-1.69zM960 494.89v-54.733c0-3.88-1.638-4.956-5.171-4.956H934.4v62.925c8.93 0.43 17.377 0.645 25.6 1.075v-4.3z m-179.2 1.372v-4.198c-0.952-10.896-2.294-21.381-3.246-32.287-0.574-6.912-1.331-13.62-1.915-20.756-0.379-1.68 0.39-4.199-2.294-3.769-6.113 0.625-12.032 2.09-18.145 2.724 3.44 20.757 6.687 40.888 10.127 61.225l15.473-2.939z m153.6 1.434v-32.533c0-8.56-0.481-17.551 0-26.112 0-3.205-1.198-3.85-4.3-3.85h-21.3c1.915 22.262 3.584 43.233 5.499 64 6.461-0.43 12.923-0.86 20.101-1.495z" fill="#F08198" p-id="4267"></path><path d="M193.495 668.16c-3.062-21.79-6.113-42.988-9.175-64 11.817 2.53 61.553 21.402 64 24.32-18.135 13.025-36.076 26.255-54.825 39.68z m440.32 0a12622.848 12622.848 0 0 0-9.175-64c11.817 2.53 61.553 21.402 64 24.32-18.145 13.025-36.076 26.255-54.825 39.68z" fill="#F08198" p-id="4268"></path></svg>'
        },
        link:'https://bilibili.com',
      },
      {
        icon:{
          svg:'<svg t="1713679566009" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5332" width="20" height="20"><path d="M508.700444 881.777778A395.377778 395.377778 0 1 0 113.777778 486.4 395.377778 395.377778 0 0 0 508.700444 881.777778z" fill="#FFD21E" p-id="5333"></path><path d="M904.078222 486.4A395.377778 395.377778 0 1 0 508.700444 881.777778a395.377778 395.377778 0 0 0 395.377778-395.377778zM68.266667 486.4A440.888889 440.888889 0 1 1 508.700444 927.288889 440.888889 440.888889 0 0 1 68.266667 486.4z" fill="#FF9D0B" p-id="5334"></path><path d="M637.155556 378.766222c14.563556 5.12 20.252444 34.929778 34.929777 27.192889a56.888889 56.888889 0 1 0-76.913777-23.552c6.940444 13.084444 29.013333-8.192 41.984-3.640889zM369.208889 378.766222c-14.563556 5.12-20.366222 34.929778-34.929778 27.192889a56.888889 56.888889 0 1 1 76.913778-23.552c-6.940444 13.084444-29.127111-8.192-41.984-3.640889zM505.856 651.832889c111.843556 0 147.911111-99.669333 147.911111-150.869333 0-26.624-17.863111-18.318222-46.535111-4.096-26.510222 13.084444-62.122667 31.175111-101.376 31.175111-81.692444 0-147.911111-78.279111-147.911111-27.079111s36.067556 150.869333 147.911111 150.869333z" fill="#3A3B45" p-id="5335"></path><path d="M508.700444 768a98.759111 98.759111 0 0 0 34.133334-191.260444l-4.096-1.479112c-9.557333-2.958222-19.683556 29.582222-30.151111 29.582223s-19.342222-32.768-28.103111-30.151111a98.759111 98.759111 0 0 0 28.216888 193.422222z" fill="#F94040" p-id="5336"></path><path d="M776.078222 432.355556A36.977778 36.977778 0 1 0 739.555556 395.377778 36.977778 36.977778 0 0 0 776.078222 432.355556zM247.011556 432.355556a36.977778 36.977778 0 1 0-36.977778-36.977778A36.977778 36.977778 0 0 0 247.011556 432.355556zM170.666667 557.511111a59.392 59.392 0 0 0-45.511111 21.276445 67.356444 67.356444 0 0 0-15.132445 42.666666 82.830222 82.830222 0 0 0-22.072889-3.413333A60.302222 60.302222 0 0 0 42.552889 637.155556a65.991111 65.991111 0 0 0-18.090667 54.499555A63.488 63.488 0 0 0 33.450667 716.8a61.667556 61.667556 0 0 0-20.366223 32.085333 66.901333 66.901333 0 0 0 8.988445 53.930667c-0.910222 1.365333-1.706667 2.958222-2.503111 4.437333a59.164444 59.164444 0 0 0-1.592889 52.679111c11.377778 26.396444 40.618667 47.104 96.938667 69.518223 34.929778 13.767111 67.015111 22.755556 67.242666 22.755555a501.987556 501.987556 0 0 0 124.359111 18.090667c66.673778 0 114.346667-20.366222 141.767111-60.643556C492.430222 844.8 486.172444 785.066667 429.056 728.177778a313.230222 313.230222 0 0 1-56.888889-88.405334c-8.760889-30.264889-32.199111-63.943111-70.997333-63.943111a57.685333 57.685333 0 0 0-9.784889 0.796445 64.625778 64.625778 0 0 0-42.439111 27.079111A150.414222 150.414222 0 0 0 216.177778 572.074667 84.309333 84.309333 0 0 0 170.666667 557.511111z m0 45.511111a40.96 40.96 0 0 1 20.707555 7.395556C216.177778 625.777778 262.712889 706.332444 279.893333 737.621333a27.648 27.648 0 0 0 24.348445 14.904889c17.635556 0 31.288889-17.408 1.706666-39.594666-44.600889-33.336889-29.013333-87.836444-7.736888-91.022223a11.377778 11.377778 0 0 1 2.730666 0c19.342222 0 27.875556 33.336889 27.875556 33.336889a358.968889 358.968889 0 0 0 68.266666 105.699556c42.894222 42.894222 45.511111 77.368889 13.880889 123.335111-21.390222 31.288889-62.236444 40.732444-104.220444 40.732444A472.291556 472.291556 0 0 1 193.422222 908.060444c-1.251556 0-153.031111-43.235556-133.802666-79.644444a15.815111 15.815111 0 0 1 15.246222-8.647111c27.079111 0 76.344889 40.277333 97.507555 40.277333A8.760889 8.760889 0 0 0 182.044444 853.333333c8.988444-32.312889-137.216-45.511111-125.155555-92.842666a14.904889 14.904889 0 0 1 16.384-11.377778c35.726222 0 116.053333 62.919111 132.892444 62.919111a3.185778 3.185778 0 0 0 2.730667-1.251556c8.419556-13.539556 3.754667-22.755556-55.637333-59.050666S52.337778 694.044444 76.003556 667.875556a14.791111 14.791111 0 0 1 11.377777-4.323556c36.067556 0 121.287111 77.596444 121.287111 77.596444s22.755556 23.893333 36.977778 23.893334a8.419556 8.419556 0 0 0 7.736889-4.323556c9.784889-16.611556-91.704889-93.525333-97.393778-125.155555C152.120889 614.4 159.288889 603.022222 170.666667 603.022222z" fill="#FF9D0B" p-id="5337"></path><path d="M410.737778 883.939556c31.288889-45.511111 29.013333-80.440889-13.880889-123.335112a358.968889 358.968889 0 0 1-68.266667-105.699555s-9.329778-36.522667-30.606222-33.109333-36.864 57.799111 7.736889 91.022222-8.874667 55.978667-26.055111 24.689778S216.177778 625.777778 191.601778 610.417778s-41.301333-6.712889-35.612445 25.031111 107.292444 108.657778 97.393778 125.155555-44.714667-19.569778-44.714667-19.569777-108.885333-98.986667-132.664888-73.159111 18.090667 47.445333 77.482666 83.057777 64.056889 45.511111 55.637334 59.050667S69.404444 713.386667 56.888889 760.263111 191.032889 820.792889 182.044444 853.333333s-103.082667-61.44-122.197333-25.031111 132.551111 79.644444 133.802667 79.644445c49.038222 12.856889 173.511111 39.822222 217.088-24.007111z" fill="#FFD21E" p-id="5338"></path><path d="M852.195556 557.511111a59.278222 59.278222 0 0 1 46.648888 21.276445 67.356444 67.356444 0 0 1 15.132445 42.666666 83.626667 83.626667 0 0 1 22.755555-3.413333A60.302222 60.302222 0 0 1 980.650667 637.155556a66.332444 66.332444 0 0 1 18.090666 54.499555A65.422222 65.422222 0 0 1 989.866667 716.8a60.302222 60.302222 0 0 1 20.366222 32.085333 66.901333 66.901333 0 0 1-8.988445 53.816889c0.910222 1.365333 1.820444 2.958222 2.616889 4.437334a59.847111 59.847111 0 0 1 1.592889 52.679111c-11.377778 26.396444-40.732444 47.104-96.938666 69.518222-35.043556 13.767111-67.015111 22.755556-67.356445 22.755555A501.987556 501.987556 0 0 1 716.8 970.183111c-66.673778 0-113.777778-20.366222-141.767111-60.643555C530.659556 844.8 536.917333 785.066667 594.147556 728.177778a309.361778 309.361778 0 0 0 56.888888-88.405334c8.874667-30.264889 32.199111-63.943111 70.997334-63.943111a55.864889 55.864889 0 0 1 9.784889 0.796445 64.853333 64.853333 0 0 1 42.552889 27.079111 145.521778 145.521778 0 0 1 32.654222-31.857778A83.626667 83.626667 0 0 1 852.195556 557.511111z m0 45.511111a41.301333 41.301333 0 0 0-20.707556 7.395556C807.822222 625.777778 760.376889 706.332444 743.196444 737.621333a27.534222 27.534222 0 0 1-24.348444 14.904889c-17.521778 0-31.288889-17.408-1.592889-39.594666 44.487111-33.336889 28.899556-87.836444 7.623111-91.022223a11.377778 11.377778 0 0 0-2.730666 0c-19.342222 0-27.875556 33.336889-27.875556 33.336889a360.106667 360.106667 0 0 1-68.266667 105.699556c-43.008 42.894222-45.511111 77.368889-13.880889 123.335111 21.276444 31.288889 62.236444 40.732444 104.106667 40.732444a473.429333 473.429333 0 0 0 112.981333-16.611555c1.137778 0 153.031111-43.235556 133.802667-79.644445a15.928889 15.928889 0 0 0-15.246222-8.647111c-27.079111 0-76.344889 40.277333-97.507556 40.277334a8.647111 8.647111 0 0 1-9.443555-6.940445c-9.102222-32.312889 136.533333-45.511111 125.155555-92.842667a14.904889 14.904889 0 0 0-16.384-11.377777c-35.726222 0-116.053333 62.919111-132.892444 62.919111a2.844444 2.844444 0 0 1-2.616889-1.251556c-8.419556-13.539556-3.868444-22.755556 55.523556-59.050666s101.148444-57.799111 77.482666-83.968a14.677333 14.677333 0 0 0-11.377778-4.323556c-36.181333 0-121.400889 77.596444-121.400888 77.596444s-22.755556 23.893333-36.864 23.893334a8.419556 8.419556 0 0 1-7.736889-4.323556c-9.898667-16.611556 91.022222-93.525333 97.28-125.155555C870.968889 614.4 864.711111 603.022222 852.195556 603.022222z" fill="#FF9D0B" p-id="5339"></path><path d="M612.465778 883.939556c-31.288889-45.511111-29.127111-80.440889 13.880889-123.335112a360.106667 360.106667 0 0 0 68.266666-105.699555s9.329778-36.522667 30.606223-33.109333 36.864 57.799111-7.623112 91.022222 8.874667 55.978667 25.941334 24.689778S807.822222 625.777778 831.488 610.417778s41.415111-6.712889 35.612444 25.031111-107.178667 108.657778-97.28 125.155555 44.600889-19.569778 44.600889-19.569777 108.999111-99.100444 132.664889-73.272889-17.976889 47.445333-77.368889 83.399111-64.056889 45.511111-55.637333 59.050667 139.605333-96.938667 151.893333-50.062223-133.802667 60.529778-125.155555 92.842667 102.4-61.212444 122.197333-24.803556-132.551111 79.644444-133.802667 79.644445c-48.696889 12.970667-173.283556 39.936-216.746666-23.893333z" fill="#FFD21E" p-id="5340"></path></svg>'
        },
        link:'https://huggingface.co/THUDM/chatglm3-6b',
      }
    ],
    //底部配置
    footer: {
      copyright:'Copyright@ 2024 Comefly',
    }


  
  },
})
