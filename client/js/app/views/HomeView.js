define(['jquery', 'hbs!templates/home', 'backbone', 'marionette'],
    function ($, template, Backbone, Marionette) {
        return Backbone.Marionette.ItemView.extend({
            template: template,
            tagName: "div",

            initialize: function() {
                //_.bindAll(this);
            },
            onRender: function() {
                //this.$el.navbar();
            }
        });
    });