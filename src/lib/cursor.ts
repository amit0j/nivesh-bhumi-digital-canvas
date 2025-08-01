export const initCustomCursor = () => {
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let cursorDotX = 0;
  let cursorDotY = 0;

  const updateCursor = () => {
    // Smooth following for outer cursor
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    // Faster following for inner dot
    cursorDotX += (mouseX - cursorDotX) * 0.3;
    cursorDotY += (mouseY - cursorDotY) * 0.3;

    // Update cursor positions
    const outerCursor = document.querySelector('body::before') as HTMLElement;
    const innerCursor = document.querySelector('body::after') as HTMLElement;
    
    if (outerCursor) {
      document.documentElement.style.setProperty('--cursor-x', `${cursorX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${cursorY}px`);
    }
    
    if (innerCursor) {
      document.documentElement.style.setProperty('--cursor-dot-x', `${cursorDotX}px`);
      document.documentElement.style.setProperty('--cursor-dot-y', `${cursorDotY}px`);
    }

    requestAnimationFrame(updateCursor);
  };

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  document.addEventListener('mousemove', handleMouseMove);
  updateCursor();
};