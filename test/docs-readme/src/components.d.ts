/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StyleurlsComponent {
    }
}
declare global {
    interface HTMLStyleurlsComponentElement extends Components.StyleurlsComponent, HTMLStencilElement {
    }
    var HTMLStyleurlsComponentElement: {
        prototype: HTMLStyleurlsComponentElement;
        new (): HTMLStyleurlsComponentElement;
    };
    interface HTMLElementTagNameMap {
        "styleurls-component": HTMLStyleurlsComponentElement;
    }
}
declare namespace LocalJSX {
    interface StyleurlsComponent {
    }
    interface IntrinsicElements {
        "styleurls-component": StyleurlsComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "styleurls-component": LocalJSX.StyleurlsComponent & JSXBase.HTMLAttributes<HTMLStyleurlsComponentElement>;
        }
    }
}