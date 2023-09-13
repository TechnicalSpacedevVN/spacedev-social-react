export async function parseClipboardData() {
  const items = await navigator.clipboard.read().catch((err) => {
    console.error(err);
  });
  if (items) {
    for (let item of items) {
      for (let type of item.types) {
        console.log(type, item);
        // if (type.startsWith("image/")) {
        //   let blobData = await item.getType(type);
        //   return true;
        // }
        // let blobData = await item.getType(type);
        // return blobData.;
      }
    }
  }
}
