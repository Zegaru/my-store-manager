(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{5547:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/filtros",function(){return s(2628)}])},2628:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var n=s(5893),r=s(8752),i=s(6221),o=s(7837),l=s(1163),a=s(9008),d=s.n(a),c=s(7294),u=s(8974),m=s(649),f=s(8506),x=s(7161),g=s(5945),h=s(7536),p=s(9302),b=s(9310),j=s(553),w=s(9211),v=s(5447),N=s(6249);function y(e){let{editId:t,onClose:s}=e,r=(0,g.NL)(),i=(0,l.useRouter)(),a=(0,b.a)(),d=new p.Z(a,i),[u,m]=(0,c.useState)(!1),{isFetching:x,data:y}=(0,o.a)(["filters",t],()=>d.get("/filters/details/".concat(t)),{staleTime:0,keepPreviousData:!0,refetchOnWindowFocus:!1,enabled:!!t}),{register:k,handleSubmit:E,reset:_,control:C,formState:{errors:Z}}=(0,h.cI)({defaultValues:{name:"",options:[{name:""}]}}),{fields:L,append:P,remove:F}=(0,h.Dq)({control:C,name:"options"}),I=async e=>{if(!e.name)return(0,j.Eo)("El nombre es requerido");let n=e.options.filter((e,t,s)=>t!==s.findIndex(t=>t.name===e.name));if(n.length)return(0,j.Eo)("No se pueden repetir las opciones");m(!0);let i=await d.post(t?"/filters/update":"/filters/create",{filterId:t,...e,options:e.options.map(e=>e.name)});if(!i.success)return m(!1),(0,j.Eo)(i.message);(0,j.XA)(t?"Filtro editado correctamente!":"Filtro creado correctamente!"),m(!1),s(),r.invalidateQueries(["filters"]),_()};return(0,c.useEffect)(()=>{y&&_({...y.data,options:y.data.options.map(e=>({name:e}))})},[y,_]),(0,c.useEffect)(()=>{t||_({name:"",options:[{name:""}]})},[t,_]),(0,n.jsxs)("form",{className:"flex flex-col gap-4 pb-4",children:[(0,n.jsx)("h1",{className:"text-xl font-medium text-gray-900",children:t?"Editar filtro":"Crear filtro"}),x?(0,n.jsx)(f.Z,{color:v.P.PRIMARY}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.I,{label:"Nombre",type:"text",name:"name",rules:{required:!0},errors:Z,register:k}),(0,n.jsx)("p",{className:"text-lg",children:"Opciones"}),L.map((e,t)=>(0,n.jsx)("div",{children:(0,n.jsxs)("section",{className:"flex gap-2 items-center",children:[(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)(w.I,{placeholder:"Nombre de la opci\xf3n",type:"text",name:"options.".concat(t,".name"),rules:{required:!0},register:k})}),(0,n.jsx)("button",{type:"button",className:"flex items-center justify-center w-10 h-10 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",onClick:()=>F(t),children:(0,n.jsx)(N.Z,{className:"h-5 w-5"})})]},e.id)},e.id)),(0,n.jsx)("button",{type:"button",className:"group flex w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>P({name:""}),children:"Agregar opci\xf3n +"}),(0,n.jsx)("button",{type:"button",className:"group flex mt-8 w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",disabled:u,onClick(){s(),_()},children:"Cancelar"}),(0,n.jsx)("button",{className:"group flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",disabled:u,onClick:E(I),children:u?(0,n.jsx)(f.Z,{}):t?"Editar filtro":"Agregar filtro"})]})]})}function k(){var e,t;let s=(0,l.useRouter)(),a=(0,b.a)(),g=new p.Z(a,s),[h,j]=(0,c.useState)(!1),[w,N]=(0,c.useState)(),{isFetching:k,data:E}=(0,o.a)(["filters"],()=>g.get("/filters/list"),{keepPreviousData:!0,staleTime:1e4});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d(),{children:(0,n.jsx)("title",{children:"Filtros"})}),(0,n.jsx)(m.Z,{onButtonClick(){N(void 0),j(!0)}}),(0,n.jsxs)("div",{className:"flex flex-1 items-stretch overflow-hidden",children:[(0,n.jsx)("main",{className:"flex-1 overflow-y-auto",children:(0,n.jsxs)("div",{className:"mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("h1",{className:"flex-1 text-2xl font-bold text-gray-900",children:"Filtros"}),(0,n.jsxs)("div",{className:"ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden",children:[(0,n.jsxs)("button",{type:"button",className:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,n.jsx)(r.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,n.jsx)("span",{className:"sr-only",children:"Use list view"})]}),(0,n.jsxs)("button",{type:"button",className:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,n.jsx)(i.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,n.jsx)("span",{className:"sr-only",children:"Use grid view"})]})]})]}),(0,n.jsxs)("section",{className:"mt-8 pb-16","aria-labelledby":"gallery-heading",children:[(0,n.jsx)("h2",{id:"gallery-heading",className:"sr-only",children:"Productos"}),k&&(0,n.jsx)("div",{className:"flex justify-center p-4",children:(0,n.jsx)(f.Z,{color:v.P.PRIMARY})}),!k&&(null==E?void 0:null===(e=E.data)||void 0===e?void 0:e.length)===0&&(0,n.jsx)("p",{className:"mt-4",children:"No se encontraron resultados"}),(0,n.jsx)("ul",{role:"list",className:"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",children:null==E?void 0:null===(t=E.data)||void 0===t?void 0:t.map(e=>(0,n.jsxs)("li",{className:"relative",children:[(0,n.jsx)("div",{className:"h-4 w-full bg-indigo-500 rounded"}),(0,n.jsx)("p",{className:"pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900",children:e.name}),(0,n.jsx)("div",{className:"flex gap-2 justify-end",children:(0,n.jsx)("button",{className:"bg-indigo-500 transition-all duration-300 hover:bg-indigo-700 rounded-lg p-2",onClick(){N(e._id),j(!0)},children:(0,n.jsx)(u.Z,{className:"h-5 w-5 text-white"})})})]},e._id))})]})]})}),(0,n.jsx)(x.Z,{open:h,setOpen:j,children:h?(0,n.jsx)(y,{editId:w,onClose(){N(void 0),j(!1)}}):null})]})]})}},8974:function(e,t,s){"use strict";var n=s(7294);let r=n.forwardRef(function({title:e,titleId:t,...s},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},s),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"}))});t.Z=r},6249:function(e,t,s){"use strict";var n=s(7294);let r=n.forwardRef(function({title:e,titleId:t,...s},r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},s),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}))});t.Z=r}},function(e){e.O(0,[281,426,609,774,888,179],function(){return e(e.s=5547)}),_N_E=e.O()}]);