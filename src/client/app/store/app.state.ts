import { Editor } from '../models/editor';

export interface IAppState {
  editors: Editor[];
}

export const APP_INITIAL_STATE: IAppState = {
  editors: [
    { path: '/summernote', label: 'Summernote', free: true, selected: false },
    { path: '/joddit', label: 'Joddit', free: true, selected: false },
    { path: '/quill', label: 'Quill', free: true, selected: false },
    { path: '/ngx-wig', label: 'Ngx-Wig', free: true, selected: false },
    { path: '/froala', label: 'Froala', free: false, selected: false },
    { path: '/ckeditor', label: 'CKEditor', free: false, selected: false },
  ],
};
