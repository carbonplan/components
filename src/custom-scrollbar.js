import React from 'react'

const addCustomScrollbar = `(function() { try {
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  document.body.appendChild(outer);
  outer.style.overflow = 'scroll';
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  setTimeout(function () {
    var delta = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    if (delta > 0) {
      document.body.classList.add('custom-scrollbar');
      document.getElementsByTagName('html')[0].classList.add('custom-scrollbar');
    }
  }, 0);
} catch (e) {} })();`

const CustomScrollbar = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: addCustomScrollbar,
      }}
    />
  )
}

export default CustomScrollbar
