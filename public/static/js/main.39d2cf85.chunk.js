(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{72:function(e,c,n){},73:function(e,c,n){},87:function(e,c,n){"use strict";n.r(c);var s,t=n(2),a=n.n(t),l=n(62),r=n.n(l),i=(n(72),n(73),n.p+"static/media/SpaceX_logo.1180b5d3.png"),o=n(28),u=n(9),h=n(20),j=n(63),d=n(38),m=n.n(d),b=n(64),x=n.n(b),O=n(4);function p(e){var c=e.launch,n=c.flight_number,s=c.mission_name,t=c.launch_date_local,a=c.launch_success;return console.log(n,a),Object(O.jsx)("div",{className:"card card-body mb-3",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-md-9",children:[Object(O.jsxs)("h4",{children:["Mission:"," ",Object(O.jsx)("span",{className:m()({"text-success":a,"text-danger":!a}),children:s})]}),Object(O.jsxs)("p",{children:["Data: ",Object(O.jsx)(x.a,{format:"YYYY-MM-DD HH:mm",children:t})]})]}),Object(O.jsx)("div",{className:"col-md-3",children:Object(O.jsx)(o.b,{to:"/launch/".concat(n),className:"btn btn-secondary ",children:"Launch details"})})]})})}function g(){return Object(O.jsxs)("div",{className:"my-3",children:[Object(O.jsx)("p",{children:Object(O.jsx)("span",{className:"px-3 mr-2 text-success",children:"Success"})}),Object(O.jsx)("p",{children:Object(O.jsx)("span",{className:"px-3 mr-2 text-danger",children:"Fail"})})]})}var _=Object(h.gql)(s||(s=Object(j.a)(["\nquery LaunchesQuery {\n    launches{\n        flight_number\n        mission_name\n        launch_date_local\n        launch_success\n    }\n}\n"]))),N=function(){var e=Object(h.useQuery)(_),c=e.loading,n=e.error,s=e.data;return e.networkStatus===h.NetworkStatus.refetch?"Refetching!":c?"Loading...":n?"Error! ".concat(n):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(O.jsx)(g,{}),s.launches.map((function(e){return Object(O.jsx)(p,{launch:e},e.flight_number)}))]})},f=function(e){var c=e.match.params.flight_number;c=parseInt(c);var n=Object(h.gql)("\nquery LaunchQuery {\n    launch(flight_number:\n"+c+"){\n        flight_number\n        mission_name\n        launch_year\n        launch_success\n        launch_date_local,\n        rocket{\n            rocket_id\n            rocket_name\n            rocket_type\n        }\n    }\n}\n"),s=Object(h.useQuery)(n,c),t=s.loading,a=s.error,l=s.data;if(s.networkStatus===h.NetworkStatus.refetch)return"Refetching!";if(t)return"Loading...";if(a)return"Error! ".concat(a);var r=l.launch,i=r.mission_name,u=r.launch_success,j=r.launch_year,d=r.rocket,b=d.rocket_id,x=d.rocket_name,p=d.rocket_type;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{className:"display-4 my-3",children:[Object(O.jsx)("span",{className:"text-dark",children:"Mission:"})," ",l.launch.mission_name]}),Object(O.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(O.jsxs)("ul",{className:"list-group",children:[Object(O.jsxs)("li",{className:"list-group-item",children:["Flight_number: ",c]}),Object(O.jsxs)("li",{className:"list-group-item",children:["Launch_year: ",j]}),Object(O.jsxs)("li",{className:"list-group-item",children:["Mission_name: ",i]}),Object(O.jsxs)("li",{className:"list-group-item",children:["Launch successful:"," ",Object(O.jsx)("span",{className:m()({"text-success":u,"text-danger":!u}),children:u?"Yes":"No"})]})]}),Object(O.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(O.jsxs)("ul",{className:"list-group",children:[Object(O.jsxs)("li",{className:"list-group-item",children:["Rocket_ID: ",b]}),Object(O.jsxs)("li",{className:"list-group-item",children:["Rocket_name: ",x]}),Object(O.jsxs)("li",{className:"list-group-item",children:["Rocket_type: ",p]})]}),Object(O.jsx)(o.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})},y=new h.ApolloClient({uri:"/graphql",cache:new h.InMemoryCache});var k=function(){return Object(O.jsx)(h.ApolloProvider,{client:y,children:Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("img",{src:i,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),Object(O.jsx)(u.a,{exact:!0,path:"/",component:N}),Object(O.jsx)(u.a,{exact:!0,path:"/launch/:flight_number",component:f})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(c){var n=c.getCLS,s=c.getFID,t=c.getFCP,a=c.getLCP,l=c.getTTFB;n(e),s(e),t(e),a(e),l(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),v()}},[[87,1,2]]]);
//# sourceMappingURL=main.39d2cf85.chunk.js.map