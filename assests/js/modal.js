const Boostrap5Modal = {
    bootstrap: undefined,
    jquery: undefined,
    show: function() { 
        this.bootstrap.show();
        this.bootstrap = undefined; 
    },
    init: function(elementId = 'boostrapModal') {
        // this.bootstrap = new bootstrap.Modal(document.getElementById(elementId));
        this.bootstrap = new bootstrap.Modal(document.getElementById(elementId));
        return this;
    },
    jquery_$: function(callback) {
        if (this.jquery === undefined) {
            this.jquery = jQuery(this.bootstrap['_element'])
        }
        if (callback !== undefined) {
            callback(this.jquery);
        }
        return this.jquery;
    },
    size: function( size ) {
        let $dialog =  this.jquery_$().find('.modal-dialog');
        switch (size)  
        {
            case 'lg':
                $dialog.addClass('modal-lg');
                break;
            case 'xl':
                $dialog.addClass('modal-xl');
                break;
            default:
                // code block
        }
        return this;
    },
    title: function(message, bootstrapTextColor = 'primary', callback) {
        let title = this.jquery_$().find('.modal-title')
        title.addClass('text-' + bootstrapTextColor).html(message);
        if (callback !== undefined) {
            callback(title);
        }
        return this;
    },
    body: function(message, callback) {
        let body = this.jquery_$().find('.modal-body')
        body.html(message);
        if (callback !== undefined) {
            callback(body);
        }
        return this;
    },
    footer: function(callback) {
        let footer = this.jquery_$().find('.modal-footer');
        callback(footer);
    },
};