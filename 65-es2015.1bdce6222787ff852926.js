(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"+C0f":function(t,e,i){"use strict";i.r(e),i.d(e,"BlogsPageModule",function(){return P});var n=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),c=i("TEn/"),l=i("mrSG"),r=i("lJxs"),a=i("fXoL"),g=i("tk/3");let b=(()=>{class t{constructor(t){this.http=t,this.url="https://hackaday.com/wp-json",this.apiKey=""}getBlogs(){return this.http.get(`${this.url}/wp/v2/posts`).pipe(Object(r.a)(t=>t))}getBlogDetail(t){return this.http.get(`${this.url}/wp/v2/posts/${t}`)}getMedia(){return this.http.get(`${this.url}/wp/v2/media`)}getImage(t){return console.log("id",t),this.http.get(`${this.url}/wp/v2/media/${t}`)}getTags(){return this.http.get(`${this.url}/wp/v2/tags`)}getUser(t){return this.http.get(`${this.url}/wp/v2/users/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(a.Zb(g.a))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,e){if(1&t&&a.Qb(0,"ion-img",12),2&t){const t=a.hc();a.nc("src",t.image_url)}}function p(t,e){if(1&t&&(a.Vb(0,"ion-grid"),a.Vb(1,"ion-row"),a.Vb(2,"ion-col",13),a.Lc(3),a.Ub(),a.Ub(),a.Ub()),2&t){const t=a.hc();a.Db(3),a.Nc(" ",t.blogDetail.title.rendered," ")}}function u(t,e){if(1&t&&(a.Vb(0,"ion-row",14),a.Vb(1,"ion-col",15),a.Vb(2,"ion-text"),a.Vb(3,"h1",16),a.Lc(4),a.Ub(),a.Vb(5,"p",17),a.Lc(6),a.ic(7,"date"),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t){const t=a.hc();a.Db(4),a.Mc(t.blogDetail.authorData.name),a.Db(2),a.Mc(a.kc(7,2,t.blogDetail.date,"dd/MM/yyyy"))}}function h(t,e){if(1&t&&(a.Vb(0,"ion-chip",0),a.Lc(1),a.Ub()),2&t){const t=e.$implicit;a.Db(1),a.Mc(t.name)}}function f(t,e){if(1&t&&(a.Vb(0,"ion-grid"),a.Vb(1,"ion-row"),a.Qb(2,"ion-col",18),a.Ub(),a.Ub()),2&t){const t=a.hc();a.Db(2),a.nc("innerHtml",t.blogDetail.content.rendered,a.Cc)}}let m=(()=>{class t{constructor(t,e,i){this.activatedRoute=t,this.wp_service=e,this.modaCtrl=i,this.blogDetail=null,this.image_url=null}ngOnInit(){this.wp_service.getBlogDetail(this.id).subscribe(t=>{this.blogDetail=t,this.getImage(this.blogDetail),this.getTags(),this.getAuthor()})}getImage(t){this.wp_service.getImage(t.featured_media).subscribe(t=>{this.blogDetail.imageData=t,this.image_url=this.blogDetail.imageData.source_url})}getTags(){this.wp_service.getTags().subscribe(t=>{this.blogDetail.tagsData=t.filter(t=>this.blogDetail.tags.includes(t.id)),console.log(this.blogDetail)})}getAuthor(){this.wp_service.getUser(this.blogDetail.author).subscribe(t=>{console.log(t),this.blogDetail.authorData=t})}dismiss(){this.modaCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(s.a),a.Pb(b),a.Pb(c.rb))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-blogpage"]],inputs:{id:"id"},decls:18,vars:5,consts:[["color","primary"],["slot","end"],["fill","clear",3,"click"],["name","close","slot","icon-only"],["color","primary",1,"ion-text-center"],[1,"image-wrapper"],[3,"src",4,"ngIf"],[4,"ngIf"],["class","author",4,"ngIf"],[1,"tags"],[1,"tags-inner"],["color","primary",4,"ngFor","ngForOf"],[3,"src"],[1,"title"],[1,"author"],[1,"ion-text-center"],[1,"ion-no-margin"],[1,"blog-date","ion-no-margin"],[1,"content",3,"innerHtml"]],template:function(t,e){1&t&&(a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar",0),a.Vb(2,"ion-title"),a.Lc(3,"Wordpress Blog Details"),a.Ub(),a.Vb(4,"ion-buttons",1),a.Vb(5,"ion-button",2),a.dc("click",function(){return e.dismiss()}),a.Qb(6,"ion-icon",3),a.Ub(),a.Ub(),a.Ub(),a.Vb(7,"ion-toolbar",4),a.Lc(8," Single WP post details fetched "),a.Ub(),a.Ub(),a.Vb(9,"ion-content"),a.Vb(10,"div",5),a.Jc(11,d,1,1,"ion-img",6),a.Ub(),a.Jc(12,p,4,1,"ion-grid",7),a.Jc(13,u,8,5,"ion-row",8),a.Vb(14,"div",9),a.Vb(15,"div",10),a.Jc(16,h,2,1,"ion-chip",11),a.Ub(),a.Ub(),a.Jc(17,f,3,1,"ion-grid",7),a.Ub()),2&t&&(a.Db(11),a.nc("ngIf",e.image_url),a.Db(1),a.nc("ngIf",e.blogDetail&&e.blogDetail.title),a.Db(1),a.nc("ngIf",e.blogDetail&&e.blogDetail.authorData),a.Db(3),a.nc("ngForOf",e.blogDetail&&e.blogDetail.tagsData),a.Db(1),a.nc("ngIf",e.blogDetail&&e.blogDetail.content))},directives:[c.z,c.mb,c.kb,c.l,c.k,c.A,c.u,n.o,n.n,c.B,c.y,c.V,c.t,c.hb,c.s],pipes:[n.f],styles:[".title[_ngcontent-%COMP%]{font-size:32px;line-height:32px;text-align:center}.content[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{font-family:Muli}.content[_ngcontent-%COMP%]{padding:10px;text-align:justify}.image-wrapper[_ngcontent-%COMP%]{min-height:100px}.tags-inner[_ngcontent-%COMP%]{display:flex;justify-content:center}.blog-date[_ngcontent-%COMP%]{font-size:14px;color:grey}"]}),t})();const v=function(t){return{"background-image":t}};function D(t,e){if(1&t){const t=a.Wb();a.Vb(0,"div",5),a.dc("click",function(){a.Bc(t);const i=e.$implicit;return a.hc().openBlog(i.id)}),a.Qb(1,"div",6),a.Vb(2,"div",7),a.Vb(3,"div",8),a.Vb(4,"div",9),a.Lc(5),a.Ub(),a.Vb(6,"div",10),a.Vb(7,"div",11),a.Lc(8),a.ic(9,"date"),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()}if(2&t){const t=e.$implicit;a.Db(1),a.nc("ngStyle",a.sc(6,v,"url("+t.jetpack_featured_media_url+")")),a.Db(4),a.Mc(t.title.rendered),a.Db(3),a.Mc(a.kc(9,3,t.date,"dd/MM/yyyy"))}}let _=(()=>{class t{constructor(t,e){this.wp_service=t,this.modalCtrl=e}ngOnInit(){this.getBlogData()}getBlogData(){this.wp_service.getBlogs().subscribe(t=>{this.blogPosts=t,this.getImages()})}getImages(){this.wp_service.getMedia().subscribe(t=>{this.blogPosts.forEach(e=>{const i=t.filter(t=>t.id===e.featured_media);e.imageData=i[0]}),console.log(this.blogPosts)})}openBlog(t){return Object(l.a)(this,void 0,void 0,function*(){const e=yield this.modalCtrl.create({component:m,componentProps:{id:t}});return yield e.present()})}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(b),a.Pb(c.rb))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-blogs"]],decls:10,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","/samples"],["color","primary",1,"ion-text-center"],["class","video-list ion-no-padding","mode","md",3,"click",4,"ngFor","ngForOf"],["mode","md",1,"video-list","ion-no-padding",3,"click"],[1,"imagediv",3,"ngStyle"],[1,"details"],[1,"title-block"],[1,"title"],[1,"extra"],[1,"views"]],template:function(t,e){1&t&&(a.Vb(0,"ion-header"),a.Vb(1,"ion-toolbar",0),a.Vb(2,"ion-buttons",1),a.Qb(3,"ion-back-button",2),a.Ub(),a.Vb(4,"ion-title"),a.Lc(5,"Wordpress Blogs"),a.Ub(),a.Ub(),a.Vb(6,"ion-toolbar",3),a.Lc(7," Wordpress posts fetched as blogs "),a.Ub(),a.Ub(),a.Vb(8,"ion-content"),a.Jc(9,D,10,8,"div",4),a.Ub()),2&t&&(a.Db(9),a.nc("ngForOf",e.blogPosts))},directives:[c.z,c.mb,c.l,c.h,c.i,c.kb,c.u,n.n,n.p],pipes:[n.f],styles:[".video-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:10px 10px 0}.video-list[_ngcontent-%COMP%]   .imagediv[_ngcontent-%COMP%]{position:relative;height:100px;background-repeat:no-repeat;width:100%;display:flex;flex:5;background-position:50%;background-size:cover;border:1px solid #ccc}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-bottom:10px;flex:6;justify-content:flex-start;margin-left:10px}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;padding:10px;width:75px}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-family:sans-serif}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;margin-bottom:5px}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:14px;color:grey;align-items:flex-start}.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:3px;width:3px;background:grey;margin:0 6px}"]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[n.c,o.h,c.nb]]}),t})();const y=[{path:"",component:_}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[n.c,o.h,c.nb,s.j.forChild(y),M]]}),t})()}}]);