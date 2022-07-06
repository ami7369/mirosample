// async function init(){
// const drop = async (e) => {
//   const { x, y, target } = e;

//   if (target instanceof HTMLImageElement) {
//     const image = await miro.board.createImage({ x, y, url: target.src });
//     await miro.board.viewport.zoomTo(image);
//   }
// };

// miro.board.ui.on("drop", drop);
// }
async function init() {
  // Enable the 'drop' event on the app panel. Active on 'miro-draggable' HTML elements
  await miro.board.ui.on('drop', async ({x, y, target}) => {
    // In this example: when the HTML element is dropped on the board, a sticky note is created
    await miro.board.createStickyNote({
      x,
      y,
      content: target.textContent,
    });
  });
}

init();