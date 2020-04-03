import { Component } from '@angular/core';

declare var $: any;
//Metadata
export interface RouteInfo {
    id: string;
    path: string;
    title: string;
    type: string;
    icontype: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

export const ROUTES: RouteInfo[] = [{
    id: 'company_structure',
    path: '/company_structure',
    title: 'Company Structure',
    type: 'sub',
    icontype: 'ti-panel',
    children: [
        { path: 'branch', title: 'Branchs', ab: "Br" },
        { path: 'team', title: 'Teams', ab: "Tm" },
        { path: 'user_role', title: 'User Role', ab: "UR" },
        { path: 'employee', title: 'Employee', ab: "Ep" }
    ]
}, {
    id: 'okr_plan',
    path: '/okr_plan',
    title: 'OKR Plans',
    type: 'sub',
    icontype: 'ti-panel',
    children: [
        { path: 'plan_year', title: 'Plan Of The Year', ab: "PY" },
        { path: 'plan_quarter', title: 'Plan Of The Quarter', ab: "PQ" }
    ]
}, {
    id: 'okr_quarter',
    path: '/okr_quarter',
    title: 'OKR Quarter',
    type: 'sub',
    icontype: 'ti-panel',
    children: [
        { path: 'objective', title: 'Objectives', ab: "OJ" },
        { path: 'kr', title: 'Key & Result', ab: "KR" },
    ]
}, {
    id: 'okr_of_year',
    path: '/okr_of_year',
    title: 'Okr Of The Year',
    type: 'link',
    icontype: 'ti-map'
}, {
    id: 'okr_teaching',
    path: '/okr_teaching',
    title: 'Okr Teaching',
    type: 'link',
    icontype: 'ti-map'
}, {
    id: 'my_okr',
    path: '/my_okr',
    title: 'My Okr',
    type: 'link',
    icontype: 'ti-map'
}, {
    id: 'analysis_statistics',
    path: '/analysis_statistics',
    title: 'Analysis Statistics',
    type: 'link',
    icontype: 'ti-map'
}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    ngOnInit() {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        } else {
            $('html').addClass('perfect-scrollbar-off');
        }
    }
    ngAfterViewInit() {
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

        var collapseId = $sidebarParent.siblings('a').attr("href");

        $(collapseId).collapse("show");
    }
}
