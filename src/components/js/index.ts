import { ripple } from './ripple';
import formField from './formField';
import button from './button';
import icons from './icons';
import chips from './chips';

export function startComponents() {
    icons();
    formField();
    button();
    ripple();
    chips();
}
