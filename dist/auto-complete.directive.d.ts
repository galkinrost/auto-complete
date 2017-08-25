/// <reference types="core-js" />
import { ComponentRef, ViewContainerRef, EventEmitter, OnInit, ComponentFactoryResolver, Renderer, SimpleChanges, OnChanges } from "@angular/core";
import { NguiAutoCompleteComponent } from "./auto-complete.component";
import { ControlContainer, AbstractControl, FormControl } from "@angular/forms";
/**
 * display auto-complete section with input and dropdown list when it is clicked
 */
export declare class NguiAutoCompleteDirective implements OnInit, OnChanges {
    private resolver;
    private renderer;
    viewContainerRef: ViewContainerRef;
    private parentForm;
    autoCompletePlaceholder: string;
    source: any;
    pathToData: string;
    minChars: number;
    displayPropertyName: string;
    acceptUserInput: boolean;
    maxNumList: string;
    selectValueOf: string;
    displayLoading: boolean;
    loadingTemplate: any;
    listFormatter: any;
    loadingText: string;
    blankOptionText: string;
    noMatchFoundText: string;
    valueFormatter: any;
    tabToSelect: boolean;
    selectOnBlur: boolean;
    matchFormatted: boolean;
    autoSelectFirstItem: boolean;
    delayMs: number;
    ngModel: String;
    formControlName: string;
    extFormControl: FormControl;
    zIndex: string;
    ngModelChange: EventEmitter<{}>;
    valueChanged: EventEmitter<{}>;
    customSelected: EventEmitter<{}>;
    componentRef: ComponentRef<NguiAutoCompleteComponent>;
    wrapperEl: HTMLElement;
    el: HTMLElement;
    acDropdownEl: HTMLElement;
    inputEl: HTMLInputElement;
    formControl: AbstractControl;
    revertValue: any;
    private scheduledBlurHandler;
    private documentClickListener;
    constructor(resolver: ComponentFactoryResolver, renderer: Renderer, viewContainerRef: ViewContainerRef, parentForm: ControlContainer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    showAutoCompleteDropdown: (event?: any) => void;
    blurHandler(evt: any): void;
    hideAutoCompleteDropdown: (event?: any) => void;
    styleAutoCompleteDropdown: () => void;
    setToStringFunction(item: any): any;
    selectNewValue: (item: any) => void;
    selectCustomValue: (text: string) => void;
    private keydownEventHandler;
    private inputEventHandler;
    private renderValue(item);
}
