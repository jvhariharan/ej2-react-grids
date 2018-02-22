import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ColumnModel } from '@syncfusion/ej2-grids';
/**
 * `ColumnDirective` represent a column of the react Grid.
 * It must be contained in a Grid component(`GridComponent`).
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='100'></ColumnDirective>
 * <ColumnDirective field='name' headerText='Name' width='100'></ColumnDirective>
 * <ColumnsDirective>
 * </GridComponent>
 * ```
 */
export declare class ColumnDirective extends ComplexBase<ColumnModel, ColumnModel> {
    static moduleName: string;
}
export declare class ColumnsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
