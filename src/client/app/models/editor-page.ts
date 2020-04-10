import { NavPage } from './nav-page';
import { Hyperlink } from './hyperlink';
import { EditorComponent } from './editor-component';
import { EditorFeatures } from './editor-features';

export interface EditorPage extends NavPage {
  components: EditorComponent[];
  links: Hyperlink[];
  features: EditorFeatures;
  comment: string;
}
