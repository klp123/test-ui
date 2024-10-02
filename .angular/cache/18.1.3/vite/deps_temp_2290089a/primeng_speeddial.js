import {
  Tooltip,
  TooltipModule
} from "./chunk-V7Y5CTYM.js";
import {
  PlusIcon
} from "./chunk-I3OTPLTB.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-P7K74Z57.js";
import "./chunk-TQ72FOWZ.js";
import "./chunk-XHCOQQPJ.js";
import {
  Ripple,
  RippleModule
} from "./chunk-4IZ7PSFH.js";
import {
  DomHandler
} from "./chunk-QU7AFVGG.js";
import "./chunk-2ZXDKVLS.js";
import {
  PrimeTemplate,
  SharedModule,
  UniqueComponentId
} from "./chunk-SSRB7OFW.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-XCLTEOBH.js";
import "./chunk-4SQORSYP.js";
import "./chunk-PRM7SCYB.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-DELTTNMS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-PR22MCJH.js";
import {
  asapScheduler
} from "./chunk-XGG7NIGN.js";
import "./chunk-HWAGSWWP.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-speeddial.mjs
var _c0 = ["container"];
var _c1 = ["list"];
var _c2 = (a0, a1) => ({
  "p-hidden": a0,
  "p-focus": a1
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c4 = (a0) => ({
  "p-disabled": a0
});
var _c5 = () => ({
  exact: false
});
var _c6 = (a0) => ({
  "p-speeddial-mask": true,
  "p-speeddial-mask-visible": a0
});
function SpeedDial_PlusIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon");
  }
}
function SpeedDial_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SpeedDial_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SpeedDial_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.buttonTemplate);
  }
}
function SpeedDial_li_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SpeedDial_li_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SpeedDial_li_7_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const item_r4 = ctx_r2.$implicit;
    const i_r5 = ctx_r2.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c3, item_r4, i_r5));
  }
}
function SpeedDial_li_7_ng_container_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r4.icon);
  }
}
function SpeedDial_li_7_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 13);
    ɵɵlistener("click", function SpeedDial_li_7_ng_container_2_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const item_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event, item_r4));
    })("keydown.enter", function SpeedDial_li_7_ng_container_2_a_1_Template_a_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      const item_r4 = ctx_r2.$implicit;
      const i_r5 = ctx_r2.index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event, item_r4, i_r5));
    });
    ɵɵtemplate(1, SpeedDial_li_7_ng_container_2_a_1_span_1_Template, 1, 1, "span", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r4.routerLink)("queryParams", item_r4.queryParams)("ngClass", ɵɵpureFunction1(15, _c4, item_r4.disabled))("routerLinkActiveOptions", item_r4.routerLinkActiveOptions || ɵɵpureFunction0(17, _c5))("fragment", item_r4.fragment)("queryParamsHandling", item_r4.queryParamsHandling)("preserveFragment", item_r4.preserveFragment)("skipLocationChange", item_r4.skipLocationChange)("replaceUrl", item_r4.replaceUrl)("state", item_r4.state);
    ɵɵattribute("target", item_r4.target)("tabindex", item_r4.disabled || ctx_r1.readonly || !ctx_r1.visible ? null : item_r4.tabindex ? item_r4.tabindex : "0")("aria-label", item_r4.label)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4.icon);
  }
}
function SpeedDial_li_7_ng_container_2_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r4.icon);
  }
}
function SpeedDial_li_7_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 16);
    ɵɵlistener("click", function SpeedDial_li_7_ng_container_2_ng_template_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const item_r4 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event, item_r4));
    })("keydown.enter", function SpeedDial_li_7_ng_container_2_ng_template_2_Template_a_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      const item_r4 = ctx_r2.$implicit;
      const i_r5 = ctx_r2.index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event, item_r4, i_r5));
    });
    ɵɵtemplate(1, SpeedDial_li_7_ng_container_2_ng_template_2_span_1_Template, 1, 1, "span", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const item_r4 = ctx_r2.$implicit;
    const i_r5 = ctx_r2.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c4, item_r4.disabled));
    ɵɵattribute("href", item_r4.url || null, ɵɵsanitizeUrl)("target", item_r4.target)("data-pc-section", "action")("aria-label", item_r4.label)("tabindex", item_r4.disabled || i_r5 !== ctx_r1.activeIndex && ctx_r1.readonly || !ctx_r1.visible ? null : item_r4.tabindex ? item_r4.tabindex : "0");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4.icon);
  }
}
function SpeedDial_li_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SpeedDial_li_7_ng_container_2_a_1_Template, 2, 18, "a", 12)(2, SpeedDial_li_7_ng_container_2_ng_template_2_Template, 2, 9, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const elseBlock_r8 = ɵɵreference(3);
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isClickableRouterLink(item_r4))("ngIfElse", elseBlock_r8);
  }
}
function SpeedDial_li_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 10);
    ɵɵtemplate(1, SpeedDial_li_7_ng_container_1_Template, 2, 5, "ng-container", 5)(2, SpeedDial_li_7_ng_container_2_Template, 4, 2, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.getItemStyle(i_r5))("tooltipOptions", item_r4.tooltipOptions)("ngClass", ɵɵpureFunction2(8, _c2, item_r4.visible === false, ctx_r1.focusedOptionId == ctx_r1.id + "_" + i_r5))("id", ctx_r1.id + "_" + i_r5);
    ɵɵattribute("aria-controls", ctx_r1.id + "_item")("data-pc-section", "menuitem");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
  }
}
function SpeedDial_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.maskClassName);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c6, ctx_r1.visible))("ngStyle", ctx_r1.maskStyle);
  }
}
var SpeedDial = class _SpeedDial {
  platformId;
  el;
  cd;
  document;
  renderer;
  /**
   * List of items id.
   * @group Props
   */
  id;
  /**
   * MenuModel instance to define the action items.
   * @group Props
   */
  model = null;
  /**
   * Specifies the visibility of the overlay.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible) {
      this.bindDocumentClickListener();
    } else {
      this.unbindDocumentClickListener();
    }
  }
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  className;
  /**
   * Specifies the opening direction of actions.
   * @gruop Props
   */
  direction = "up";
  /**
   * Transition delay step for each action item.
   * @group Props
   */
  transitionDelay = 30;
  /**
   * Specifies the opening type of actions.
   * @group Props
   */
  type = "linear";
  /**
   * Radius for *circle types.
   * @group Props
   */
  radius = 0;
  /**
   * Whether to show a mask element behind the speeddial.
   * @group Props
   */
  mask = false;
  /**
   * Whether the component is disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Whether the actions close when clicked outside.
   * @group Props
   */
  hideOnClickOutside = true;
  /**
   * Inline style of the button element.
   * @group Props
   */
  buttonStyle;
  /**
   * Style class of the button element.
   * @group Props
   */
  buttonClassName;
  /**
   * Inline style of the mask element.
   * @group Props
   */
  maskStyle;
  /**
   * Style class of the mask element.
   * @group Props
   */
  maskClassName;
  /**
   * Show icon of the button element.
   * @group Props
   */
  showIcon;
  /**
   * Hide icon of the button element.
   * @group Props
   */
  hideIcon;
  /**
   * Defined to rotate showIcon when hideIcon is not present.
   * @group Props
   */
  rotateAnimation = true;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Fired when the visibility of element changed.
   * @param {boolean} boolean - Visibility value.
   * @group Emits
   */
  onVisibleChange = new EventEmitter();
  /**
   * Fired when the visibility of element changed.
   * @param {boolean} boolean - Visibility value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Fired when the button element clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Fired when the actions are visible.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Fired when the actions are hidden.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onHide = new EventEmitter();
  container;
  list;
  templates;
  buttonTemplate;
  itemTemplate;
  isItemClicked = false;
  _visible = false;
  documentClickListener;
  focusedOptionIndex = signal(null);
  focused = false;
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  }
  constructor(platformId, el, cd, document, renderer) {
    this.platformId = platformId;
    this.el = el;
    this.cd = cd;
    this.document = document;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.type !== "linear") {
        const button = DomHandler.findSingle(this.container?.nativeElement, ".p-speeddial-button");
        const firstItem = DomHandler.findSingle(this.list?.nativeElement, ".p-speeddial-item");
        if (button && firstItem) {
          const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
          const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);
          this.list?.nativeElement.style.setProperty("--item-diff-x", `${wDiff / 2}px`);
          this.list?.nativeElement.style.setProperty("--item-diff-y", `${hDiff / 2}px`);
        }
      }
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "button":
          this.buttonTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  show() {
    this.onVisibleChange.emit(true);
    this.visibleChange.emit(true);
    this._visible = true;
    this.onShow.emit();
    this.bindDocumentClickListener();
    this.cd.markForCheck();
  }
  hide() {
    this.onVisibleChange.emit(false);
    this.visibleChange.emit(false);
    this._visible = false;
    this.onHide.emit();
    this.unbindDocumentClickListener();
    this.cd.markForCheck();
  }
  onButtonClick(event) {
    this.visible ? this.hide() : this.show();
    this.onClick.emit(event);
    this.isItemClicked = true;
  }
  onItemClick(e, item) {
    if (item.command) {
      item.command({
        originalEvent: e,
        item
      });
    }
    this.hide();
    this.isItemClicked = true;
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDown(event);
        break;
      case "ArrowUp":
        this.onArrowUp(event);
        break;
      case "ArrowLeft":
        this.onArrowLeft(event);
        break;
      case "ArrowRight":
        this.onArrowRight(event);
        break;
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      default:
        break;
    }
  }
  onFocus(event) {
    this.focused = true;
  }
  onBlur(event) {
    this.focused = false;
    asapScheduler.schedule(() => this.focusedOptionIndex.set(-1));
  }
  onArrowUp(event) {
    if (this.direction === "up") {
      this.navigateNextItem(event);
    } else if (this.direction === "down") {
      this.navigatePrevItem(event);
    } else {
      this.navigateNextItem(event);
    }
  }
  onArrowDown(event) {
    if (this.direction === "up") {
      this.navigatePrevItem(event);
    } else if (this.direction === "down") {
      this.navigateNextItem(event);
    } else {
      this.navigatePrevItem(event);
    }
  }
  onArrowLeft(event) {
    const leftValidDirections = ["left", "up-right", "down-left"];
    const rightValidDirections = ["right", "up-left", "down-right"];
    if (leftValidDirections.includes(this.direction)) {
      this.navigateNextItem(event);
    } else if (rightValidDirections.includes(this.direction)) {
      this.navigatePrevItem(event);
    } else {
      this.navigatePrevItem(event);
    }
  }
  onArrowRight(event) {
    const leftValidDirections = ["left", "up-right", "down-left"];
    const rightValidDirections = ["right", "up-left", "down-right"];
    if (leftValidDirections.includes(this.direction)) {
      this.navigatePrevItem(event);
    } else if (rightValidDirections.includes(this.direction)) {
      this.navigateNextItem(event);
    } else {
      this.navigateNextItem(event);
    }
  }
  onEndKey(event) {
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
    this.navigatePrevItem(event);
  }
  onHomeKey(event) {
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
    this.navigateNextItem(event);
  }
  onEnterKey(event) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const itemIndex = [...items].findIndex((item) => item.id === this.focusedOptionIndex());
    this.onItemClick(event, this.model[itemIndex]);
    this.onBlur(event);
    const buttonEl = DomHandler.findSingle(this.container.nativeElement, "button");
    buttonEl && DomHandler.focus(buttonEl);
  }
  onEscapeKey(event) {
    this.hide();
    const buttonEl = DomHandler.findSingle(this.container.nativeElement, "button");
    buttonEl && DomHandler.focus(buttonEl);
  }
  onTogglerKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
      case "ArrowLeft":
        this.onTogglerArrowDown(event);
        break;
      case "ArrowUp":
      case "ArrowRight":
        this.onTogglerArrowUp(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      default:
        break;
    }
  }
  onTogglerArrowUp(event) {
    this.focused = true;
    DomHandler.focus(this.list.nativeElement);
    this.show();
    this.navigatePrevItem(event);
    event.preventDefault();
  }
  onTogglerArrowDown(event) {
    this.focused = true;
    DomHandler.focus(this.list.nativeElement);
    this.show();
    this.navigateNextItem(event);
    event.preventDefault();
  }
  navigateNextItem(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  navigatePrevItem(event) {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  findPrevOptionIndex(index) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled"));
    const newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
    let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute("id") === newIndex);
    matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;
    return matchedOptionIndex;
  }
  findNextOptionIndex(index) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled"));
    const newIndex = index === -1 ? filteredItems[0].id : index;
    let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute("id") === newIndex);
    matchedOptionIndex = index === -1 ? 0 : matchedOptionIndex + 1;
    return matchedOptionIndex;
  }
  changeFocusedOptionIndex(index) {
    const items = DomHandler.find(this.container.nativeElement, '[data-pc-section="menuitem"]');
    const filteredItems = [...items].filter((item) => !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled"));
    if (filteredItems[index]) {
      this.focusedOptionIndex.set(filteredItems[index].getAttribute("id"));
    }
  }
  calculatePointStyle(index) {
    const type = this.type;
    if (type !== "linear") {
      const length = this.model.length;
      const radius = this.radius || length * 20;
      if (type === "circle") {
        const step = 2 * Math.PI / length;
        return {
          left: `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`,
          top: `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`
        };
      } else if (type === "semi-circle") {
        const direction = this.direction;
        const step = Math.PI / (length - 1);
        const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
        const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
        if (direction === "up") {
          return {
            left: x,
            bottom: y
          };
        } else if (direction === "down") {
          return {
            left: x,
            top: y
          };
        } else if (direction === "left") {
          return {
            right: y,
            top: x
          };
        } else if (direction === "right") {
          return {
            left: y,
            top: x
          };
        }
      } else if (type === "quarter-circle") {
        const direction = this.direction;
        const step = Math.PI / (2 * (length - 1));
        const x = `calc(${radius * Math.cos(step * index)}px + var(--item-diff-x, 0px))`;
        const y = `calc(${radius * Math.sin(step * index)}px + var(--item-diff-y, 0px))`;
        if (direction === "up-left") {
          return {
            right: x,
            bottom: y
          };
        } else if (direction === "up-right") {
          return {
            left: x,
            bottom: y
          };
        } else if (direction === "down-left") {
          return {
            right: y,
            top: x
          };
        } else if (direction === "down-right") {
          return {
            left: y,
            top: x
          };
        }
      }
    }
    return {};
  }
  calculateTransitionDelay(index) {
    const length = this.model.length;
    return (this.visible ? index : length - index - 1) * this.transitionDelay;
  }
  containerClass() {
    return {
      [`p-speeddial p-component p-speeddial-${this.type}`]: true,
      [`p-speeddial-direction-${this.direction}`]: this.type !== "circle",
      "p-speeddial-opened": this.visible,
      "p-disabled": this.disabled
    };
  }
  buttonClass() {
    return {
      "p-speeddial-button p-button-rounded": true,
      "p-speeddial-rotate": this.rotateAnimation && !this.hideIcon,
      [this.buttonClassName]: true
    };
  }
  get buttonIconClass() {
    return !this.visible && this.showIcon || !this.hideIcon ? this.showIcon : this.hideIcon;
  }
  getItemStyle(index) {
    const transitionDelay = this.calculateTransitionDelay(index);
    const pointStyle = this.calculatePointStyle(index);
    return __spreadValues({
      transitionDelay: `${transitionDelay}ms`
    }, pointStyle);
  }
  isClickableRouterLink(item) {
    return item.routerLink && !this.disabled && !item.disabled;
  }
  isOutsideClicked(event) {
    return this.container && !(this.container.nativeElement.isSameNode(event.target) || this.container.nativeElement.contains(event.target) || this.isItemClicked);
  }
  bindDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener && this.hideOnClickOutside) {
        this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
          if (this.visible && this.isOutsideClicked(event)) {
            this.hide();
          }
          this.isItemClicked = false;
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentClickListener();
  }
  static ɵfac = function SpeedDial_Factory(ɵt) {
    return new (ɵt || _SpeedDial)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SpeedDial,
    selectors: [["p-speedDial"]],
    contentQueries: function SpeedDial_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function SpeedDial_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.list = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      model: "model",
      visible: "visible",
      style: "style",
      className: "className",
      direction: "direction",
      transitionDelay: [2, "transitionDelay", "transitionDelay", numberAttribute],
      type: "type",
      radius: [2, "radius", "radius", numberAttribute],
      mask: [2, "mask", "mask", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      hideOnClickOutside: [2, "hideOnClickOutside", "hideOnClickOutside", booleanAttribute],
      buttonStyle: "buttonStyle",
      buttonClassName: "buttonClassName",
      maskStyle: "maskStyle",
      maskClassName: "maskClassName",
      showIcon: "showIcon",
      hideIcon: "hideIcon",
      rotateAnimation: [2, "rotateAnimation", "rotateAnimation", booleanAttribute],
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onVisibleChange: "onVisibleChange",
      visibleChange: "visibleChange",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 9,
    vars: 24,
    consts: [["container", ""], ["list", ""], ["elseBlock", ""], [3, "ngClass", "ngStyle"], ["pRipple", "", "pButton", "", 1, "p-button-icon-only", 3, "click", "keydown", "ngStyle", "icon", "ngClass", "disabled"], [4, "ngIf"], ["role", "menu", 1, "p-speeddial-list", 3, "focus", "focusout", "keydown", "id", "tabindex"], ["class", "p-speeddial-item", "pTooltip", "", "role", "menuitem", 3, "ngStyle", "tooltipOptions", "ngClass", "id", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [4, "ngTemplateOutlet"], ["pTooltip", "", "role", "menuitem", 1, "p-speeddial-item", 3, "ngStyle", "tooltipOptions", "ngClass", "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pRipple", "", "class", "p-speeddial-action", "role", "menuitem", 3, "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown.enter", 4, "ngIf", "ngIfElse"], ["pRipple", "", "role", "menuitem", 1, "p-speeddial-action", 3, "click", "keydown.enter", "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-speeddial-action-icon", 3, "ngClass", 4, "ngIf"], [1, "p-speeddial-action-icon", 3, "ngClass"], ["role", "menuitem", "pRipple", "", 1, "p-speeddial-action", 3, "click", "keydown.enter", "ngClass"]],
    template: function SpeedDial_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 3, 0)(2, "button", 4);
        ɵɵlistener("click", function SpeedDial_Template_button_click_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onButtonClick($event));
        })("keydown", function SpeedDial_Template_button_keydown_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTogglerKeydown($event));
        });
        ɵɵtemplate(3, SpeedDial_PlusIcon_3_Template, 1, 0, "PlusIcon", 5)(4, SpeedDial_ng_container_4_Template, 2, 1, "ng-container", 5);
        ɵɵelementEnd();
        ɵɵelementStart(5, "ul", 6, 1);
        ɵɵlistener("focus", function SpeedDial_Template_ul_focus_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus($event));
        })("focusout", function SpeedDial_Template_ul_focusout_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur($event));
        })("keydown", function SpeedDial_Template_ul_keydown_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        });
        ɵɵtemplate(7, SpeedDial_li_7_Template, 3, 11, "li", 7);
        ɵɵelementEnd()();
        ɵɵtemplate(8, SpeedDial_div_8_Template, 1, 6, "div", 8);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.className);
        ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "speeddial")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵproperty("ngStyle", ctx.buttonStyle)("icon", ctx.buttonIconClass)("ngClass", ctx.buttonClass())("disabled", ctx.disabled);
        ɵɵattribute("aria-expanded", ctx.visible)("aria-haspopup", true)("aria-controls", ctx.id + "_list")("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("data-pc-name", "button");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.showIcon && !ctx.buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("id", ctx.id + "_list")("tabindex", -1);
        ɵɵattribute("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("data-pc-section", "menu");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.model);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.mask && ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Ripple, Tooltip, RouterLink, PlusIcon],
    styles: ["@layer primeng{.p-speeddial{position:absolute;display:flex;z-index:1}.p-speeddial:not(.p-speeddial-opened){pointer-events:none}.p-speeddial:not(.p-speeddial-opened) .p-speeddial-button{pointer-events:auto}.p-speeddial-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center;transition:top 0s linear .2s;pointer-events:none}.p-speeddial-item{transform:scale(0);opacity:0;transition:transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;will-change:transform}.p-speeddial-action{display:flex;align-items:center;justify-content:center;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.p-speeddial-circle .p-speeddial-item,.p-speeddial-semi-circle .p-speeddial-item,.p-speeddial-quarter-circle .p-speeddial-item{position:absolute}.p-speeddial-rotate{transition:transform .25s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform}.p-speeddial-mask{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .25s cubic-bezier(.25,.8,.25,1)}.p-speeddial-mask-visible{pointer-events:none;opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.p-speeddial-opened .p-speeddial-list{pointer-events:auto}.p-speeddial-opened .p-speeddial-item{transform:scale(1);opacity:1}.p-speeddial-opened .p-speeddial-rotate{transform:rotate(45deg)}.p-speeddial-direction-up{align-items:center;flex-direction:column-reverse}.p-speeddial-direction-up .p-speeddial-list{flex-direction:column-reverse}.p-speeddial-direction-down{align-items:center;flex-direction:column}.p-speeddial-direction-down .p-speeddial-list{flex-direction:column}.p-speeddial-direction-left{justify-content:center;flex-direction:row-reverse}.p-speeddial-direction-left .p-speeddial-list{flex-direction:row-reverse}.p-speeddial-direction-right{justify-content:center;flex-direction:row}.p-speeddial-direction-right .p-speeddial-list{flex-direction:row}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeedDial, [{
    type: Component,
    args: [{
      selector: "p-speedDial",
      template: `
        <div #container [ngClass]="containerClass()" [class]="className" [ngStyle]="style" [attr.data-pc-name]="'speeddial'" [attr.data-pc-section]="'root'">
            <button
                pRipple
                pButton
                class="p-button-icon-only"
                [ngStyle]="buttonStyle"
                [icon]="buttonIconClass"
                [ngClass]="buttonClass()"
                [disabled]="disabled"
                [attr.aria-expanded]="visible"
                [attr.aria-haspopup]="true"
                [attr.aria-controls]="id + '_list'"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                (click)="onButtonClick($event)"
                (keydown)="onTogglerKeydown($event)"
                [attr.data-pc-name]="'button'"
            >
                <PlusIcon *ngIf="!showIcon && !buttonTemplate" />
                <ng-container *ngIf="buttonTemplate">
                    <ng-container *ngTemplateOutlet="buttonTemplate"></ng-container>
                </ng-container>
            </button>
            <ul
                #list
                class="p-speeddial-list"
                role="menu"
                [id]="id + '_list'"
                (focus)="onFocus($event)"
                (focusout)="onBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                [tabindex]="-1"
                [attr.data-pc-section]="'menu'"
            >
                <li
                    *ngFor="let item of model; let i = index"
                    [ngStyle]="getItemStyle(i)"
                    class="p-speeddial-item"
                    pTooltip
                    [tooltipOptions]="item.tooltipOptions"
                    [ngClass]="{ 'p-hidden': item.visible === false, 'p-focus': focusedOptionId == id + '_' + i }"
                    [id]="id + '_' + i"
                    [attr.aria-controls]="id + '_item'"
                    role="menuitem"
                    [attr.data-pc-section]="'menuitem'"
                >
                    <ng-container *ngIf="itemTemplate">
                        <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                    </ng-container>
                    <ng-container *ngIf="!itemTemplate">
                        <a
                            *ngIf="isClickableRouterLink(item); else elseBlock"
                            pRipple
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            class="p-speeddial-action"
                            [ngClass]="{ 'p-disabled': item.disabled }"
                            role="menuitem"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            (click)="onItemClick($event, item)"
                            (keydown.enter)="onItemClick($event, item, i)"
                            [attr.target]="item.target"
                            [attr.tabindex]="item.disabled || readonly || !visible ? null : item.tabindex ? item.tabindex : '0'"
                            [fragment]="item.fragment"
                            [queryParamsHandling]="item.queryParamsHandling"
                            [preserveFragment]="item.preserveFragment"
                            [skipLocationChange]="item.skipLocationChange"
                            [replaceUrl]="item.replaceUrl"
                            [state]="item.state"
                            [attr.aria-label]="item.label"
                            [attr.data-pc-section]="'action'"
                        >
                            <span class="p-speeddial-action-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                        </a>
                        <ng-template #elseBlock>
                            <a
                                [attr.href]="item.url || null"
                                class="p-speeddial-action"
                                role="menuitem"
                                pRipple
                                (click)="onItemClick($event, item)"
                                [ngClass]="{ 'p-disabled': item.disabled }"
                                (keydown.enter)="onItemClick($event, item, i)"
                                [attr.target]="item.target"
                                [attr.data-pc-section]="'action'"
                                [attr.aria-label]="item.label"
                                [attr.tabindex]="item.disabled || (i !== activeIndex && readonly) || !visible ? null : item.tabindex ? item.tabindex : '0'"
                            >
                                <span class="p-speeddial-action-icon" *ngIf="item.icon" [ngClass]="item.icon"></span>
                            </a>
                        </ng-template>
                    </ng-container>
                </li>
            </ul>
        </div>
        <div *ngIf="mask && visible" [ngClass]="{ 'p-speeddial-mask': true, 'p-speeddial-mask-visible': visible }" [class]="maskClassName" [ngStyle]="maskStyle"></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-speeddial{position:absolute;display:flex;z-index:1}.p-speeddial:not(.p-speeddial-opened){pointer-events:none}.p-speeddial:not(.p-speeddial-opened) .p-speeddial-button{pointer-events:auto}.p-speeddial-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center;transition:top 0s linear .2s;pointer-events:none}.p-speeddial-item{transform:scale(0);opacity:0;transition:transform .2s cubic-bezier(.4,0,.2,1) 0ms,opacity .8s;will-change:transform}.p-speeddial-action{display:flex;align-items:center;justify-content:center;border-radius:50%;position:relative;overflow:hidden;cursor:pointer}.p-speeddial-circle .p-speeddial-item,.p-speeddial-semi-circle .p-speeddial-item,.p-speeddial-quarter-circle .p-speeddial-item{position:absolute}.p-speeddial-rotate{transition:transform .25s cubic-bezier(.4,0,.2,1) 0ms;will-change:transform}.p-speeddial-mask{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity .25s cubic-bezier(.25,.8,.25,1)}.p-speeddial-mask-visible{pointer-events:none;opacity:1;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.p-speeddial-opened .p-speeddial-list{pointer-events:auto}.p-speeddial-opened .p-speeddial-item{transform:scale(1);opacity:1}.p-speeddial-opened .p-speeddial-rotate{transform:rotate(45deg)}.p-speeddial-direction-up{align-items:center;flex-direction:column-reverse}.p-speeddial-direction-up .p-speeddial-list{flex-direction:column-reverse}.p-speeddial-direction-down{align-items:center;flex-direction:column}.p-speeddial-direction-down .p-speeddial-list{flex-direction:column}.p-speeddial-direction-left{justify-content:center;flex-direction:row-reverse}.p-speeddial-direction-left .p-speeddial-list{flex-direction:row-reverse}.p-speeddial-direction-right{justify-content:center;flex-direction:row}.p-speeddial-direction-right .p-speeddial-list{flex-direction:row}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }], {
    id: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    transitionDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    type: [{
      type: Input
    }],
    radius: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    mask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnClickOutside: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonStyle: [{
      type: Input
    }],
    buttonClassName: [{
      type: Input
    }],
    maskStyle: [{
      type: Input
    }],
    maskClassName: [{
      type: Input
    }],
    showIcon: [{
      type: Input
    }],
    hideIcon: [{
      type: Input
    }],
    rotateAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onVisibleChange: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }],
    list: [{
      type: ViewChild,
      args: ["list"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SpeedDialModule = class _SpeedDialModule {
  static ɵfac = function SpeedDialModule_Factory(ɵt) {
    return new (ɵt || _SpeedDialModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SpeedDialModule,
    declarations: [SpeedDial],
    imports: [CommonModule, ButtonModule, RippleModule, TooltipModule, RouterModule, PlusIcon],
    exports: [SpeedDial, SharedModule, ButtonModule, TooltipModule, RouterModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ButtonModule, RippleModule, TooltipModule, RouterModule, PlusIcon, SharedModule, ButtonModule, TooltipModule, RouterModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpeedDialModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, RippleModule, TooltipModule, RouterModule, PlusIcon],
      exports: [SpeedDial, SharedModule, ButtonModule, TooltipModule, RouterModule],
      declarations: [SpeedDial]
    }]
  }], null, null);
})();
export {
  SpeedDial,
  SpeedDialModule
};
//# sourceMappingURL=primeng_speeddial.js.map
