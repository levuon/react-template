function isWithinBreakpoint ( breakpoint ) {
  var screenWidth = getWindowInnerWidth(),
   breakpoints = {
     '<480px': () => (screenWidth <= 480),
     '<660px': () => (screenWidth <= 660),
     '<960px': () => (screenWidth <= 960),
     '>480px': () => (screenWidth > 480),
     '>660px': () => (screenWidth > 660),
     '>960px': () => (screenWidth > 960),
     '480px-660px': () => (screenWidth > 480 && screenWidth <= 660),
     '660px-960px': () => (screenWidth > 660 && screenWidth <= 960),
     '480px-960px': () => (screenWidth > 480 && screenWidth <= 960)
   };

  if ( !breakpoints.hasOwnProperty( breakpoint ) ) {
    try {
      global.window.console.warn( 'Undefined breakpoint used in `mobile-first-breakpoint`', breakpoint );
    } catch ( e ) {
    }
    return undefined;
  }
  return breakpoints[ breakpoint ]();
}

function isMobile () {
  return isWithinBreakpoint( '<480px' );
}

function isDesktop () {
  return isWithinBreakpoint( '>960px' );
}

function getWindowInnerWidth () {
  return global.window
   ? global.window.innerWidth
   : 769;
}


module.exports = {
  isMobile: isMobile,
  isDesktop: isDesktop,
  isWithinBreakpoint: isWithinBreakpoint,
  getWindowInnerWidth: getWindowInnerWidth,
};
