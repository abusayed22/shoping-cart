
export interface Iactions {
    type: Action.type
}

const initState: ICatalog = {
    isLoading: false,
    isLoaded: false,
    items: [],
    error: null
  };