// COORDCAROUSEL CLASS DEFINITION
// =========================
+function ($) {
    'use strict';

    var CoordCarousel = function (element, options) {
        this.$element = $(element)
        this.$carousels = this.$element.find('.coordcarousel')
        this.options = options
        this.paused = null
        this.sliding = null
        this.interval = null
        this.$active = null
        this.$items = null

        //this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

        //this.options.pause === 'hover' && !('ontouchstart' in document.documentElement) && this.$element
        //    .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
        //    .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
    }

    CoordCarousel.VERSION = '1.0.0'

    CoordCarousel.TRANSITION_DURATION = 600

    CoordCarousel.DEFAULTS = {
        
        behavior: 'album',
                 
        
    }

    //CoordCarousel.prototype.keydown = function (e) {
    //    if (/input|textarea/i.test(e.target.tagName)) return
    //    switch (e.which) {
    //        case 37: this.prev(); break
    //        case 39: this.next(); break
    //        default: return
    //    }

    //    e.preventDefault()
    //}



    CoordCarousel.prototype.album = function (e) {


        var carousels = this.$element.find('.carousel');
        for (var z = 0; z < carousels.length ; z++) {

            var carousel = carousels[z];
            var demora = $(carousel).attr('data-delay');
            if ((demora <= 0) || (demora === undefined) || (demora === null)) {
                $(carousel).carousel({
                    cycle: true, pause: false
                });
            }
            else {
                $(carousel).carousel('pause');
                setTimeout(function (carousel) {
                    $(carousel).carousel({
                        cycle: true, pause: false
                    });
                }, demora, carousel
                );
            }
        }
        return this

    }
    CoordCarousel.prototype.cinema = function (e) {


        var carousels = this.$element.find('.carousel');
        for (var z = 0; z < carousels.length ; z++) {

            var carousel = carousels[z];
            if (z == 0) {
                $(carousel).on('slide.bs.carousel', function (e) {
                    var coordenador = $(this).closest('.coordcarousel');
                    var rcarousels = coordenador.find('.carousel');
                    for (var x = 1; x < rcarousels.length ; x++) {
                        $(rcarousels[x]).hide()
                    }



                });
            }
            else
            {
                $(carousel).on('slide.bs.carousel', function (e) {
                    //var rcarousel = e.relatedTarget;
                    $(this).show();
                });
            }




            var demora = $(carousel).attr('data-delay');
            if ((demora <= 0) || (demora === undefined) || (demora === null)) {
                $(carousel).carousel({
                    cycle: true, pause: false
                });
            }
            else {
                $(carousel).carousel('pause');
                setTimeout(function (carousel) {
                    $(carousel).carousel({
                        cycle: true, pause: false
                    });
                }, demora, carousel
                );
            }
        }
        return this

    }

    CoordCarousel.prototype.cycle = function (e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options.interval
            && !this.paused
            && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

        return this
    }

    CoordCarousel.prototype.getItemIndex = function (item) {
        this.$items = item.parent().children('.item')
        return this.$items.index(item || this.$active)
    }

    CoordCarousel.prototype.getItemForDirection = function (direction, active) {
        var activeIndex = this.getItemIndex(active)
        var willWrap = (direction == 'prev' && activeIndex === 0)
            || (direction == 'next' && activeIndex == (this.$items.length - 1))
        if (willWrap && !this.options.wrap) return active
        var delta = direction == 'prev' ? -1 : 1
        var itemIndex = (activeIndex + delta) % this.$items.length
        return this.$items.eq(itemIndex)
    }

    CoordCarousel.prototype.to = function (pos) {
        var that = this
        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

        if (pos > (this.$items.length - 1) || pos < 0) return

        if (this.sliding) return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
        if (activeIndex === pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
    }

    CoordCarousel.prototype.pause = function (e) {
        e || (this.paused = true)

        if (this.$element.find('.next, .prev').length && $.support.transition) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    CoordCarousel.prototype.next = function () {
        if (this.sliding) return
        return this.slide('next')
    }

    CoordCarousel.prototype.prev = function () {
        if (this.sliding) return
        return this.slide('prev')
    }

    CoordCarousel.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active')
        var $next = next || this.getItemForDirection(type, $active)
        var isCycling = this.interval
        var direction = type === 'next' ? 'left' : 'right'
        var that = this

        if ($next.hasClass('active')) return (this.sliding = false)

        var relatedTarget = $next[0]
        var slideEvent = $.Event('slide.bs.carousel', {
            relatedTarget: relatedTarget,
            direction: direction
        })
        this.$element.trigger(slideEvent)
        if (slideEvent.isDefaultPrevented()) return

        this.sliding = true

        isCycling && this.pause()

        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active')
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
            $nextIndicator && $nextIndicator.addClass('active')
        }

        var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
        if ($.support.transition && this.$element.hasClass('slide')) {
            $next.addClass(type)
            $next[0].offsetWidth // force reflow
            $active.addClass(direction)
            $next.addClass(direction)
            $active
                .one('bsTransitionEnd', function () {
                    $next.removeClass([type, direction].join(' ')).addClass('active')
                    $active.removeClass(['active', direction].join(' '))
                    that.sliding = false
                    setTimeout(function () {
                        that.$element.trigger(slidEvent)
                    }, 0)
                })
                .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
        } else {
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding = false
            this.$element.trigger(slidEvent)
        }

        isCycling && this.cycle()

        return this
    }


    // COORDCAROUSEL PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('ml.coordcarousel')
            var options = $.extend({}, CoordCarousel.DEFAULTS, $this.data(), typeof option === 'object' && option)
            var action = typeof option === 'string' ? option : options.behavior

            if (!data) $this.data('ml.coordcarousel', (data = new CoordCarousel(this, options)))
            if (typeof option === 'number') data.to(option)
            else if (action) data[action]()
            else if (options.interval) data.pause().cycle()
        })
    }

    var old = $.fn.coordcarousel

    $.fn.coordcarousel = Plugin
    $.fn.coordcarousel.Constructor = CoordCarousel


    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.coordcarousel.noConflict = function () {
        $.fn.coordcarousel = old
        return this
    }


    // CAROUSEL DATA-API
    // =================

    var clickHandler = function (e) {
        var href
        var $this = $(this)
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
        if (!$target.hasClass('coordcarousel')) return
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex) options.interval = false

        Plugin.call($target, options)

        if (slideIndex) {
            $target.data('bs.carousel').to(slideIndex)
        }

        e.preventDefault()
    }

    $(document)
        .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
        .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)
    //$(window).on('load', function () {
    //    $('[data-ride="carousel"]').each(function () {
    //        var $carousel = $(this)
    //        Plugin.call($carousel, $carousel.data())
    //    })
    //})
   
}(jQuery);
