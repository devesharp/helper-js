export declare function add(obj: Record<string, any>, key: string, value: any): Record<string, any>;
export declare function except(obj: Record<string, any>, originalKeys: string | string[]): Record<string, any>;
export declare function pluck(array: Record<string, any>[], key: string): any[];
export declare function divide(obj: Record<string, any>): any[][];
export declare function get(obj: Record<string, any>, key: string, defaultValue?: any): any;
export declare function has(obj: Record<string, any>, key: string): boolean;
export declare function only(obj: Record<string, any>, keys: string | string[]): any;
export declare function set(obj: Record<string, any>, key: string, value: any): Record<string, any>;
export declare function dot(obj: any): {};
