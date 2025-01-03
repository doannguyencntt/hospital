
// tslint:disable:max-line-length
/*
Load-on-demand directive code and comments courtesy of our esteemed customer Balazs Hideghety.
*/

import { AfterViewInit, Directive, OnDestroy, OnInit, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { TabStripComponent, TabStripTabComponent } from '@progress/kendo-angular-layout';

/*
USAGE:      Import the module/directive and add *loadOnDemand structural directive to the Kendo Tab content <ng-template>.

IMPORTANT:  Set [keepTabContent]="true", otherwise the selected tab will be destroyed when a new selection is made.
            Currently this directive implementation sets this value for us.

HTML sample:
<kendo-tabstrip [keepTabContent]="true">
    <kendo-tabstrip-tab [title]="'Paris'" [selected]="true">
        <ng-template kendoTabContent *loadOnDemand>
            ...
        </ng-template>
    </kendo-tabstrip-tab>
    <kendo-tabstrip-tab [title]="'New York City'">
        <ng-template kendoTabContent *loadOnDemand>
            ...
        </ng-template>
    </kendo-tabstrip-tab>

    ...
*/
@Directive({
    selector: '[loadOnDemand]'
})
export class TabContentLoadOnDemandDirective implements OnInit, AfterViewInit, OnDestroy {
    protected s: Subscription;
    protected wasLoaded: boolean;

    constructor(@Optional() private tabStripComponent: TabStripComponent,
                @Optional() private tabStripTabComponent: TabStripTabComponent,
                private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {

        // #1 Initialize only if it is inside of a kendo TabStrip component
        if (!this.tabStripComponent || !tabStripTabComponent) {
            return;
        }

        // #2 Unload - is not necessary as a structural directive is responsible for creating and destroying content (so no "auto" create will occur)

        // #3
        // We need to keep tab content (once loaded) to have benefits of using load-on-demand, so I do set it here.
        // Also setting this inside CTOR has the benefits of user to be able to change value via binding... even if it leads to weird effects (load on demand not working as expected).
        this.tabStripComponent.keepTabContent = true;
    }

    public ngOnInit(): void {

        // NOTE: we could do a check if this.tabStripComponent.keepTabContent is truthy, if not, we'd raise an error... or log a warning.
        /*
        if (!this.tabStripComponent.keepTabContent)
            console.warn(`The *loadOnDemand directive on tab panel: '${this.tabStripTabComponent.title}' is ineffective, cause the tab component uses {keepTabContent]="false" which destroys components!`)
        */

        this.s = new Subscription()
            .add(this.tabStripComponent.tabSelect.subscribe(this.tabSelectEx.bind(this)));
    }

    public ngAfterViewInit(): void {
        if (this.tabStripTabComponent.active) {
            this.loadMe();
        }
    }

    public ngOnDestroy(): void {
        this.s.unsubscribe();
    }

    protected loadMe(): void {
        if (!this.wasLoaded) {
            this.wasLoaded = true;
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }

    protected unloadMe(): void {
        if (this.wasLoaded) {
            this.wasLoaded = false;
            this.viewContainer.clear();
        }
    }

    protected tabSelectEx(e: any): void {
        if (e.title === this.tabStripTabComponent.title) {
            this.loadMe();
        }
    }
}
