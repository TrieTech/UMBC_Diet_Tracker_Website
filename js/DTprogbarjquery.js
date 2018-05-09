<script>
        $('#svg1').val('70');
        var val = 90;
        var weekly = val * 5/7;
        var overall = val * 2/3;
        var $circle = $('#svg #bar');
        var $circle1 = $('#svg1 #bar1');
        var $circle2 = $('#svg2 #bar2');

        var radius = $circle.attr('r');
        var radius1 = $circle1.attr('r');
        var radius2 = $circle2.attr('r');
        var circumference = Math.PI*(radius*2);
        var circumference1 = Math.PI*(radius1*2);
        var circumference2 = Math.PI*(radius2*2);

        $circle.css({ strokeDashoffset: circumference});
        $circle1.css({ strokeDashoffset: circumference1});
        $circle2.css({ strokeDashoffset: circumference2});

        var pct = (val/100)*circumference;
        var pct1 = (weekly/100)*circumference1;
        var pct2 = (overall/100)*circumference2;

        var obj = {
            pct: 0
        };

        var obj1 = {
            pct1: 0
        };

        var obj2 = {
            pct2: 0
        };

        TweenLite.to(obj, .7, {
            pct: -pct,
            delay: 1,
            onUpdate: function () {
                $circle.css({ strokeDashoffset: obj.pct-circumference});
            }
        });

        TweenLite.to(obj1, .7, {
            pct1: -pct1,
            delay: 1,
            onUpdate: function () {
                $circle1.css({ strokeDashoffset: obj1.pct1-circumference1});
            }
        });

        TweenLite.to(obj2, .7, {
            pct2: -pct2,
            delay: 1,
            onUpdate: function () {
                $circle2.css({ strokeDashoffset: obj2.pct2-circumference2});
            }
        });