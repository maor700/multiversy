/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@multiversy/ui';




export declare interface MtvCrossIframe extends Components.MtvCrossIframe {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appRoute', 'disableLoader', 'fitToContent', 'headCode', 'name', 'route', 'src']
})
@Component({
  selector: 'mtv-cross-iframe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appRoute', 'disableLoader', 'fitToContent', 'headCode', 'name', 'route', 'src']
})
export class MtvCrossIframe {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MtvMain extends Components.MtvMain {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'mtv-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class MtvMain {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MtvModalPortal extends Components.MtvModalPortal {
  /**
   * elementLandedInTarget event fired when the element complete to land on targetContainer. 
   */
  elementLandedInTarget: EventEmitter<CustomEvent<{ portalElm: HTMLElement; portalContentElm: HTMLElement; target: HTMLElement; modalContentElm: HTMLDivElement; }>>;
  /**
   *  
   */
  portalLoaded: EventEmitter<CustomEvent<HTMLElement>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hideOverlay', 'nameId', 'overlayColor', 'targetContainer']
})
@Component({
  selector: 'mtv-modal-portal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hideOverlay', 'nameId', 'overlayColor', 'targetContainer']
})
export class MtvModalPortal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['elementLandedInTarget', 'portalLoaded']);
  }
}


export declare interface MtvPortal extends Components.MtvPortal {
  /**
   * portalLoaded event fired when the portal element complete to load. 
   */
  portalLoaded: EventEmitter<CustomEvent<HTMLElement>>;
  /**
   * elementLandedInTarget event fired when the element complete to land on targetContainer. 
   */
  elementLandedInTarget: EventEmitter<CustomEvent<{ portalElm: HTMLElement; portalContentElm: HTMLElement; target: HTMLElement; }>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['headInlineHtml', 'nameId', 'targetContainer']
})
@Component({
  selector: 'mtv-portal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['headInlineHtml', 'nameId', 'targetContainer']
})
export class MtvPortal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['portalLoaded', 'elementLandedInTarget']);
  }
}


export declare interface MtvTooltipPortal extends Components.MtvTooltipPortal {
  /**
   * tooltipBlur event fired when tooltip element out of focus, or in shortly - blurred; 
   */
  tooltipBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['background', 'nameId', 'position', 'targetContainer']
})
@Component({
  selector: 'mtv-tooltip-portal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['background', 'nameId', 'position', 'targetContainer']
})
export class MtvTooltipPortal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tooltipBlur']);
  }
}


export declare interface MtvWindow extends Components.MtvWindow {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['name']
})
@Component({
  selector: 'mtv-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['name']
})
export class MtvWindow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface MtvWindowHeader extends Components.MtvWindowHeader {
  /**
   * Emit event to change window display mode 
   */
  changeDisplayMode: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['windowName']
})
@Component({
  selector: 'mtv-window-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['windowName']
})
export class MtvWindowHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeDisplayMode']);
  }
}
