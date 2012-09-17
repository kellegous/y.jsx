import "js.jsx";
import "js/web.jsx";

class YSel1 {
  var _e : Element;

  function constructor() {
  }

  function constructor(e : Element) {
    this._e = e;
  }

  function create(name : string) : YSel1 {
    return YSel1.create(this._e.ownerDocument, name);
  }

  function create(name : string, ns : string) : YSel1 {
    return YSel1.create(this._e.ownerDocument, name, ns);
  }

  static function create(doc : Document, name : string) : YSel1 {
    return new YSel1(doc.createElement(name) as Element);
  }

  static function create(doc : Document, name : string, ns : string) : YSel1 {
    return new YSel1(doc.createElementNS(ns, name) as Element);
  }

  static function create(name : string) : YSel1 {
    return new YSel1(dom.createElement(name));
  }

  static function create(name : string, ns : string) : YSel1 {
    return YSel1.create(dom.window.document, name, ns);
  }

  function sel1(s : string) : YSel1 {
    var e = this._e.querySelector(s);
    return e != null ? new YSel1(e as Element) : null;
  }

  function selN(s : string) : YSelN {
    return new YSelN(this._e.querySelectorAll(s));
  }

  function elem() : Element {
    return this._e;
  }

  function set(e : Element) : YSel1 {
    this._e = e;
    return this;
  }

  function html() : string {
    return YSel1.html(this._e);
  }

  function html(v : string) : YSel1 {
    YSel1.html(this._e, v);
    return this;
  }

  function text() : string {
    return YSel1.text(this._e);
  }

  function text(v : string) : YSel1 {
    YSel1.text(this._e, v);
    return this;
  }

  function css(s : string) : string {
    return YSel1.css(this._e, s);
  }

  function css(s : string, v : string) : YSel1 {
    YSel1.css(this._e, s, v);
    return this;
  }

  function css(s : string, v : number) : YSel1 {
    YSel1.css(this._e, s, v);
    return this;
  }

  function prop(s : string) : variant {
    return YSel1.prop(this._e, s);
  }

  function prop(s : string, v : variant) : YSel1 {
    YSel1.prop(this._e, s, v);
    return this;
  }

  function attr(s : string) : string {
    return YSel1.attr(this._e, s);
  }

  function attr(s : string, v : string) : YSel1 {
    YSel1.attr(this._e, s, v);
    return this;
  }

  function append(y : YSel1) : YSel1 {
    this._e.appendChild(y.elem());
    return this;
  }

  function append(n : Node) : YSel1 {
    this._e.appendChild(n);
    return this;
  }

  function append(y : YSelN) : YSel1 {
    y.appendTo(this);
    return this;
  }

  function prepend(y : YSel1) : YSel1 {
    var e = this._e;
    e.insertBefore(y.elem(), e.firstChild);
    return this;
  }

  function prepend(n : Node) : YSel1 {
    var e = this._e;
    e.insertBefore(n, e.firstChild);
    return this;
  }

  function prepend(y : YSelN) : YSel1 {
    y.prependTo(this);
    return this;
  }

  function appendTo(y : YSel1) : YSel1 {
    y.elem().appendChild(this._e);
    return this;
  }

  function appendTo(e : Element) : YSel1 {
    e.appendChild(this._e);
    return this;
  }

  function prependTo(y : YSel1) : YSel1 {
    var e = y.elem();
    e.insertBefore(this._e, e.firstChild);
    return this;
  }

  function prependTo(e : Element) : YSel1 {
    e.insertBefore(this._e, e.firstChild);
    return this;
  }

  function parent() : YSel1 {
    var p = this._e.parentElement;
    return p != null ? new YSel1(p as Element) : null;
  }

  function remove() : YSel1 {
    var e = this._e;
    e.parentNode.removeChild(e);
    return this;
  }

  function hasClass(s : string) : boolean {
    return this._e.classList.contains(s);
  }

  function addClass(s : string) : YSel1 {
    this._e.classList.add(s);
    return this;
  }

  function removeClass(s : string) : YSel1 {
    this._e.classList.remove(s);
    return this;
  }

  function toggleClass(s : string) : YSel1 {
    this._e.classList.toggle(s);
    return this;
  }

  function on(name : string, fn : function(:Event) : void) : YSel1 {
    this._e.addEventListener(name, fn, false);
    return this;
  }

