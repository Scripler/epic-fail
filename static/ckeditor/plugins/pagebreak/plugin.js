﻿/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.plugins.add("pagebreak",{requires:"fakeobjects",lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en-au,en-ca,en-gb,en,eo,es,et,eu,fa,fi,fo,fr-ca,fr,gl,gu,he,hi,hr,hu,is,it,ja,ka,km,ko,lt,lv,mk,mn,ms,nb,nl,no,pl,pt-br,pt,ro,ru,sk,sl,sr-latn,sr,sv,th,tr,ug,uk,vi,zh-cn,zh",icons:"pagebreak,pagebreak-rtl",onLoad:function(){var a=["{","background: url("+CKEDITOR.getUrl(this.path+"images/pagebreak.gif")+") no-repeat center center;","clear: both;width:100%; _width:99.9%;border-top: #999999 1px dotted;border-bottom: #999999 1px dotted;padding:0;height: 5px;cursor: default;}"].join("").replace(/;/g,
" !important;");CKEDITOR.addCss("div.cke_pagebreak"+a)},init:function(a){a.blockless||(a.addCommand("pagebreak",CKEDITOR.plugins.pagebreakCmd),a.ui.addButton&&a.ui.addButton("PageBreak",{label:a.lang.pagebreak.toolbar,command:"pagebreak",toolbar:"insert,70"}),CKEDITOR.env.opera&&a.on("contentDom",function(){a.document.on("click",function(b){b=b.data.getTarget();b.is("div")&&b.hasClass("cke_pagebreak")&&a.getSelection().selectElement(b)})}))},afterInit:function(a){var b=a.lang.pagebreak.alt,c=a.dataProcessor,
a=c&&c.dataFilter;(c=c&&c.htmlFilter)&&c.addRules({attributes:{"class":function(a,b){var c=a.replace("cke_pagebreak","");if(c!=a){var d=CKEDITOR.htmlParser.fragment.fromHtml('<span style="display: none;">&nbsp;</span>');b.children.length=0;b.add(d);d=b.attributes;delete d["aria-label"];delete d.contenteditable;delete d.title}return c}}},5);a&&a.addRules({elements:{div:function(a){var c=a.attributes,e=c&&c.style,d=e&&1==a.children.length&&a.children[0];if((d=d&&"span"==d.name&&d.attributes.style)&&
/page-break-after\s*:\s*always/i.test(e)&&/display\s*:\s*none/i.test(d))c.contenteditable="false",c["class"]="cke_pagebreak",c["data-cke-display-name"]="pagebreak",c["aria-label"]=b,c.title=b,a.children.length=0}}})}});
CKEDITOR.plugins.pagebreakCmd={exec:function(a){var b=a.lang.pagebreak.alt,b=CKEDITOR.dom.element.createFromHtml('<div style="page-break-after: always;"contenteditable="false" title="'+b+'" aria-label="'+b+'" data-cke-display-name="pagebreak" class="cke_pagebreak"></div>',a.document);a.insertElement(b)},context:"div"};