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
var AggregateDirective = (function (_super) {
    __extends(AggregateDirective, _super);
    function AggregateDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AggregateDirective;
}(ComplexBase));
export { AggregateDirective };
AggregateDirective.moduleName = 'aggregate';
var AggregatesDirective = (function (_super) {
    __extends(AggregatesDirective, _super);
    function AggregatesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AggregatesDirective;
}(ComplexBase));
export { AggregatesDirective };
AggregatesDirective.propertyName = 'aggregates';
AggregatesDirective.moduleName = 'aggregates';