  function off(name : string, fn : function(:Event) : void) : YSel1 {
    this._e.removeEventListener(name, fn, false);
    return this;
  }

  function clone(deep : boolean) : YSel1 {
    return new YSel1(this._e.cloneNode(deep) as Element);
  }

  function apply(f : function(:YSel1) : void) : YSel1 {
    f(this);
    return this;
  }

  // statics
  static function empty() : YSel1 {
    return new YSel1;
  }

  static function html(e : Element) : string {
    return e.innerHTML;
  }

  static function html(e : Element, v : string) : void {
    e.innerHTML = v;
  }

  static function text(e : Element) : string {
    return e.textContent;
  }

  static function text(e : Element, v : string) : void {
    e.textContent = v;
  }

  static function css(e : Element, s : string) : string {
    var lv = (e as HTMLElement).style.getPropertyValue(s);
    if (lv as variant != null)
      return lv;
    return dom.window.getComputedStyle(e).getPropertyValue(s);
  }

  static function css(e : Element, s : string, v : string) : void {
    (e as HTMLElement).style.setProperty(s, v, '');
  }

  static function css(e : Element, s : string, v : number) : void {
    YSel1.css(e, s, v as string + 'px');
  }

  static function prop(e : Element, s : string) : variant {
    return (e as variant)[s];
  }

  static function prop(e : Element, s : string, v : variant) : void {
    (e as variant)[s] = v;
  }

  static function attr(e : Element, s : string) : string {
    if (!e.hasAttribute(s))
      return '';

    var a = e.getAttribute(s);
    return a != null ? a as string : '';
  }

  static function attr(e : Element, s : string, v : string) : void {
    if (v == '') {
      e.removeAttribute(s);
      return;
    }

    e.setAttribute(s, v);
  }
}

class YSelN {
  var _e : Element[];

  function constructor() {
    this._e = [] : Element[];
  }

  function constructor(e : Array.<Element>) {
    this._e = e;
  }

  function constructor(e : HTMLCollection) {
    var a = [] : Element[];
    for (var i = 0, n = e.length; i < n; ++i)
      a.push(e.item(i) as HTMLElement);
    this._e = a;
  }

  function constructor(e : NodeList) {
    var a = [] : Element[];
    for (var i = 0, n = e.length; i < n; ++i)
      a.push(e.item(i) as HTMLElement);
    this._e = a;
  }

  function sel1(s : string) : YSel1 {
    var e = this._e;
    for (var i = 0, n = e.length; i < n; ++i) {
      var x = e[i].querySelector(s);
      if (x != null)
        return new YSel1(x as Element);
    }
    return null;
  }

  function selN(s : string) : YSelN {
    var y = new YSelN;
    this.eachElem((e) -> {
      y.add(e.querySelectorAll(s));
    });
    return y;
  }

  function empty() : boolean {
    return this._e.length == 0;
  }

  function size() : number {
    return this._e.length;
  }

  function each(y : YSel1, f : function(:YSel1) : void) : YSelN {
    var e = this._e;
    for (var i = 0, n = e.length; i < n; ++i)
      f(y.set(e[i]));
    return this;
  }

  function each(f : function(:YSel1) : void) : YSelN {
    return this.each(new YSel1, f);
  }

  function each(y : YSel1, f : function(:number, :YSel1) : void) : YSelN {
    var e = this._e;
    for (var i = 0, n = e.length; i < n; ++i)
      f(i, y.set(e[i]));
    return this;
  }

  function each(f : function(:number, :YSel1) : void) : YSelN {
    return this.each(new YSel1, f);
  }

  function eachElem(fn : function(:int, :Element) : void) : YSelN {
    var e = this._e;
    for (var i = 0, n = e.length; i < n; ++i)
      fn(i, e[i]);
    return this;
  }

  function eachElem(fn : function(:Element) : void) : YSelN {
    var e = this._e;
    for (var i = 0, n = e.length; i < n; ++i)
      fn(e[i]);
    return this;
  }

  function elemAt(i : number) : Element {
    return this._e[i];
  }

  function yAt(i : number) : YSel1 {
    return new YSel1(this._e[i]);
  }

  function prop(s : string, v : variant) : YSelN {
    return this.eachElem((e) -> {
      YSel1.prop(e, s, v);
    });
  }

