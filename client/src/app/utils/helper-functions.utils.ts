
  let trackItem = ( item: any) => item.id;

  let   prepareListState = (arr: any[]) => arr ? arr.length : false;

  export {
    trackItem,
    prepareListState
  }
