// Display painting info in the DOM
export const displayPaintingInfo = (info) => {
  const infoElement = document.getElementById('painting-info'); // Get the reference

  // Set the html content inside info element

};

// Hide painting info in the DOM
export const hidePaintingInfo = () => {
  const infoElement = document.getElementById('painting-info'); // Get the reference
  infoElement.classList.remove('show'); // Remove the 'show' class
};

