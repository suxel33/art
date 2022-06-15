<<<<<<< HEAD:src/components/index.js
import { Feature } from './Feature';
import { Loading} from './Loading';
import { Preview } from './Preview';
import { Search } from './Search';
import { Title } from './Title';

export { default as Feature } from './Feature';
export { default as Loading } from './Loading';
export { default as Preview } from './Preview';
export { default as Search } from './Search';
export { default as Title } from './Title';

=======
/**
 * The index.js file is used to re-export from our separate files, that way rather than write:
 *
 * import Feature from './components/Feature';
 *
 * we can write:
 *
 * import { Feature } from './components';
 *
 * since index.js is assumed as part of the import when you specify a folder
 *
 * Re-export Feature, Loading, Preview, Search, and Title from their respective files
 */
>>>>>>> 0e9af34406b265eee83b23b02b52830fb5aeb455:src/components/index.jsx
