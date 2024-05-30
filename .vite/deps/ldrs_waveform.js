import {
  t
} from "./chunk-UFBZZYFZ.js";
import {
  __publicField
} from "./chunk-LNEMQRCO.js";

// node_modules/ldrs/dist/elements/waveform.js
var i = ":host{align-items:center;display:inline-flex;flex-shrink:0;height:calc(var(--uib-size)*.9);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:calc(var(--uib-size)*.9);justify-content:space-between;width:var(--uib-size)}.bar{background-color:var(--uib-color);height:100%;transition:background-color .3s ease;width:var(--uib-stroke)}.bar:first-child{animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.bar:nth-child(2){animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.bar:nth-child(3){animation:grow var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.bar:nth-child(4){animation:grow var(--uib-speed) ease-in-out infinite}@keyframes grow{0%,to{transform:scaleY(.3)}50%{transform:scaleY(1)}}";
var s = class extends t {
  constructor() {
    super();
    __publicField(this, "_attributes", ["size", "color", "speed", "stroke"]);
    __publicField(this, "size");
    __publicField(this, "color");
    __publicField(this, "speed");
    __publicField(this, "stroke");
    this.storePropsToUpgrade(this._attributes), this.reflect(this._attributes);
  }
  static get observedAttributes() {
    return ["size", "color", "speed", "stroke"];
  }
  connectedCallback() {
    this.upgradeStoredProps(), this.applyDefaultProps({ size: 35, color: "black", speed: 1, stroke: 3.5 }), this.template.innerHTML = `
      <div class="container">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-stroke: ${this.stroke}px;
        }
        ${i}
      </style>
    `, this.shadow.replaceChildren(this.template.content.cloneNode(true));
  }
  attributeChangedCallback() {
    const e = this.shadow.querySelector("style");
    e && (e.innerHTML = `
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-stroke: ${this.stroke}px;
      }
      ${i}
    `);
  }
};
var t2 = { register: (e = "l-waveform") => {
  customElements.get(e) || customElements.define(e, class extends s {
  });
}, element: s };

// node_modules/ldrs/dist/auto/waveform.js
t2.register();
//# sourceMappingURL=ldrs_waveform.js.map
