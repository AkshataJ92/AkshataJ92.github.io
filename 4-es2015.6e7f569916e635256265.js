(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{JvdY:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var e=u("pMnS"),i=u("s7LF"),a=u("SVse");class r{constructor(l){this.fb=l,this.invalidName=["abcd","wxyz"]}ngOnInit(){this.customer=this.fb.group({firstname:new i.h(null,[i.B.required,i.B.minLength(4),this.checkFirstName.bind(this)]),lastname:new i.h(null),passwordgroup:new i.j({password:new i.h(null,i.B.required),confirm_password:new i.h(null,i.B.required)},this.matchPassword.bind(this)),email:new i.h,mobile_no:new i.h,notification:new i.h("email"),hobby:new i.e([])}),this.customer.get("notification").valueChanges.subscribe(l=>{let n=this.customer.get("email"),u=this.customer.get("mobile_no");"email"==l?(n.setValidators(i.B.required),u.clearValidators()):(n.clearValidators(),u.setValidators(i.B.required)),n.updateValueAndValidity(),u.updateValueAndValidity()})}getControls(){return this.customer.get("hobby").controls}checkFirstName(l){return-1!==this.invalidName.indexOf(l.value)?{Invalidname:!0}:null}matchPassword(l){return l.get("password").value!=l.get("confirm_password").value?{passwordnotmatched:!0}:null}onSubmit(){console.log(this.customer)}onAddHobbyClick(){let l=new i.h(null,i.B.required);this.customer.get("hobby").push(l)}onDeleteHobbyClick(l){this.customer.get("hobby").removeAt(l)}}var s=o.nb({encapsulation:0,styles:[[""]],data:{}});function b(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger "]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["first name is required"]))],null,null)}function c(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["name shud b > 4"]))],null,null)}function d(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Invalid name"]))],null,null)}function g(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["password required"]))],null,null)}function p(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["confirm password required"]))],null,null)}function m(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["confirm password and password should be same"]))],null,null)}function h(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Mobile number is required"]))],null,null)}function z(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"label",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Email is required"]))],null,null)}function f(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,5,"input",[["placeholder","enter your hobby"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,2)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,2).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,2)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,2)._compositionEnd(u.target.value)&&t),t},null,null)),o.ob(2,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.Db(1024,null,i.q,function(l){return[l]},[i.c]),o.ob(4,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(6,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.pb(7,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onDeleteHobbyClick(l.context.index)&&o),o},null,null)),(l()(),o.Gb(-1,null,["Delete"]))],function(l,n){l(n,4,0,n.context.index)},function(l,n){l(n,1,0,o.zb(n,6).ngClassUntouched,o.zb(n,6).ngClassTouched,o.zb(n,6).ngClassPristine,o.zb(n,6).ngClassDirty,o.zb(n,6).ngClassValid,o.zb(n,6).ngClassInvalid,o.zb(n,6).ngClassPending)})}function C(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,110,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,109,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,e=l.component;return"submit"===n&&(t=!1!==o.zb(l,3).onSubmit(u)&&t),"reset"===n&&(t=!1!==o.zb(l,3).onReset()&&t),"ngSubmit"===n&&(t=!1!==e.onSubmit()&&t),t},null,null)),o.ob(2,16384,null,0,i.F,[],null,null),o.ob(3,540672,null,0,i.k,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Db(2048,null,i.b,null,[i.k]),o.ob(5,16384,null,0,i.t,[[4,i.b]],null,null),(l()(),o.pb(6,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.pb(7,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Firstname"])),(l()(),o.pb(9,0,null,null,5,"input",[["class","form-control"],["formControlName","firstname"],["placeholder","Enter your first name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,10)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,10).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,10)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,10)._compositionEnd(u.target.value)&&t),t},null,null)),o.ob(10,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.Db(1024,null,i.q,function(l){return[l]},[i.c]),o.ob(12,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(14,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.eb(16777216,null,null,1,null,b)),o.ob(16,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,c)),o.ob(18,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,d)),o.ob(20,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(21,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.pb(22,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Lastname"])),(l()(),o.pb(24,0,null,null,5,"input",[["class","form-control"],["formControlName","lastname"],["placeholder","Enter your last name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,25)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,25).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,25)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,25)._compositionEnd(u.target.value)&&t),t},null,null)),o.ob(25,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.Db(1024,null,i.q,function(l){return[l]},[i.c]),o.ob(27,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(29,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.pb(30,0,null,null,27,"div",[["class","form-group"],["formGroupName","passwordgroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),o.ob(31,212992,null,0,i.l,[[3,i.b],[8,null],[8,null]],{name:[0,"name"]},null),o.Db(2048,null,i.b,null,[i.l]),o.ob(33,16384,null,0,i.t,[[4,i.b]],null,null),(l()(),o.pb(34,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),o.pb(35,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Password"])),(l()(),o.pb(37,0,null,null,5,"input",[["class","form-control"],["formControlName","password"],["placeholder","Enter your password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,38)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,38).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,38)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,38)._compositionEnd(u.target.value)&&t),t},null,null)),o.ob(38,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.Db(1024,null,i.q,function(l){return[l]},[i.c]),o.ob(40,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(42,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.eb(16777216,null,null,1,null,g)),o.ob(44,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(45,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),o.pb(46,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Confirm-Password"])),(l()(),o.pb(48,0,null,null,5,"input",[["class","form-control"],["formControlName","confirm_password"],["placeholder","Enter your confirm password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,49)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,49).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,49)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,49)._compositionEnd(u.target.value)&&t),t},null,null)),o.ob(49,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.Db(1024,null,i.q,function(l){return[l]},[i.c]),o.ob(51,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(53,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.eb(16777216,null,null,1,null,p)),o.ob(55,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.eb(16777216,null,null,1,null,m)),o.ob(57,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(58,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,[" Notification: "])),(l()(),o.pb(60,0,null,null,6,"input",[["formControlName","notification"],["type","radio"],["value","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,61)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,61).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,61)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,61)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==o.zb(l,62).onChange()&&t),"blur"===n&&(t=!1!==o.zb(l,62).onTouched()&&t),t},null,null)),o.ob(61,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.ob(62,212992,null,0,i.y,[o.B,o.k,i.D,o.p],{formControlName:[0,"formControlName"],value:[1,"value"]},null),o.Db(1024,null,i.q,function(l,n){return[l,n]},[i.c,i.y]),o.ob(64,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(66,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.Gb(-1,null,["Email "])),(l()(),o.pb(68,0,null,null,6,"input",[["formControlName","notification"],["type","radio"],["value","mobile_no"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,69)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,69).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,69)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,69)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==o.zb(l,70).onChange()&&t),"blur"===n&&(t=!1!==o.zb(l,70).onTouched()&&t),t},null,null)),o.ob(69,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.ob(70,212992,null,0,i.y,[o.B,o.k,i.D,o.p],{formControlName:[0,"formControlName"],value:[1,"value"]},null),o.Db(1024,null,i.q,function(l,n){return[l,n]},[i.c,i.y]),o.ob(72,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(74,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.Gb(-1,null,["Mobile_number "])),(l()(),o.pb(76,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.pb(77,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Mobile number"])),(l()(),o.pb(79,0,null,null,6,"input",[["class","form-control"],["formControlName","mobile_no"],["placeholder","Enter your mobile numnber"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,80)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,80).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,80)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,80)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==o.zb(l,81).onChange(u.target.value)&&t),"input"===n&&(t=!1!==o.zb(l,81).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,81).onTouched()&&t),t},null,null)),o.ob(80,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.ob(81,16384,null,0,i.w,[o.B,o.k],null,null),o.Db(1024,null,i.q,function(l,n){return[l,n]},[i.c,i.w]),o.ob(83,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(85,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.eb(16777216,null,null,1,null,h)),o.ob(87,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(88,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.pb(89,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Email"])),(l()(),o.pb(91,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["placeholder","Enter your email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==o.zb(l,92)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==o.zb(l,92).onTouched()&&t),"compositionstart"===n&&(t=!1!==o.zb(l,92)._compositionStart()&&t),"compositionend"===n&&(t=!1!==o.zb(l,92)._compositionEnd(u.target.value)&&t),t},null,null)),o.ob(92,16384,null,0,i.c,[o.B,o.k,[2,i.a]],null,null),o.Db(1024,null,i.q,function(l){return[l]},[i.c]),o.ob(94,671744,null,0,i.i,[[3,i.b],[8,null],[8,null],[6,i.q],[2,i.E]],{name:[0,"name"]},null),o.Db(2048,null,i.r,null,[i.i]),o.ob(96,16384,null,0,i.s,[[4,i.r]],null,null),(l()(),o.eb(16777216,null,null,1,null,z)),o.ob(98,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(99,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.pb(100,0,null,null,1,"button",[["class","btn btn-info"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onAddHobbyClick()&&o),o},null,null)),(l()(),o.Gb(-1,null,["Add hobby"])),(l()(),o.pb(102,0,null,null,5,"div",[["formArrayName","hobby"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),o.ob(103,212992,null,0,i.f,[[3,i.b],[8,null],[8,null]],{name:[0,"name"]},null),o.Db(2048,null,i.b,null,[i.f]),o.ob(105,16384,null,0,i.t,[[4,i.b]],null,null),(l()(),o.eb(16777216,null,null,1,null,f)),o.ob(107,278528,null,0,a.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(108,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o.pb(109,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Submit"]))],function(l,n){var u=n.component;l(n,3,0,u.customer),l(n,12,0,"firstname"),l(n,16,0,u.customer.get("firstname").hasError("required")),l(n,18,0,u.customer.get("firstname").hasError("minlength")),l(n,20,0,u.customer.get("firstname").hasError("Invalidname")),l(n,27,0,"lastname"),l(n,31,0,"passwordgroup"),l(n,40,0,"password"),l(n,44,0,u.customer.get("passwordgroup").get("password").hasError("required")),l(n,51,0,"confirm_password"),l(n,55,0,u.customer.get("passwordgroup").get("confirm_password").hasError("required")),l(n,57,0,u.customer.get("passwordgroup").hasError("passwordnotmatched")),l(n,62,0,"notification","email"),l(n,64,0,"notification"),l(n,70,0,"notification","mobile_no"),l(n,72,0,"notification"),l(n,83,0,"mobile_no"),l(n,87,0,u.customer.get("mobile_no").hasError("required")),l(n,94,0,"email"),l(n,98,0,u.customer.get("email").hasError("required")),l(n,103,0,"hobby"),l(n,107,0,u.getControls())},function(l,n){l(n,1,0,o.zb(n,5).ngClassUntouched,o.zb(n,5).ngClassTouched,o.zb(n,5).ngClassPristine,o.zb(n,5).ngClassDirty,o.zb(n,5).ngClassValid,o.zb(n,5).ngClassInvalid,o.zb(n,5).ngClassPending),l(n,9,0,o.zb(n,14).ngClassUntouched,o.zb(n,14).ngClassTouched,o.zb(n,14).ngClassPristine,o.zb(n,14).ngClassDirty,o.zb(n,14).ngClassValid,o.zb(n,14).ngClassInvalid,o.zb(n,14).ngClassPending),l(n,24,0,o.zb(n,29).ngClassUntouched,o.zb(n,29).ngClassTouched,o.zb(n,29).ngClassPristine,o.zb(n,29).ngClassDirty,o.zb(n,29).ngClassValid,o.zb(n,29).ngClassInvalid,o.zb(n,29).ngClassPending),l(n,30,0,o.zb(n,33).ngClassUntouched,o.zb(n,33).ngClassTouched,o.zb(n,33).ngClassPristine,o.zb(n,33).ngClassDirty,o.zb(n,33).ngClassValid,o.zb(n,33).ngClassInvalid,o.zb(n,33).ngClassPending),l(n,37,0,o.zb(n,42).ngClassUntouched,o.zb(n,42).ngClassTouched,o.zb(n,42).ngClassPristine,o.zb(n,42).ngClassDirty,o.zb(n,42).ngClassValid,o.zb(n,42).ngClassInvalid,o.zb(n,42).ngClassPending),l(n,48,0,o.zb(n,53).ngClassUntouched,o.zb(n,53).ngClassTouched,o.zb(n,53).ngClassPristine,o.zb(n,53).ngClassDirty,o.zb(n,53).ngClassValid,o.zb(n,53).ngClassInvalid,o.zb(n,53).ngClassPending),l(n,60,0,o.zb(n,66).ngClassUntouched,o.zb(n,66).ngClassTouched,o.zb(n,66).ngClassPristine,o.zb(n,66).ngClassDirty,o.zb(n,66).ngClassValid,o.zb(n,66).ngClassInvalid,o.zb(n,66).ngClassPending),l(n,68,0,o.zb(n,74).ngClassUntouched,o.zb(n,74).ngClassTouched,o.zb(n,74).ngClassPristine,o.zb(n,74).ngClassDirty,o.zb(n,74).ngClassValid,o.zb(n,74).ngClassInvalid,o.zb(n,74).ngClassPending),l(n,79,0,o.zb(n,85).ngClassUntouched,o.zb(n,85).ngClassTouched,o.zb(n,85).ngClassPristine,o.zb(n,85).ngClassDirty,o.zb(n,85).ngClassValid,o.zb(n,85).ngClassInvalid,o.zb(n,85).ngClassPending),l(n,91,0,o.zb(n,96).ngClassUntouched,o.zb(n,96).ngClassTouched,o.zb(n,96).ngClassPristine,o.zb(n,96).ngClassDirty,o.zb(n,96).ngClassValid,o.zb(n,96).ngClassInvalid,o.zb(n,96).ngClassPending),l(n,102,0,o.zb(n,105).ngClassUntouched,o.zb(n,105).ngClassTouched,o.zb(n,105).ngClassPristine,o.zb(n,105).ngClassDirty,o.zb(n,105).ngClassValid,o.zb(n,105).ngClassInvalid,o.zb(n,105).ngClassPending)})}function v(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"app-customer",[],null,null,null,C,s)),o.ob(1,114688,null,0,r,[i.g],null,null)],function(l,n){l(n,1,0)},null)}var y=o.lb("app-customer",r,v,{},{},[]),I=u("iInd");u.d(n,"CustomerModuleNgFactory",function(){return w});var w=o.mb(t,[],function(l){return o.xb([o.yb(512,o.j,o.X,[[8,[e.a,y]],[3,o.j],o.v]),o.yb(4608,a.l,a.k,[o.s,[2,a.s]]),o.yb(4608,i.g,i.g,[]),o.yb(4608,i.D,i.D,[]),o.yb(1073742336,a.b,a.b,[]),o.yb(1073742336,i.C,i.C,[]),o.yb(1073742336,i.z,i.z,[]),o.yb(1073742336,I.s,I.s,[[2,I.x],[2,I.o]]),o.yb(1073742336,t,t,[]),o.yb(1024,I.m,function(){return[[{path:"",children:[{path:"",component:r}]}]]},[])])})}}]);