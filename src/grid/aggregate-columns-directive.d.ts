import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AggregateColumnModel } from '@syncfusion/ej2-grids';
/**
 * `AggregateColumnDirective represent a aggregate column of the react Grid.
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='100'></ColumnDirective>
 * <ColumnDirective field='name' headerText='Name' width='100'></ColumnDirective>
 * </ColumnsDirective>
 * <AggregatesDirective>
 * <AggregateDirective>
 * <AggregateColumnsDirective>
 * <AggregateColumnDirective field='ID' type='Min'></AggregateColumnsDirective>
 * </AggregateColumnsDirective>
 * </AggregateDirective>
 * </AggregatesDirective>
 * </GridComponent>
 * ```
 */
export declare class AggregateColumnDirective extends ComplexBase<AggregateColumnModel, AggregateColumnModel> {
    static moduleName: string;
}
export declare class AggregateColumnsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
