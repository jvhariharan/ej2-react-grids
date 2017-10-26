var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
var AggregateColumnDirective = (function (_super) {
    __extends(AggregateColumnDirective, _super);
    function AggregateColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AggregateColumnDirective;
}(ComplexBase));
export { AggregateColumnDirective };
AggregateColumnDirective.moduleName = 'aggregateColumn';
var AggregateColumnsDirective = (function (_super) {
    __extends(AggregateColumnsDirective, _super);
    function AggregateColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AggregateColumnsDirective;
}(ComplexBase));
export { AggregateColumnsDirective };
AggregateColumnsDirective.propertyName = 'columns';
AggregateColumnsDirective.moduleName = 'aggregateColumns';
