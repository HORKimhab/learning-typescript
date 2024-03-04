// Without decorator
// class User {
//     constructor(private name: string, private age: number) {}
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//     greet() {
//       console.log('start: greet')
//       console.log(`Hello, my name is ${this.name}.`);
//       console.log('end: greet')
//     }
//     printAge() {
//       console.log('start: printAge')
//       console.log(`I am ${this.age} years old`);
//       console.log('end: printAge')
//     }
//   }
// const user = new User("Ron", 25);
// user.greet();
// user.printAge();
// Function to be decorator 
function logger(originalMethod, _context) {
    function replacementMethod() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("start:", originalMethod.name);
        console.log({ originalMethod: originalMethod });
        var result = originalMethod.call.apply(originalMethod, __spreadArray([this], args, false));
        console.log("end:", originalMethod.name);
        return result;
    }
    return replacementMethod;
}
// With decorator
var UserWithDecorator = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _greet_decorators;
    var _printAge_decorators;
    return _a = /** @class */ (function () {
            function UserWithDecorator(name, age) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
                this.age = age;
            }
            UserWithDecorator.prototype.greet = function () {
                console.log("Hello, my name is ".concat(this.name, "."));
            };
            UserWithDecorator.prototype.printAge = function () {
                console.log("I am ".concat(this.age, " years old"));
            };
            return UserWithDecorator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [logger];
            _printAge_decorators = [logger];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _printAge_decorators, { kind: "method", name: "printAge", static: false, private: false, access: { has: function (obj) { return "printAge" in obj; }, get: function (obj) { return obj.printAge; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var user2 = new UserWithDecorator("Ron", 25);
user2.greet();
user2.printAge();
// Ref: https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f