  function attr(s : string, v : string) : YSelN {
    return this.eachElem((e) -> {
      YSel1.attr(e, s, v);
    });
  }

  function appendTo(y : YSel1) : YSelN {
    return this.appendTo(y.elem());
  }

  function appendTo(x : Element) : YSelN {
    return this.eachElem((e) -> {
      x.appendChild(e);
    });
  }

  function prependTo(y : YSel1) : YSelN {
    return this.prependTo(y.elem());
  }

  function prependTo(x : Element) : YSelN {
    var f = x.firstChild;
    return this.eachElem((e) -> {
      x.insertBefore(e, f);
      if (f == null)
        f = x.firstChild;
    });
  }

  function remove() : YSelN {
    return this.eachElem((e) -> {
      e.parentNode.removeChild(e);
    });
  }

  function addClass(s : string) : YSelN {
    return this.eachElem((e) -> {
      e.classList.add(s);
    });
  }

  function removeClass(s : string) : YSelN {
    return this.eachElem((e) -> {
      e.classList.remove(s);
    });
  }

  function toggleClass(s : string) : YSelN {
    return this.eachElem((e) -> {
      e.classList.toggle(s);
    });
  }

  function on(name : string, fn : function(:Event) : void) : YSelN {
    return this.eachElem((e) -> {
      e.addEventListener(name, fn, false);
    });
  }

  function off(name : string, fn : function(:Event) : void) : YSelN {
    return this.eachElem((e) -> {
      e.removeEventListener(name, fn, false);
    });
  }

  function add(y : YSel1) : YSelN {
    this._e.push(y.elem());
    return this;
  }

  function add(y : YSelN) : YSelN {
    y.eachElem((e) -> {
      this._e.push(e);
    });
    return this;
  }

  function add(e : Element) : YSelN {
    this._e.push(e);
    return this;
  }

  function add(e : NodeList) : YSelN {
    for (var i = 0, n = e.length; i < n; ++i)
      this.add(e.item(i) as HTMLElement);
    return this;
  }

  function clone(deep : boolean) : YSelN {
    var y = new YSelN;
    this.eachElem((e) -> {
      y.add(e.cloneNode(deep) as HTMLElement);
    });
    return y;
  }

  function apply(f : function(:YSelN) : void) : YSelN {
    f(this);
    return this;
  }

  // statics
  static function create(name : string, n : number) : YSelN {
    var y = new YSelN;
    for (var i = 0; i < n; ++i)
      y.add(dom.createElement(name) as HTMLElement);
    return y;
  }

  static function create(names : string[]) : YSelN {
    var y = new YSelN;
    names.forEach((n) -> {
      y.add(dom.createElement(n));
    });
    return y;
  }
}

class Y {
  static const SVGNS = 'http://www.w3.org/2000/svg';

  // Active animator functions
  static var _anim = [] : Array.<function(t : number) : boolean>;

  static function _requestAnimationFrame(fn : function(:number) : void) : void {
    var w = dom.window;
    if (js.global['webkitRequestAnimationFrame'] != null) {
      w.webkitRequestAnimationFrame(fn);
      return;
    }
    if (js.global['mozRequestAnimationFrame'] != null) {
      w.mozRequestAnimationFrame(fn);
      return;
    }
    // TODO(knorton): Fall all the way back to setTimeout.
    w.requestAnimationFrame(fn);
  }

  static function _tick(t : number) : void {
    var ao = Y._anim;
    var an = Y._anim = [] : Array.<function(t : number) : boolean>;
    var now = Date.now();
    for (var i = 0, n = ao.length; i < n; ++i) {
      if (ao[i](now))
        an.push(ao[i]);
    }

    if (an.length > 0)
      Y._requestAnimationFrame(Y._tick);
  }

  // Adds an animator function to the global queue.
  static function animate(fn : function(t : number) : boolean) : void {
    var anim = Y._anim;
    anim.push(fn);
    if (anim.length == 1)
      Y._requestAnimationFrame(Y._tick);
  }

  static function head() : YSel1 {
    return new YSel1(dom.window.document.head);
  }

  static function body() : YSel1 {
    return new YSel1(dom.window.document.body);
  }

  static function html() : YSel1 {
    return new YSel1(dom.window.document.documentElement as HTMLElement);
  }
}
