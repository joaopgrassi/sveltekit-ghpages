import { publish } from 'gh-pages';

publish(
    'public',
    {
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);