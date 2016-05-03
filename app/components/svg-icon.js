import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['icon'],
  classNameBindings: ['iconName'],
  willRender() {

    this.set('iconName', 'icon-' + this.get('icon'));

  },
  didRender() {

    var button = document.querySelector('div.' + this.get('iconName')),
      span = button.querySelector('svg');

    this.set('iconAnimation', new Animation({
      animation: this.get('animation'),
      elements: [button, span]
    }));

  },
  click() {

    this.get('iconAnimation').timeline.start();

  }

});
