"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3183],{3183:(r,s,t)=>{t.d(s,{Absorbers:()=>i});var a=t(4409);class i{constructor(r){this.container=r,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],r.getAbsorber=r=>void 0===r||(0,a.Et)(r)?this.array[null!==r&&void 0!==r?r:0]:this.array.find((s=>s.name===r)),r.addAbsorber=async(r,s)=>this.addAbsorber(r,s)}async addAbsorber(r,s){const{AbsorberInstance:a}=await t.e(8087).then(t.bind(t,8087)),i=new a(this,this.container,r,s);return this.array.push(i),i}draw(r){for(const s of this.array)s.draw(r)}handleClickMode(r){const s=this.absorbers,t=this.interactivityAbsorbers;if("absorber"===r){const r=(0,a.TA)(t),i=null!==r&&void 0!==r?r:(0,a.TA)(s),o=this.container.interactivity.mouse.clickPosition;this.addAbsorber(i,o)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers;const r=(0,a.wJ)(this.absorbers,(async r=>{await this.addAbsorber(r)}));r instanceof Array?await Promise.all(r):await r}particleUpdate(r){for(const s of this.array)if(s.attract(r),r.destroyed)break}removeAbsorber(r){const s=this.array.indexOf(r);s>=0&&this.array.splice(s,1)}resize(){for(const r of this.array)r.resize()}stop(){this.array=[]}}}}]);
//# sourceMappingURL=3183.39afc2ef.chunk.js.map