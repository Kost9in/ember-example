import Ember from 'ember';

export default Ember.Component.extend({
    willRender() {
        const { data, fields, links } = this;
        const rows = data.map(one => fields.map(field => {
            const row = { link: false, route: '', query: '', text: one[field.key] };
            if (links[field.key]) {
                Object.assign(row, { link: true }, links[field.key](one));
            }
            return row;
        }));
        this.set('rows', rows);
    }
});