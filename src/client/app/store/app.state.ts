import { Editor } from '../models/editor';

export interface IAppState {
  editors: Editor[];
}

export const APP_INITIAL_STATE: IAppState = {
  editors: [
    { path: '/quill', label: 'Quill', free: true, selected: false },
    {
      path: '/summernote',
      label: 'Summernote',
      free: true,
      selected: false,
    },
    { path: '/jodit', label: 'Jodit', free: true, selected: false },
    { path: '/ngx-wig', label: 'Ngx-Wig', free: true, selected: false },
    { path: '/tinymce', label: 'TinyMCE', free: true, selected: false },
    // { path: '/froala', label: 'Froala', free: false, selected: false },
    // { path: '/ckeditor', label: 'CKEditor', free: false, selected: false },
  ],
};
