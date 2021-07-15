
  let trackItem = ( item: any) => item.id;

  let   prepareListState = (arr: any[]) => arr ? arr.length : 'pending';

  export {
    trackItem,
    prepareListState
  }
