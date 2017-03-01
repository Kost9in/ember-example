import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);

        this.nav = [
            {
                title: 'Users',
                link: 'users'
            },
            {
                title: 'Todos',
                link: 'todos'
            },
            {
                title: 'Posts',
                link: 'posts'
            },
            {
                title: 'Photos',
                link: 'photos'
            }
        ];
    },

    willRender() {
        const url = window ? window.location.href.split('/') : [];
        const module = (url.length > 3) ? url[3] : '';
        const nav = this.nav.map(one => one.link === module ? Object.assign({}, one, { active: true }) : one);
        this.set('activeNav', nav);
    }
});
