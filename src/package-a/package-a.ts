import { OptionsForA } from './options-for-a';

export function configurePackageA(options: OptionsForA) {
    if (options.message) {
        console.log(options.message);
    }
    console.log('Configure A done');
}
