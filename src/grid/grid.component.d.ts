/// <reference types="react" />
import * as React from 'react';
import { Grid, GridModel } from '@syncfusion/ej2-grids';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * `GridComponent` represents the react Grid.
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}/>
 * ```
 */
export declare class GridComponent extends Grid {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<GridModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    directivekeys: {
        [key: string]: Object;
    };
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<GridModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
