// import { Component,Attribute, OnInit, OnDestroy, ElementRef, Input, Output, EventEmitter, forwardRef, Renderer2, ChangeDetectionStrategy, OnChanges } from '@angular/core';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { isPlatformBrowser } from '@angular/common';
// import { EditorConfig } from './editor-md.config';
// import * as _ from 'lodash';
// import * as $ from 'jquery';

// import '../../../assets/editor.md/css/editormd.css';
// import * as factory from '../../../assets/editor.md/editormd.amd.js';

// export const EDITOR_VALUE_ACCESSOR: any = {
//     provide: NG_VALUE_ACCESSOR,
//     useExisting: forwardRef(() => EditorMdComponent),
//     multi: true
// };

// @Component({
//     selector: 'editor-md',
//     templateUrl: './editor-md.component.html',
//     styleUrls: ['./editor-md.component.scss'],
//     providers: [EDITOR_VALUE_ACCESSOR],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class EditorMdComponent implements ControlValueAccessor, OnInit, OnDestroy {

//     @Input() option: EditorConfig; // 配置选项
//     @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();
//     editor: any; // editormd编辑器
//     isBowser: boolean;
//     elementRef: ElementRef;
//     text: string;

//     constructor(elementRef: ElementRef, render: Renderer2,@Attribute('id') private id: string) {

//         this.isBowser = isPlatformBrowser ? true : false;

//         if (!this.isBowser)
//             return;

//         window['jQuery'] = $;
//         this.elementRef = elementRef;
//         render.listen(this.elementRef.nativeElement, 'click', () => { }); // 当数据变化时通过调用click事件触发数据检测，保证视图已更新

//         this.id = 'editor-md-' + new Date().getUTCMilliseconds();
//         this.elementRef.nativeElement.id = this.id;
//     }

//     ngOnInit() {

//         if (!this.isBowser)
//             return;


//         console.log(this.elementRef.nativeElement);

//         var editormd = factory();

//         if (!this.option)
//             this.option = new EditorConfig();

//         this.editor = editormd(this.id, this.option); // 创建编辑器
//         console.log(this.editor);

//         const out = this.onEditorChange;
//         const textarea = $('#' + this.id + ' :first'); // 获取textarea元素

//         console.log(textarea.html());
//         // 当编辑器内容改变时，触发textarea的change事件
//         this.editor.on('change', function () {
//             out.emit(textarea.val());
//         });
//     }

//     ngOnDestroy(): void {
//         if (!this.isBowser)
//             return;

//         this.editor = null;
//     }

//     // 以下实现ControlValueAccessor接口的方法
//     writeValue(value: string): void {
//         if (value) {
//             this.text = value;
//         }
//     }

//     registerOnChange(fn: any): void {
//         this.onEditorChange = fn;
//     }

//     registerOnTouched(fn: any): void {
//         this.onEditorChange = fn;
//     }
// }
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { EditorConfig } from './editor-md.config';


@Component({
    selector: 'editor-md',
    templateUrl: './editor-md.component.html',
    styleUrls: ['./editor-md.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class EditorMdComponent {
    title = 'app';

    @Input() option: EditorConfig; // 配置选项
    @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() markdown: string;


    // 同步属性内容
    syncModel(str): void {
        this.markdown = str;
    }
}