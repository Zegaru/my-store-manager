(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3897)}])},3897:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return z}});var a=s(5893),l=s(7294),n=s(5945),i=s(7837),r=s(2510),o=s(1355),d=s(1163),c=s(9008),u=s.n(c),m=s(8752),x=s(6221),g=s(5962),p=s(553),h=s(649),f=s(8506),b=s(7536),v=s(9302),j=s(9310),w=s(6032),y=s(4589),N=s(4285),k=s(2541),_=s(5447);function C(e){var t;let{selectedTags:s,setSelectedTags:r}=e,o=(0,n.NL)(),c=(0,d.useRouter)(),u=(0,j.a)(),m=new v.Z(u,c),[x,g]=(0,l.useState)(""),[h,b]=(0,l.useState)(!1),{data:C}=(0,i.a)(["tags"],()=>m.get("/tags/list"),{keepPreviousData:!0,staleTime:1e4}),P=""===x?null==C?void 0:C.data:null==C?void 0:null===(t=C.data)||void 0===t?void 0:t.filter(e=>e.name.toLowerCase().includes(x.toLowerCase())),S=async()=>{if(!x)return;b(!0);let e=await m.post("/tags/create",{name:x});if(!e.success)return b(!1),(0,p.Eo)(e.message);b(!1),r([...s,e.data]),o.invalidateQueries(["tags"])};return(0,a.jsxs)(N.h,{as:"div",by:"_id",value:s,onChange(e){r(e)},multiple:!0,children:[(0,a.jsx)(N.h.Label,{className:"block text-sm font-medium text-gray-700",children:"Categor\xedas"}),(0,a.jsxs)("div",{className:"relative mt-1",children:[(0,a.jsx)(N.h.Input,{className:"block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm",onChange:e=>g(e.target.value),placeholder:"Buscar categor\xeda"}),(0,a.jsx)(N.h.Button,{className:"absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:(0,a.jsx)(w.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(null==P?void 0:P.length)>0?(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:P.map(e=>(0,a.jsx)(N.h.Option,{value:e,className(e){let{active:t}=e;return(0,k.A)("relative cursor-default select-none py-2 pl-8 pr-4",t?"bg-indigo-600 text-white":"text-gray-900")},children(t){let{active:s,selected:l}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:(0,k.A)("block truncate",l?"font-semibold":""),children:e.name}),l&&(0,a.jsx)("span",{className:(0,k.A)("absolute inset-y-0 left-0 flex items-center pl-1.5",s?"text-white":"text-indigo-600"),children:(0,a.jsx)(y.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}},e._id))}):(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:h?(0,a.jsx)("div",{className:"py-2 pl-8 pr-4",children:(0,a.jsx)(f.Z,{color:_.P.PRIMARY})}):(0,a.jsxs)("div",{className:"relative flex justify-between cursor-default select-none py-2 pl-8 pr-4 hover:bg-indigo-600 hover:text-white",onClick(e){e.stopPropagation(),S()},children:[(0,a.jsx)("span",{children:x}),(0,a.jsx)("span",{children:"Nueva categor\xeda"})]})}),s.length>0&&(0,a.jsx)("ul",{className:"flex gap-2 mt-2 flex-wrap",children:s.map(e=>(0,a.jsx)("li",{className:"items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800",children:e.name},e._id))})]})]})}var P=s(1472),S=s(9211);function E(e){var t;let{selectedColors:s,setSelectedColors:n}=e,r=(0,d.useRouter)(),o=(0,j.a)(),c=new v.Z(o,r),[u,m]=(0,l.useState)(""),{data:x}=(0,i.a)(["colors"],()=>c.get("/colors/list"),{keepPreviousData:!0,staleTime:1e4}),g=""===u?null==x?void 0:x.data:null==x?void 0:null===(t=x.data)||void 0===t?void 0:t.filter(e=>e.name.toLowerCase().includes(u.toLowerCase()));return(0,a.jsxs)(N.h,{as:"div",by:"name",value:s,onChange(e){n(e)},multiple:!0,children:[(0,a.jsx)(N.h.Label,{className:"block text-sm font-medium text-gray-700",children:"Colores"}),(0,a.jsxs)("div",{className:"relative mt-1",children:[(0,a.jsx)(N.h.Input,{className:"block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm",onChange:e=>m(e.target.value),placeholder:"Buscar color"}),(0,a.jsx)(N.h.Button,{className:"absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:(0,a.jsx)(w.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(null==g?void 0:g.length)>0?(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:g.map(e=>(0,a.jsx)(N.h.Option,{value:e,className(e){let{active:t}=e;return(0,k.A)("relative cursor-default flex justify-between items-center select-none py-2 pl-8 pr-4",t?"bg-indigo-600 text-white":"text-gray-900")},children(t){let{active:s,selected:l}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:(0,k.A)("block truncate",l?"font-semibold":""),children:e.name}),(0,a.jsx)("div",{className:(0,k.A)("h-4 w-4 rounded-full border-2 transition-all duration-300 border-transparent",s?"border-white":""),style:{backgroundColor:"#".concat(e.code)}}),l&&(0,a.jsx)("span",{className:(0,k.A)("absolute inset-y-0 left-0 flex items-center pl-1.5",s?"text-white":"text-indigo-600"),children:(0,a.jsx)(y.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}},e.name))}):(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:(0,a.jsx)("div",{className:"relative flex justify-between cursor-default select-none py-2 pl-8 pr-4 hover:bg-indigo-600 hover:text-white",onClick:e=>e.stopPropagation(),children:"No se encontraron resultados"})}),s.length>0&&(0,a.jsx)("ul",{className:"flex gap-2 mt-2 flex-wrap",children:s.map(e=>(0,a.jsxs)("li",{className:"items-center rounded-md flex gap-2 bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800",children:[e.name,(0,a.jsx)("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:"#".concat(e.code)}})]},e.name))})]})]})}let A=["Ancho de tela","Composici\xf3n","Gramaje","Marca","Usos","Cualidades Principales","Construcci\xf3n","Propiedades de seguridad","Propiedades funcionales","Propiedades f\xedsicas","Impermeabilidad","Protecci\xf3n UV","Alta Visibilidad","\xc1cidos y Alcalis","Solidez a la luz","Material","Solidez del color de textiles al lavado en seco"];function O(e){let{selectedDetails:t,setSelectedDetails:s}=e,[n,i]=(0,l.useState)(""),r=""===n?A:A.filter(e=>e.toLowerCase().includes(n.toLowerCase()));return(0,a.jsxs)(N.h,{as:"div",value:t.map(e=>e.name),onChange(e){s(e.map(e=>({name:e,value:""})))},multiple:!0,children:[(0,a.jsx)(N.h.Label,{className:"block text-sm font-medium text-gray-700",children:"Detalles"}),(0,a.jsxs)("div",{className:"relative mt-1",children:[(0,a.jsx)(N.h.Input,{className:"block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm",onChange:e=>i(e.target.value),placeholder:"Buscar detalle"}),(0,a.jsx)(N.h.Button,{className:"absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:(0,a.jsx)(w.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(null==r?void 0:r.length)>0?(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:r.map(e=>(0,a.jsx)(N.h.Option,{value:e,className(e){let{active:t}=e;return(0,k.A)("relative cursor-default flex justify-between items-center select-none py-2 pl-8 pr-4",t?"bg-indigo-600 text-white":"text-gray-900")},children(t){let{active:s,selected:l}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:(0,k.A)("block truncate",l?"font-semibold":""),children:e}),l&&(0,a.jsx)("span",{className:(0,k.A)("absolute inset-y-0 left-0 flex items-center pl-1.5",s?"text-white":"text-indigo-600"),children:(0,a.jsx)(y.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}},e))}):(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:(0,a.jsx)("div",{className:"relative flex justify-between cursor-default select-none py-2 pl-8 pr-4 hover:bg-indigo-600 hover:text-white",onClick:e=>e.stopPropagation(),children:"No se encontraron resultados"})}),t.length>0&&(0,a.jsx)("ul",{className:"flex gap-2 mt-2 flex-wrap",children:t.map(e=>(0,a.jsx)("li",{className:"items-center rounded-md flex gap-2 bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800",children:e.name},e.name))})]})]})}var I=s(6512),Z=s(9104);function L(e){var t;let{selectedFilters:s,setSelectedFilters:n}=e,r=(0,d.useRouter)(),o=(0,j.a)(),c=new v.Z(o,r),[u,m]=(0,l.useState)(""),{data:x}=(0,i.a)(["filters"],()=>c.get("/filters/list"),{keepPreviousData:!0,staleTime:1e4}),g=""===u?null==x?void 0:x.data:null==x?void 0:null===(t=x.data)||void 0===t?void 0:t.filter(e=>e.name.toLowerCase().includes(u.toLowerCase()));return(0,a.jsxs)(N.h,{as:"div",by:"_id",value:s,onChange(e){n(e)},multiple:!0,children:[(0,a.jsx)(N.h.Label,{className:"block text-sm font-medium text-gray-700",children:"Filtros"}),(0,a.jsxs)("div",{className:"relative mt-1",children:[(0,a.jsx)(N.h.Input,{className:"block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm",onChange:e=>m(e.target.value),placeholder:"Buscar filtro"}),(0,a.jsx)(N.h.Button,{className:"absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:(0,a.jsx)(w.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(null==g?void 0:g.length)>0?(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:g.map(e=>(0,a.jsx)(N.h.Option,{value:e,className(e){let{active:t}=e;return(0,k.A)("relative cursor-default select-none py-2 pl-8 pr-4",t?"bg-indigo-600 text-white":"text-gray-900")},children(t){let{active:s,selected:l}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:(0,k.A)("block truncate",l?"font-semibold":""),children:e.name}),l&&(0,a.jsx)("span",{className:(0,k.A)("absolute inset-y-0 left-0 flex items-center pl-1.5",s?"text-white":"text-indigo-600"),children:(0,a.jsx)(y.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}},e._id))}):(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:(0,a.jsx)("div",{className:"relative flex justify-between cursor-default select-none py-2 pl-8 pr-4 hover:bg-indigo-600 hover:text-white",onClick:e=>e.stopPropagation(),children:"No se encontraron resultados"})}),s.length>0&&(0,a.jsx)("ul",{className:"flex gap-2 mt-2 flex-wrap",children:s.map(e=>(0,a.jsx)("li",{className:"items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800",children:e.name},e._id))})]})]})}function F(e){var t,s,n;let{filterId:r,selectedFilterOptions:o,setSelectedFilterOptions:c}=e,u=(0,d.useRouter)(),m=(0,j.a)(),x=new v.Z(m,u),[g,p]=(0,l.useState)(""),{data:h}=(0,i.a)(["filters",r],()=>x.get("/filters/details/".concat(r)),{staleTime:0,keepPreviousData:!0,refetchOnWindowFocus:!1,enabled:!!r}),f=""===g?null==h?void 0:null===(t=h.data)||void 0===t?void 0:t.options:null==h?void 0:null===(s=h.data)||void 0===s?void 0:s.options.filter(e=>e.toLowerCase().includes(g.toLowerCase()));return(0,a.jsxs)(N.h,{as:"div",value:o,onChange(e){c(e)},multiple:!0,children:[(0,a.jsxs)(N.h.Label,{className:"block text-sm font-medium text-gray-700",children:["Opciones del filtro ",null==h?void 0:null===(n=h.data)||void 0===n?void 0:n.name]}),(0,a.jsxs)("div",{className:"relative mt-1",children:[(0,a.jsx)(N.h.Input,{className:"block w-full appearance-none rounded-md border-2 bg-gray-50 px-3 py-2 text-gray-900 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 placeholder-gray-400 focus:bg-white focus:outline-none sm:text-sm",onChange:e=>p(e.target.value),placeholder:"Buscar opci\xf3n"}),(0,a.jsx)(N.h.Button,{className:"absolute top-2.5 right-0 flex items-center rounded-r-md px-2 focus:outline-none",children:(0,a.jsx)(w.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(null==f?void 0:f.length)>0?(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:f.map(e=>(0,a.jsx)(N.h.Option,{value:e,className(e){let{active:t}=e;return(0,k.A)("relative cursor-default flex justify-between items-center select-none py-2 pl-8 pr-4",t?"bg-indigo-600 text-white":"text-gray-900")},children(t){let{active:s,selected:l}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:(0,k.A)("block truncate",l?"font-semibold":""),children:e}),l&&(0,a.jsx)("span",{className:(0,k.A)("absolute inset-y-0 left-0 flex items-center pl-1.5",s?"text-white":"text-indigo-600"),children:(0,a.jsx)(y.Z,{className:"h-5 w-5","aria-hidden":"true"})})]})}},e))}):(0,a.jsx)(N.h.Options,{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:(0,a.jsx)("div",{className:"relative flex justify-between cursor-default select-none py-2 pl-8 pr-4 hover:bg-indigo-600 hover:text-white",onClick:e=>e.stopPropagation(),children:"No se encontraron resultados"})}),o.length>0&&(0,a.jsx)("ul",{className:"flex gap-2 mt-2 flex-wrap",children:o.map(e=>(0,a.jsx)("li",{className:"items-center rounded-md flex gap-2 bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800",children:e},e))})]})]})}function D(e){let{editId:t,onClose:s}=e,r=(0,n.NL)(),o=(0,d.useRouter)(),c=(0,j.a)(),u=new v.Z(c,o),[m,x]=(0,l.useState)(!1),[g,h]=(0,l.useState)([]),[w,y]=(0,l.useState)([]),[N,k]=(0,l.useState)([]),[A,D]=(0,l.useState)([]),[T,B]=(0,l.useState)([]),[R,X]=(0,l.useState)([]),{register:z,handleSubmit:M,reset:V,formState:{errors:q}}=(0,b.cI)({defaultValues:{}}),{isFetching:U,data:W}=(0,i.a)(["products",t],()=>u.get("/products/details/".concat(t)),{staleTime:0,keepPreviousData:!0,refetchOnWindowFocus:!1,enabled:!!t}),Y=async e=>{if(!e.name)return(0,p.Eo)("El nombre es requerido");x(!0);let a=await u.post(t?"/products/update":"/products/create",{name:e.name,description:e.description,productId:t,tags:g.map(e=>e._id),colors:w.map(e=>e._id),filters:T.map(e=>({filter:e._id,options:e.options})),details_list:Object.keys(e.details_list).map(t=>({name:t,value:e.details_list[t]})),images:R});if(!a.success)return x(!1),(0,p.Eo)(a.message);(0,p.XA)(t?"Producto editado correctamente!":"Producto creado correctamente!"),x(!1),s(),X([]),r.invalidateQueries(["products"]),V()};return(0,l.useEffect)(()=>{W&&(V({name:W.data.name,description:W.data.description,...(W.data.details_list||[]).reduce((e,t)=>({...e,["details_list.".concat(t.name)]:t.value}),{})}),h(W.data.tags),y(W.data.colors),k(W.data.details_list),D(W.data.filters),B(W.data.filters.map(e=>({_id:e.filter._id,name:e.filter.name,options:e.options}))),X(W.data.images))},[W,V]),(0,l.useEffect)(()=>{t||(V({name:"",description:""}),h([]),y([]),k([]),X([]))},[t,V]),(0,a.jsxs)("form",{className:"flex flex-col gap-6 pb-4",children:[(0,a.jsx)("h1",{className:"text-xl font-medium text-gray-900",children:t?"Editar producto":"Crear producto"}),U?(0,a.jsx)(f.Z,{color:_.P.PRIMARY}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.I,{label:"Nombre",type:"text",name:"name",rules:{required:!0},errors:q,register:z}),(0,a.jsx)(S.I,{label:"Descripci\xf3n",type:"text",name:"description",rules:{required:!0},errors:q,register:z}),(0,a.jsx)(C,{selectedTags:g,setSelectedTags:h}),(0,a.jsx)(E,{selectedColors:w,setSelectedColors:y}),(0,a.jsx)(I.p,{defaultOpen:!0,children(e){let{open:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(I.p.Button,{className:"flex w-full mt-4 justify-between transition-all duration-300 rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75",children:[(0,a.jsx)("span",{children:"Informaci\xf3n"}),(0,a.jsx)(Z.Z,{className:"".concat(t?"rotate-180 transform":""," h-5 w-5 transition-all duration-300 text-indigo-500")})]}),(0,a.jsxs)(I.p.Panel,{className:"px-2 pb-2 flex flex-col gap-4 text-sm text-gray-500",children:[(0,a.jsx)(O,{selectedDetails:N,setSelectedDetails:k}),N.map(e=>(0,a.jsx)(S.I,{label:e.name,type:"text",name:"details_list.".concat(e.name),rules:{required:!0},errors:q,register:z},e.name))]})]})}}),(0,a.jsx)(I.p,{defaultOpen:!0,children(e){let{open:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(I.p.Button,{className:"flex w-full mt-4 justify-between transition-all duration-300 rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75",children:[(0,a.jsx)("span",{children:"B\xfasqueda"}),(0,a.jsx)(Z.Z,{className:"".concat(t?"rotate-180 transform":""," h-5 w-5 transition-all duration-300 text-indigo-500")})]}),(0,a.jsxs)(I.p.Panel,{className:"px-2 pb-2 flex flex-col gap-4 text-sm text-gray-500",children:[(0,a.jsx)(L,{selectedFilters:T,setSelectedFilters(e){B(e.map(e=>{let t=T.find(t=>t._id===e._id);return{...e,options:t&&t.options||[]}}))}}),T.map(e=>(0,a.jsx)(F,{filterId:e._id,selectedFilterOptions:e.options,setSelectedFilterOptions(t){B(s=>s.map(s=>s.name===e.name?{...s,options:t}:s))}},e.name))]})]})}}),(0,a.jsx)(I.p,{defaultOpen:!0,children(e){let{open:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(I.p.Button,{className:"flex w-full mt-4 justify-between transition-all duration-300 rounded-lg bg-indigo-100 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75",children:[(0,a.jsx)("span",{children:"Im\xe1genes"}),(0,a.jsx)(Z.Z,{className:"".concat(t?"rotate-180 transform":""," h-5 w-5 transition-all duration-300 text-indigo-500")})]}),(0,a.jsx)(I.p.Panel,{className:"px-2 pb-2 flex flex-col gap-4 text-sm text-gray-500",children:(0,a.jsx)(P.Z,{label:"Im\xe1genes",generalApi:u,files:R,setFiles:e=>X(e)})})]})}}),(0,a.jsx)("button",{type:"button",className:"group flex w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",disabled:m,onClick(){s(),X([]),V()},children:"Cancelar"}),(0,a.jsx)("button",{className:"group flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",disabled:m,onClick:M(Y),children:m?(0,a.jsx)(f.Z,{}):t?"Editar producto":"Agregar producto"})]})]})}var T=s(7161),B=s(8127),R=s(7912);class X{async getContent(e,t){try{let s=await B.Z.post(this.fullPath,{pagination:{page:e,amount:this.amountPerPage},filter:t});return{success:!0,message:"Data fetched",data:s.data}}catch(l){var a;if((null===(a=l.response)||void 0===a?void 0:a.status)===440)return this.auth.signout(()=>this.history.replace("/")),{success:!1,message:"Session finished"};return{success:!1,message:null!=l.response.data?l.response.data.message:"Unexpected error"}}}constructor(e,t,s,a){this.apiPath=e,this.fullPath="".concat(R.T).concat(e),this.amountPerPage=t,this.auth=s,this.history=a}}function z(){var e,t;let s=(0,n.NL)(),c=(0,d.useRouter)(),b=(0,j.a)(),w=new v.Z(b,c),y=new X("/products/list",6,b,c),[N,C]=(0,l.useState)(!1),[P,S]=(0,l.useState)(),[E,A]=(0,l.useState)(!1),[O,I]=(0,l.useState)(0),{isLoading:Z,isFetching:L,data:F}=(0,i.a)(["products",O],()=>y.getContent(O,{}),{keepPreviousData:!0,staleTime:1e4}),B=async e=>{A(!0);let t=await w.post("/products/duplicate",{productId:e});if(!t.success)return A(!1),(0,p.Eo)(t.message);(0,p.XA)("Categor\xeda duplicada correctamente!"),s.invalidateQueries(["products"]),A(!1),S(t.data._id),C(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u(),{children:(0,a.jsx)("title",{children:"Productos"})}),(0,a.jsx)(h.Z,{onButtonClick(){S(void 0),C(!0)}}),(0,a.jsxs)("div",{className:"flex flex-1 items-stretch overflow-hidden",children:[(0,a.jsx)("main",{className:"flex-1 overflow-y-auto",children:(0,a.jsxs)("div",{className:"mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("h1",{className:"flex-1 text-2xl font-bold text-gray-900",children:"Productos"}),(0,a.jsxs)("div",{className:"ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden",children:[(0,a.jsxs)("button",{type:"button",className:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,a.jsx)(m.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,a.jsx)("span",{className:"sr-only",children:"Use list view"})]}),(0,a.jsxs)("button",{type:"button",className:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,a.jsx)(x.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,a.jsx)("span",{className:"sr-only",children:"Use grid view"})]})]})]}),(0,a.jsxs)("section",{className:"mt-8 pb-16","aria-labelledby":"gallery-heading",children:[(0,a.jsx)("h2",{id:"gallery-heading",className:"sr-only",children:"Productos"}),Z&&(0,a.jsx)("div",{className:"flex justify-center p-4",children:(0,a.jsx)(f.Z,{color:_.P.PRIMARY})}),!Z&&(null==F?void 0:null===(e=F.data)||void 0===e?void 0:e.length)===0&&(0,a.jsx)("p",{className:"mt-4",children:"No se encontraron resultados"}),(0,a.jsx)("ul",{role:"list",className:"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",children:null==F?void 0:null===(t=F.data)||void 0===t?void 0:t.map(e=>{var t;return(0,a.jsxs)("li",{className:"relative",children:[(0,a.jsxs)("div",{className:"focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden",children:[(0,a.jsx)("img",{src:(null===(t=e.images[0])||void 0===t?void 0:t.url)||"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",alt:"",className:"object-cover pointer-events-none"}),(0,a.jsx)("button",{type:"button",disabled:E,className:"absolute inset-0 focus:outline-none",onClick(){S(e._id),C(!0)},children:(0,a.jsx)("span",{className:"sr-only",children:"View details for Producto 1"})})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("p",{className:"pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900",children:e.name}),(0,a.jsx)("p",{className:"pointer-events-none block text-sm font-medium text-gray-500",children:e.tags.map(e=>e.name).join(", ")})]}),(0,a.jsxs)(r.v,{as:"div",className:"flex-shrink-0 pr-2 relative",children:[(0,a.jsxs)(r.v.Button,{className:"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open options"}),(0,a.jsx)(g.Z,{className:"h-5 w-5","aria-hidden":"true"})]}),(0,a.jsx)(o.u,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsxs)(r.v.Items,{className:"absolute right-0 top-10 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,a.jsx)("div",{className:"py-1",children:(0,a.jsx)(r.v.Item,{children(t){let{active:s}=t;return(0,a.jsx)("button",{disabled:E,className:(0,k.A)(s?"bg-gray-100 text-gray-900":"text-gray-700","block w-full text-left px-4 py-2 text-sm"),onClick(){S(e._id),C(!0)},children:"Editar"})}})}),(0,a.jsx)("div",{className:"py-1",children:(0,a.jsx)(r.v.Item,{children(t){let{active:s}=t;return(0,a.jsx)("button",{disabled:E,className:(0,k.A)(s?"bg-gray-100 text-gray-900":"text-gray-700","block w-full text-left px-4 py-2 text-sm"),onClick(){S(e._id),B(e._id)},children:E&&P===e._id?(0,a.jsx)(f.Z,{color:_.P.PRIMARY}):"Duplicar"})}})})]})})]})]})]},e._id)})})]})]})}),(0,a.jsx)(T.Z,{open:N,setOpen:C,children:N?(0,a.jsx)(D,{editId:P,onClose(){S(void 0),C(!1)}}):null})]})]})}},1472:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var a=s(5893),l=s(7294),n=s(8523),i=s(5133),r=s(6249),o=s(2541);let d={VALID_EXTENSIONS:{document:[".png",".jpg",".jpeg",".pdf",".word",".doc",".docx",".xml","application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",".xls",".xlsx",".xlsm",".xlsb"],pdf:[".pdf"],img:[".png",".jpg",".jpeg"],voucher:[".pdf",".png",".jpg",".jpeg"],excel:["xls","xlsx","xlsm","xlsb"]},IMAGE_EXTENSIONS:["png","jpg","jpeg"],PDF_EXTENSIONS:["pdf"],WORD_EXTENSIONS:["word","doc","docx","xml","application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"],EXCEL_EXTENSIONS:["xls","xlsx","xlsm","xlsb"]};function c(e){let t=e.split("."),s=t[t.length-1];return"pdf"===s?"pdf":d.IMAGE_EXTENSIONS.includes(s)?"image":d.WORD_EXTENSIONS.includes(s)?"word":d.EXCEL_EXTENSIONS.includes(s)?"excel":"other"}var u=s(5447),m=s(553),x=s(8506);function g(e){let{label:t,generalApi:s,files:g,setFiles:p,folder:h,name:f,maxFiles:b}=e,[v,j]=(0,l.useState)(null),[w,y]=(0,l.useState)(!1),N=async(e,t)=>{var s;if(!function(e,t,s){if("file"!==e.type||e.value.length<1)return;let a=!1,l=d.VALID_EXTENSIONS[t];for(let n=0;n<l.length;n++){var i,r,o,c,u;let m=l[n];if((null==e?void 0:null===(i=e.files)||void 0===i?void 0:null===(r=i[s||0])||void 0===r?void 0:r.name.substr((null==e?void 0:null===(o=e.files)||void 0===o?void 0:null===(c=o[s||0])||void 0===c?void 0:null===(u=c.name)||void 0===u?void 0:u.length)-m.length,m.length).toLowerCase())===m.toLowerCase()){a=!0;break}}return a}(e.target,"document",t)||!(null===(s=e.target)||void 0===s?void 0:s.files)){j(null),(0,m.Eo)("Formato de documento no v\xe1lido.");return}if(e.target.files[t].size>1e7){j(null),(0,m.Eo)("Peso m\xe1ximo excedido.");return}if("image"===c(e.target.files[t].name)){var a=new FileReader;a.onload=e=>{var t;j(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.result)},await a.readAsDataURL(e.target.files[t])}return e.target.files[t]};async function k(e,t){let a=await N(e,t);if(!a)return;let l=new FormData;h&&l.append("folder",h),f&&l.append("name",f),l.append("upfile",a),y(!0);let n=await s.post("/utils/file",l);if(y(!1),!(null==n?void 0:n.success)){(0,m.Eo)(null==n?void 0:n.message);return}return(0,m.XA)("Archivo guardado"),j(null),n.data}async function _(e){var t;let s=null===(t=e.target)||void 0===t?void 0:t.files;if(!s)return;if(b&&s.length+g.length>b){(0,m.Eo)("No se pueden subir m\xe1s de ".concat(b," archivos."));return}let a=[];for(let l=0;l<s.length;l++){let n=await k(e,l);n&&a.push(n)}p([...g,...a])}return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1 text-sm font-medium text-gray-700",children:t}),(0,a.jsxs)("div",{className:"mb-4 flex flex-col gap-4",children:[b&&g.length>=b?(0,a.jsx)("div",{className:"relative max-h-32 min-w-fit flex-1 rounded-md border-2 border-dashed border-gray-300 px-2 py-4 text-center",children:(0,a.jsx)("p",{children:"No se pueden subir m\xe1s archivos"})}):(0,a.jsxs)("div",{className:"relative max-h-32 min-w-fit flex-1 rounded-md border-2 border-dashed border-gray-300 px-2 py-4 text-center",children:[w&&(0,a.jsx)("div",{className:"absolute inset-0 z-10 flex items-center justify-center bg-black/5",children:(0,a.jsx)(x.Z,{color:u.P.PRIMARY})}),(0,a.jsx)("p",{className:(0,o.A)(w?"opacity-10":"","mb-4"),children:"Elegir archivo"}),(0,a.jsxs)("div",{className:(0,o.A)(w?"opacity-10":"","flex flex-col items-center justify-evenly sm:flex-row sm:space-y-0"),children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2 text-center",children:[(0,a.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"text-sm text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"inp_document_file",className:"relative mx-auto cursor-pointer rounded-md bg-white font-medium text-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500",children:[(0,a.jsx)("span",{children:"Escoger archivo"}),(0,a.jsx)("input",{multiple:!b||b>1,disabled:!!b&&g.length>=b,id:"inp_document_file",name:"inp_document_file",type:"file",className:"sr-only",onChange:_})]}),(0,a.jsx)("p",{className:"max-w-[120px] text-xs text-gray-500",children:"de hasta 10MB"})]})]}),v&&(0,a.jsx)("img",{src:v,className:"max-h-12 max-w-full rounded-lg border-2 border-indigo-400 sm:max-w-[50%]",alt:"Imagen del documento"})]})]}),g.map(e=>(0,a.jsxs)("div",{className:"flex justify-between max-h-24 max-w-sm gap-2 rounded-lg p-2 shadow-card",children:["image"===c(e.name)?(0,a.jsx)("img",{className:"h-16 rounded-lg border-2 border-indigo-400",src:e.url,alt:""}):(0,a.jsx)(n.Z,{className:"mx-auto mb-2 h-12 w-12 text-gray-400"}),(0,a.jsxs)("div",{className:"flex flex-col items-end justify-between gap-1",children:[(0,a.jsx)("div",{className:"text-right",children:(0,a.jsx)("p",{className:"text-sm text-gray-600",children:e.name})}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:(0,a.jsx)(i.Z,{className:"h-5 w-5"})}),(0,a.jsx)("button",{className:"w-auto",onClick(){p(g.filter(t=>t.url!==e.url))},children:(0,a.jsx)(r.Z,{className:"h-5 w-5"})})]})]})]},e.url))]})]})}}},function(e){e.O(0,[281,426,786,609,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);