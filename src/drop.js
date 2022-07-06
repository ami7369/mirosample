const drop = async (e) => {
  const { x, y, target } = e;

  if (target instanceof HTMLImageElement) {
    const image = await miro.board.createImage({ x, y, url: target.src });
    await miro.board.viewport.zoomTo(image);
  }
};

miro.board.ui.on("drop", drop);