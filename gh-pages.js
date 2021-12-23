import { publish } from 'gh-pages';

publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/joaopgrassi/sveltekit-ghpages.git', // Update to point to your repository
        user: {
            name: 'Joao Grassi', // update to use your name
            email: 'joao@joaograssi.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
