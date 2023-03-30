(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{6653:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colores",function(){return r(2748)}])},2748:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return y}});var o=r(5893),l=r(8752),t=r(6221),n=r(7837),a=r(1163),i=r(9008),c=r.n(i),d=r(7294),u=r(8974),m=r(649),x=r(8506),g=r(7161),f=r(5945),h=r(7536),j=r(9302),p=r(9310),b=r(553),N=r(9211),v=r(5447);function w(e){let{editId:s,onClose:r}=e,l=(0,f.NL)(),t=(0,a.useRouter)(),i=(0,p.a)(),c=new j.Z(i,t),[u,m]=(0,d.useState)(!1),{isFetching:g,data:w}=(0,n.a)(["colors",s],()=>c.get("/colors/details/".concat(s)),{staleTime:0,keepPreviousData:!0,refetchOnWindowFocus:!1,enabled:!!s}),{register:y,handleSubmit:C,reset:k,watch:E,formState:{errors:_}}=(0,h.cI)({defaultValues:{}}),Z=E("code"),F=async e=>{if(!e.name)return(0,b.Eo)("El nombre es requerido");m(!0);let o=await c.post(s?"/colors/update":"/colors/create",{colorId:s,...e});if(!o.success)return m(!1),(0,b.Eo)(o.message);(0,b.XA)(s?"Color editado correctamente!":"Color creado correctamente!"),m(!1),r(),l.invalidateQueries(["colors"]),k()};return(0,d.useEffect)(()=>{w&&k(w.data)},[w,k]),(0,d.useEffect)(()=>{s||k({name:""})},[s,k]),(0,o.jsxs)("form",{className:"flex flex-col gap-4",children:[(0,o.jsx)("h1",{className:"text-xl font-medium text-gray-900",children:s?"Editar color":"Crear color"}),g?(0,o.jsx)(x.Z,{color:v.P.PRIMARY}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N.I,{label:"Nombre",type:"text",name:"name",rules:{required:!0},errors:_,register:y}),(0,o.jsxs)("div",{className:"flex gap-2 items-end",children:[(0,o.jsx)("div",{className:"flex-1",children:(0,o.jsx)(N.I,{label:"Color (C\xf3digo hexadecimal) (Ej: FFFFFF)",type:"text",name:"code",rules:{required:!0},errors:_,register:y})}),(0,o.jsx)("div",{className:"flex items-center justify-center w-12 h-12 rounded-md border border-gray-200",style:{backgroundColor:"#".concat(Z)},children:(0,o.jsx)("span",{className:"sr-only",children:"Color"})})]}),(0,o.jsx)("button",{type:"button",className:"group flex w-full items-center justify-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",disabled:u,onClick(){r(),k()},children:"Cancelar"}),(0,o.jsx)("button",{className:"group flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",disabled:u,onClick:C(F),children:u?(0,o.jsx)(x.Z,{}):s?"Editar color":"Agregar color"})]})]})}function y(){var e,s;let r=(0,a.useRouter)(),i=(0,p.a)(),f=new j.Z(i,r),[h,b]=(0,d.useState)(!1),[N,y]=(0,d.useState)(),{isFetching:C,data:k}=(0,n.a)(["colors"],()=>f.get("/colors/list"),{keepPreviousData:!0,staleTime:1e4});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c(),{children:(0,o.jsx)("title",{children:"Colores"})}),(0,o.jsx)(m.Z,{onButtonClick(){y(void 0),b(!0)}}),(0,o.jsxs)("div",{className:"flex flex-1 items-stretch overflow-hidden",children:[(0,o.jsx)("main",{className:"flex-1 overflow-y-auto",children:(0,o.jsxs)("div",{className:"mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8",children:[(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("h1",{className:"flex-1 text-2xl font-bold text-gray-900",children:"Colores"}),(0,o.jsxs)("div",{className:"ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden",children:[(0,o.jsxs)("button",{type:"button",className:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,o.jsx)(l.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,o.jsx)("span",{className:"sr-only",children:"Use list view"})]}),(0,o.jsxs)("button",{type:"button",className:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[(0,o.jsx)(t.Z,{className:"h-5 w-5","aria-hidden":"true"}),(0,o.jsx)("span",{className:"sr-only",children:"Use grid view"})]})]})]}),(0,o.jsxs)("section",{className:"mt-8 pb-16","aria-labelledby":"gallery-heading",children:[(0,o.jsx)("h2",{id:"gallery-heading",className:"sr-only",children:"Productos"}),C&&(0,o.jsx)("div",{className:"flex justify-center p-4",children:(0,o.jsx)(x.Z,{color:v.P.PRIMARY})}),!C&&(null==k?void 0:null===(e=k.data)||void 0===e?void 0:e.length)===0&&(0,o.jsx)("p",{className:"mt-4",children:"No se encontraron resultados"}),(0,o.jsx)("ul",{role:"list",className:"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",children:null==k?void 0:null===(s=k.data)||void 0===s?void 0:s.map(e=>(0,o.jsxs)("li",{className:"relative",children:[(0,o.jsx)("div",{className:"h-6 w-full rounded",style:{backgroundColor:"#".concat(e.code)}}),(0,o.jsx)("p",{className:"pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900",children:e.name}),(0,o.jsx)("div",{className:"flex gap-2 justify-end",children:(0,o.jsx)("button",{className:"bg-indigo-500 transition-all duration-300 hover:bg-indigo-700 rounded-lg p-2",onClick(){y(e._id),b(!0)},children:(0,o.jsx)(u.Z,{className:"h-5 w-5 text-white"})})})]},e._id))})]})]})}),(0,o.jsx)(g.Z,{open:h,setOpen:b,children:h?(0,o.jsx)(w,{editId:N,onClose(){y(void 0),b(!1)}}):null})]})]})}},8974:function(e,s,r){"use strict";var o=r(7294);let l=o.forwardRef(function({title:e,titleId:s,...r},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":s},r),e?o.createElement("title",{id:s},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"}))});s.Z=l}},function(e){e.O(0,[281,426,609,774,888,179],function(){return e(e.s=6653)}),_N_E=e.O()}]);