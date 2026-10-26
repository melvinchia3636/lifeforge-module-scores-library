export type EndpointEntriesRemove_OutputNO_CONTENT = void;
export type EndpointEntriesUpload_OutputOK = string;
export type EndpointGuitarWorldDownload_OutputOK = string;
export type EndpointTypesList_OutputOK = {
  id: string;
  name: string;
  icon: string;
  amount: number;
}[];
export type EndpointTypesRemove_OutputNO_CONTENT = void;
export type EndpointCollectionsList_OutputOK = {
  id: string;
  name: string;
  amount: number;
}[];
export type EndpointCollectionsRemove_OutputNO_CONTENT = void;

export interface Contract {
  entries: {
    cleanup: EndpointEntriesCleanup;
    list: EndpointEntriesList;
    random: EndpointEntriesRandom;
    remove: EndpointEntriesRemove;
    sidebarData: EndpointEntriesSidebarData;
    toggleFavourite: EndpointEntriesToggleFavourite;
    update: EndpointEntriesUpdate;
    upload: EndpointEntriesUpload;
  };
  guitarWorld: {
    download: EndpointGuitarWorldDownload;
    list: EndpointGuitarWorldList;
  };
  types: {
    create: EndpointTypesCreate;
    list: EndpointTypesList;
    remove: EndpointTypesRemove;
    update: EndpointTypesUpdate;
  };
  collections: {
    create: EndpointCollectionsCreate;
    list: EndpointCollectionsList;
    remove: EndpointCollectionsRemove;
    update: EndpointCollectionsUpdate;
  };
}
export interface EndpointEntriesCleanup {
  method: "post";
  input: {
    body?: EndpointEntriesCleanup_InputBody;
  };
  output: {
    OK: EndpointEntriesCleanup_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesCleanup_InputBody {
  rawName: string;
}
export interface EndpointEntriesCleanup_OutputOK {
  name: string;
  author: string;
}
export interface EndpointEntriesList {
  method: "get";
  input: {
    query?: EndpointEntriesList_InputQuery;
  };
  output: {
    OK: EndpointEntriesList_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesList_InputQuery {
  page: string;
  query?: string;
  category?: string;
  author?: string;
  collection?: string;
  starred?: string;
  sort: "name" | "author" | "newest" | "oldest";
}
export interface EndpointEntriesList_OutputOK {
  items: {
    id: string;
    name: string;
    type: string | null;
    page_count: string;
    thumbnail: string;
    author: string;
    pdf: string;
    audio: string;
    musescore: string;
    is_favourite: boolean;
    collection: string | null;
    guitar_world_id: number | null;
    created: string;
    updated: string;
  }[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}
export interface EndpointEntriesRandom {
  method: "get";
  input: {};
  output: {
    OK: EndpointEntriesRandom_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesRandom_OutputOK {
  id: string;
  name: string;
  type: string | null;
  page_count: string;
  thumbnail: string;
  author: string;
  pdf: string;
  audio: string;
  musescore: string;
  is_favourite: boolean;
  collection: string | null;
  guitar_world_id: number | null;
  created: string;
  updated: string;
}
export interface EndpointEntriesRemove {
  method: "post";
  input: {
    query?: EndpointEntriesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointEntriesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointEntriesRemove_InputQuery {
  id: string;
}
export interface EndpointEntriesSidebarData {
  method: "get";
  input: {};
  output: {
    OK: EndpointEntriesSidebarData_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesSidebarData_OutputOK {
  total: number;
  favourites: number;
  types: {
    id: string;
    name: string;
    icon: string;
    amount: number;
  }[];
  authors: {
    [k: string]: number;
  };
}
export interface EndpointEntriesToggleFavourite {
  method: "post";
  input: {
    query?: EndpointEntriesToggleFavourite_InputQuery;
  };
  output: {
    OK: EndpointEntriesToggleFavourite_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesToggleFavourite_InputQuery {
  id: string;
}
export interface EndpointEntriesToggleFavourite_OutputOK {
  id: string;
  name: string;
  type: string | null;
  page_count: string;
  thumbnail: string;
  author: string;
  pdf: string;
  audio: string;
  musescore: string;
  is_favourite: boolean;
  collection: string | null;
  guitar_world_id: number | null;
  created: string;
  updated: string;
}
export interface EndpointEntriesUpdate {
  method: "post";
  input: {
    query?: EndpointEntriesUpdate_InputQuery;
    body?: EndpointEntriesUpdate_InputBody;
  };
  output: {
    OK: EndpointEntriesUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointEntriesUpdate_InputQuery {
  id: string;
}
export interface EndpointEntriesUpdate_InputBody {
  name: string;
  author: string;
  type?: string;
  collection?: string;
}
export interface EndpointEntriesUpdate_OutputOK {
  id: string;
  name: string;
  type: string | null;
  page_count: string;
  thumbnail: string;
  author: string;
  pdf: string;
  audio: string;
  musescore: string;
  is_favourite: boolean;
  collection: string | null;
  guitar_world_id: number | null;
  created: string;
  updated: string;
}
export interface EndpointEntriesUpload {
  method: "post";
  input: {};
  output: {
    OK: EndpointEntriesUpload_OutputOK;
  };
  media: {files: {optional: false; multiple: true}};
}
export interface EndpointGuitarWorldDownload {
  method: "post";
  input: {
    body?: EndpointGuitarWorldDownload_InputBody;
  };
  output: {
    OK: EndpointGuitarWorldDownload_OutputOK;
  };
  media: null;
}
export interface EndpointGuitarWorldDownload_InputBody {
  cookie: string;
  id: number;
  name: string;
  category: string;
  mainArtist: string;
  audioUrl: string;
}
export interface EndpointGuitarWorldList {
  method: "get";
  input: {
    query?: EndpointGuitarWorldList_InputQuery;
  };
  output: {
    OK: EndpointGuitarWorldList_OutputOK;
  };
  media: null;
}
export interface EndpointGuitarWorldList_InputQuery {
  cookie: string;
  page: string;
}
export interface EndpointGuitarWorldList_OutputOK {
  data: {
    id: number;
    name: string;
    subtitle: string;
    category: string;
    mainArtist: string;
    uploader: string;
    audioUrl: string;
    existed: boolean;
  }[];
  totalItems: number;
  perPage: number;
}
export interface EndpointTypesCreate {
  method: "post";
  input: {
    body?: EndpointTypesCreate_InputBody;
  };
  output: {
    CREATED: EndpointTypesCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointTypesCreate_InputBody {
  name: string;
  icon: string;
}
export interface EndpointTypesCreate_OutputCREATED {
  id: string;
  name: string;
  icon: string;
}
export interface EndpointTypesList {
  method: "get";
  input: {};
  output: {
    OK: EndpointTypesList_OutputOK;
  };
  media: null;
}
export interface EndpointTypesRemove {
  method: "post";
  input: {
    query?: EndpointTypesRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointTypesRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointTypesRemove_InputQuery {
  id: string;
}
export interface EndpointTypesUpdate {
  method: "post";
  input: {
    query?: EndpointTypesUpdate_InputQuery;
    body?: EndpointTypesUpdate_InputBody;
  };
  output: {
    OK: EndpointTypesUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointTypesUpdate_InputQuery {
  id: string;
}
export interface EndpointTypesUpdate_InputBody {
  name: string;
  icon: string;
}
export interface EndpointTypesUpdate_OutputOK {
  id: string;
  name: string;
  icon: string;
}
export interface EndpointCollectionsCreate {
  method: "post";
  input: {
    body?: EndpointCollectionsCreate_InputBody;
  };
  output: {
    CREATED: EndpointCollectionsCreate_OutputCREATED;
  };
  media: null;
}
export interface EndpointCollectionsCreate_InputBody {
  name: string;
}
export interface EndpointCollectionsCreate_OutputCREATED {
  id: string;
  name: string;
}
export interface EndpointCollectionsList {
  method: "get";
  input: {};
  output: {
    OK: EndpointCollectionsList_OutputOK;
  };
  media: null;
}
export interface EndpointCollectionsRemove {
  method: "post";
  input: {
    query?: EndpointCollectionsRemove_InputQuery;
  };
  output: {
    NO_CONTENT: EndpointCollectionsRemove_OutputNO_CONTENT;
  };
  media: null;
}
export interface EndpointCollectionsRemove_InputQuery {
  id: string;
}
export interface EndpointCollectionsUpdate {
  method: "post";
  input: {
    query?: EndpointCollectionsUpdate_InputQuery;
    body?: EndpointCollectionsUpdate_InputBody;
  };
  output: {
    OK: EndpointCollectionsUpdate_OutputOK;
  };
  media: null;
}
export interface EndpointCollectionsUpdate_InputQuery {
  id: string;
}
export interface EndpointCollectionsUpdate_InputBody {
  name: string;
}
export interface EndpointCollectionsUpdate_OutputOK {
  id: string;
  name: string;
}
