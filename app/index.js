import 'react';
import 'purecss';

//import './styles/main.scss';
import component from './component';
import { bake } from './shake';

bake();

document.body.appendChild(component());
