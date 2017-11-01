import * as Rx from 'rxjs';

export default (function(){
    return {
        get(
            url: string, 
            options?: object
        ): Rx.Observable<Rx.AjaxResponse> {
            return Rx.Observable.ajax.get(url, options);
        },
        post(
            url: string, 
            body?: object | null | string, 
            headers?: object 
        ): Rx.Observable<Rx.AjaxResponse> {
            return Rx.Observable.ajax.post(url, body, headers);
        },
        put(
            url: string, 
            body?: object | null, 
            headers?: object 
        ): Rx.Observable<Rx.AjaxResponse> {
            return Rx.Observable.ajax.put(url, body, headers);
        },
        delete(
            url: string,
            headers?: object
        ): Rx.Observable<Rx.AjaxResponse> {
            return Rx.Observable.ajax.delete(url, headers);
        }
    };
})();