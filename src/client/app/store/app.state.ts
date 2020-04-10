import { NavPage } from '../models/nav-page';

export interface IAppState {
  pages: NavPage[];
}

export const APP_INITIAL_STATE: IAppState = {
  pages: [
    { path: '/quill', label: 'Quill', selected: false },
    {
      path: '/summernote',
      label: 'Summernote',
      selected: false,
    },
    { path: '/jodit', label: 'Jodit', selected: false },
    { path: '/ngx-wig', label: 'Ngx-Wig', selected: false },
    { path: '/tinymce', label: 'TinyMCE', selected: false },
    // { path: '/froala', label: 'Froala', free: false, selected: false },
    // { path: '/ckeditor', label: 'CKEditor', free: false, selected: false },
  ],
};
