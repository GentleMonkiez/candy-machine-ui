(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{102:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return j}));var r=n(15),a=n(4),i=n(1),c=n.n(i),o=n(22),s=n(33),u=n(8),l=n(190),d=n(55),p=new o.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),b=new o.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]&&l[3],o=!1,s={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(o||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],o||(s?s.err?(console.log("REST error for",t,s),o=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),o=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,O(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return s=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),o=!0,console.log("Returning status",s),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:o.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:o.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.e.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,s,u,l,d,b,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.c(r,t,{preflightCommitment:"recent"}),e.next=3,o.b.fetchIdl(p,a);case 3:return i=e.sent,s=new o.b(i,p,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),b=l-d,f=u.data.whitelistMintSettings&&u.data.whitelistMintSettings.presale&&(!u.data.goLiveDate||u.data.goLiveDate.toNumber()>(new Date).getTime()/1e3),e.abrupt("return",{id:n,program:s,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:b,isSoldOut:0===b,isActive:(f||u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3)&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.endSettings.number.toNumber())),isPresale:f,goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.e.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.e.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,p,f,h,j,O,y,S,k,w,T,P,E,R,_,A,K;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.e.Keypair.generate(),e.next=3,Object(d.d)(a.publicKey,n);case 3:if(i=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(d.d)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return p=e.t0,f=t.id,h=[],j=[a],O=[],e.t1=o.e.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=s.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 22:if(e.t5=e.sent,e.t6=s.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t10=g(i,n,n,a.publicKey),e.t11=s.c.createMintToInstruction(s.b,a.publicKey,i,n,[],1),y=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=h,e.next=34,Object(d.f)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return h.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=h,e.next=42,Object(d.e)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return S=new o.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(d.d)(S,n);case 49:if(k=e.sent[0],h.push({pubkey:k,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return w=o.e.Keypair.generate(),h.push({pubkey:S,isWritable:!0,isSigner:!1}),h.push({pubkey:w.publicKey,isWritable:!1,isSigner:!0}),j.push(w),e.next=58,t.program.provider.connection.getAccountInfo(k);case 58:e.sent&&(y.push(s.c.createApproveInstruction(s.b,k,w.publicKey,n,[],1)),O.push(s.c.createRevokeInstruction(s.b,k,n,[])));case 60:return t.state.tokenMint&&(T=o.e.Keypair.generate(),j.push(T),h.push({pubkey:p,isWritable:!0,isSigner:!1}),h.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),y.push(s.c.createApproveInstruction(s.b,p,T.publicKey,n,[],t.state.price.toNumber())),O.push(s.c.createRevokeInstruction(s.b,p,n,[]))),e.next=63,x(a.publicKey);case 63:return P=e.sent,e.next=66,m(a.publicKey);case 66:return E=e.sent,e.next=69,v(f);case 69:return R=e.sent,_=Object(r.a)(R,2),A=_[0],K=_[1],e.t18=y,e.next=76,t.program.instruction.mintNft(K,{accounts:{candyMachine:f,candyMachineCreator:A,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:E,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:b,tokenProgram:s.b,systemProgram:u.SystemProgram.programId,rent:o.e.SYSVAR_RENT_PUBKEY,clock:o.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:o.e.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:o.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:h.length>0?h:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[y,O],[j,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(9).Buffer)},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(13),i=n(4),c=n(1),o=n.n(c),s=n(8),u=n(93);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(i.a)(o.a.mark((function e(t,n,i,c){var l,d,p,f,g,h,m,x,v,j,O,y,S,k,w=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=w.length>4&&void 0!==w[4]?w[4]:r.Parallel,d=w.length>5&&void 0!==w[5]?w[5]:"singleGossip",p=w.length>6&&void 0!==w[6]?w[6]:function(e,t){},f=w.length>7&&void 0!==w[7]?w[7]:function(e,t){return!1},g=w.length>8?w[8]:void 0,n.publicKey){e.next=7;break}throw new u.e;case 7:if(h=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:g=e.sent;case 12:m=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var o=new s.Transaction;t.forEach((function(e){return o.add(e)})),o.recentBlockhash=g.blockhash,o.setSigners.apply(o,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&o.partialSign.apply(o,Object(a.a)(r)),h.push(o)},x=0;case 14:if(!(x<i.length)){e.next=21;break}if("continue"!==m(x)){e.next=18;break}return e.abrupt("continue",18);case 18:x++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(h);case 23:v=e.sent,j=[],O={breakEarly:!1,i:0},console.log("Signed txns length",v.length,"vs handed in length",i.length),y=o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=b({connection:t,signedTransaction:v[n]})).then((function(e){var t=e.txid;e.slot;p(t,n)})).catch((function(e){f(v[n],n),l===r.StopOnFailure&&(O.breakEarly=!0,O.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!O.breakEarly){e.next=19;break}return console.log("Died on ",O.i),e.t1=O.i,e.next=16,Promise.all(j);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:j.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),S=0;case 29:if(!(S<v.length)){e.next=37;break}return e.delegateYield(y(S),"t0",31);case 31:if("object"!==typeof(k=e.t0)){e.next=34;break}return e.abrupt("return",k.v);case 34:S++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(j);case 40:return e.t1=v.length,e.next=43,Promise.all(j);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},p=15e3;function b(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(o.a.mark((function e(t){var n,r,a,c,s,u,l,b,f,h,x,j,O;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?p:a,s=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return b=e.sent,console.log("Started awaiting confirmation for",b),f=!1,Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(d()-u<c)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,m(b,c,r,"recent",!0);case 13:if(h=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!h.err){e.next=19;break}throw console.error(h.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===h||void 0===h?void 0:h.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return x=null,e.prev=28,e.next=31,g(r,n,"single");case 31:x=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!x||!x.err){e.next=47;break}if(!x.logs){e.next=46;break}j=x.logs.length-1;case 39:if(!(j>=0)){e.next=46;break}if(!(O=x.logs[j]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+O.slice("Program log: ".length));case 43:--j,e.next=39;break;case 46:throw new Error(JSON.stringify(x.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",b,d()-u),e.abrupt("return",{txid:b,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(o.a.mark((function e(t,n,r){var a,i,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),s=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return x.apply(this,arguments)}function x(){return x=Object(i.a)(o.a.mark((function e(t,n,r){var a,c,s,u,l,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",c=d.length>4&&void 0!==d[4]&&d[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(o.a.mark((function e(d,p){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(b){s=!0,console.error("WS error in setup",t,b)}case 2:if(s||!c){e.next=8;break}return Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,p(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}},213:function(e,t,n){},214:function(e,t){},216:function(e,t){},237:function(e,t){},238:function(e,t){},305:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(2),o=n.n(c),s=n(26),u=n.n(s),l=(n(213),n(22)),d=n(14),p=n(4),b=n(15),f=n(100),g=n(1),h=n.n(g),m=n(79),x=n(347),v=n(355),j=n(341),O=n(353),y=n(8),S=n(183),k=n(130),w=n(102),T=n(345),P=n(342),E=n(191),R=n(337),_=n(360),A=n(19),K=Object(R.a)((function(e){return Object(_.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.5),marginRight:0,width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:e.spacing(1),marginRight:0,padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),C=function(e){var t=e.date,n=e.status,r=e.style,a=e.onComplete,i=K();return t?Object(A.jsx)(E.a,{date:t,onComplete:a,renderer:function(e){var t=e.days,a=e.hours,c=e.minutes,o=e.seconds;return a+=24*t,e.completed?n?Object(A.jsx)("span",{className:i.done,children:n}):null:Object(A.jsxs)("div",{className:i.root,style:r,children:[Object(A.jsxs)(j.a,{elevation:0,children:[Object(A.jsx)("span",{className:i.item,children:a<10?"0".concat(a):a}),Object(A.jsx)("span",{children:"hrs"})]}),Object(A.jsxs)(j.a,{elevation:0,children:[Object(A.jsx)("span",{className:i.item,children:c<10?"0".concat(c):c}),Object(A.jsx)("span",{children:"mins"})]}),Object(A.jsxs)(j.a,{elevation:0,children:[Object(A.jsx)("span",{className:i.item,children:o<10?"0".concat(o):o}),Object(A.jsx)("span",{children:"secs"})]})]})}}):null},M=n(55),D=function(e){var t,n,r=e.candyMachine;return Object(A.jsx)(T.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:Object(A.jsxs)(T.a,{container:!0,direction:"row",wrap:"nowrap",children:[r&&Object(A.jsxs)(T.a,{container:!0,direction:"row",wrap:"nowrap",children:[Object(A.jsxs)(T.a,{container:!0,direction:"column",children:[Object(A.jsx)(P.a,{variant:"body2",color:"textSecondary",children:"Remaining"}),Object(A.jsx)(P.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(null===r||void 0===r?void 0:r.state.itemsRemaining)})]}),Object(A.jsxs)(T.a,{container:!0,direction:"column",children:[Object(A.jsx)(P.a,{variant:"body2",color:"textSecondary",children:"Price"}),Object(A.jsx)(P.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:N(r)})]})]}),Object(A.jsx)(C,{date:Object(M.g)(null!==r&&void 0!==r&&r.state.goLiveDate?null===r||void 0===r?void 0:r.state.goLiveDate:null!==r&&void 0!==r&&r.state.isPresale?new l.a((new Date).getTime()/1e3):void 0),style:{justifyContent:"flex-end"},status:null===r||void 0===r||null===(t=r.state)||void 0===t||!t.isActive||null!==r&&void 0!==r&&null!==(n=r.state)&&void 0!==n&&n.isSoldOut?"COMPLETED":null!==r&&void 0!==r&&r.state.isPresale?"PRESALE":"LIVE"})]})})},N=function(e){var t,n,r=M.c.asNumber(e.state.isPresale&&null!==(t=e.state.whitelistMintSettings)&&void 0!==t&&t.discountPrice?null===(n=e.state.whitelistMintSettings)||void 0===n?void 0:n.discountPrice:e.state.price);return"\u25ce ".concat(r)},I=n(339),W=n(346),L=n(92),B=Object(m.default)(I.a)(r||(r=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),U=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=Object(L.useGateway)(),i=a.requestGatewayToken,o=a.gatewayStatus,s=Object(c.useState)(!1),u=Object(b.a)(s,2),l=u[0],d=u[1];Object(c.useEffect)((function(){o===L.GatewayStatus.ACTIVE&&l&&(t(),d(!1))}),[o,l,d,t]);return Object(A.jsx)(B,{disabled:(null===n||void 0===n?void 0:n.state.isSoldOut)||r||!(null!==n&&void 0!==n&&n.state.isActive),onClick:Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),null===n||void 0===n||!n.state.isActive||null===n||void 0===n||!n.state.gatekeeper){e.next=10;break}if(o!==L.GatewayStatus.ACTIVE){e.next=6;break}d(!0),e.next=8;break;case 6:return e.next=8,i();case 8:e.next=13;break;case 10:return e.next=12,t();case 12:d(!1);case 13:case"end":return e.stop()}}),e)}))),variant:"contained",children:null!==n&&void 0!==n&&n.state.isSoldOut?"SOLD OUT":r?Object(A.jsx)(W.a,{}):null!==n&&void 0!==n&&n.state.isPresale?"PRESALE MINT":"MINT"})},F=Object(m.default)(k.a)(a||(a=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),H=m.default.div(i||(i=Object(f.a)([""]))),V=function(e){var t,n,r=Object(c.useState)(!1),a=Object(b.a)(r,2),i=a[0],o=a[1],s=Object(c.useState)(),u=Object(b.a)(s,2),l=u[0],f=u[1],g=Object(c.useState)({open:!1,message:"",severity:void 0}),m=Object(b.a)(g,2),k=m[0],T=m[1],P=e.rpcHost,E=Object(S.b)(),R=Object(c.useMemo)((function(){if(E&&E.publicKey&&E.signAllTransactions&&E.signTransaction)return{publicKey:E.publicKey,signAllTransactions:E.signAllTransactions,signTransaction:E.signTransaction}}),[E]),_=Object(c.useCallback)(Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(R){t.next=2;break}return t.abrupt("return");case 2:if(!e.candyMachineId){t.next=14;break}return t.prev=3,t.next=6,Object(w.c)(R,e.candyMachineId,e.connection);case 6:n=t.sent,f(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("There was a problem fetching Candy Machine state"),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])}))),[R,e.candyMachineId,e.connection]),K=function(){var t=Object(p.a)(h.a.mark((function t(){var n,r,a,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(E.connected&&null!==l&&void 0!==l&&l.program&&E.publicKey)){t.next=13;break}return t.next=6,Object(w.d)(l,E.publicKey);case 6:if(r=t.sent[0],a={err:!0},!r){t.next=12;break}return t.next=11,Object(w.b)(r,e.txTimeout,e.connection,!0);case 11:a=t.sent;case 12:a&&!a.err?T({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}):T({open:!0,message:"Mint failed! Please try again!",severity:"error"});case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),i=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(i="SOLD OUT!",window.location.reload()):312===t.t0.code&&(i="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?i="SOLD OUT!":t.t0.message.indexOf("0x135")&&(i="Insufficient funds to mint. Please fund your wallet."):i="Transaction Timeout! Please try again.",T({open:!0,message:i,severity:"error"});case 20:return t.prev=20,o(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){_()}),[R,e.candyMachineId,e.connection,_]),Object(A.jsxs)(x.a,{style:{marginTop:100},children:[Object(A.jsx)(x.a,{maxWidth:"xs",style:{position:"relative"},children:Object(A.jsx)(j.a,{style:{padding:24,backgroundColor:"#151A1F",borderRadius:6},children:E.connected?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(D,{candyMachine:l}),Object(A.jsx)(H,{children:null!==l&&void 0!==l&&l.state.isActive&&null!==l&&void 0!==l&&l.state.gatekeeper&&E.publicKey&&E.signTransaction?Object(A.jsx)(L.GatewayProvider,{wallet:{publicKey:E.publicKey||new y.PublicKey(w.a),signTransaction:E.signTransaction},gatekeeperNetwork:null===l||void 0===l||null===(t=l.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:P,options:{autoShowModal:!1},children:Object(A.jsx)(U,{candyMachine:l,isMinting:i,onMint:K})}):Object(A.jsx)(U,{candyMachine:l,isMinting:i,onMint:K})})]}):Object(A.jsx)(F,{children:"Connect Wallet"})})}),Object(A.jsx)(v.a,{open:k.open,autoHideDuration:6e3,onClose:function(){return T(Object(d.a)(Object(d.a)({},k),{},{open:!1}))},children:Object(A.jsx)(O.a,{onClose:function(){return T(Object(d.a)(Object(d.a)({},k),{},{open:!1}))},severity:k.severity,children:k.message})})]})},Y=n(356),z=n(357),G=n(358),q=n(350),J=n(351),Z=n(359),Q=n(354),X=n(196),$=n(352),ee=Object(X.a)({palette:{type:"dark"}}),te=function(){try{return new l.e.PublicKey(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CANDY_MACHINE_ID)}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),ne=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SOLANA_NETWORK,re=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SOLANA_RPC_HOST,ae=new l.e.Connection(re||l.e.clusterApiUrl("devnet")),ie=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CANDY_START_DATE,10),ce=function(){var e=Object(c.useMemo)((function(){return Object(y.clusterApiUrl)(ne)}),[]),t=Object(c.useMemo)((function(){return[Object(Y.a)(),Object(z.a)(),Object(G.a)(),Object(q.a)({network:ne}),Object(J.a)({network:ne})]}),[]);return Object(A.jsx)($.a,{theme:ee,children:Object(A.jsx)(Z.a,{endpoint:e,children:Object(A.jsx)(Q.a,{wallets:t,autoConnect:!0,children:Object(A.jsx)(k.b,{children:Object(A.jsx)(V,{candyMachineId:te,connection:ae,startDate:ie,txTimeout:3e4,rpcHost:re})})})})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,361)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};n(305);u.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(ce,{})}),document.getElementById("root")),oe()},55:function(e,t,n){"use strict";(function(e){n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return h}));var r=n(4),a=n(1),i=n.n(a),c=n(22),o=n(33),s=n(8),u=function(e){if(e)return new Date(1e3*e.toNumber())},l=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),d={format:function(e){return e?l.format(e):"--"},asNumber:function(e){if(e)return e.toNumber()/s.LAMPORTS_PER_SOL}},p=new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),f=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),o.b.toBuffer(),t.toBuffer()],p);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(9).Buffer)}},[[306,1,2]]]);
//# sourceMappingURL=main.478f7126.chunk.js.map