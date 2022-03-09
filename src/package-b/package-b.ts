import { OptionsForB } from './options-for-b';

export function configurePackageB(options: OptionsForB) {
    if (options.otherMessage) {
        console.log(options.otherMessage);
    }
}
