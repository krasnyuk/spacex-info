(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{aNsK:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var a=t("pMnS"),c=t("igqZ"),i=t("lzlj"),o=t("omvX"),s=t("pvt9"),b=t("SVse"),r=t("pNGp"),d=t("vkgz"),m=t("1G5W");class g extends r.a{constructor(l,n){super(),this.spacexDataService=l,this.seoService=n}ngOnInit(){this.loadNextLaunch(),this.setSeoInfo()}loadNextLaunch(){this.launch$=this.spacexDataService.getNextLaunch()}setSeoInfo(){this.launch$.pipe(Object(d.a)(l=>{const n=`SpaceX next launch date: ${l.launch_date_utc}. Details: ${l.details}`;this.seoService.updateTitle(`Next Launch | Mission: ${l.mission_name}`),this.seoService.updateDescription(n)}),Object(m.a)(this.componentDestroyed$)).subscribe()}}var p=t("dG00"),h=t("KBIk"),f=u.rb({encapsulation:0,styles:[[".timer[_ngcontent-%COMP%]{text-align:center}.timer__title[_ngcontent-%COMP%]{font-size:3rem;margin-top:30px;font-weight:100;margin-bottom:15px}.timer__label[_ngcontent-%COMP%]{font-size:4rem}.next-launch-time[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:400px;background-image:url(next-launch-bg.bd83cdc155728e915f75.jpg);background-position:bottom;background-repeat:no-repeat;background-size:cover}.next-launch-time__overlay[_ngcontent-%COMP%]{position:absolute;z-index:2;top:10%;left:10%}.next-launch-time__gradient[_ngcontent-%COMP%]{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to right,rgba(0,0,0,.65) 0,rgba(0,0,0,0) 100%)}"]],data:{}});function x(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.sb(1,16384,null,0,c.d,[],null,null),(l()(),u.tb(2,0,null,null,1,"p",[["class","mat-body"]],null,null,null,null,null)),(l()(),u.Nb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.ngIf)}))}function _(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,22,null,null,null,null,null,null,null)),(l()(),u.tb(1,0,null,null,21,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,i.d,i.a)),u.sb(2,49152,null,0,c.a,[[2,o.a]],null,null),(l()(),u.tb(3,0,null,0,8,"mat-card-header",[["class","mat-card-header"]],null,null,null,i.c,i.b)),u.sb(4,49152,null,0,c.e,[],null,null),(l()(),u.tb(5,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),u.sb(6,16384,null,0,c.i,[],null,null),(l()(),u.Nb(7,null,[" Mission: "," "])),(l()(),u.tb(8,0,null,1,3,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),u.sb(9,16384,null,0,c.h,[],null,null),(l()(),u.Nb(10,null,[" "," "])),u.Jb(11,1),(l()(),u.tb(12,0,null,0,8,"div",[["class","next-launch-time mat-card-image"],["mat-card-image",""]],null,null,null,null,null)),u.sb(13,16384,null,0,c.f,[],null,null),(l()(),u.tb(14,0,null,null,5,"div",[["class","next-launch-time__overlay"]],null,null,null,null,null)),(l()(),u.tb(15,0,null,null,4,"div",[["class","timer"]],null,null,null,null,null)),(l()(),u.tb(16,0,null,null,1,"h2",[["class","timer__title"]],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Next Launch in:"])),(l()(),u.tb(18,0,null,null,1,"p",[["class","timer__label"]],null,null,null,null,null)),u.sb(19,212992,null,0,s.a,[u.y,u.l],{countDownDate:[0,"countDownDate"]},null),(l()(),u.tb(20,0,null,null,0,"div",[["class","next-launch-time__gradient"]],null,null,null,null,null)),(l()(),u.ib(16777216,null,0,1,null,x)),u.sb(22,16384,null,0,b.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,19,0,n.context.ngIf.launch_date_utc),l(n,22,0,n.context.ngIf.details)}),(function(l,n){l(n,1,0,"NoopAnimations"===u.Fb(n,2)._animationMode),l(n,7,0,n.context.ngIf.mission_name);var t=u.Ob(n,10,0,l(n,11,0,u.Fb(n.parent,0),n.context.ngIf.launch_date_utc));l(n,10,0,t)}))}function v(l){return u.Pb(2,[u.Hb(0,b.f,[u.t]),(l()(),u.ib(16777216,null,null,2,null,_)),u.sb(2,16384,null,0,b.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),u.Hb(131072,b.b,[u.i])],(function(l,n){var t=n.component;l(n,2,0,u.Ob(n,2,0,u.Fb(n,3).transform(t.launch$)))}),null)}function D(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"spx-next-launch-page",[],null,null,null,v,f)),u.sb(1,245760,null,0,g,[p.a,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var I=u.pb("spx-next-launch-page",g,D,{},{},[]),N=t("/q54"),k=t("iInd");class O{}var P=t("IP0z"),w=t("VDRc"),M=t("Xd0L"),S=t("cUpR"),L=t("PCNd");t.d(n,"NextLaunchPageModuleNgFactory",(function(){return z}));var z=u.qb(e,[],(function(l){return u.Cb([u.Db(512,u.k,u.bb,[[8,[a.a,I]],[3,u.k],u.w]),u.Db(4608,b.o,b.n,[u.t,[2,b.D]]),u.Db(5120,u.b,(function(l,n){return[N.k(l,n)]}),[b.e,u.A]),u.Db(1073742336,b.c,b.c,[]),u.Db(1073742336,k.o,k.o,[[2,k.t],[2,k.k]]),u.Db(1073742336,O,O,[]),u.Db(1073742336,N.c,N.c,[]),u.Db(1073742336,P.a,P.a,[]),u.Db(1073742336,w.e,w.e,[]),u.Db(1073742336,M.l,M.l,[[2,M.d],[2,S.f]]),u.Db(1073742336,c.g,c.g,[]),u.Db(1073742336,L.a,L.a,[]),u.Db(1073742336,e,e,[]),u.Db(1024,k.i,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);