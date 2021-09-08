let permissao; //comum, gerente, diretor
permissao = 'coumum';

switch (permissao) {
    case 'comum' :
        console.log('usuario comum');
    break;

    case 'gerente':
        console.log('usario gerente');
    break;

    case 'diretor':
        console.log('usuario diretor')

    default:
        console.log('usuario nao reconhecido!')
}