import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);

        this.loading = true;
        this.users = [];

        this.fields = [
            { title: 'Name', key: 'name' },
            { title: 'Email', key: 'email' },
            { title: 'Phone', key: 'phone' },
            { title: 'Company', key: 'company' }
        ];

        this.links = {
            name: user => ({ route: 'userProfile', query: user.id })
        };
    },

    fetchData(one) {
        return Object.assign({}, one, { company: one.company.name, city: one.address.city });
    },

    didInsertElement() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => data.map(one => this.fetchData(one)))
            .then(data => this.set('users', data))
            .then(data => this.set('loading', false));
    }
});
