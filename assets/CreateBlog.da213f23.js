import{u as r,A as s}from"./ArticleTemplate.49580366.js";import{c as n}from"./blog.feda4705.js";import{d as l,G as p,u,c as i}from"./index.4367fab1.js";import"./index.4170ac31.js";import"./SearchOutlined.2390ba86.js";import"./index.aa191d72.js";import"./KeyCode.38631740.js";var w=l({name:"CreateBlog",props:{},components:{},beforeRouteLeave(){if(!window.confirm("Do you really want to leave? you have unsaved changes!"))return!1},setup(){const o=r(),t=p("$message"),a=u();return{postBlog:()=>{n(o.getBlogFullInfo).then(e=>(t&&t.success(e.msg),e.data&&a.push({path:`/detail/${e.data.id}`})))}}},render(){return i(s,{mainTitle:"\u521B\u5EFA\u6587\u7AE0",btnText:"\u53D1\u5E03\u6587\u7AE0",onHandleClick:this.postBlog,mode:"create"},null)}});export{w as default};
