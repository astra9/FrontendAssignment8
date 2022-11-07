import { Directive, ViewContainerRef, TemplateRef, Input, 
    IterableDiffer, IterableDiffers, ChangeDetectorRef, IterableChangeRecord,
    ViewRef } from "@angular/core";


@Directive({
    selector:"[siFoundOf]"
})
export class SiIterativeDirective{
    private difference: IterableDiffer<any> | undefined;
    private directiveViews: Map<any, SiIterationContext> = new Map<any, SiIterationContext>();

    constructor(private container: ViewContainerRef,
        private temp: TemplateRef<Object>, 
        private diff: IterableDiffers) { }

    @Input("siFoundOf")
    source: any;

    ngOnInit() {
        this.difference = 
            <IterableDiffer<any>> this.diff.find(this.source).create();
    }

    ngDoCheck() {
        let updates = this.difference?.diff(this.source);
        if (updates != null) {
            let arrOfChanges: IterableChangeRecord<any>[] = [];
            updates.forEachAddedItem(item => arrOfChanges.push(item));
            arrOfChanges.forEach(item => {
                if (item.currentIndex != null) {
                    let context = new SiIterationContext(item.item);
                    context.view = this.container.createEmbeddedView(this.temp,
                        context);
                    this.directiveViews.set(item.trackById, context);
                }
            });
            let areRemovals = false;
            updates.forEachRemovedItem(removal => {
                areRemovals = true;
                let context = this.directiveViews.get(removal.trackById);
                if (context != null && context.view != null) {
                    this.container.remove(this.container.indexOf(context.view));
                    this.directiveViews.delete(removal.trackById);
                }
            });
        }        
    }

}

class SiIterationContext{
    view: ViewRef | undefined;  

    constructor(public $implicit: any) {
    }
}