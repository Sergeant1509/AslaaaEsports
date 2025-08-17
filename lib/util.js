// Tiny helper library (no external deps)
(function(global){
  const qs = (sel, el=document) => el.querySelector(sel);
  const qsa = (sel, el=document) => Array.from(el.querySelectorAll(sel));
  const on = (el, ev, fn) => el.addEventListener(ev, fn);
  global.$ = { qs, qsa, on };
})(window);
