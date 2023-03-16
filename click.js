      document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.keyCode == 85) {
          e.preventDefault();
        }
      });

      window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showMenu(e.clientX, e.clientY, e.button);
      });

      function showMenu(x, y, button) {
        var menu = document.getElementById('menu');
        var menuWidth = menu.offsetWidth;
        var menuHeight = menu.offsetHeight;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        var left, top;
        if (button === 1) {
          // right mouse button clicked
          left = x - menuWidth;
        } else {
          left = x;
        }
        top = y;

        if (left + menuWidth > windowWidth) {
          left = windowWidth - menuWidth;
        }
        if (top + menuHeight > windowHeight) {
          top = windowHeight - menuHeight;
        }

        // check if page is scrolled down
        var scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
          top += scrollTop;
        }

        menu.style.left = left + 'px';
        menu.style.top = top + 'px';
        menu.style.position = 'absolute';

        menu.style.display = 'block';

        window.addEventListener('scroll', function () {
          menu.style.display = 'none';
        });

        document.addEventListener('click', function (e) {
          if (!menu.contains(e.target)) {
            menu.style.display = 'none';
          }
        });
      }
	  
	  